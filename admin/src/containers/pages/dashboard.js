import React from 'react'
import { connect } from 'react-redux'

import * as con from '../../actions/const'
import Dropzone from 'react-dropzone'
import { updateImage } from '../../actions/UploadImage'

import fetchContainer,{ editHeader, editFooter } from '../../actions/Container'

class Dashboard extends React.Component{

  componentWillMount() {
    this.props.getContainer(this)
  }

  render(){
      return(
        <div className="right_col" role="main">
          <div className="page-title">
            <div className="title_left">
              <h1>Welcome back, {con.authentication.username}</h1>
            </div>

          </div>

          <div className="clearfix"></div>
          <div className="row">
            <Header updateImage= { updateImage } editHeader={ this.props.editHeader } />
            <br />
            <Footer updateImage= { updateImage } editFooter={ this.props.editFooter } component={ this.props.component } />
          </div>
        </div>
      )
  }
}

class Header extends React.Component{
  constructor(props){
    super(props)
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

  editHeader(val) {
    val.preventDefault()
    this.props.updateImage(this.state.file)
    .then((img_url) => {
      console.log('yeay ', img_url)
      return this.props.editHeader(img_url)
    })
    .then(() => {
      alert('success, edit header')
    })
    .catch(() => {
        alert('err .., somthing wrong')
    })
  }

  render(){
      return(
        <div className="row">
          <div className="page-title col-md-offset-1"><h1>HEADER</h1></div>

          <div className="clearfix"></div>
          <div className='row'>
            <div className="col-md-4 col-md-offset-1">
              <div style={{'marginLeft': '10px !important'}}>
                <Dropzone style={ con.draganddropstyle } multiple={ false } accept="image/*"  onDrop={ (e) => this.onDrop(e) }>
                  <div>{ this.state.filename }</div>
                </Dropzone>
                image size: 1182 x 350
                <br />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-success col-md-offset-1" onClick={(val) => this.editHeader(val)}>Edit</button>
        </div>
      )
  }
}

class Footer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      filename: []
    }
  }

  onDrop(e) {
    console.log('ondroop')
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

  editFooter(val) {
    val.preventDefault()
    let footer_components = {
      TITLE: this.titleRef.value,
      TEXT: this.textRef.value,
      LINK: {
        FB: this.fbRef.value,
        GOOGLE: this.googleRef.value,
        INSTAGRAM: this.instagramRef.value,
        PATH: this.pathRef.value,
        TRIP: this.tripRef.value,
        TWITTER: this.twitterRef.value,
        YOUTUBE: this.youtubeRef.value
      }
    }

    if(this.state.file) {
      this.props.updateImage(this.state.file)
      .then((img_url) => {
        footer_components['IMG'] = img_url
        console.log('footer_components ', footer_components)
        return this.props.editFooter(footer_components)
      })
      .then(() => {
        alert('success, edit Footer')
      })
      .catch((err) => {
          alert('err .., something wrong')
      })
    }else{
      this.props.editFooter(footer_components)
      .then(() => {
        alert('success, edit Footer')
      })
      .catch((err) => {
          alert('err .., something wrong')
      })
    }
  }

  render(){
      if(!this.props.component) return (<div> Loading .. </div>)
      return(
        <div className="row">
          <div className="page-title col-md-offset-1"><h1>FOOTER</h1></div>

          <div className="clearfix"></div>
          <div className="row">
            <div className="col-md-3 col-md-offset-1">
              <Dropzone style={ con.draganddropstyle } multiple={ false } accept="image/*"  onDrop={ (e) => this.onDrop(e) }>
                <div>{ this.state.filename }</div>
              </Dropzone>
              image size: 135 x 40
              <br />
              {/*<button type="submit" className="btn btn-success" onClick={(val) => this.editFooter(val)}>Edit</button>*/}
            </div>
          </div>
          <div className="row">
            <div className="col-md-offset-1 col-md-6">
              <label >Title</label>
              <div>
                <input type="text" className="form-control" defaultValue={this.props.component.TITLE} ref={(ref) => this.titleRef = ref}/>
                <br />
              </div>
              <label >Text</label>
              <div>
                <input type="text" className="form-control"  defaultValue={this.props.component.TEXT} ref={(ref) => this.textRef = ref}/>
                <br />
              </div>
              <label >Link</label>
              <div>
                <label >Facebook</label>
                <input type="text" className="form-control"  defaultValue={this.props.component.LINK.FB} ref={(ref) => this.fbRef = ref}/>
                <br />
              </div>
              <div>
                <label >Google</label>
                <input type="text" className="form-control"  defaultValue={this.props.component.LINK.GOOGLE} ref={(ref) => this.googleRef = ref}/>
                <br />
              </div>
              <div>
                <label >Instagram</label>
                <input type="text" className="form-control"  defaultValue={this.props.component.LINK.INSTAGRAM} ref={(ref) => this.instagramRef = ref}/>
                <br />
              </div>
              <div>
                <label >Path</label>
                <input type="text" className="form-control"  defaultValue={this.props.component.LINK.PATH} ref={(ref) => this.pathRef = ref}/>
                <br />
              </div>
              <div>
                <label >Trip</label>
                <input type="text" className="form-control"  defaultValue={this.props.component.LINK.TRIP} ref={(ref) => this.tripRef = ref}/>
                <br />
              </div>
              <div>
                <label >Twitter</label>
                <input type="text" className="form-control"  defaultValue={this.props.component.LINK.TWITTER} ref={(ref) => this.twitterRef = ref}/>
                <br />
              </div>
              <div>
                <label >Youtube</label>
                <input type="text" className="form-control"  defaultValue={this.props.component.LINK.YOUTUBE} ref={(ref) => this.youtubeRef = ref}/>
                <br />
              </div>
              <br />
              <button type="submit" className="btn btn-success" onClick={(val) => this.editFooter(val)}>Edit</button>
            </div>
          </div>
        </div>
      )
  }
}

const mapsStateToProps =(state) => {
  if(state.feature){
    return{
      component : state.container.footer_component,
    }
  }else return{}
}

const mapsDispatchToProps = (dispatch) => {
  return{
    editHeader: (header) => editHeader(header),
    editFooter: (Footer) => editFooter(Footer),
    getContainer: (context) => dispatch(fetchContainer(context))
  }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(Dashboard)
