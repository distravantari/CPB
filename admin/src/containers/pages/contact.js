import React from 'react'
import { connect } from 'react-redux'

import fetchFeature,{ editContact } from '../../actions/Feature'
import fetchSocial,{ editMaps } from '../../actions/Social'

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

          </div>

          <div className="clearfix"></div>

          <ContactDetail maps={this.props.maps} contact={this.props.contact} editMaps={this.props.editMaps} editContact={this.props.editContact}/>
        </div>
      </div>
    )
  }
}
class ContactDetail extends React.Component{
  constructor(props,context){
    super(props)
    context.router
  }

  editContactDetail(val){
    const maps = {
      latitude : this.mapsLatRef.value,
      longitude : this.mapsLongRef.value,
      location : this.props.maps.location,
      url : this.props.maps.url
    }
    const contact = {
      ADDRESS : [this.addressRef.value,""],
      EMAIL : [this.emailRef.value,this.altEmailRef.value],
      FACEBOOK : [this.facebookRef.value,this.altFacebookRef.value],
      PHONE : [this.phoneRef.value,this.altPhoneRef.value]
    }

    this.props.editMaps(maps)
    this.props.editContact("contact",contact)
    .then(() => {
       alert('success, changed content saved')
    })
    .catch(() => {
       alert('fail, changed content cannot be saved')
    })
  }

  render(){
    if(!this.props.maps){
      return <div>Loading ..</div>
    }
    return(
        <div className="row">
          <div className="col-md-12 col-xs-12">
            <div className="x_panel">
              <div className="x_title">
                <h2>Contact Detail </h2>
                <div className="clearfix"></div>
              </div>
              <div className="x_content">
                <br />
                <form className="form-horizontal form-label-left input_mask" onSubmit={(val) => this.editContactDetail(val)}>

                  <div className="form-group">
                    <label className="control-label col-md-3 col-sm-3 col-xs-12">maps</label>
                    <div className="col-md-9 col-sm-9 col-xs-12">
                      <input type="text" className="form-control" id="inputSuccess3" placeholder="Latitude" defaultValue={ this.props.maps.latitude } ref={(ref) => this.mapsLatRef = ref}/>
                      <br />
                      <input type="text" className="form-control" id="inputSuccess3" placeholder="Longitude" defaultValue={ this.props.maps.longitude } ref={(ref) => this.mapsLongRef = ref}/>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="control-label col-md-3 col-sm-3 col-xs-12">Address</label>
                    <div className="col-md-9 col-sm-9 col-xs-12">
                      <input type="text" className="form-control" placeholder="Address" defaultValue={ this.props.contact.ADDRESS } ref={(ref) => this.addressRef = ref}/>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="control-label col-md-3 col-sm-3 col-xs-12">Phone Number</label>
                    <div className="col-md-9 col-sm-9 col-xs-12">
                      <input type="text" className="form-control" placeholder="Phone Number" defaultValue={ this.props.contact.PHONE[0] } ref={(ref) => this.phoneRef = ref}/>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="control-label col-md-3 col-sm-3 col-xs-12">Alternative Phone Number</label>
                    <div className="col-md-9 col-sm-9 col-xs-12">
                      <input type="text" className="form-control" placeholder="Alternative Phone Number" defaultValue={ this.props.contact.PHONE[1] } ref={(ref) => this.altPhoneRef = ref}/>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="control-label col-md-3 col-sm-3 col-xs-12">Email</label>
                    <div className="col-md-9 col-sm-9 col-xs-12">
                      <input type="text" className="form-control" placeholder="Alternative Email" defaultValue={ this.props.contact.EMAIL[0] } ref={(ref) => this.emailRef = ref}/>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="control-label col-md-3 col-sm-3 col-xs-12">Alternative Email</label>
                    <div className="col-md-9 col-sm-9 col-xs-12">
                      <input type="text" className="form-control" placeholder="Alternative Email" defaultValue={ this.props.contact.EMAIL[1] } ref={(ref) => this.altEmailRef = ref}/>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="control-label col-md-3 col-sm-3 col-xs-12">Facebook</label>
                    <div className="col-md-9 col-sm-9 col-xs-12">
                      <input type="text" className="form-control" placeholder="Facebook" defaultValue={ this.props.contact.FACEBOOK[0] }  ref={(ref) => this.facebookRef = ref}/>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="control-label col-md-3 col-sm-3 col-xs-12">Alternative Facebook</label>
                    <div className="col-md-9 col-sm-9 col-xs-12">
                      <input type="text" className="form-control" placeholder="Alternative Facebook" defaultValue={ this.props.contact.FACEBOOK[1] }  ref={(ref) => this.altFacebookRef = ref}/>
                    </div>
                  </div>

                  <div className="ln_solid"></div>
                  <div className="form-group">
                    <div className="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
                      <input className="btn btn-success" type="submit" name="Edit" value="Edit" />
                    </div>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

const mapsStateToProps =(state) => {
  if(state.feature){
    return{
      maps : state.social.maps[0],
      contact : state.feature.contact[0]
    }
  }else return{}
}

const mapsDispatchToProps = (dispatch) => {
  return{
    getFeature: (context) => dispatch(fetchFeature(context)),
    getSocial: (context) => dispatch(fetchSocial(context)),
    editMaps: (data) => editMaps(data),
    editContact: (key, data) => editContact(key, data)
  }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(Contact)
