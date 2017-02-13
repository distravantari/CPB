import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'

import fetchFeature,{ editPackets, addPackets } from '../../actions/Feature'

class Trip extends React.Component{

    constructor(props){
      super(props)
      this.state = {}
    }

    componentWillMount(){
      this.props.getFeature(this)
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
              <h3>Trip Page</h3>
            </div>
          </div>

          <div className="clearfix"></div>

          <div className="row">
            <TripPackage packets = {this.props.list} editPackets = {this.props.editPackets} addPackets = {this.props.addPackets}/>
          </div>
        </div>
      </div>
    )
  }
}

class TripPackage extends React.Component {
  constructor(props, context){
    super(props)
    context.router
    this.state = {
      DATE : '',
      DETAIL : {
        TITTLE : '',
        TEXT : ''
      },
      IMG : '',
      NOTIFICATION : {
        COMMENT : '',
        LIKES : ''
      },
      TAGS : [],
      TEXT : '',
      TITTLE : '',
      URL : ''
    }
  }

  addPackets(val){
    val.preventDefault()
    const newpackets = {
      DATE : this.newDateRef.value,
      DETAIL : {
        TITTLE : this.newTitleDescRef.value,
        TEXT : this.newTextDescRef.value
      },
      IMG : '',
      NOTIFICATION : {
        COMMENT : '',
        LIKES : ''
      },
      TAGS : [],
      TEXT : this.newTextRef.value,
      TITTLE : this.newTitleRef.value,
      URL : ''
    }

    this.props.addPackets(this.props.packets.length, newpackets)
    .then(() => {
      alert('success, new content saved')
      this.newDateRef.value = ''
      this.newTitleDescRef.value = ''
      this.newTextDescRef.value = ''
      this.newTextRef.value =''
      this.newTitleRef.value =''
    })
    .catch(() => {
       alert('fail, new content cannot be saved')
    })
  }

  editPackets(val, index){
    let date = this.state.DATE
    let detail = this.state.DETAIL
    let img = this.state.IMG
    let notification = this.state.NOTIFICATION
    let tags = this.state.TAGS
    let text = this.state.TEXT
    let tittle = this.state.TITTLE
    let url = this.state.URL

    if(!date) date = _.values(this.props.packets)[index].DATE
    if(!detail) detail = _.values(this.props.packets)[index].DETAIL
    if(!img) img = _.values(this.props.packets)[index].IMG
    if(!notification.LIKES) notification = _.values(this.props.packets)[index].NOTIFICATION
    if(!tags) tags = _.values(this.props.packets)[index].TAGS
    if(!text) text = _.values(this.props.packets)[index].TEXT
    if(!tittle) tittle = _.values(this.props.packets)[index].TITTLE
    if(!url) url = _.values(this.props.packets)[index].URL

    const packets = {
      DATE : date,
      DETAIL : detail,
      IMG : img,
      NOTIFICATION : notification,
      TAGS : tags,
      TEXT : text,
      TITTLE : tittle,
      URL : url
    }

    this.props.editPackets(`list/${index}`, packets)
    .then(() => {
       alert('success, changed content saved')
    })
    .catch(() => {
       alert('fail, changed content cannot be saved')
    })
  }

  handleChange(val, key, index){
    val.preventDefault()
    if(key == `tittle`){
      this.setState({
        TITTLE: val.target.value
      })
    }else if(key == `text`) {
      this.setState({
        TEXT: val.target.value
      })
    }else if(key == `date`) {
      this.setState({
        DATE: val.target.value
      })
    }else if(key == `tags`) {
      this.setState({
        TAGS: val.target.value
      })
    }else if(key == `detailtitle`) {
      this.setState({
        DETAIL : {
          TITTLE : val.target.value,
          TEXT : _.values(this.props.packets)[index].TEXT
        }
      })
    }
    else{
      this.setState({
        DETAIL : {
          TITTLE : _.values(this.props.packets)[index].TITTLE,
          TEXT : val.target.value
        }
      })
    }
  }

  render(){
    return(
    <div className="col-md-12 col-sm-12 col-xs-12">
      <div className="x_panel">
        <div className="x_title">
          <h2>Trip Packages</h2>
          <div className="clearfix"></div>
        </div>

        <div className="x_content">
          <div id="alerts"></div>

          <div className="" role="tabpanel" data-example-id="togglable-tabs">
            <ul id="myTab" className="nav nav-tabs bar_tabs" role="tablist">
              {
                _.values(this.props.packets).map((packet, index) => (
                  <li key={index} role="presentation" className={ index == 0 ? 'active':''}>
                    <a href={`#tab_packet${index+1}`} role="tab" data-toggle="tab" aria-expanded={index == 0 ? 'true' : 'false'}>
                      {`Packet${index+1}`}
                    </a>
                  </li>
                ))
              }
              <li role="presentation" className=''>
                <a href='#tab_newpacket' role="tab" data-toggle="tab" aria-expanded='false'><span className='fa fa-plus'></span></a>
              </li>
            </ul>

            <div id="myTabContent" className="tab-content">
              {
                _.values(this.props.packets).map((packet, index) => {
                  return(
                    <div key={index} role="tabpanel" className={index == 0 ? 'tab-pane fade active in':'tab-pane fade'} id={`tab_packet${index+1}`} aria-labelledby="home-tab">
                      <div className="col-md-5 col-sm-5 col-xs-12">
                        <div>
                          <form action="#" className="dropzone"></form>
                          image size: 270 x 280
                        </div>
                      </div>

                      <div className="col-md-7 col-sm-7 col-xs-12">
                          <form className="form-horizontal form-label-left">

                          <div className="form-group">
                            <label className="control-label col-md-3 col-sm-3 col-xs-12">Tittle</label>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                              <input type="text" className="form-control" placeholder="Tittle" defaultValue={_.values(this.props.packets)[index].TITTLE} onChange={(ref) => this.handleChange(ref, `tittle`)}/>
                            </div>
                          </div>

                          <div className="form-group">
                            <label className="control-label col-md-3 col-sm-3 col-xs-12">Text</label>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                            <textarea id="message" required="required" className="form-control" name="message" data-parsley-trigger="keyup" data-parsley-minlength="20" data-parsley-maxlength="100" data-parsley-minlength-message="Come on! You need to enter at least a 20 caracters long comment.."
                              data-parsley-validation-threshold="10" style={{height:"130px"}} defaultValue={_.values(this.props.packets)[index].TEXT} onChange={(ref) => this.handleChange(ref, `text`)}></textarea>
                          </div>
                          </div>

                          <div className="form-group">
                            <label className="control-label col-md-3 col-sm-3 col-xs-12">Date</label>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                              <input type="text" className="form-control" placeholder="Date" defaultValue={_.values(this.props.packets)[index].DATE} onChange={(ref) => this.handleChange(ref, `date`)}/>
                            </div>
                          </div>

                        </form>
                      </div>

                      <div className='x_panel col-md-12 col-sm-12 col-xs-12'>
                        <div className="x_title">
                          <h2>Short Description about Trip <small>Click to validate</small></h2>
                          <div className="clearfix"></div>
                        </div>

                        <div className="x_content">

                            <div className="form-group">
                              <label className="">Tittle</label>
                              <div className="">
                                <input type="text" style={{width: "500px", height: "30px"}} defaultValue={_.values(this.props.packets)[index].DETAIL.TITTLE} onChange={(ref) => this.handleChange(ref, `detailtitle`, index)}/>
                              </div>
                            </div>

                            <div className="form-group">
                              <label className="">News Text (20 chars min, 100 max) :</label>
                              <div className="">
                                <textarea id="message" required="required" className="form-control" name="message" data-parsley-trigger="keyup" data-parsley-minlength="20" data-parsley-maxlength="100" data-parsley-minlength-message="Come on! You need to enter at least a 20 caracters long comment.."
                                  data-parsley-validation-threshold="10" defaultValue={_.values(this.props.packets)[index].DETAIL.TEXT} onChange={(ref) => this.handleChange(ref, `detailtext`, index)}></textarea>
                              </div>
                            </div>

                            <div className="form-group">
                              <div className="">
                                <button type="" className="btn btn-success" onClick={(val) => this.editPackets(val, index)}>Edit</button>
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
              <div role="tabpanel" className='tab-pane fade' id='tab_newpacket' aria-labelledby="home-tab">
                <div className="col-md-5 col-sm-5 col-xs-12">
                  <div>
                    <form action="#" className="dropzone"></form>
                    image size: 270 x 280
                  </div>
                </div>

                <div className="col-md-7 col-sm-7 col-xs-12">
                    <form className="form-horizontal form-label-left">

                    <div className="form-group">
                      <label className="control-label col-md-3 col-sm-3 col-xs-12">Tittle</label>
                      <div className="col-md-9 col-sm-9 col-xs-12">
                        <input type="text" className="form-control" placeholder="Tittle" defaultValue=''  ref={(ref) => this.newTitleRef = ref}/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-md-3 col-sm-3 col-xs-12">Text</label>
                      <div className="col-md-9 col-sm-9 col-xs-12">
                      <textarea id="message" required="required" className="form-control" name="message" data-parsley-trigger="keyup" data-parsley-minlength="20" data-parsley-maxlength="100" data-parsley-minlength-message="Come on! You need to enter at least a 20 caracters long comment.."
                        data-parsley-validation-threshold="10" style={{height:"130px"}} defaultValue=''  ref={(ref) => this.newTextRef = ref}></textarea>
                    </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-md-3 col-sm-3 col-xs-12">Date</label>
                      <div className="col-md-9 col-sm-9 col-xs-12">
                        <input type="text" className="form-control" placeholder="Date" defaultValue=''  ref={(ref) => this.newDateRef = ref}/>
                      </div>
                    </div>

                  </form>
                </div>

                <div className='x_panel col-md-12 col-sm-12 col-xs-12'>
                  <div className="x_title">
                    <h2>Short Description about Trip <small>Click to validate</small></h2>
                    <div className="clearfix"></div>
                  </div>

                  <div className="x_content">

                      <div className="form-group">
                        <label className="">Tittle</label>
                        <div className="">
                          <input type="text" style={{width: "500px", height: "30px"}} defaultValue='' ref={(ref) => this.newTitleDescRef = ref}/>
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="">News Text (20 chars min, 100 max) :</label>
                        <div className="">
                          <textarea id="message" required="required" className="form-control" name="message" data-parsley-trigger="keyup" data-parsley-minlength="20" data-parsley-maxlength="100" data-parsley-minlength-message="Come on! You need to enter at least a 20 caracters long comment.."
                            data-parsley-validation-threshold="10" defaultValue='' ref={(ref) => this.newTextDescRef = ref}></textarea>
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="">
                          <button type="" className="btn btn-primary" onClick={(val) => this.addPackets(val)}>Add</button>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  }
}

const mapStateToProps =(state) => {
  if(state.feature){
    return{
      list : state.feature.packets[0].list
    }
  }else return{}
}

const mapDispatchToProps = (dispatch) => {
  return{
    getFeature: (context) => dispatch(fetchFeature(context)),
    editPackets: (key, data) => editPackets(key, data),
    addPackets: (index, data) => addPackets(index, data)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trip)
