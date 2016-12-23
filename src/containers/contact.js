import React, { PropTypes } from 'react'
import { fetchToken } from "app_path/actions/authentication"
import OwlCarousel from 'react-owl-carousel'
import { connect } from 'react-redux'
import * as constant from 'app_path/actions/const'
import Immutable from 'immutable'

//conmponents
import Header from 'components_path/Header'
import Footer from 'components_path/Footer'

class Index extends React.Component{

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount(){}

  componentWillReceiveProps(){
    this.setState({})
  }

  render(){
    return(
      <div className="main-container">
        <Header />
        <div className="container">
           
          <div>
            <div className="main">
              
              <div>
                <div className="row">
                  { Main() }
                </div>
              </div>

            </div>
          </div>

          <Footer />
        </div>
      </div>
    )
  }
 }

const Main = () => {
    return (
        <div className="main">
            <div className="row">
                <div className="contact-us col-md-12 col-sm-12">
                    <h2>Contact us</h2>
                    <div className="row">
                        <div className="map col-md-12 col-sm-12">
                            <iframe src="https://www.google.com.ua/maps?f=d&amp;source=s_d&amp;saddr=48.209746,16.348501&amp;daddr=&amp;hl=uk&amp;geocode=&amp;sll=48.209575,16.365509&amp;sspn=0.033404,0.084543&amp;mra=mift&amp;mrsp=0&amp;sz=14&amp;ie=UTF8&amp;t=m&amp;z=13&amp;output=embed"></iframe>
                        </div>
                    </div>	

                    <div className="row">
                        { contactDetail() }
                        
                        { getInTouch() }
                    </div>
                </div>
            </div>
        </div>
    )
}

export const contactDetail = () => {
  return (
    <div className="col-md-6 col-sm-6">
      <h3>Contact details</h3>	
      <ul className="contact-details">
        <li>
          <i className="fa fa-map-marker"></i>
          <div>
            <p>{constant.contact_detail.ADDRESS[0]}</p>
            <p>{constant.contact_detail.ADDRESS[1]}</p>
          </div>
        </li>
        <li>
          <i className="fa fa-phone"></i>
          <div>
            <p>{constant.contact_detail.PHONE[0]}</p>
            <p>{constant.contact_detail.PHONE[1]}</p>
          </div>
        </li>
        <li>
          <i className="fa fa-envelope-o"></i>
          <div>
            <p><span>Email:</span> {constant.contact_detail.EMAIL[0]}</p>
            <p>{constant.contact_detail.EMAIL[1]}</p>
          </div>
        </li>
        <li>
          <i className="fa fa-facebook"></i>
          <div>
            <p><span>Facebook:</span> {constant.contact_detail.FACEBOOK[0]}</p>
            <p>{constant.contact_detail.FACEBOOK[1]}</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export const getInTouch = () => {
  return (
    <div className="contact-form col-md-6 col-sm-6">
      <h3>Get in touch</h3>
        <form method="post" id="contact" name="contact" novalidate="novalidate">
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
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
