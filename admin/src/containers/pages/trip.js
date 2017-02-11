import React from 'react'
import {connect} from 'react-redux'

import fetchFeature,{ editPackets } from '../../actions/Feature'

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

          <div className="row">
            <TripPackage packets = {this.props.list}/>
            <TripDescription shortdesc = {this.props.description} editPackets = {this.props.editPackets}/>
          </div>
        </div>
      </div>
    )
  }
}

const TripPackage = ({packets}) => {
  return(
    <div className="col-md-12 col-sm-12 col-xs-12">
      <div className="x_panel">
        <div className="x_title">
          <h2>Trip Packages</h2>
          <ul className="nav navbar-right panel_toolbox">
            <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
            </li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
              <ul className="dropdown-menu" role="menu">
              </ul>
            </li>
            <li><a className="close-link"><i className="fa fa-close"></i></a>
            </li>
          </ul>
          <div className="clearfix"></div>
        </div>

        <div className="x_content">
          <div id="alerts"></div>

          <div className="" role="tabpanel" data-example-id="togglable-tabs">
            <ul id="myTab" className="nav nav-tabs bar_tabs" role="tablist">
              {
                packets.map((packet, index) => (
                  <li role="presentation" className={ index == 0 ? 'active':''}>
                    <a href={`#tab_packet${index+1}`} role="tab" data-toggle="tab" aria-expanded={index == 0 ? 'true' : 'false'}>
                      {`Packet${index+1}`}
                    </a>
                  </li>
                ))
              }
            </ul>

            <div id="myTabContent" className="tab-content">
              {
                packets.map((packet, index) => {
                  return(
                    <div role="tabpanel" className={index == 0 ? 'tab-pane fade active in':'tab-pane fade'} id={`tab_packet${index+1}`} aria-labelledby="home-tab">
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
                              <input type="text" className="form-control" placeholder="Tittle" value={packet.TITTLE}/>
                            </div>
                          </div>

                          <div className="form-group">
                            <label className="control-label col-md-3 col-sm-3 col-xs-12">Info</label>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                              <input type="text" className="form-control" placeholder="Info" />
                            </div>
                          </div>

                          <div className="form-group">
                            <label className="control-label col-md-3 col-sm-3 col-xs-12">Create</label>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                              <input type="text" className="form-control" placeholder="Create" />
                            </div>
                          </div>

                          <div className="form-group">
                            <label className="control-label col-md-3 col-sm-3 col-xs-12">Date</label>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                              <input type="text" className="form-control" placeholder="Date" value={packet.DATE}/>
                            </div>
                          </div>

                          <div className="control-group">
                            <label className="control-label col-md-3 col-sm-3 col-xs-12">Type</label>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                              <input id="tags_1" type="text" className="tags form-control" value="social, adverts, sales" />
                              <div id="suggestions-container" style={{position: "relative", float: "left", width: "250px", margin: "10px;"}}></div>
                            </div>
                          </div>

                          <div className="form-group">
                            <div className="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
                              <button type="submit" className="btn btn-success">Edit</button>
                              <span className="btn btn-primary">Add</span>
                            </div>
                          </div>

                        </form>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

class TripDescription extends React.Component {
  constructor(props, context){
    super(props)
    context.router
  }

  editDescription(val){
    const shortdesc = {
      tittle : this.titleDescRef.value,
      text : this.textDescRef.value
    }

    this.props.editPackets("shortdesc", shortdesc)
    .then(() => {
       alert('success, changed content saved')
    })
    .catch(() => {
       alert('fail, changed content cannot be saved')
    })
  }

  render(){
    if(!this.props.shortdesc){
      return <div> Loading ..</div>
    }
    return(
      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="x_panel">
          <div className="x_title">
            <h2>Short Description about Trip <small>Click to validate</small></h2>
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

            <form id="demo-form" data-parsley-validate onSubmit={(val) => this.editDescription(val)}>

              <label for="heard">Tittle</label>
              <input type="text" style={{width: "500px", height: "30px"}} defaultValue={this.props.shortdesc.tittle} ref={(ref) => this.titleDescRef = ref}/>
              <br /><br />
              <label for="message">News Text (20 chars min, 100 max) :</label>
              <textarea id="message" required="required" className="form-control" name="message" data-parsley-trigger="keyup" data-parsley-minlength="20" data-parsley-maxlength="100" data-parsley-minlength-message="Come on! You need to enter at least a 20 caracters long comment.."
                data-parsley-validation-threshold="10" defaultValue={this.props.shortdesc.text} ref={(ref) => this.textDescRef = ref}></textarea>

              <br/>
              <input className="btn btn-success" type="submit" name="submit" />
              <span className="btn btn-primary">Add</span>

            </form>
          </div>
        </div>
      </div>
  )
  }
}

const mapStateToProps =(state) => {
  if(state.feature){
    console.log('abcd', state.feature.packets[0])
    return{
      list : state.feature.packets[0].list,
      description :state.feature.packets[0].shortdesc
    }
  }else return{}
}

const mapDispatchToProps = (dispatch) => {
  return{
    getFeature: (context) => dispatch(fetchFeature(context)),
    editPackets: (key, data) => editPackets(key, data)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trip)
