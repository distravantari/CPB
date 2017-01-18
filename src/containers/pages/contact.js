import React, { PropTypes } from 'react'
import OwlCarousel from 'react-owl-carousel'
import { connect } from 'react-redux'

//constanta
import * as constant from 'app_path/actions/const'

//redux
import fetchFeature from 'app_path/actions/Feature'
import fetchMap from 'app_path/actions/Social'

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
    if(!this.props.map) return (<h1>Loading ..</h1>)
    return(
      <div>
        <div className="main">
          
          <div>
            <div className="row">
              <Main contact={ this.props.contact } map={ this.props.map[0] } />
            </div>
          </div>

        </div>
      </div>
    )
  }

 }

const Main = ({ contact, map }) => {
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
                        <ContactDetail contact={ contact } />
                        
                        <GetInTouch />
                    </div>
                </div>
            </div>
        </div>
    )
}

export const ContactDetail = ({ contact }) => {
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
            <p>{ contact.PHONE[0] }</p>
            <p>{ contact.PHONE[1] }</p>
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
            <p><span>Facebook:</span> { contact.FACEBOOK[0] }</p>
            <p>{ contact.FACEBOOK[1] }</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export const GetInTouch = () => {
  return (
    <div className="contact-form col-md-6 col-sm-6">
      <h3>Get in touch</h3>
        <form method="post" id="contact" name="contact" noValidate="novalidate">
          <div className="row">
              <div className="col-md-6 col-sm-6 input-group">
                <span className="input-group-addon">
                  <i className="fa fa-user"></i>
                </span>
                <input type="text" className="form-control" name="name" id="name" placeholder="Name (required)" required="" />
            </div>
              <div className="col-md-6 col-sm-6 input-group">
                <span className="input-group-addon">
                  <i className="fa fa-envelope-o add-on"></i>
                </span>
                <input type="email" className="form-control" name="email" id="email" placeholder="Email (required)" required="" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <textarea className="form-control" name="message" id="message" required="" placeholder="Message" rows="9"></textarea>
            </div>
          </div>
            <input className="btn btn-default" id="submit" type="submit" name="submit" value="Send" />
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

const mapStateToProps = (state) => {
    console.log(state)
    return {
      contact: state.feature.contact[0],
      map: state.social.map
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
      getContact: (context) => dispatch(fetchFeature(context)),
      getSocial: (context) => dispatch(fetchMap(context))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
