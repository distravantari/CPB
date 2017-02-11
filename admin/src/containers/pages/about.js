import React from 'react'
import { connect } from 'react-redux'

import fetchAbout,{ editAbout } from '../../actions/About'

import * as constant from '../../actions/const'

class About extends React.Component{

  constructor(props){
    super(props)
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
        <Main aboutus={this.props.aboutus} team={this.props.team.list} editAbout={this.props.editAbout} />
    )
  }
}

export const Main = ( {aboutus, team, editAbout} ) => {
  return (
    <div className="right_col" role="main">
      <div className="page-title">
        <div className="title_left">
          <h3>About Page</h3>
        </div>

      </div>

      <div className="clearfix"></div>
      <div className="row">
        <AboutUs about_us={aboutus} editAbout={editAbout}/>
        <OurTeam team={team} editAbout={editAbout}/>
      </div>
    </div>
  )
}

class AboutUs extends React.Component {
  constructor(props,context){
    super(props)
    context.router
  }

  editAboutUs(val){
    const us = {
      TITTLE : this.titleRef.value,
      TEXT : this.textAboutRef.value
    }
    this.props.editAbout("us", us)
    .then(() => {
       alert('success, changed content saved')
    })
    .catch(() => {
       alert('fail, changed content cannot be saved')
    })
  }

  render(){
    if(!this.props.about_us){
      return <div>Loading ..</div>
    }
    return(
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="x_panel">
            <div className="x_title">
              <h2>About Us</h2>
              <div className="clearfix"></div>
            </div>
            <div className="x_content">
              <div id="alerts"></div>
              <form id="formabout" onSubmit={(val) => this.editAboutUs(val)}>
                <div className="col-md-3 col-sm-3 col-xs-12">
                  <div>
                    <form action="#" className="dropzone"></form>
                    image size: 470 x 220
                  </div>
                </div>

                <div className="col-md-9 col-sm-9 col-xs-12">
                  <div className="form-group">
                      <div className="col-md-9 col-sm-9 col-xs-12">
                        <textarea className="resizable_textarea form-control" placeholder="Title Here .." defaultValue={this.props.about_us.TITTLE} ref={(ref) => this.titleRef = ref}></textarea>
                      </div>
                    </div>

                    <br /><br /><br />

                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <textarea className="resizable_textarea form-control" placeholder="Content Here .." style={{height:"230px"}} defaultValue={ this.props.about_us.TEXT } ref={(ref) => this.textAboutRef = ref}></textarea>
                    </div>
                </div>

                <div className="col-md-1 col-sm-1 col-xs-12 col-md-offset-11 col-sm-offset-11">
                  <input className="btn btn-success" type="submit" name="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class OurTeam extends React.Component {

  constructor(props,context){
    super(props)
    context.router
    this.state = { value : this.props.team }
  }

  editTeam(val, index){
    const team = {
      IMG : "https://firebasestorage.googleapis.com/v0/b/balizee-e308b.appspot.com/o/team.jpg?alt=media&token=96da91e2-1855-4c31-8d42-7a7b72c93bf8",
      IMGURL : "url",
      NAME : this.nameRef.value,
      POSITION : this.positionRef.value,
      TEXT : this.textTeamRef.value
    }
    this.props.editAbout(`team/list/${index}`, team)
    .then(() => {
       alert('success, changed content saved')
    })
    .catch(() => {
       alert('fail, changed content cannot be saved')
    })
  }

  render(){
    return(
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="x_panel">
            <div className="x_title">
              <h2> Our Team</h2>
              <div className="clearfix"></div>
            </div>
            <div className="x_content">


              <div className="" role="tabpanel" data-example-id="togglable-tabs">
                <ul id="myTab" className="nav nav-tabs bar_tabs" role="tablist">
                  {
                    this.props.team && this.props.team.map((team, index) => {
                      return (
                        <li role="presentation" className={ index == 0 ? 'active':''}>
                          <a href={`#tab_team${index+1}`} role="tab" data-toggle="tab" aria-expanded={index == 0 ? 'true' : 'false'}>
                            {this.props.team[index].NAME}
                          </a>
                        </li>
                      )
                    })
                  }
                </ul>
                <div id="myTabContent" className="tab-content">
                  {
                    this.props.team && this.props.team.map((team, index) => {
                      return(
                          <div role="tabpanel" className={index == 0 ? 'tab-pane fade active in':'tab-pane fade'} id={`tab_team${index+1}`} aria-labelledby="home-tab" key={index}>
                            <div className="x_content">
                              <div id="alerts"></div>
                              <form id="formteam" onSubmit={(val) => this.editTeam(val, index)}>
                                <div className="col-md-3 col-sm-3 col-xs-12">
                                  <div>
                                    <form action="#" className="dropzone"></form>
                                    image size: 270 x 280
                                  </div>
                                </div>

                                <div className="col-md-9 col-sm-9 col-xs-12">
                                    <div className="form-group">
                                      <div className="col-md-9 col-sm-9 col-xs-12">
                                        <input data-key = "position" placeholder="Position" defaultValue={ this.props.team[index].POSITION } ref={(ref) => this.positionRef = ref} ></input>
                                        <input data-key = "name" placeholder="Name" style={{width: "500px"}} defaultValue={ this.props.team[index].NAME } ref={ (ref) => this.nameRef = ref}></input>
                                      </div>
                                    </div>

                                    <br /><br /><br />

                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                      <textarea className="resizable_textarea form-control" placeholder="Short Desc" style={{height:"230px"}} defaultValue={ this.props.team[index].TEXT } ref={(ref) => this.textTeamRef = ref} ></textarea>
                                    </div>
                                </div>

                                <div className="col-md-1 col-sm-1 col-xs-12 col-md-offset-11 col-sm-offset-11">
                                  <input className="btn btn-success" type="submit" name="submit" />
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
      </div>
    )
  }
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
    getAbout: (context) => dispatch(fetchAbout(context)),
    editAbout:(key, data) => editAbout(key, data)
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (About)
