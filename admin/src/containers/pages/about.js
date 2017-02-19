import React from 'react'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone'

import fetchAbout,{ editAbout} from '../../actions/About'
import { updateImage } from '../../actions/UploadImage'

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
        <Main aboutus={this.props.aboutus} team={this.props.team.list} editAbout={this.props.editAbout} updateImage={this.props.updateImage}/>
    )
  }
}

export const Main = ( {aboutus, team, editAbout, updateImage} ) => {
  return (
    <div className="right_col" role="main">
      <div className="page-title">
        <div className="title_left">
          <h3>About Page</h3>
        </div>

      </div>

      <div className="clearfix"></div>
      <div className="row">
        <AboutUs about_us={aboutus} editAbout={editAbout} updateImage={updateImage}/>
        <OurTeam team={team} editAbout={editAbout} updateImage={updateImage}/>
      </div>
    </div>
  )
}

class AboutUs extends React.Component {
  constructor(props,context){
    super(props)
    context.router
    this.state = {
      filename: []
    }
  }

  onDrop(e) {
    let img = new Image();
    let file = e[0];
    img.src = window.URL.createObjectURL( file )
    let h = this.state.height
    let w = this.state.width
    img.onload = () => {// REFACTORIN
      this.setState({
        naturalHeight: img.naturalHeight,
        naturalWidth: img.naturalWidth
      })
      handleImageChange(file)
    }

    let handleImageChange = (file) => {
      let reader = new FileReader();

      reader.onloadend = () => {
        this.setState({
          filename: e[0].name,
          file: file,
          imagePreviewUrl: reader.result
        });
      }
      reader.readAsDataURL(file)
    }
  }

  editAboutUs(val){
    this.props.updateImage(this.state.file)
    .then((url) =>{
      const us = {
        TITTLE : this.titleRef.value,
        TEXT : this.textAboutRef.value,
        IMG : url,
        IMGURL : this.props.about_us.IMGURL
      }
      this.props.editAbout("us", us)
      .then(() => {
         alert('success, changed content saved')
      })
      .catch(() => {
         alert('fail, changed content cannot be saved')
      })
    })
  }

  render(){
    if(!this.props.about_us && !this.state.files){
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
                    <Dropzone style={ constant.draganddropstyle } multiple={ false } accept="image/*"  onDrop={ (e) => this.onDrop(e) }>
                      <div>{ this.state.filename }</div>
                    </Dropzone>
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
    this.state = {
      NAME: '',
      POSITION: '',
      TEXT: '',
      filename: []
    }
  }

  onDrop(e) {
      let img = new Image();
      let file = e[0];
      img.src = window.URL.createObjectURL( file )
      let h = this.state.height
      let w = this.state.width
      img.onload = () => {// REFACTORIN
        this.setState({
          naturalHeight: img.naturalHeight,
          naturalWidth: img.naturalWidth
        })
        handleImageChange(file)
      }

      let handleImageChange = (file) => {
        let reader = new FileReader();

        reader.onloadend = () => {
          this.setState({
            filename: e[0].name,
            file: file,
            imagePreviewUrl: reader.result
          });
        }
        reader.readAsDataURL(file)
      }
    }

  editTeam(val, index){
    this.props.updateImage(this.state.file)
    .then((url) => {
      let name = this.state.NAME;
      let text = this.state.TEXT;
      let position = this.state.POSITION;
      if (!name) name = this.props.team[index].NAME
      if (!text) text = this.props.team[index].TEXT
      if (!position) position = this.props.team[index].POSITION

      const team = {
        IMG : url,
        IMGURL : "url",
        NAME : name,
        POSITION : position,
        TEXT : text
      }

      this.props.editAbout(`team/list/${index}`, team)
      .then(() => {
         alert('success, changed content saved')
      })
      .catch(() => {
         alert('fail, changed content cannot be saved')
      })
    })
  }

  handleChange(val, key, index) {
    val.preventDefault();
    if(key == `name`){
      this.setState({
        NAME: val.target.value
      })
    }else if(key == `position`) {
      this.setState({
        POSITION: val.target.value
      })
    }else{
      this.setState({
        TEXT: val.target.value
      })
    }

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
                        <li key={index} role="presentation" className={ index == 0 ? 'active':''}>
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
                          <div key={index} role="tabpanel" className={index == 0 ? 'tab-pane fade active in':'tab-pane fade'} id={`tab_team${index+1}`} aria-labelledby="home-tab" key={index}>
                            <div className="x_content">
                              <div id="alerts"></div>
                              <form id="formteam">
                                <div className="col-md-3 col-sm-3 col-xs-12">
                                  <div>
                                    <Dropzone style={ constant.draganddropstyle } multiple={ false } accept="image/*"  onDrop={ (e) => this.onDrop(e) }>
                                      <div>{ this.state.filename }</div>
                                    </Dropzone>
                                    image size: 470 x 220
                                  </div>
                                </div>

                                <div className="col-md-9 col-sm-9 col-xs-12">
                                    <div className="form-group">
                                      <div className="col-md-9 col-sm-9 col-xs-12">
                                        {/*<input data-key = "position" placeholder="Position" defaultValue={ this.props.team[index].POSITION } ref={(ref) => this.positionRef = ref} ></input>
                                        <input data-key = "name" placeholder="Name" style={{width: "500px"}} defaultValue={ this.props.team[index].NAME } ref={ (ref) => this.nameRef = ref}></input>*/}
                                        <input placeholder="Position" defaultValue={ this.props.team[index].POSITION }  onChange={(ref) => this.handleChange(ref, `position`)}></input>
                                        <input placeholder="Name" style={{width: "500px"}} defaultValue={ this.props.team[index].NAME } onChange={(ref) => this.handleChange(ref, `name`)}></input>
                                      </div>
                                    </div>

                                    <br /><br /><br />

                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                      <textarea className="resizable_textarea form-control" placeholder="Short Desc" style={{height:"230px"}} defaultValue={ this.props.team[index].TEXT } onChange={(ref) => this.handleChange(ref, `text`)}></textarea>
                                    </div>
                                </div>

                                <div className="col-md-1 col-sm-1 col-xs-12 col-md-offset-11 col-sm-offset-11">
                                  <input className="btn btn-success" type="submit" name="submit" onClick={(val) => this.editTeam(val, index)}/>
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
    editAbout:(key, data) => editAbout(key, data),
    updateImage: (data) => updateImage(data)
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (About)
