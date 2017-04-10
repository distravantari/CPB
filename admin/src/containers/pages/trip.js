import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import Dropzone from 'react-dropzone'

import fetchFeature,{ editPackets, addPackets, deletePackets, editChild , addChild, deleteChild} from '../../actions/Feature'
import { updateImage } from '../../actions/UploadImage'

import * as constant from '../../actions/const'

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
            <TripPackage packets = {this.props.list} editPackets = {this.props.editPackets} addPackets = {this.props.addPackets} deletePackets={this.props.deletePackets} updateImage = {this.props.updateImage} editChild={this.props.editChild} addChild={this.props.addChild} deleteChild={this.props.deleteChild}/>
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
      TITLE : '',
      VIDEO : '',
      FORM : '',
      DESCRIPTION : '',
      SLIDER : '',
      filename : [],
      CHILD : [],
      TEXT: "",
      URL: ""
    }
  }

  addPackets(val){
    val.preventDefault()
    const newpackets = {
      TITLE : this.newTitleRef.value,
      FORM : this.newFormRef.value,
      DESCRIPTION : this.newDescRef.value,
      TEXT : this.newTextRef.value,
      URL : this.newURLRef.value,
      // SLIDER : this.newSliderRef.value,
      VIDEO : this.newVideoRef.value,
    }
    console.log("adding ..", newpackets);
    this.props.addPackets(this.props.packets.length, newpackets)
    .then(() => {
      alert('success, new content saved')
      this.newTitleRef.value = ''
      this.newFormRef.value = ''
      this.newDescRef.value = ''
      this.newTexRef.value = ''
      this.newURLRef.value = ''
      // this.newSliderRef.value =''
      this.newVideoRef.value =''
    })
    .catch((err) => {
       alert('fail, new content cannot be saved ',err)
    })
  }

  editPackets(val, index){
    val.preventDefault()
    let form = this.state.FORM
    let description = this.state.DESCRIPTION
    let title = this.state.TITLE
    let video = this.state.VIDEO
    let child = _.values(this.props.packets)[index].CHILD
    let text = this.state.TEXT
    let url = this.state.URL

    if(!form) form = _.values(this.props.packets)[index].FORM
    if(!description) description = _.values(this.props.packets)[index].DESCRIPTION
    if(!title) title = _.values(this.props.packets)[index].TITLE
    if(!video) video = _.values(this.props.packets)[index].VIDEO
    if(!text) text = _.values(this.props.packets)[index].TEXT
    if(!url) url = _.values(this.props.packets)[index].URL

    console.log("url ", url)
    const packets = {
      TITLE : title,
      FORM : form,
      DESCRIPTION : description,
      TEXT : text,
      CHILD : child,
      VIDEO : video,
      URL : url
    }

    this.props.editPackets(`list/${index}`, packets)
    .then(() => {
       alert('success, content changed')
    })
    .catch(() => {
       alert('fail, content cannot be change')
    })
  }

  deletePackets(val, index){
    val.preventDefault()
    this.props.deletePackets(index)
    .then(() => {
       alert('success, content deleted')
    })
    .catch(() => {
       alert('fail, content cannot be delete')
    })
  }

  handleChange(val, key, index){
    val.preventDefault()
    if(key == `title`){
      this.setState({
        TITLE: val.target.value
      })
    }else if(key == `form`) {
      this.setState({
        FORM: val.target.value
      })
    }else if(key == `description`) {
      this.setState({
        DESCRIPTION : val.target.value
      })
    }else if(key == `slider`) {
      this.setState({
        SLIDER: val.target.value
      })
    }else if(key == `url`) {
      this.setState({
        URL: val.target.value
      })
    }else if(key == `text`) {
      this.setState({
        TEXT: val.target.value
      })
    }
    else{
      this.setState({
        VIDEO : val.target.value
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
                _.values(this.props.packets).map((packet, index) => {
                  if(packet != null){
                    return(
                      <li key={index} role="presentation" className={ index == 0 ? 'active':''}>
                        <a href={`#tab_packet${index+1}`} role="tab" data-toggle="tab" aria-expanded={index == 0 ? 'true' : 'false'}>
                          {packet.TITLE}
                        </a>
                      </li>
                    )
                  }
                })
              }
              <li role="presentation" className=''>
                <a href='#tab_newpacket' role="tab" data-toggle="tab" aria-expanded='false'><span className='fa fa-plus'></span></a>
              </li>
            </ul>

            <div id="myTabContent" className="tab-content">
              {
                _.values(this.props.packets).map((packet, index) => {
                  if(packet != null){
                    return(
                    <div key={index} role="tabpanel" className={index == 0 ? 'tab-pane fade active in':'tab-pane fade'} id={`tab_packet${index+1}`} aria-labelledby="home-tab">

                      <div className="col-md-7 col-sm-7 col-xs-12">
                          <form className="form-horizontal form-label-left">

                          <div className="form-group">
                            <label className="control-label col-md-3 col-sm-3 col-xs-12">Title</label>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                              <input type="text" className="form-control" placeholder="Title" defaultValue={packet.TITLE} onChange={(ref) => this.handleChange(ref, `title`)}/>
                            </div>
                          </div>

                          <div className="form-group">
                            <label className="control-label col-md-3 col-sm-3 col-xs-12">Video embeded URL</label>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                              <input type="text" className="form-control" placeholder="src=..." defaultValue={packet.VIDEO} onChange={(ref) => this.handleChange(ref, `video`)}/>
                            </div>
                          </div>

                          <div className="form-group">
                            <label className="control-label col-md-3 col-sm-3 col-xs-12">Form</label>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                              <input type="text" className="form-control" placeholder="0-4" defaultValue={packet.FORM} onChange={(ref) => this.handleChange(ref, `form`)}/>
                            </div>
                          </div>

                          <div className="form-group">
                            <label className="control-label col-md-3 col-sm-3 col-xs-12">Description</label>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                              <input type="text" className="form-control" placeholder="Description" defaultValue={packet.DESCRIPTION} onChange={(ref) => this.handleChange(ref, `description`)}/>
                            </div>
                          </div>

                          <div className="form-group">
                            <label className="control-label col-md-3 col-sm-3 col-xs-12">URL</label>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                              <input type="text" className="form-control" placeholder="URL" defaultValue={packet.URL} onChange={(ref) => this.handleChange(ref, `url`)}/>
                            </div>
                          </div>

                          <div className="form-group">
                            <label className="control-label col-md-3 col-sm-3 col-xs-12">Text</label>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                              <input type="text" className="form-control" placeholder="TEXT" defaultValue={packet.TEXT} onChange={(ref) => this.handleChange(ref, `text`)}/>
                            </div>
                          </div>

                          <div className="form-group">
                            <div className="">
                              <button type="" className="btn btn-success" onClick={(val) => this.editPackets(val, index)}>Edit</button>
                              <button type="" className="btn btn-danger" onClick={(val) => this.deletePackets(val, index)}>Delete</button>
                            </div>
                          </div>

                        </form>
                      </div>

                      <ChildPackage childpackets={packet.CHILD} indexParent={index} editChild={this.props.editChild} addChild={this.props.addChild} deleteChild={this.props.deleteChild} updateImage={this.props.updateImage}/>
                    </div>
                  )
                  }
                })
              }
              <div role="tabpanel" className='tab-pane fade' id='tab_newpacket' aria-labelledby="home-tab">

                <div className="col-md-7 col-sm-7 col-xs-12">
                    <form className="form-horizontal form-label-left">

                    <div className="form-group">
                      <label className="control-label col-md-3 col-sm-3 col-xs-12">Title</label>
                      <div className="col-md-9 col-sm-9 col-xs-12">
                        <input type="text" className="form-control" placeholder="Title" defaultValue=''  ref={(ref) => this.newTitleRef = ref}/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-md-3 col-sm-3 col-xs-12">Video embeded URL</label>
                      <div className="col-md-9 col-sm-9 col-xs-12">
                        <input type="text" className="form-control" placeholder="src= .." defaultValue='' ref={(ref) => this.newVideoRef = ref}/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-md-3 col-sm-3 col-xs-12">Form</label>
                      <div className="col-md-9 col-sm-9 col-xs-12">
                        <input type="text" className="form-control" placeholder="0-4" defaultValue='' ref={(ref) => this.newFormRef = ref}/>
                      </div>
                    </div>


                    <div className="form-group">
                      <label className="control-label col-md-3 col-sm-3 col-xs-12">Description</label>
                      <div className="col-md-9 col-sm-9 col-xs-12">
                        <input type="text" className="form-control" placeholder="Description" defaultValue='' ref={(ref) => this.newDescRef = ref}/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-md-3 col-sm-3 col-xs-12">Url</label>
                      <div className="col-md-9 col-sm-9 col-xs-12">
                        <input type="text" className="form-control" placeholder="Url" defaultValue='' ref={(ref) => this.newURLRef = ref}/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-md-3 col-sm-3 col-xs-12">Text</label>
                      <div className="col-md-9 col-sm-9 col-xs-12">
                        <input type="text" className="form-control" placeholder="Text" defaultValue='' ref={(ref) => this.newTextRef = ref}/>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="">
                        <button type="" className="btn btn-primary" onClick={(val) => this.addPackets(val)}>Add</button>
                      </div>
                    </div>

                  </form>
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

class ChildPackage extends React.Component {
  constructor(props,context){
    super(props)
    context.router
    this.state = {
      IMG : '',
      TEXT : '',
      TITLE : '',
      DESCRIPTION: '',
      SLIDER: ''
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

  addChild(val){
    val.preventDefault()
    if(this.state.file){
      // console.log("title: ",this.newChildTitleRef.value)
      let newchild = {}

      if (this.newChildTitleRef){
        newchild = {
         TEXT: this.newChildTitleRef.value,
         TITLE: this.newChildTextRef.value,
         DESCRIPTION: this.newChildDescriptionRef.value
       }
     }else{
       newchild = {
         TEXT: this.newChildTitleRef2.value,
         TITLE: this.newChildTextRef2.value,
         DESCRIPTION: this.newChildDescriptionRef2.value
       }
     }

      this.props.updateImage(this.state.file)
      .then((sliderUrl) => {
          console.log("sliderUrl ", this.props);
          newchild["IMG"] = sliderUrl
          let childpackets = 0
          if (this.props.childpackets) {
            childpackets = this.props.childpackets.list.length
          }
          console.log("addchild: ",this.props.indexParent+", "+childpackets+", ")
          console.log("+newchild ", +newchild)
          return this.props.addChild(this.props.indexParent, childpackets, newchild)
      })
      .then(() => {
        alert('success, new content saved')
        // this.newChildTitleRef.value = ''
        // this.newChildTextRef.value = ''
        // set file state to default value
        this.setState({
          filename: '',
          file: '',
          imagePreviewUrl: ''
        })
      })
      .catch((err) => {
         alert('fail, new content cannot be saved '+err)
      })
    }else{
      alert('please insert image')
    }
  }

  editChild(val, index){
    if(this.state.file) {
      this.props.updateImage(this.state.file)
      .then((dlurl) => {
        let text = this.state.TEXT
        let title = this.state.TITLE
        let img = this.state.IMG
        let description = this.state.DESCRIPTION
        let slider = this.state.SLIDER

        if(!text) text = this.props.childpackets.list[index].TEXT
        if(!title) title = this.props.childpackets.list[index].TITLE
        if(!img) img = dlurl
        if(!slider) slider = this.props.childpackets.list[index].SLIDER
        if(!description) description = this.props.childpackets.list[index].DESCRIPTION

        const packets = {
          TEXT : text,
          TITLE : title,
          IMG: img,
          DESCRIPTION: description,
          SLIDER: slider
        }

        return this.props.editChild(this.props.indexParent, `list/${index}`, packets)
      })
      .then(() => {
         alert('success, child package content changed')
         // set file state to default value
         this.setState({
           filename: '',
           file: '',
           imagePreviewUrl: ''
         })
      })
      .catch((err) => {
         alert('fail, child package content cannot be changed '+err)
      })
    }else{
      let text = this.state.TEXT
      let title = this.state.TITLE
      let img = this.state.IMG
      let description = this.state.DESCRIPTION
      let slider = this.state.SLIDER

      if(!text) text = this.props.childpackets.list[index].TEXT
      if(!title) title = this.props.childpackets.list[index].TITLE
      if(!img) img = this.props.childpackets.list[index].IMG
      if(!slider) slider = this.props.childpackets.list[index].SLIDER
      if(!description) description = this.props.childpackets.list[index].DESCRIPTION

      const packets = {
        TEXT : text,
        TITLE : title,
        IMG: img,
        DESCRIPTION: description,
        SLIDER: slider
      }

      this.props.editChild(this.props.indexParent, `list/${index}`, packets)
      .then(() => {
         alert('success, child package content changed')
         // set file state to default value
         this.setState({
           file: ''
         })
      })
      .catch((err) => {
         alert('fail, child package content cannot be changed '+err)
      })
    }
  }

  deleteChild(val, index){
    val.preventDefault()
    this.props.deleteChild(this.props.indexParent, index)
    .then(() => {
       alert('success, content deleted')
    })
    .catch(() => {
       alert('fail, content cannot be delete')
    })
  }

  handleChange(val, key){
    val.preventDefault()
    if(key == `title`){
      this.setState({
        TITLE: val.target.value
      })
    }else if( key == `text`){
      this.setState({
        TEXT: val.target.value
      })
    }else if(key == `slider`){
      this.setState({
        SLIDER: val.target.value
      })
    }else{
      this.setState({
        DESCRIPTION: val.target.value
      })
    }
  }

  onSliderDrop(e) {
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
          filename2: e[0].name,
          file2: file,
          imagePreviewUrl2: reader.result
        });
      }
      reader.readAsDataURL(file)
    }
  }

  render(){
    return(
      <div className="x_panel">
        <div className="x_title">
          <h2>Child Packages</h2>
          <div className="clearfix"></div>
        </div>

        <div className="x_content">
          <div id="alerts"></div>

          <div className="" role="tabpanel" data-example-id="togglable-tabs">
            <ul id="myTab" className="nav nav-tabs bar_tabs" role="tablist">
              {
                this.props.childpackets && _.values(this.props.childpackets.list).map((packet, index) => {
                  if(packet != null){
                    return(
                      <li key={index} role="presentation" className={ index == 0 ? 'active':''}>
                        <a href={`#tab${this.props.indexParent}_child${index+1}`} role="tab" data-toggle="tab" aria-expanded={index == 0 ? 'true' : 'false'}>
                          {packet.TITLE}
                        </a>
                      </li>
                    )
                  }
                })
              }
              <li role="presentation" className=''>
                <a href={`#tab${this.props.indexParent}_newchild`} role="tab" data-toggle="tab" aria-expanded='false'><span className='fa fa-plus'></span></a>
              </li>
            </ul>

            <div id="myTabContent" className="tab-content">
              {
                this.props.childpackets && _.values(this.props.childpackets.list).map((packet, index) => {
                  if(packet != null){
                    return(
                      <div key={index} role="tabpanel" className={index == 0 ? 'tab-pane fade active in':'tab-pane fade'} id={`tab${this.props.indexParent}_child${index+1}`} aria-labelledby="home-tab">
                        <div className="x_panel col-md-6 col-sm-12 col-sm-12">
                          <h5>this is for child package image preview</h5>
                          <Dropzone style={ constant.draganddropstyle } multiple={ false } accept="image/*"  onDrop={ (e) => this.onDrop(e) }>
                            <div>{ this.state.filename }</div>
                          </Dropzone>
                          image size: 470 x 220
                        </div>
                        <div className='x_panel col-md-6 col-sm-12 col-xs-12'>
                          <div className="form-group">
                            <label className="">Title</label>
                            <div className="">
                              <input type="text" style={{width: "500px", height: "30px"}} defaultValue={ packet.TITLE } onChange={(ref) => this.handleChange(ref, `title`)}/>
                            </div>
                          </div>

                          <div className="form-group">
                            <label className="">Text (20 chars min, 100 max) :</label>
                            <div className="">
                              <textarea id="message" required="required" className="form-control" name="message" data-parsley-trigger="keyup" data-parsley-minlength="20" data-parsley-maxlength="100" data-parsley-minlength-message="Come on! You need to enter at least a 20 caracters long comment.."
                                data-parsley-validation-threshold="10" defaultValue={ packet.TEXT } onChange={(ref) => this.handleChange(ref, `text`)}></textarea>
                            </div>
                          </div>

                          <div className="form-group">
                            <label className="">Description</label>
                            <div className="">
                              <textarea id="message" required="required" className="form-control" name="message" data-parsley-trigger="keyup" data-parsley-minlength="20" data-parsley-maxlength="200" data-parsley-minlength-message="Come on! You need to enter at least a 20 caracters long comment.."
                                data-parsley-validation-threshold="10" defaultValue={ packet.DESCRIPTION } onChange={(ref) => this.handleChange(ref, `description`)}></textarea>
                            </div>
                          </div>
                        </div>
                        <div className='x_panel col-md-6 col-sm-12 col-xs-12'>
                          <h5>EDIT CHILD SLIDER (can only input 3 slider)</h5>
                        <hr/>
                        {
                          packet.SLIDER && packet.SLIDER.map((slider, index) => (
                            <div className="col-md-6 col-sm-6 col-xs-12" key={index}>
                              <form className="form-horizontal form-label-left">

                                <h5> Add child package slider {index} </h5>
                                <p>{ slider }</p>
                                <Dropzone style={ constant.draganddropstyle } multiple={ false } accept="image/*"  onDrop={ (e) => this.onSliderDrop(e) }>
                                  <div>{ this.state.filename2 }</div>
                                </Dropzone>
                                image size: 690 x 271

                                <div className="form-group">
                                  <div className="col-md-9 col-sm-9 col-xs-12">
                                    <button type="submit" className="btn btn-success"onClick={(val) => this.editChildSlider(val, index, packet)}>Edit</button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          ))
                        }
                        {
                          !packet.SLIDER && (
                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <form className="form-horizontal form-label-left">

                                <h5> Add child package slider 0 </h5>
                                <Dropzone style={ constant.draganddropstyle } multiple={ false } accept="image/*"  onDrop={ (e) => this.onSliderDrop(e) }>
                                  <div>{ this.state.filename2 }</div>
                                </Dropzone>
                                image size: 690 x 271

                                <div className="form-group">
                                  <div className="col-md-9 col-sm-9 col-xs-12">
                                    <button type="submit" className="btn btn-primary"onClick={(val) => this.addChildSlider(val, 0)}>add</button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          )
                        }
                        </div>

                        <div className='x_panel col-md-6 col-sm-12 col-xs-12'>
                          <div className="form-group">
                            <div className="">
                              <button type="" className="btn btn-success" onClick={(val) => this.editChild(val, index)}>save</button>
                              <button type="" className="btn btn-danger" onClick={(val) => this.deleteChild(val, index)}>Delete</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  }
                })
              }
              { !this.props.childpackets && (
                <div role="tabpanel" className='tab-pane fade' id={`tab${this.props.indexParent}_newchild`} aria-labelledby="home-tab">
                  <div className="x_panel col-md-6 col-sm-12 col-sm-12">
                    <div className="col-md-4 col-sm-12 col-sm-12">
                      <Dropzone style={ constant.draganddropstyle } multiple={ false } accept="image/*"  onDrop={ (e) => this.onDrop(e) }>
                        <div>{ this.state.filename }</div>
                      </Dropzone>
                    </div>
                  </div>

                  <div className='x_panel col-md-6 col-sm-12 col-xs-12'>
                    <div className="form-group">
                      <label className="">Title</label>
                      <div className="">
                        <input type="text" style={{width: "500px", height: "30px"}} defaultValue='' ref={(ref) => this.newChildTitleRef = ref}/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="">Text (20 chars min, 100 max) :</label>
                      <div className="">
                        <textarea id="message" required="required" className="form-control" name="message" data-parsley-trigger="keyup" data-parsley-minlength="20" data-parsley-maxlength="100" data-parsley-minlength-message="Come on! You need to enter at least a 20 caracters long comment.."
                          data-parsley-validation-threshold="10" defaultValue='' ref={(ref) => this.newChildTextRef = ref}></textarea>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="">Description</label>
                      <div className="">
                        <textarea id="message" required="required" className="form-control" name="message" data-parsley-trigger="keyup" data-parsley-minlength="20" data-parsley-maxlength="200" data-parsley-minlength-message="Come on! You need to enter at least a 20 caracters long comment.."
                          data-parsley-validation-threshold="10" defaultValue='' ref={(ref) => this.newChildDescriptionRef = ref}></textarea>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="">
                        <button type="" className="btn btn-primary" onClick={(val) => this.addChild(val)}>Add</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div role="tabpanel" className='tab-pane fade' id={`tab${this.props.indexParent}_newchild`} aria-labelledby="home-tab">
                <div className="x_panel col-md-6 col-sm-12 col-sm-12">
                  <div className="col-md-4 col-sm-12 col-sm-12">
                    <Dropzone style={ constant.draganddropstyle } multiple={ false } accept="image/*"  onDrop={ (e) => this.onDrop(e) }>
                      <div>{ this.state.filename }</div>
                    </Dropzone>
                  </div>
                </div>

                <div className='x_panel col-md-6 col-sm-12 col-xs-12'>
                  <div className="form-group">
                    <label className="">Title</label>
                    <div className="">
                      <input type="text" style={{width: "500px", height: "30px"}} defaultValue='' ref={(ref) => this.newChildTitleRef2 = ref}/>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="">Text (20 chars min, 100 max) :</label>
                    <div className="">
                      <textarea id="message" required="required" className="form-control" name="message" data-parsley-trigger="keyup" data-parsley-minlength="20" data-parsley-maxlength="100" data-parsley-minlength-message="Come on! You need to enter at least a 20 caracters long comment.."
                        data-parsley-validation-threshold="10" defaultValue='' ref={(ref) => this.newChildTextRef2 = ref}></textarea>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="">Description</label>
                    <div className="">
                      <textarea id="message" required="required" className="form-control" name="message" data-parsley-trigger="keyup" data-parsley-minlength="20" data-parsley-maxlength="200" data-parsley-minlength-message="Come on! You need to enter at least a 20 caracters long comment.."
                        data-parsley-validation-threshold="10" defaultValue='' ref={(ref) => this.newChildDescriptionRef2 = ref}></textarea>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="">
                      <button type="" className="btn btn-primary" onClick={(val) => this.addChild(val)}>Add</button>
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

  editChildSlider(val, index, packet) {
    val.preventDefault()
    let slider = packet.SLIDER
    console.log('state ::: ', this.state.SLIDER)
    if(!this.state.file2) alert('please insert image')
    this.props.updateImage(this.state.file2)
    .then((imgurl) => {
      slider[index] = imgurl
      this.setState({
        SLIDER: slider
      })
    })
    .then(() => {
      alert('success, now please click the save button')
    })
  }

  addChildSlider(val, index){
    val.preventDefault()
    console.log("distra =>", this.state.file2);
    let slider = []
    // console.log('state ::: ', this.state.SLIDER)
    if(!this.state.file2) alert('please insert image')
    this.props.updateImage(this.state.file2)
    .then((imgurl) => {
      slider[index] = imgurl
      slider[index+1] = imgurl
      slider[index+2] = imgurl
      this.setState({
        SLIDER: slider
      })
    })
    .then(() => {
      alert('success, now please click the save button')
    })
  }
}

const mapStateToProps =(state) => {
  console.log(state.feature.packets)
  if(state.feature){
    return{
      list : state.feature.packets.list
    }
  }else return{}
}

const mapDispatchToProps = (dispatch) => {
  return{
    getFeature: (context) => dispatch(fetchFeature(context)),
    editPackets: (key, data) => editPackets(key, data),
    addPackets: (index, data) => addPackets(index, data),
    deletePackets: (index) => deletePackets(index),
    updateImage: (data) => updateImage(data),
    editChild: (indexParent, index, data) => editChild(indexParent, index, data),
    addChild: (indexParent, key, data) => addChild(indexParent, key, data),
    deleteChild: (indexParent, index) => deleteChild(indexParent, index)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trip)
