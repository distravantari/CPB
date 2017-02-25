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
      DATE : '',
      DETAIL : {
        TITTLE : '',
        TEXT : ''
      },
      FORM :'',
      IMG : '',
      NOTIFICATION : {
        COMMENT : '',
        LIKES : ''
      },
      TAGS : [],
      TEXT : '',
      TITTLE : '',
      VIDEO: '',
      URL : '',
      filename : [],
      CHILD : []
    }
  }

  addPackets(val){
    val.preventDefault()
    if(this.state.file){
      this.props.updateImage(this.state.file)
      .then((url) => {
        const newpackets = {
          DATE : '',
          DETAIL : {
            TITTLE : this.newTitleDescRef.value,
            TEXT : this.newTextDescRef.value
          },
          FORM : '',
          IMG : url,
          NOTIFICATION : {
            COMMENT : '',
            LIKES : ''
          },
          TAGS : [],
          TEXT : this.newTextRef.value,
          TITTLE : this.newTitleRef.value,
          VIDEO : this.newVideoRef.value,
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
          this.newVideoRef.value =''
        })
        .catch(() => {
           alert('fail, new content cannot be saved')
        })
      })
    }else{
      alert('please insert image')
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

  editPackets(val, index){
    if(this.state.file) {
      this.props.updateImage(this.state.file)
      .then((dlurl) => {
        let date = this.state.DATE
        let detail = this.state.DETAIL
        let form = this.state.FORM
        let img = this.state.IMG
        let notification = this.state.NOTIFICATION
        let tags = this.state.TAGS
        let text = this.state.TEXT
        let tittle = this.state.TITTLE
        let video = this.state.VIDEO
        let url = this.state.URL
        let child = this.state.CHILD

        if(!date) date = _.values(this.props.packets)[index].DATE
        if(!detail) detail = _.values(this.props.packets)[index].DETAIL
        if(!form) form = _.values(this.props.packets)[index].FORM
        if(!img) img = dlurl
        if(!video) video = _.values(this.props.packets)[index].VIDEO
        if(!notification.LIKES) notification = _.values(this.props.packets)[index].NOTIFICATION
        if(!tags) tags = _.values(this.props.packets)[index].TAGS
        if(!text) text = _.values(this.props.packets)[index].TEXT
        if(!tittle) tittle = _.values(this.props.packets)[index].TITTLE
        if(!url) url = _.values(this.props.packets)[index].URL
        if(!child) child = _.values(this.props.packets)[index].CHILD

        const packets = {
          DATE : date,
          DETAIL : detail,
          FORM : form,
          IMG : img,
          NOTIFICATION : notification,
          TAGS : tags,
          TEXT : text,
          VIDEO : video,
          TITTLE : tittle,
          URL : url,
          CHILD : child
        }

        this.props.editPackets(`list/${index}`, packets)
        .then(() => {
           alert('success, content changed')
        })
        .catch(() => {
           alert('fail, content cannot be change')
        })
      })
    }else{
      let date = this.state.DATE
      let detail = this.state.DETAIL
      let form = this.state.FORM
      let img = this.state.IMG
      let notification = this.state.NOTIFICATION
      let tags = this.state.TAGS
      let text = this.state.TEXT
      let tittle = this.state.TITTLE
      let video = this.state.VIDEO
      let url = this.state.URL
      let child = this.state.CHILD

      if(!date) date = _.values(this.props.packets)[index].DATE
      if(!detail) detail = _.values(this.props.packets)[index].DETAIL
      if(!form) form = _.values(this.props.packets)[index].FORM
      if(!img) img = _.values(this.props.packets)[index].IMG
      if(!video) video = _.values(this.props.packets)[index].VIDEO
      if(!notification.LIKES) notification = _.values(this.props.packets)[index].NOTIFICATION
      if(!tags) tags = _.values(this.props.packets)[index].TAGS
      if(!text) text = _.values(this.props.packets)[index].TEXT
      if(!tittle) tittle = _.values(this.props.packets)[index].TITTLE
      if(!url) url = _.values(this.props.packets)[index].URL
      if(!child) child = _.values(this.props.packets)[index].CHILD

      const packets = {
        DATE : date,
        DETAIL : detail,
        FORM : form,
        IMG : img,
        NOTIFICATION : notification,
        TAGS : tags,
        TEXT : text,
        TITTLE : tittle,
        URL : url,
        VIDEO: video,
        CHILD : child
      }

      this.props.editPackets(`list/${index}`, packets)
      .then(() => {
         alert('success, content changed')
      })
      .catch(() => {
         alert('fail, content cannot be change')
      })
    }
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
    if(key == `tittle`){
      this.setState({
        TITTLE: val.target.value
      })
    }else if(key == `text`) {
      this.setState({
        TEXT: val.target.value
      })
    }else if(key == `detailtitle`) {
      this.setState({
        DETAIL : {
          TITTLE : val.target.value,
          TEXT : _.values(this.props.packets)[index].TEXT
        }
      })
    }else if(key == `video`) {
      this.setState({
        VIDEO: val.target.value
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
                _.values(this.props.packets).map((packet, index) => {
                  if(packet != null){
                    return(
                      <li key={index} role="presentation" className={ index == 0 ? 'active':''}>
                        <a href={`#tab_packet${index+1}`} role="tab" data-toggle="tab" aria-expanded={index == 0 ? 'true' : 'false'}>
                          {packet.TITTLE}
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
                      <div className="col-md-5 col-sm-5 col-xs-12">
                        <div>
                          <Dropzone style={ constant.draganddropstyle } multiple={ false } accept="image/*"  onDrop={ (e) => this.onDrop(e) }>
                            <div>{ this.state.filename }</div>
                          </Dropzone>
                        </div>
                      </div>

                      <div className="col-md-7 col-sm-7 col-xs-12">
                          <form className="form-horizontal form-label-left">

                          <div className="form-group">
                            <label className="control-label col-md-3 col-sm-3 col-xs-12">Tittle</label>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                              <input type="text" className="form-control" placeholder="Tittle" defaultValue={packet.TITTLE} onChange={(ref) => this.handleChange(ref, `tittle`)}/>
                            </div>
                          </div>

                          <div className="form-group">
                            <label className="control-label col-md-3 col-sm-3 col-xs-12">Text</label>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                              <textarea id="message" required="required" className="form-control" name="message" data-parsley-trigger="keyup" data-parsley-minlength="20" data-parsley-maxlength="100" data-parsley-minlength-message="Come on! You need to enter at least a 20 caracters long comment.."
                                data-parsley-validation-threshold="10" style={{height:"130px"}} defaultValue={packet.TEXT} onChange={(ref) => this.handleChange(ref, `text`)}></textarea>
                            </div>
                          </div>

                          <div className="form-group">
                            <label className="control-label col-md-3 col-sm-3 col-xs-12">Video embeded URL</label>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                              <input type="text" className="form-control" placeholder="<iframe .." defaultValue={packet.VIDEO} onChange={(ref) => this.handleChange(ref, `video`)}/>
                            </div>
                          </div>

                          <div className="form-group">
                            <label className="control-label col-md-3 col-sm-3 col-xs-12">Form</label>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                              <input type="text" className="form-control" placeholder="0-4" defaultValue={packet.FORM} onChange={(ref) => this.handleChange(ref, `form`)}/>
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
                                <input type="text" style={{width: "500px", height: "30px"}} defaultValue={packet.DETAIL.TITTLE} onChange={(ref) => this.handleChange(ref, `detailtitle`, index)}/>
                              </div>
                            </div>

                            <div className="form-group">
                              <label className="">News Text (20 chars min, 100 max) :</label>
                              <div className="">
                                <textarea id="message" required="required" className="form-control" name="message" data-parsley-trigger="keyup" data-parsley-minlength="20" data-parsley-maxlength="100" data-parsley-minlength-message="Come on! You need to enter at least a 20 caracters long comment.."
                                  data-parsley-validation-threshold="10" defaultValue={packet.DETAIL.TEXT} onChange={(ref) => this.handleChange(ref, `detailtext`, index)}></textarea>
                              </div>
                            </div>

                            <div className="form-group">
                              <div className="">
                                <button type="" className="btn btn-success" onClick={(val) => this.editPackets(val, index)}>Edit</button>
                                <button type="" className="btn btn-danger" onClick={(val) => this.deletePackets(val, index)}>Delete</button>
                              </div>
                            </div>
                        </div>
                      </div>

                      <ChildPackage childpackets={packet.CHILD} indexParent={index} editChild={this.props.editChild} addChild={this.props.addChild} deleteChild={this.props.deleteChild} updateImage={this.props.updateImage}/>
                    </div>
                  )
                  }
                })
              }
              <div role="tabpanel" className='tab-pane fade' id='tab_newpacket' aria-labelledby="home-tab">
                <div className="col-md-5 col-sm-5 col-xs-12">
                  <div>
                    <Dropzone style={ constant.draganddropstyle } multiple={ false } accept="image/*"  onDrop={ (e) => this.onDrop(e) }>
                      <div>{ this.state.filename }</div>
                    </Dropzone>
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
                      <label className="control-label col-md-3 col-sm-3 col-xs-12">Video embeded URL</label>
                      <div className="col-md-9 col-sm-9 col-xs-12">
                        <input type="text" className="form-control" placeholder="<iframe .." defaultValue='' ref={(ref) => this.newVideoRef = ref}/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-md-3 col-sm-3 col-xs-12">Form</label>
                      <div className="col-md-9 col-sm-9 col-xs-12">
                        <input type="text" className="form-control" placeholder="0-4" defaultValue='' onChange={(ref) => this.handleChange(ref, `form`)}/>
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

class ChildPackage extends React.Component {
  constructor(props,context){
    super(props)
    context.router
    this.state = {
      IMG : '',
      TEXT : '',
      TITLE : '',
      MYSLIDER: []
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
      console.log('juju on taht beat ',file)
      reader.readAsDataURL(file)
    }
  }

  onSliderDrop(e) {
    let img = new Image();
    let file = e;

    file.map((list, index) => {
      img.src = window.URL.createObjectURL( list)
      let h = this.state.height
      let w = this.state.width
      img.onload = () => {// REFACTORIN
        this.setState({
          naturalHeight: img.naturalHeight,
          naturalWidth: img.naturalWidth
        })
        handleImageChange()
      }

      let handleImageChange = () => {
        let reader = new FileReader();

        reader.onloadend = () => {
          this.setState({
            sliderFile: file
          });
        }
        reader.readAsDataURL(list)
      }
    })
  }

  addChild(val){
    val.preventDefault()
    let uri
    let chils = []
    if(this.state.file){
      this.props.updateImage(this.state.file)
      .then((url) => {
        uri = url
        return this.props.updateImage(this.state.sliderFile[0])
      })
      .then((sliderUrl) => {
        chils.push(sliderUrl)
        return this.props.updateImage(this.state.sliderFile[1])
      })
      .then((sliderUrl) => {
        chils.push(sliderUrl)
        const newchild = {
          TEXT : this.newChildTextDescRef.value,
          TITLE : this.newChildTitleDescRef.value,
          IMG: uri,
          SLIDER: chils
        }
        return newchild
      })
      .then((newchild) => {
        return this.props.addChild(this.props.indexParent, this.props.childpackets.list.length, newchild)
      })
      .then(() => {
        alert('success, new content saved')
        this.newChildTitleDescRef.value = ''
        this.newChildTextDescRef.value = ''
      })
      .catch((err) => {
         alert('fail, new content cannot be saved')
         alert(err)
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

        if(!text) text = this.props.childpackets.list[index].TEXT
        if(!title) title = this.props.childpackets.list[index].TITLE
        if(!img) img = dlurl

        const packets = {
          TEXT : text,
          TITLE : title,
          IMG: img
        }

        this.props.editChild(this.props.indexParent, `list/${index}`, packets)
        .then(() => {
           alert('success, child package content changed')
        })
        .catch(() => {
           alert('fail, child package content cannot be changed')
        })
      })
      .catch(() => {
        alert('err .. cannot upload image')
      })
    }else{
      let text = this.state.TEXT
      let title = this.state.TITLE
      let img = this.state.IMG

      if(!text) text = this.props.childpackets.list[index].TEXT
      if(!title) title = this.props.childpackets.list[index].TITLE
      if(!img) img = this.props.childpackets.list[index].IMG

      const packets = {
        TEXT : text,
        TITLE : title,
        IMG: img
      }

      this.props.editChild(this.props.indexParent, `list/${index}`, packets)
      .then(() => {
         alert('success, child package content changed')
      })
      .catch(() => {
         alert('fail, child package content cannot be changed')
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
    }else{
      this.setState({
        TEXT: val.target.value
      })
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
                          <Dropzone style={ constant.draganddropstyle } multiple={ false } accept="image/*"  onDrop={ (e) => this.onDrop(e) }>
                            <div>{ this.state.filename }</div>
                          </Dropzone>
                        </div>
                        <div className='x_panel col-md-6 col-sm-12 col-xs-12'>
                          <div className="form-group">
                            <label className="">Tittle</label>
                            <div className="">
                              <input type="text" style={{width: "500px", height: "30px"}} defaultValue={ packet.TITLE} onChange={(ref) => this.handleChange(ref, `title`)}/>
                            </div>
                          </div>

                          <div className="form-group">
                            <label className="">Text (20 chars min, 100 max) :</label>
                            <div className="">
                              <textarea id="message" required="required" className="form-control" name="message" data-parsley-trigger="keyup" data-parsley-minlength="20" data-parsley-maxlength="100" data-parsley-minlength-message="Come on! You need to enter at least a 20 caracters long comment.."
                                data-parsley-validation-threshold="10" defaultValue={ packet.TEXT} onChange={(ref) => this.handleChange(ref, `text`)}></textarea>
                            </div>
                          </div>

                          <div className="form-group">
                            <div className="">
                              <button type="" className="btn btn-success" onClick={(val) => this.editChild(val, index)}>Edit</button>
                              <button type="" className="btn btn-danger" onClick={(val) => this.deleteChild(val, index)}>Delete</button>
                            </div>
                          </div>

                        </div>
                      </div>
                    )
                  }
                })
              }
              <div role="tabpanel" className='tab-pane fade' id={`tab${this.props.indexParent}_newchild`} aria-labelledby="home-tab">
                <div className="x_panel col-md-6 col-sm-12 col-sm-12">
                  <div className="col-md-4 col-sm-12 col-sm-12">
                    CHILD IMAGE
                    <Dropzone style={ constant.draganddropstyle } multiple={ false } accept="image/*"  onDrop={ (e) => this.onDrop(e) }>
                      <div>{ this.state.filename }</div>
                    </Dropzone>
                  </div>
                  <div className="col-md-8 col-sm-12 col-sm-12">
                    <div className="col-md-4 col-sm-12 col-sm-12">
                      SLIDER
                      <Dropzone style={ constant.draganddropstyle } multiple={ true } accept="image/*"  onDrop={ (e) => this.onSliderDrop(e) }>
                        <div>{ this.state.slidername }</div>
                      </Dropzone>
                    </div>
                  </div>
                </div>

                <div className='x_panel col-md-6 col-sm-12 col-xs-12'>
                  <div className="form-group">
                    <label className="">Tittle</label>
                    <div className="">
                      <input type="text" style={{width: "500px", height: "30px"}} defaultValue='' ref={(ref) => this.newChildTitleDescRef = ref}/>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="">Text (20 chars min, 100 max) :</label>
                    <div className="">
                      <textarea id="message" required="required" className="form-control" name="message" data-parsley-trigger="keyup" data-parsley-minlength="20" data-parsley-maxlength="100" data-parsley-minlength-message="Come on! You need to enter at least a 20 caracters long comment.."
                        data-parsley-validation-threshold="10" defaultValue='' ref={(ref) => this.newChildTextDescRef = ref}></textarea>
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
    addPackets: (index, data) => addPackets(index, data),
    deletePackets: (index) => deletePackets(index),
    updateImage: (data) => updateImage(data),
    editChild: (indexParent, index, data) => editChild(indexParent, index, data),
    addChild: (indexParent, key, data) => addChild(indexParent, key, data),
    deleteChild: (indexParent, index) => deleteChild(indexParent, index)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trip)
