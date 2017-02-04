import React from 'react'
import { connect } from 'react-redux'

import fetchFeature from '../../actions/Feature'
import fetchSocial from '../../actions/Social'

class Contact extends React.Component{

  constructor(props){
    super(props)
    this.state = {}
  }

  componentWillMount(){
    this.props.getFeature(this)
    this.props.getSocial(this)
  }

  componentWillReceiveProps(){
    this.setState({})
  }

  render(){
    return(
      <div className="right_col" role="main">
        <div className="">
          <div className="page-title">
            <div className="title_left">
              <h3>Contact Page</h3>
            </div>

            <div className="title_right">
              <div className="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search for..." />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">Go!</button>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="clearfix"></div>

          <ContactDetail map={this.props.map} contact={this.props.contact}/>
        </div>
      </div>
    )
  }
}
const ContactDetail = ({map, contact}) =>{
  return(
      <div className="row">
        <div className="col-md-12 col-xs-12">
          <div className="x_panel">
            <div className="x_title">
              <h2>Contact Detail </h2>
              <ul className="nav navbar-right panel_toolbox">
                <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                  <ul className="dropdown-menu" role="menu">
                    <li><a href="#">Settings 1</a>
                    </li>
                    <li><a href="#">Settings 2</a>
                    </li>
                  </ul>
                </li>
                <li><a className="close-link"><i className="fa fa-close"></i></a>
                </li>
              </ul>
              <div className="clearfix"></div>
            </div>
            <div className="x_content">
              <br />
              <form className="form-horizontal form-label-left input_mask">

                <div className="form-group">
                  <label className="control-label col-md-3 col-sm-3 col-xs-12">Map</label>
                  <div className="col-md-9 col-sm-9 col-xs-12">
                    <input type="text" className="form-control" id="inputSuccess3" placeholder="Latitude" value={ map.latitude }/>
                    <br />
                    <input type="text" className="form-control" id="inputSuccess3" placeholder="Longitude" value={ map.longitude }/>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label col-md-3 col-sm-3 col-xs-12">Address</label>
                  <div className="col-md-9 col-sm-9 col-xs-12">
                    <input type="text" className="form-control" placeholder="Address" value={ contact.ADDRESS }/>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label col-md-3 col-sm-3 col-xs-12">Phone Number</label>
                  <div className="col-md-9 col-sm-9 col-xs-12">
                    <input type="text" className="form-control" placeholder="Phone Number" value={ contact.PHONE[0] }/>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label col-md-3 col-sm-3 col-xs-12">Alternative Phone Number</label>
                  <div className="col-md-9 col-sm-9 col-xs-12">
                    <input type="text" className="form-control" placeholder="Alternative Phone Number" value={ contact.PHONE[1] }/>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label col-md-3 col-sm-3 col-xs-12">Email</label>
                  <div className="col-md-9 col-sm-9 col-xs-12">
                    <input type="text" className="form-control" placeholder="Alternative Email" value={ contact.EMAIL[0] } />
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label col-md-3 col-sm-3 col-xs-12">Alternative Email</label>
                  <div className="col-md-9 col-sm-9 col-xs-12">
                    <input type="text" className="form-control" placeholder="Alternative Email" value={ contact.EMAIL[1] } />
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label col-md-3 col-sm-3 col-xs-12">Facebook</label>
                  <div className="col-md-9 col-sm-9 col-xs-12">
                    <input type="text" className="form-control" placeholder="Facebook" value={ contact.FACEBOOK[0] } />
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label col-md-3 col-sm-3 col-xs-12">Alternative Facebook</label>
                  <div className="col-md-9 col-sm-9 col-xs-12">
                    <input type="text" className="form-control" placeholder="Alternative Facebook" value={ contact.FACEBOOK[1] } />
                  </div>
                </div>

                <div className="ln_solid"></div>
                <div className="form-group">
                  <div className="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
                    <button type="submit" className="btn btn-success">Submit</button>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
  )
}

const mapStateToProps =(state) => {
  if(state.feature){
    // console.log('abcd', state.feature.contact[0])
    return{
      map : state.social.maps[0],
      contact : state.feature.contact[0]
    }
  }else return{}
}

const mapDispatchToProps = (dispatch) => {
  return{
    getFeature: (context) => dispatch(fetchFeature(context)),
    getSocial: (context) => dispatch(fetchSocial(context))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
