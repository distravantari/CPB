import React, { PropTypes } from 'react'
import OwlCarousel from 'react-owl-carousel'
import { connect } from 'react-redux'
import receiveForm from '../../actions/Form'

//constanta
import * as constant from 'app_path/actions/const'

//redux
import fetchFeature, { addEmail } from 'app_path/actions/Feature'
import fetchSocial from 'app_path/actions/Social'

class Index extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      contact: []
    }
  }

  componentDidMount(){
    this.props.getContact(this)
    this.props.getSocial(this)
  }

  componentWillReceiveProps(){
    this.setState({})
  }

  render(){
    if(!this.props.facebook) return (<h1>Loading ..</h1>)
    return(
      <div>
        <div className="main">
          <div>
            <div className="row">
              <Main contact={ this.props.contact } facebook={this.props.facebook} addToMail={ this.props.addToMail} receiveForm={ this.props.receiveForm } map={this.props.map} />
            </div>
          </div>
        </div>
      </div>
    )
  }
 }

const Main = ( {contact, facebook, addToMail, receiveForm, map} ) => {
    return (
        <div className="main">
            <div className="row">
                <div className="contact-us col-md-12 col-sm-12">
                    <h2>Contact us</h2>
                    <div className="row">
                        <div className="map col-md-12 col-sm-12">
                            <iframe src={ `https://www.google.com/maps?q=${map.latitude},${map.longitude}&output=embed` }></iframe>
                        </div>
                    </div>
                    <div className="row">
                        <ContactDetail facebook={ facebook } contact={ contact } />

                        <GetInTouch addToMail = { addToMail } receiveForm={ receiveForm }/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const ContactDetail = ({ contact, facebook }) => {
  return (
    <div className="col-md-6 col-sm-6">
      <h3>Contact details</h3>
      <ul className="contact-details">
        <li>
          <i className="fa fa-map-marker"></i>
          <div>
            <p>{ contact.ADDRESS[0] }</p>
            <p>{ contact.ADDRESS[1] }</p>
          </div>
        </li>
        <li>
          <i className="fa fa-phone"></i>
          <div>
            <p>{ contact.PHONE }</p>
          </div>
        </li>
        <li>
          <i className="fa fa-fax"></i>
          <div>
            <p><span>Fax:</span> { contact.FAX }</p>
          </div>
        </li>
        <li>
          <i className="fa fa-commenting"></i>
          <div>
            <p><span>Line:</span> { contact.LINE }</p>
          </div>
        </li>
        <li>
          <i className="fa fa-whatsapp"></i>
          <div>
            <p><span>Whatsapp:</span> { contact.WHATSAPP[0] } </p>

          </div>
        </li>
        <li>
          <i className="fa fa-commenting"></i>
          <div>
            <p><span>BBM:</span> { contact.BBM }</p>
          </div>
        </li>
        <li>
          <i className="fa fa-envelope-o"></i>
          <div>
            <p><span>Email:</span> { contact.EMAIL[0] }</p>
            <p>{ contact.EMAIL[1] }</p>
          </div>
        </li>
        <li>
          <i className="fa fa-facebook"></i>
          <div>
            <p><span>Facebook:</span> { facebook.URL } </p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export class GetInTouch extends React.Component {
    constructor(props,context){
      super(props)
      context.router
    }

    email(val) {
      val.preventDefault()
      alert('thank you for contacting us!');
      let message = "Name: " + this.nameRef.value + "\nEmail: " + this.emailRef.value + "\nMessage: " + this.textRef.value
      let subj = "Form Get in Touch"
      this.props.receiveForm(subj,message)
        .then(() => {
            console.log('berhasil nih kak')
        })
        .catch(() => {
            console.log('yah gagal kak')
        })
      this.nameRef.value = ""
      this.emailRef.value= ""
      this.textRef.value = ""
    }

    render() {
      return (
        <div className="contact-form col-md-6 col-sm-6">
          <h3>Get in touch</h3>
            <form id="contact" name="contact" onSubmit={(val) => this.email(val)}>
              <div className="row">
                  <div className="col-md-6 col-sm-6 input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-user"></i>
                    </span>
                    <input type="text" className="form-control" name="name" id="name" placeholder="Name (required)" required="" ref={(ref) => this.nameRef = ref} />
                </div>
                <div className="col-md-6 col-sm-6 input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-envelope-o add-on"></i>
                    </span>
                    <input type="email" className="form-control" name="email" placeholder="Email (required)" required="" ref={(ref) => this.emailRef = ref} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <textarea className="form-control" name="message" id="message" required="" placeholder="Message" rows="9" ref={(ref) => this.textRef = ref} >
                  </textarea>
                </div>
              </div>
                <input className="btn btn-default" type="submit" name="submit" />
              </form>

              <div className="alert alert-danger">
                <button type="button" className="close" data-dismiss="alert">×</button>
                <strong>Oh snap!</strong> Change a few things up and try submitting again.
            </div>

            <div className="alert alert-success">
                <button type="button" className="close" data-dismiss="alert">×</button>
                <strong>Well done!</strong> Your message was sent succssfully!
            </div>
          </div>
      )
    }
}

const mapStateToProps = (state) => {
    return {
      contact: state.feature.contact[0],
      facebook: state.social.facebook,
      map: state.social.map
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
      getContact: (context) => dispatch(fetchFeature(context)),
      getSocial: (context) => dispatch(fetchSocial(context)),
      receiveForm:(data1, data2) => receiveForm(data1, data2)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
