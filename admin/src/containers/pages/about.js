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
    if(!this.props.aboutus) {
      return <div>Loading ..</div>
    }
    return(
        <Main aboutus={this.props.aboutus} editAbout={this.props.editAbout} updateImage={this.props.updateImage}/>
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

        {/* DEPRECATED, we don't use our team component for Balizee
          <OurTeam team={team} editAbout={editAbout} updateImage={updateImage}/>
        */}

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
    if(!this.state.file){
      const us = {
        TITLE : this.titleRef.value,
        TEXT : this.textAboutRef.value,
        IMG : this.props.about_us.IMG
      }
      this.props.editAbout(us)
      .then(() => {
         alert('success, changed content saved')
      })
      .catch(() => {
         alert('fail, changed content cannot be saved')
      })
    }else{
      this.props.updateImage(this.state.file)
      .then((url) =>{
        const us = {
          TITLE : this.titleRef.value,
          TEXT : this.textAboutRef.value,
          IMG : url
        }
        return this.props.editAbout(us)
      })
      .then(() => {
         alert('success, changed content saved')
         // set file state to default value
         this.setState({
           filename: '',
           file: '',
           imagePreviewUrl: ''
         })
      })
      .catch(() => {
         alert('fail, changed content cannot be saved')
      })
    }
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
                        <textarea className="resizable_textarea form-control" placeholder="Title Here .." defaultValue={this.props.about_us.TITLE} ref={(ref) => this.titleRef = ref}></textarea>
                      </div>
                  </div>

                  <br /><br /><br />

                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <textarea className="resizable_textarea form-control" placeholder="Content Here .." style={{height:"230px"}} defaultValue={ this.props.about_us.TEXT } ref={(ref) => this.textAboutRef = ref}></textarea>
                  </div>
                </div>

                <div className="col-md-1 col-sm-1 col-xs-12 col-md-offset-11 col-sm-offset-11">
                  <br />
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

const mapStateToProps = (state) => {
  if (state.about) {
    return{
      aboutus: state.about.us
    }
  }else return{ }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getAbout: (context) => dispatch(fetchAbout(context)),
    editAbout:(data) => editAbout(data),
    updateImage: (data) => updateImage(data)
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (About)
