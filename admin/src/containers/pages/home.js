import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import Dropzone from 'react-dropzone'

import fetchFeature, { editSlider, addSlider, editVouchers, addVouchers, addNews, editNews, deleteVouchers, deleteNews, deleteSlider } from '../../actions/Feature'
import fetchSocial, { editSocial } from '../../actions/Social'
import { updateImage } from '../../actions/UploadImage'

import * as constant from '../../actions/const'

class Home extends React.Component{

  constructor(props){
    super(props)
    this.state = {}
  }

  componentWillMount(){
    this.props.getFeature(this)
    this.props.getSocial(this)
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
              <h3>Home Page</h3>
            </div>
          </div>

          <div className="clearfix"></div>

          <div className="row">
            <News news = {this.props.news} editNews={this.props.editNews} addNews={this.props.addNews} deleteNews={this.props.deleteNews}/>
            <Slider slider = {this.props.slider} editSlider = {this.props.editSlider} addSlider = {this.props.addSlider} updateImage={ this.props.updateImage } deleteSlider={this.props.deleteSlider}/>
            <Social social = {this.props.social} editSocial={this.props.editSocial} />
            <Voucher vouchers = {this.props.vouchers} editVouchers={this.props.editVouchers} addVouchers={this.props.addVouchers} updateImage={ this.props.updateImage} deleteVoucher={this.props.deleteVouchers}/>
          </div>
        </div>
      </div>
    )
  }
}

class News extends React.Component {
  constructor(props, context){
    super(props)
    context.router
    this.state = {
      TEXT : '',
    }
  }

  editNews(val, index){
    val.preventDefault()
    let text = this.state.TEXT

    if(!text) text = _.values(this.props.vouchers)[index].TEXT

    const news = {
      IMPORTANT : text,
    }

    this.props.editNews(`list/${index}`, news)
    .then(() => {
       alert('success, changed content saved')
    })
    .catch(() => {
       alert('fail, changed content cannot be saved')
    })
  }

  addNews(val){
    val.preventDefault()
    const newNews = {
      IMPORTANT : this.newTextRef.value,
    }

    this.props.addNews(this.props.news.length, newNews)
    .then(() => {
      alert('success, new content saved')
      this.newTextRef.value = ''
    })
    .catch(() => {
       alert('fail, new content cannot be saved')
    })
  }

  deleteNews(val, index){
    val.preventDefault()
    this.props.deleteNews(index)
    .then(() => {
      alert('successfully delete news')
    })
    .catch(() => {
       alert('fail, cannot delete news')
    })
  }

  handleChange(val, key){
    val.preventDefault()
    if(key == `text`){
      this.setState({
        TEXT: val.target.value
      })
    }else {
      this.setState({
        TITTLE: val.target.value
      })
    }
  }

  render(){
    return(
      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="x_panel">
          <div className="x_title">
            <h2>NEWS</h2>
            <div className="clearfix"></div>
          </div>
          <div className="x_content">
            <div id="alerts"></div>

            <div className="" role="tabpanel" data-example-id="togglable-tabs">
              <ul id="myTab" className="nav nav-tabs bar_tabs" role="tablist">
                { _.values(this.props.news).map((news, index) => (
                      <li key={index} role="presentation" className={ index == 0 ? 'active':''}>
                        <a href={`#tab_news${index+1}`} role="tab" data-toggle="tab" aria-expanded={index == 0 ? 'true' : 'false'}>
                          {`News${index+1}`}
                        </a>
                      </li>
                  ))
                }
                <li role="presentation" className=''>
                  <a href='#tab_newnews' role="tab" data-toggle="tab" aria-expanded='false'><span className='fa fa-plus'></span></a>
                </li>
              </ul>

              <div id="myTabContent" className="tab-content">
                {
                  _.values(this.props.news).map((news, index) => {
                    return (
                      <div key={index} role="tabpanel" className={index == 0 ? 'tab-pane fade active in':'tab-pane fade'} id={`tab_news${index+1}`} aria-labelledby="home-tab">

                        <div className="col-md-7 col-sm-7 col-xs-12">
                          <form className="form-horizontal form-label-left">

                            <div className="form-group">
                              <div className="col-md-9 col-sm-9 col-xs-12">
                                <textarea id="message" required="required" className="form-control" name="message" data-parsley-trigger="keyup" data-parsley-minlength="20" data-parsley-maxlength="100"
                                  data-parsley-validation-threshold="10" style={{height:"130px"}} defaultValue={_.values(this.props.news)[index].IMPORTANT} onChange={(ref) => this.handleChange(ref, `text`)}></textarea>
                              </div>
                            </div>

                            <div className="form-group">
                              <div className="col-md-9 col-sm-9 col-xs-12">
                                <button type="submit" className="btn btn-success"onClick={(val) => this.editNews(val, index)}>Edit</button>
                                <button type="" className="btn btn-danger" onClick={(val) => this.deleteNews(val, index)}>Delete</button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    )
                  })
                }
                <div role="tabpanel" className='tab-pane fade' id='tab_newnews' aria-labelledby="home-tab">

                  <div className="col-md-7 col-sm-7 col-xs-12">
                    <form className="form-horizontal form-label-left">

                      <div className="form-group">
                        <div className="col-md-9 col-sm-9 col-xs-12">
                          <textarea id="message" required="required" className="form-control" name="message" data-parsley-trigger="keyup" data-parsley-minlength="20" data-parsley-maxlength="100"
                            data-parsley-validation-threshold="10" style={{height:"130px"}} defaultValue='' ref={(ref) => this.newTextRef = ref} ></textarea>
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="col-md-9 col-sm-9 col-xs-12">
                          <button type="" className="btn btn-primary" onClick={(val) => this.addNews(val)}>Add</button>
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

class Slider extends React.Component {
  constructor(props, context){
    super(props)
    context.router
    this.state = {
      IMG : '',
      INFO : '',
      TITLE : '',
      TYPE : '',
      DESTINATION: '',
      INDEX: '',
      URL : '',
      filename : []
    }
  }

  addSlider(val){
    val.preventDefault()
    if(!this.state.file){
      alert('please insert image')
    }else{
      this.props.updateImage(this.state.file)
      .then((dlurl) => {
        const newslider = {
          TITLE : this.newTitleRef.value,
          INFO : this.newInfoRef.value,
          IMG : dlurl,
          TYPE : this.newTypeRef.value,
          URL : this.newUrlRef.value,
          INDEX : this.newIndexRef.value
        }

        return this.props.addSlider(this.props.slider.length, newslider)
      })
      .then(() => {
        alert('success, new content saved')
        this.newTitleRef.value = ''
        this.newInfoRef.value = ''
        this.newTypeRef.value =''
        this.newIndexRef.value = ''
        this.newUrlRef.value = ''
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

  editSlider(val, index){
    val.preventDefault()
    if(!this.state.file){
      let title = this.state.TITLE
      let info = this.state.INFO
      let type = this.state.TYPE
      let destination = this.state.URL
      let indexing = this.state.INDEX
      let img = this.state.IMG

      if(!title) title = _.values(this.props.slider)[index].TITLE
      if(!info) info = _.values(this.props.slider)[index].INFO
      if(!type) type = _.values(this.props.slider)[index].TYPE
      if(!img) img = _.values(this.props.slider)[index].IMG
      if(!destination) destination = _.values(this.props.slider)[index].URL
      if(!indexing) indexing = _.values(this.props.slider)[index].INDEX

      const slider = {
        TITLE: title,
        INFO: info,
        TYPE: type,
        URL: destination,
        INDEX: indexing,
        IMG: img
      }

      this.props.editSlider(`${index}`, slider)
      .then(() => {
         alert('success, changed content saved ')
      })
      .catch((err) => {
         alert('fail, changed content cannot be saved '+err)
      })
    }else{
      this.props.updateImage(this.state.file)
      .then((dlurl) => {

        let tittle = this.state.TITLE
        let info = this.state.INFO
        let type = this.state.TYPE
        let destination = this.state.URL
        let indexing = this.state.INDEX
        let img = this.state.IMG

        if(!tittle) tittle = _.values(this.props.slider)[index].TITLE
        if(!info) info = _.values(this.props.slider)[index].INFO
        if(!type) type = _.values(this.props.slider)[index].TYPE
        if(!img) img = dlurl
        if(!destination) destination = _.values(this.props.slider)[index].URL
        if(!indexing) indexing = _.values(this.props.slider)[index].INDEX

        const slider = {
          TITLE: title,
          INFO: info,
          TYPE: type,
          URL: destination,
          INDEX: indexing,
          IMG: img
        }

        return this.props.editSlider(`list/${index}`, slider)
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
      .catch((err) => {
         alert('fail, changed content cannot be saved '+err)
      })
    }
  }

  handleChange(val, key, index) {
    val.preventDefault();
    if(key == `tittle`){
      this.setState({
        TITLE: val.target.value
      })
    }else if(key == `info`) {
      this.setState({
        INFO: val.target.value
      })
    }else if(key == `type`) {
      this.setState({
        TYPE: val.target.value
      })
    }else if(key ==`destination`){
      this.setState({
        DESTINATION: val.target.value
      })
    }else{
      this.setState({
        INDEX: val.target.value
      })
    }

  }

  deleteSlider(val, index){
    val.preventDefault()
    console.log("index ", index);
    this.props.deleteSlider(index)
    .then(() => {
      alert('successfully delete slider')
    })
    .catch(() => {
      alert('err, cannot delete slider')
    })
  }

  render(){
    return(
      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="x_panel">
          <div className="x_title">
            <h2>Home Slider</h2>

            <div className="clearfix"></div>
          </div>

          <div className="x_content">
            <div id="alerts"></div>

            <ul id="myTab" className="nav nav-tabs bar_tabs" role="tablist">
              {
                _.values(this.props.slider).map((slider, index) => {
                  return (
                    <li key={index} role="presentation" className={ index == 0 ? 'active':''}>
                      <a href={`#tab_slider${index+1}`} role="tab" data-toggle="tab" aria-expanded={index == 0 ? 'true' : 'false'}>
                        {`Slider${index+1}`}
                      </a>
                    </li>
                  )
                })
              }
              <li role="presentation" className=''>
                <a href='#tab_newslider' role='tab' data-toggle="tab" aria-expanded='false'><span className='fa fa-plus'></span></a>
              </li>
            </ul>

            <div id="myTabContent" className="tab-content">
              {
                _.values(this.props.slider).map((slider, index) => {
                  return (
                    <div key={index} role="tabpanel" className={index == 0 ? 'tab-pane fade active in':'tab-pane fade'} id={`tab_slider${index+1}`} aria-labelledby="home-tab">

                      <div className="col-md-5 col-sm-5 col-xs-12">
                        <div>
                          <Dropzone style={ constant.draganddropstyle } multiple={ false } accept="image/*"  onDrop={ (e) => this.onDrop(e) }>
                            <div>{ this.state.filename }</div>
                          </Dropzone>
                          image size: 470 x 220
                        </div>
                      </div>

                     <div className="col-md-7 col-sm-7 col-xs-12">

                        <div className="form-group">
                          <label className="control-label col-md-3 col-sm-3 col-xs-12">Title</label>
                          <div className="col-md-9 col-sm-9 col-xs-12">
                            <input type="text" className="form-control" placeholder="Tittle" defaultValue={_.values(this.props.slider)[`${index}`].TITLE} onChange={(ref) => this.handleChange(ref, `tittle`)}/>
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="control-label col-md-3 col-sm-3 col-xs-12">Info</label>
                          <div className="col-md-9 col-sm-9 col-xs-12">
                            <input type="text" className="form-control" placeholder="Info" defaultValue={_.values(this.props.slider)[`${index}`].INFO} onChange={(ref) => this.handleChange(ref, `info`)}/>
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="control-label col-md-3 col-sm-3 col-xs-12">Type</label>
                          <div className="col-md-9 col-sm-9 col-xs-12">
                            <input type="text" className="form-control" placeholder="Create" defaultValue={_.values(this.props.slider)[`${index}`].TYPE} onChange={(ref) => this.handleChange(ref, `type`)}/>
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="control-label col-md-3 col-sm-3 col-xs-12">Destination</label>
                          <div className="col-md-9 col-sm-9 col-xs-12">
                            <input type="text" className="form-control" placeholder="Date" defaultValue={_.values(this.props.slider)[`${index}`].URL} onChange={(ref) => this.handleChange(ref, `destination`)}/>
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="control-label col-md-3 col-sm-3 col-xs-12">Index</label>
                          <div className="col-md-9 col-sm-9 col-xs-12">
                            <input type="text" className="form-control" placeholder="Index" defaultValue={_.values(this.props.slider)[`${index}`].INDEX} onChange={(ref) => this.handleChange(ref, `index`)}/>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
                            <br />
                            <button type="" className="btn btn-success" onClick={(val) => this.editSlider(val, index)}>Edit</button>
                            <button type="" className="btn btn-danger" onClick={(val) => this.deleteSlider(val, index)}>Delete</button>
                          </div>
                        </div>
                     </div>

                    </div>
                  )
                })
              }
              <div role="tabpanel" className='tab-pane fade' id='tab_newslider' aria-labelledby="home-tab">

                <div className="col-md-5 col-sm-5 col-xs-12">
                  <div>
                    <Dropzone style={ constant.draganddropstyle } multiple={ false } accept="image/*"  onDrop={ (e) => this.onDrop(e) }>
                      <div>{ this.state.filename }</div>
                    </Dropzone>
                    image size: 470 x 220
                  </div>
                </div>

               <div className="col-md-7 col-sm-7 col-xs-12">
                  <form className="form-horizontal form-label-left">

                  <div className="form-group">
                    <label className="control-label col-md-3 col-sm-3 col-xs-12">Title</label>
                    <div className="col-md-9 col-sm-9 col-xs-12">
                      <input type="text" className="form-control" placeholder="Title" defaultValue='' ref={(ref) => this.newTitleRef = ref}/>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="control-label col-md-3 col-sm-3 col-xs-12">Info</label>
                    <div className="col-md-9 col-sm-9 col-xs-12">
                      <input type="text" className="form-control" placeholder="Info" defaultValue='' ref={(ref) => this.newInfoRef = ref}/>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="control-label col-md-3 col-sm-3 col-xs-12">Type</label>
                    <div className="col-md-9 col-sm-9 col-xs-12">
                      <input type="text" className="form-control" placeholder="Type" defaultValue='' ref={(ref) => this.newTypeRef = ref}/>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="control-label col-md-3 col-sm-3 col-xs-12">Destination</label>
                    <div className="col-md-9 col-sm-9 col-xs-12">
                      <input type="text" className="form-control" placeholder="URL" defaultValue='' ref={(ref) => this.newUrlRef = ref}/>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="control-label col-md-3 col-sm-3 col-xs-12">Index</label>
                    <div className="col-md-9 col-sm-9 col-xs-12">
                      <input type="text" className="form-control" placeholder="Index" defaultValue='' ref={(ref) => this.newIndexRef = ref}/>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
                      <button type="" className="btn btn-primary" onClick={(val) => this.addSlider(val)}>Add</button>
                    </div>
                  </div>

                </form>
               </div>

              </div>
            </div>

          </div>
        </div>
      </div>
  )
  }
}

class Social extends React.Component {
  constructor(props, context){
    super(props)
    context.router
  }

  editSocial(val){
    val.preventDefault()

    const social = {
      facebook : {
        ICON : "https://firebasestorage.googleapis.com/v0/b/balizee-e308b.appspot.com/o/facebook_.jpg?alt=media&token=1cfef65e-293c-4562-8fc6-84a124468976",
        URL : this.facebookRef.value
      },
      // instagram : {
      //   URL : this.instagramRef.value
      // },
      twitter : {
        USERNAME : this.twitterUserNameRef.value,
        TITLE: "Latest tweets",
        LINK : this.twitterLinkRef.value
      },
      maps : {
        latitude : this.props.social.maps.latitude,
        longitude : this.props.social.maps.longitude,
        location : this.props.social.maps.location,
        url : this.props.social.maps.url
      }
    }

    this.props.editSocial(social)
    .then(() => {
       alert('success, changed content saved')
    })
    .catch(() => {
       alert('fail, changed content cannot be saved')
    })
  }

  render(){
    return(
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="x_panel">
            <div className="x_title">
              <h2>Social</h2>
              <div className="clearfix"></div>
            </div>

            <div className="x_content">
              <div id="alerts"></div>

             <div className="col-md-7 col-sm-7 col-xs-12">
                <form className="form-horizontal form-label-left" onSubmit={(val) => this.editSocial(val)}>

                <div className="form-group">
                  <label className="control-label col-md-3 col-sm-3 col-xs-12">Facebook URL</label>
                  <div className="col-md-9 col-sm-9 col-xs-12">
                    <input type="text" className="form-control" placeholder="URL" defaultValue={this.props.social.facebook.URL} ref={(ref) => this.facebookRef = ref}/>
                  </div>
                </div>

                {/* <div className="form-group">
                  <label className="control-label col-md-3 col-sm-3 col-xs-12">Instagram URL</label>
                  <div className="col-md-9 col-sm-9 col-xs-12">
                    <input type="text" className="form-control" placeholder="URL" defaultValue={this.props.social.instagram.URL} ref={(ref) => this.instagramRef = ref}/>
                  </div>
                </div> */}

                <div className="form-group">
                  <label className="control-label col-md-3 col-sm-3 col-xs-12">Twitter Username</label>
                  <div className="col-md-9 col-sm-9 col-xs-12">
                    <input type="text" className="form-control" placeholder="Tittle" defaultValue={this.props.social.twitter.USERNAME} ref={(ref) => this.twitterUserNameRef = ref}/>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label col-md-3 col-sm-3 col-xs-12">Twitter URL</label>
                  <div className="col-md-9 col-sm-9 col-xs-12">
                    <input type="text" className="form-control" placeholder="URL" defaultValue={this.props.social.twitter.LINK} ref={(ref) => this.twitterLinkRef = ref}/>
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
                    <input className="btn btn-success" type="submit" name="submit" />
                  </div>
                </div>

              </form>
             </div>
            </div>
          </div>
        </div>
    )
  }
}

class Voucher extends React.Component {
  constructor(props, context){
    super(props)
    context.router
    this.state = {
      IMG : '',
      TEXT : '',
      TITLE : '',
      INSTAGRAM: '',
      URL : '',
      filename : [],
      DESCRIPTION: ''
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

  editVouchers(val, index){
    val.preventDefault()
    if(this.state.file){
      this.props.updateImage(this.state.file)
      .then((dlurl) => {
        let img = this.state.IMG
        let text = this.state.TEXT
        let tittle = this.state.TITLE
        let url = this.state.URL
        let instagram = this.state.INSTAGRAM
        let description = this.state.DESCRIPTION

        if(!img) img = dlurl
        if(!text) text = _.values(this.props.vouchers)[index].TEXT
        if(!tittle) tittle = _.values(this.props.vouchers)[index].TITLE
        if(!url) url = _.values(this.props.vouchers)[index].URL
        if(!instagram) instagram = _.values(this.props.vouchers)[index].INSTAGRAM
        if(!description) description = _.values(this.props.vouchers)[index].DESCRIPTION

        const vouchers = {
          IMG : img,
          TEXT : text,
          TITLE : tittle,
          URL : url,
          INSTAGRAM: instagram,
          DESCRIPTION: description
        }

        this.props.editVouchers(`list/${index}`, vouchers)
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
      })
    }else{
      let text = this.state.TEXT
      let img = this.state.IMG
      let tittle = this.state.TITLE
      let url = this.state.URL
      let instagram = this.state.INSTAGRAM
      let description = this.state.DESCRIPTION

      if(!text) text = _.values(this.props.vouchers)[index].TEXT
      if(!img) img = _.values(this.props.vouchers)[index].IMG
      if(!tittle) tittle = _.values(this.props.vouchers)[index].TITLE
      if(!url) url = _.values(this.props.vouchers)[index].URL
      if(!instagram) instagram = _.values(this.props.vouchers)[index].INSTAGRAM
      if(!description) description = _.values(this.props.vouchers)[index].DESCRIPTION

      const vouchers = {
        TEXT : text,
        IMG : img,
        TITLE : tittle,
        URL : url,
        INSTAGRAM: instagram,
        DESCRIPTION: description
      }

      this.props.editVouchers(`list/${index}`, vouchers)
      .then(() => {
         alert('success, changed content saved')
      })
      .catch(() => {
         alert('fail, changed content cannot be saved')
      })
    }
  }

  addVouchers(val){
    val.preventDefault()
    if(this.state.file) {
      this.props.updateImage(this.state.file)
      .then((dlurl) => {
        const newvoucher = {
          IMG : dlurl,
          TEXT : this.newTextRef.value,
          TITLE : this.newTitleRef.value,
          INSTAGRAM : this.newInstagramRef.value,
          URL : this.newUrlRef.value,
          DESCRIPTION : this.newDescriptionRef.value,
        }

        return this.props.addVouchers(this.props.vouchers.length, newvoucher)
      })
      .then(() => {
        alert('success, new content saved')
        this.newTitleRef.value = ''
        this.newTextRef.value = ''
        this.newInstagramRef.value = ''
        this.newUrlRef.value = ''
        this.newDescriptionRef.value = ''
        // set file state to default value
        this.setState({
          filename: '',
          file: '',
          imagePreviewUrl: ''
        })
      })
      .catch(() => {
         alert('fail, new content cannot be saved')
      })
    }else{
      alert('please insert image')
    }
  }

  handleChange(val, key){
    val.preventDefault()
    if(key == `text`){
      this.setState({
        TEXT: val.target.value
      })
    }else if(key == `title`) {
      this.setState({
        TITLE: val.target.value
      })
    }else if(key == `description`) {
      this.setState({
        DESCRIPTION: val.target.value
      })
    }else{
      this.setState({
        INSTAGRAM: val.target.value
      })
    }
  }

  deleteVouchers(val, index){
    val.preventDefault()
    this.props.deleteVoucher(index)
    .then(() => {
      alert('successfully delete voucher')
    })
    .catch(() => {
      alert('err, cannot delete voucher')
    })
  }

  render(){
    return(
      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="x_panel">
          <div className="x_title">
            <h2>Voucher</h2>
            <div className="clearfix"></div>
          </div>
          <div className="x_content">
            <div id="alerts"></div>

            <div className="" role="tabpanel" data-example-id="togglable-tabs">
              <ul id="myTab" className="nav nav-tabs bar_tabs" role="tablist">
                { _.values(this.props.vouchers).map((voucher, index) => (
                      <li key={index} role="presentation" className={ index == 0 ? 'active':''}>
                        <a href={`#tab_voucher${index+1}`} role="tab" data-toggle="tab" aria-expanded={index == 0 ? 'true' : 'false'}>
                          {`Voucher${index+1}`}
                        </a>
                      </li>
                  ))
                }
                <li role="presentation" className=''>
                  <a href='#tab_newvoucher' role="tab" data-toggle="tab" aria-expanded='false'><span className='fa fa-plus'></span></a>
                </li>
              </ul>

              <div id="myTabContent" className="tab-content">
                {
                 _.values(this.props.vouchers).map((voucher, index) => {
                    if(this.props.vouchers[index]) return (
                      <div key={index} role="tabpanel" className={index == 0 ? 'tab-pane fade active in':'tab-pane fade'} id={`tab_voucher${index+1}`} aria-labelledby="home-tab">
                        <div className="col-md-5 col-sm-5 col-xs-12">
                          <div>
                            <Dropzone style={ constant.draganddropstyle } multiple={ false } accept="image/*"  onDrop={ (e) => this.onDrop(e) }>
                              <div>{ this.state.filename }</div>
                            </Dropzone>
                            image size: 470 x 220
                          </div>
                        </div>

                        <div className="col-md-7 col-sm-7 col-xs-12">
                          <form className="form-horizontal form-label-left">
                            <div className="form-group">
                              <label className="control-label col-md-3 col-sm-3 col-xs-12">Title</label>
                              <div className="col-md-9 col-sm-9 col-xs-12">
                                <input type="text" className="form-control" placeholder="Title" defaultValue={_.values(this.props.vouchers)[index].TITLE} onChange={(ref) => this.handleChange(ref, `title`)}/>
                              </div>
                            </div>

                            <div className="form-group">
                              <label className="control-label col-md-3 col-sm-3 col-xs-12">Text</label>
                              <div className="col-md-9 col-sm-9 col-xs-12">
                                <textarea id="message" required="required" className="form-control" name="message" data-parsley-trigger="keyup" data-parsley-minlength="20" data-parsley-maxlength="100" data-parsley-minlength-message="Come on! You need to enter at least a 20 caracters long comment.."
                                  data-parsley-validation-threshold="10" style={{height:"130px"}} defaultValue={_.values(this.props.vouchers)[index].TEXT} onChange={(ref) => this.handleChange(ref, `text`)}></textarea>
                              </div>
                            </div>

                            <div className="form-group">
                              <label className="control-label col-md-3 col-sm-3 col-xs-12">Instagram</label>
                              <div className="col-md-9 col-sm-9 col-xs-12">
                                <input type="text" className="form-control" placeholder="Instagram link" defaultValue={_.values(this.props.vouchers)[index].INSTAGRAM} onChange={(ref) => this.handleChange(ref, `instagram`)}/>
                              </div>
                            </div>

                            <div className="form-group">
                              <label className="control-label col-md-3 col-sm-3 col-xs-12">URL</label>
                              <div className="col-md-9 col-sm-9 col-xs-12">
                                <input type="text" className="form-control" placeholder="Voucher URL" defaultValue={_.values(this.props.vouchers)[index].URL} onChange={(ref) => this.handleChange(ref, `url`)}/>
                              </div>
                            </div>

                            <div className="form-group">
                              <label className="control-label col-md-3 col-sm-3 col-xs-12">Description</label>
                              <div className="col-md-9 col-sm-9 col-xs-12">
                                <textarea type="text" className="form-control" placeholder="Voucher Description" defaultValue={_.values(this.props.vouchers)[index].DESCRIPTION} onChange={(ref) => this.handleChange(ref, `description`)}/>
                              </div>
                            </div>

                            <div className="form-group">
                              <div className="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
                                <button type="submit" className="btn btn-success" onClick={(val) => this.editVouchers(val, index)}>Edit</button>
                                <button type="" className="btn btn-danger" onClick={(val) => this.deleteVouchers(val, index)}>Delete</button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    )
                  })
                }
                <div role="tabpanel" className='tab-pane fade' id='tab_newvoucher' aria-labelledby="home-tab">
                  <div className="col-md-5 col-sm-5 col-xs-12">
                    <div>
                      <Dropzone style={ constant.draganddropstyle } multiple={ false } accept="image/*"  onDrop={ (e) => this.onDrop(e) }>
                        <div>{ this.state.filename }</div>
                      </Dropzone>
                      image size: 470 x 220
                    </div>
                  </div>

                  <div className="col-md-7 col-sm-7 col-xs-12">
                    <form className="form-horizontal form-label-left">
                      <div className="form-group">
                        <label className="control-label col-md-3 col-sm-3 col-xs-12">Tittle</label>
                        <div className="col-md-9 col-sm-9 col-xs-12">
                          <input type="text" className="form-control" placeholder="Tittle" defaultValue='' ref={(ref) => this.newTitleRef = ref} />
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="control-label col-md-3 col-sm-3 col-xs-12">Text</label>
                        <div className="col-md-9 col-sm-9 col-xs-12">
                          <textarea id="message" required="required" className="form-control" name="message" data-parsley-trigger="keyup" data-parsley-minlength="20" data-parsley-maxlength="100" data-parsley-minlength-message="Come on! You need to enter at least a 20 caracters long comment.."
                            data-parsley-validation-threshold="10" style={{height:"130px"}} defaultValue='' ref={(ref) => this.newTextRef = ref} ></textarea>
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="control-label col-md-3 col-sm-3 col-xs-12">Instagram</label>
                        <div className="col-md-9 col-sm-9 col-xs-12">
                          <input type="text" className="form-control" placeholder="Tittle" defaultValue='' ref={(ref) => this.newInstagramRef = ref} />
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="control-label col-md-3 col-sm-3 col-xs-12">URL</label>
                        <div className="col-md-9 col-sm-9 col-xs-12">
                          <input type="text" className="form-control" placeholder="Voucher URL" defaultValue='' ref={(ref) => this.newUrlRef = ref}/>
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="control-label col-md-3 col-sm-3 col-xs-12">Description</label>
                        <div className="col-md-9 col-sm-9 col-xs-12">
                          <textarea type="text" className="form-control" placeholder="Voucher Description" defaultValue='' ref={(ref) => this.newDescriptionRef = ref} />
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
                          <button type="" className="btn btn-primary" onClick={(val) => this.addVouchers(val)}>Add</button>
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

const mapsStateToProps = (state) => {
  if(state.feature){
    return{
      slider : state.feature.slider.home,
      social : state.social,
      vouchers : state.feature.vouchers.list,
      news : state.feature.news.list
    }
  }else return{}
}

const mapsDispatchToProps = (dispatch) => {
  return{
    getFeature: (context) => dispatch(fetchFeature(context)),
    getSocial: (context) => dispatch(fetchSocial(context)),
    editSocial: (data) => editSocial(data),
    editSlider: (key, data) => editSlider(key, data),
    addSlider: (index, data) => addSlider(index, data),
    editVouchers: (key, data) => editVouchers(key, data),
    addVouchers: (index, data) => addVouchers(index, data),
    editNews: (key, data) => editNews(key, data),
    addNews: (index, data) => addNews(index, data),
    updateImage: (data) => updateImage(data),
    deleteSlider: (index) => deleteSlider(index),
    deleteNews: (index) => deleteNews(index),
    deleteVouchers: (index) => deleteVouchers(index)
  }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(Home)
