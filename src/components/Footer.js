import React from 'react';
import ReactDOM from 'react-dom';
import * as constant from "app_path/actions/const"

class Footer extends React.Component{
  render(){
    return (
    	<div>
        <footer>
          <div className="row">
            <div className="about col-md-3 col-sm-6">
              <img src="assets/img/about-logo.png" alt="logo" />
              <h5> { constant.footer_components.TITTLE } </h5>
              <p>
                { constant.footer_components.TEXT }
              </p>

              <ul className="social list-inline">
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i className="fa fa-youtube-play"></i></a></li>
                <li><a href="#"><i className="fa fa-flickr"></i></a></li>
                <li><a href="#"><i className="fa fa-vimeo-square"></i></a></li>
                <li><a href="#"><i className="fa  fa-tumblr"></i></a></li>
                <li><a href="#"><i className="fa fa-rss"></i></a></li>
              </ul>
            </div>
          </div>

          <div className="rights clearfix">
            <p>{constant.footer.allrightreserve}</p>
            <p>Designed by {constant.footer.design}.</p>
          </div>
        </footer>
      </div>
    )
  }
};

export default Footer;
