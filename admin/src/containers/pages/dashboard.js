import React from 'react'
import { connect } from 'react-redux'

import * as con from '../../actions/const'
import Dropzone from 'react-dropzone'
import { updateImage } from '../../actions/UploadImage'

import { editHeader, editFooter } from '../../actions/Container'

class Dashboard extends React.Component{
  render(){
      return(
        <div className="right_col" role="main">
          <div className="">
            <div className="page-title"><h1>Welcome, {con.authentication.username}</h1></div>

            <div className="clearfix"></div>
            <div className='row'>
              <Header updateImage= { updateImage } editHeader={ editHeader } />
              <br />
              <Footer updateImage= { updateImage } editFooter={ editFooter }/>
            </div>
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
        <div role="main">
          <div className="">
            <div className="page-title"><h1>HEADER</h1></div>

            <div className="clearfix"></div>
            <div className='row'>
              <div style={{'marginLeft': '10px !important'}}>
                <Dropzone style={ con.draganddropstyle } multiple={ false } accept="image/*"  onDrop={ (e) => this.onDrop(e) }>
                  <div>{ this.state.filename }</div>
                </Dropzone>
                image size: 1182 x 350
                <br />
                <button type="submit" className="btn btn-success" onClick={(val) => this.editHeader(val)}>Edit</button>
              </div>
            </div>
          </div>
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
    this.props.updateImage(this.state.file)
    .then((img_url) => {
      console.log('yeay ', img_url)
      return this.props.editFooter(img_url)
    })
    .then(() => {
      alert('success, edit Footer')
    })
    .catch(() => {
        alert('err .., somthing wrong')
    })
  }

  render(){
      return(
        <div role="main">
          <div className="">
            <div className="page-title"><h1>FOOTER</h1></div>

            <div className="clearfix"></div>
            <div className='row'>
              <div>
                <Dropzone style={ con.draganddropstyle } multiple={ false } accept="image/*"  onDrop={ (e) => this.onDrop(e) }>
                  <div>{ this.state.filename }</div>
                </Dropzone>
                image size: 135 x 40
                <br />
                <button type="submit" className="btn btn-success" onClick={(val) => this.editFooter(val)}>Edit</button>
              </div>
            </div>
          </div>
        </div>
      )
  }
}

const mapsDispatchToProps = (dispatch) => {
  return{
    editHeader: (context) => dispatch(editHeader(context)),
    editFooter: (context) => dispatch(editFooter(context)),
  }
}

export default connect(null, mapsDispatchToProps)(Dashboard)
