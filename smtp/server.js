"use strict"

var express = require('express');
const bunyan = require('bunyan');
const bodyParser = require("body-parser");
const nodemailer = require('./lib/nodemailer');

var app = module.exports = express();

function error(status, msg) {
  var err = new Error(msg);
  err.status = status;
  return err;
}

// for website purpose
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// end of bodyParser

var allowCrossDomain = function(req, res, next) {
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Methods', 'POST');
res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
// intercept OPTIONS method
if ('OPTIONS' == req.method) {
    res.sendStatus(200);
} else {
    next();
}
};

app.use(allowCrossDomain);

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'dstrvntr@gmail.com',
        pass:  'inidistra'
    },
    logger: bunyan.createLogger({
        name: 'nodemailer'
    }),
    debug: true // include SMTP traffic in the logs
}, {
    // default message fields

    // sender info
    from: 'Admin <no-reply@balizee.com>',
    headers: {
        'X-Laziness-level': 1000 // just an example header, no need to use this
    }
});

app.use('/api', function(req, res, next){
  var key = req.query['api-key'];

  if (!key) return next(error(400, 'api key required'));

  if (!~apiKeys.indexOf(key)) return next(error(401, 'invalid api key'));

  req.key = key;
  next();
});

app.post('/email', function(req, res, next){

  let message = {
      // 'distravantari <distravantari@gmail.com>'
      to: req.body.to,
      // 'Balizee is unicode friendly ✔ #'
      subject: req.body.subject, //
      // 'Hello ncy!'
      text: req.body.text
  };

  transporter.sendMail(message, (error, info) => {
      if (error) {
          console.log('Error occurred');
          console.log(error.message);
          return;
      }
      console.log('Message sent successfully!');
      console.log('Server responded with "%s"', info.response);

      res.send({ success: 'hai' });
      transporter.close();
  });
  
});

app.use(function(err, req, res, next){
  res.status(err.status || 500);
  res.send({ error: err.message });
});

app.use(function(req, res){
  res.status(404);
  res.send({ error: "Lame, can't find that" });
});

if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
