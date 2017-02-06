import React from 'react'
import { connect } from 'react-redux'

import fetchAbout from '../../actions/About'

import * as constant from '../../actions/const'

class About extends React.Component{

  constructor(props){
    super(props);
    this.state = {}
  }

  componentWillMount(){
    this.props.getAbout(this)
  }

  componentWillReceiveProps(){
    this.setState({})
  }

  render(){
    if(!this.props.team) {
      return <div>Loading ..</div>
    }

    return(
        <div className="right_col" role="main">
          <div className="page-title">
            <div className="title_left">
              <h3>About Page</h3>
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

          <AboutUs about_us={this.props.aboutus}/>
          <OurTeam team={this.props.team.list}/>
        </div>
    )
  }
}

const AboutUs = ({about_us}) => {
  return(
    <div className="row">
      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="x_panel">
          <div className="x_title">
            <h2>About Us</h2>
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

            <div className="col-md-3 col-sm-3 col-xs-12">
              <div>
                <form action="#" className="dropzone"></form>
                image size: 470 x 220
              </div>
            </div>

           <div className="col-md-9 col-sm-9 col-xs-12">
              <div className="form-group">
                <div className="col-md-9 col-sm-9 col-xs-12">
                  <textarea className="resizable_textarea form-control" placeholder="Title Here .." value={ about_us.TITTLE }></textarea>
                </div>
              </div>

              <br /><br /><br />

              <div className="col-md-12 col-sm-12 col-xs-12">
                <textarea className="resizable_textarea form-control" placeholder="Content Here .." style={{height:"230px"}} value={ about_us.TEXT }></textarea>
              </div>
           </div>
           <div className="col-md-1 col-sm-1 col-xs-12 col-md-offset-11 col-sm-offset-11">
              <span className="btn btn-success">Edit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const OurTeam = ({team}) => {
  return(
    <div className="row">
      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="x_panel">
          <div className="x_title">
            <h2> Our Team</h2>
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


            <div className="" role="tabpanel" data-example-id="togglable-tabs">
              <ul id="myTab" className="nav nav-tabs bar_tabs" role="tablist">
                <li role="presentation" className="active"><a href="#tab_content1" role="tab" data-toggle="tab" aria-expanded="true">{ team[0].NAME }</a>
                </li>
                <li role="presentation" className=""><a href="#tab_content2" role="tab" data-toggle="tab" aria-expanded="false">{ team[1].NAME }</a>
                </li>
                <li role="presentation" className=""><a href="#tab_content3" role="tab" data-toggle="tab" aria-expanded="false">{ team[2].NAME }</a>
                </li>
              </ul>
              <div id="myTabContent" className="tab-content">
                {
                  team.map((team, index) => (
                      <div role="tabpanel" className={index == 0 ? 'tab-pane fade active in':'tab-pane fade'} id={`tab_content${index+1}`} aria-labelledby="home-tab" key={index}>
                        <div className="x_content">
                          <div id="alerts"></div>

                          <div className="col-md-3 col-sm-3 col-xs-12">
                            <div>
                              <form action="#" className="dropzone"></form>
                              image size: 270 x 280
                            </div>
                          </div>

                        <div className="col-md-9 col-sm-9 col-xs-12">
                            <div className="form-group">
                              <div className="col-md-9 col-sm-9 col-xs-12">
                                <input placeholder="Position" value={ team.POSITION }></input>
                                <input placeholder="Name" style={{width: "500px"}} value={ team.NAME }></input>
                              </div>
                            </div>

                            <br /><br /><br />

                            <div className="col-md-12 col-sm-12 col-xs-12">
                              <textarea className="resizable_textarea form-control" placeholder="Short Desc" style={{height:"230px"}} value={ team.TEXT }></textarea>
                            </div>
                        </div>

                        <div className="col-md-1 col-sm-1 col-xs-12 col-md-offset-11 col-sm-offset-11">
                          <span className="btn btn-success">Edit</span>
                        </div>

                        </div>
                      </div>
                    ))
                }
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  if (state.about) {
    return{
      team: state.about.team[0],
      aboutus: state.about.us[0]
    }
  }else return{ }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getAbout: (context) => dispatch(fetchAbout(context))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (About)
