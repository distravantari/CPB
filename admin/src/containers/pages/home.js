import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import Dropzone from 'react-dropzone'

import fetchFeature, { editSlider, addSlider, editVouchers, addVouchers, addNews, editNews } from '../../actions/Feature'
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
            <News news = {this.props.news} editNews={this.props.editNews} addNews={this.props.addNews} />
            <Slider slider = {this.props.slider} editSlider = {this.props.editSlider} addSlider = {this.props.addSlider} updateImage={ this.props.updateImage } />
            <Social social = {this.props.social} editSocial={this.props.editSocial} />
            <Voucher vouchers = {this.props.vouchers} editVouchers={this.props.editVouchers} addVouchers={this.props.addVouchers} updateImage={ this.props.updateImage} />
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
      COMMENT : '',
      CREATE : '',
      DATE : '',
      IMG : '',
      INFO : '',
      LIKE : '',
      TITTLE : '',
      TYPE : '',
      URL : '',
      filename : []
    }
  }

  addSlider(val){
    val.preventDefault()
    this.props.updateImage(this.state.file)
    .then((dlurl) => {
      const newslider = {
        TITTLE : this.newTitleRef.value,
        INFO : this.newInfoRef.value,
        CREATE : this.newCreateRef.value,
        DATE : this.newDateRef.value,
        COMMENT : '',
        IMG : dlurl,
        LIKE : '',
        TYPE : this.newTypeRef.value,
        URL : ''
      }

      this.props.addSlider(this.props.slider.length, newslider)
      .then(() => {
        alert('success, new content saved')
        this.newTitleRef.value = ''
        this.newInfoRef.value = ''
        this.newCreateRef.value = ''
        this.newDateRef.value =''
        this.newTypeRef.value =''
      })
      .catch(() => {
         alert('fail, new content cannot be saved')
      })
    })
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
    this.props.updateImage(this.state.file)
    .then((dlurl) => {
      let comment = this.state.COMMENT
      let create = this.state.CREATE
      let date = this.state.DATE
      let img = this.state.IMG
      let info = this.state.INFO
      let like = this.state.LIKE
      let tittle = this.state.TITTLE
      let type = this.state.TYPE
      let url = this.state.URL

      if(!comment) comment = _.values(this.props.slider)[index].COMMENT
      if(!create) create = _.values(this.props.slider)[index].CREATE
      if(!date) date = _.values(this.props.slider)[index].DATE
      if(!img) img = dlurl
      if(!info) info = _.values(this.props.slider)[index].INFO
      if(!like) like = _.values(this.props.slider)[index].LIKE
      if(!tittle) tittle = _.values(this.props.slider)[index].TITTLE
      if(!type) type = _.values(this.props.slider)[index].TYPE
      if(!url) url = _.values(this.props.slider)[index].URL

      const slider = {
        COMMENT : comment,
        CREATE : create,
        DATE : date,
        IMG : img,
        INFO : info,
        LIKE : like,
        TITTLE : tittle,
        TYPE : type,
        URL : url
      }

      this.props.editSlider(`big/list/${index}`, slider)
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
    if(key == `tittle`){
      this.setState({
        TITTLE: val.target.value
      })
    }else if(key == `info`) {
      this.setState({
        INFO: val.target.value
      })
    }else if(key == `create`) {
      this.setState({
        CREATE: val.target.value
      })
    }else if(key ==`date`){
      this.setState({
        DATE: val.target.value
      })
    }else{
      this.setState({
        TYPE: val.target.value
      })
    }

  }

  render(){
    return(
      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="x_panel">
          <div className="x_title">
            <h2>Slider</h2>

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
                          <label className="control-label col-md-3 col-sm-3 col-xs-12">Tittle</label>
                          <div className="col-md-9 col-sm-9 col-xs-12">
                            <input type="text" className="form-control" placeholder="Tittle" defaultValue={_.values(this.props.slider)[`${index}`].TITTLE} onChange={(ref) => this.handleChange(ref, `tittle`)}/>
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="control-label col-md-3 col-sm-3 col-xs-12">Info</label>
                          <div className="col-md-9 col-sm-9 col-xs-12">
                            <input type="text" className="form-control" placeholder="Info" defaultValue={_.values(this.props.slider)[`${index}`].INFO} onChange={(ref) => this.handleChange(ref, `info`)}/>
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="control-label col-md-3 col-sm-3 col-xs-12">Create</label>
                          <div className="col-md-9 col-sm-9 col-xs-12">
                            <input type="text" className="form-control" placeholder="Create" defaultValue={_.values(this.props.slider)[`${index}`].CREATE} onChange={(ref) => this.handleChange(ref, `create`)}/>
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="control-label col-md-3 col-sm-3 col-xs-12">Date</label>
                          <div className="col-md-9 col-sm-9 col-xs-12">
                            <input type="text" className="form-control" placeholder="Date" defaultValue={_.values(this.props.slider)[`${index}`].DATE} onChange={(ref) => this.handleChange(ref, `date`)}/>
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="control-label col-md-3 col-sm-3 col-xs-12">Type</label>
                          <div className="col-md-9 col-sm-9 col-xs-12">
                            <input type="text" className="form-control" placeholder="Type" defaultValue={_.values(this.props.slider)[`${index}`].TYPE} onChange={(ref) => this.handleChange(ref, `type`)}/>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
                            <button type="" className="btn btn-success" onClick={(val) => this.editSlider(val, index)}>Edit</button>
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
                    <label className="control-label col-md-3 col-sm-3 col-xs-12">Tittle</label>
                    <div className="col-md-9 col-sm-9 col-xs-12">
                      <input type="text" className="form-control" placeholder="Tittle" defaultValue='' ref={(ref) => this.newTitleRef = ref}/>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="control-label col-md-3 col-sm-3 col-xs-12">Info</label>
                    <div className="col-md-9 col-sm-9 col-xs-12">
                      <input type="text" className="form-control" placeholder="Info" defaultValue='' ref={(ref) => this.newInfoRef = ref}/>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="control-label col-md-3 col-sm-3 col-xs-12">Create</label>
                    <div className="col-md-9 col-sm-9 col-xs-12">
                      <input type="text" className="form-control" placeholder="Create" defaultValue='' ref={(ref) => this.newCreateRef = ref}/>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="control-label col-md-3 col-sm-3 col-xs-12">Date</label>
                    <div className="col-md-9 col-sm-9 col-xs-12">
                      <input type="text" className="form-control" placeholder="Date" defaultValue='' ref={(ref) => this.newDateRef = ref}/>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="control-label col-md-3 col-sm-3 col-xs-12">Type</label>
                    <div className="col-md-9 col-sm-9 col-xs-12">
                      <input type="text" className="form-control" placeholder="Type" defaultValue='' ref={(ref) => this.newTypeRef = ref}/>
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
    const social = {
      facebook : {
        ICON : "https://firebasestorage.googleapis.com/v0/b/balizee-e308b.appspot.com/o/facebook_.jpg?alt=media&token=1cfef65e-293c-4562-8fc6-84a124468976",
        URL : this.facebookRef.value
      },
      instagram : {
        URL : this.instagramRef.value
      },
      twitter : {
        DATA_CHROME : "noheader nofooter noscrollbar",
        LANG : "EN",
        LINK_COLOR : "#f1284e",
        WIDGET_ID : "400278156189237248",
        TITTLE : this.twitterTitleRef.value,
        LIMIT : this.twitterLimitRef.value,
        LINK : this.twitterLinkRef.value
      },
      maps : {
        latitude : this.props.social.maps[0].latitude,
        longitude : this.props.social.maps[0].longitude,
        location : this.props.social.maps[0].location,
        url : this.props.social.maps[0].url
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
                    <input type="text" className="form-control" placeholder="URL" defaultValue={this.props.social.facebook[0].URL} ref={(ref) => this.facebookRef = ref}/>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label col-md-3 col-sm-3 col-xs-12">Instagram URL</label>
                  <div className="col-md-9 col-sm-9 col-xs-12">
                    <input type="text" className="form-control" placeholder="URL" defaultValue={this.props.social.instagram[0].URL} ref={(ref) => this.instagramRef = ref}/>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label col-md-3 col-sm-3 col-xs-12">Twitter Tittle</label>
                  <div className="col-md-9 col-sm-9 col-xs-12">
                    <input type="text" className="form-control" placeholder="Tittle" defaultValue={this.props.social.twitter[0].TITTLE} ref={(ref) => this.twitterTitleRef = ref}/>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label col-md-3 col-sm-3 col-xs-12">Twitter Limmit</label>
                  <div className="col-md-9 col-sm-9 col-xs-12">
                    <input type="number" className="form-control" placeholder="Limmit" defaultValue={this.props.social.twitter[0].LIMIT} ref={(ref) => this.twitterLimitRef = ref}/>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label col-md-3 col-sm-3 col-xs-12">Twitter URL</label>
                  <div className="col-md-9 col-sm-9 col-xs-12">
                    <input type="text" className="form-control" placeholder="URL" defaultValue={this.props.social.twitter[0].LINK} ref={(ref) => this.twitterLinkRef = ref}/>
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
      CREATEDBY : '',
      DATE : '',
      IMG : '',
      TEXT : '',
      TITTLE : '',
      URL : '',
      filename : []
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
    this.props.updateImage(this.state.file)
    .then((dlurl) => {
      let createdby = this.state.CREATEDBY
      let date = this.state.DATE
      let img = this.state.IMG
      let text = this.state.TEXT
      let tittle = this.state.TITTLE
      let url = this.state.URL

      if(!createdby) createdby = _.values(this.props.vouchers)[index].CREATEDBY
      if(!date) date = _.values(this.props.vouchers)[index].DATE
      if(!img) img = dlurl
      if(!text) text = _.values(this.props.vouchers)[index].TEXT
      if(!tittle) tittle = _.values(this.props.vouchers)[index].TITTLE
      if(!url) url = _.values(this.props.vouchers)[index].URL

      const vouchers = {
        CREATEDBY : createdby,
        DATE : date,
        IMG : img,
        TEXT : text,
        TITTLE : tittle,
        URL : url
      }

      this.props.editVouchers(`list/${index}`, vouchers)
      .then(() => {
         alert('success, changed content saved')
      })
      .catch(() => {
         alert('fail, changed content cannot be saved')
      })
    })
  }

  addVouchers(val){
    val.preventDefault()
    this.props.updateImage(this.state.file)
    .then((dlurl) => {
      const newvoucher = {
        CREATEDBY : '',
        DATE : '',
        IMG : dlurl,
        TEXT : this.newTextRef.value,
        TITTLE : this.newTitleRef.value,
        URL : ''
      }

      this.props.addVouchers(this.props.vouchers.length, newvoucher)
      .then(() => {
        alert('success, new content saved')
        this.newTitleRef.value = ''
        this.newTextRef.value = ''
      })
      .catch(() => {
         alert('fail, new content cannot be saved')
      })
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
                    return (
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
                              <label className="control-label col-md-3 col-sm-3 col-xs-12">Tittle</label>
                              <div className="col-md-9 col-sm-9 col-xs-12">
                                <input type="text" className="form-control" placeholder="Tittle" defaultValue={_.values(this.props.vouchers)[index].TITTLE} onChange={(ref) => this.handleChange(ref, `tittle`)}/>
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
                              <div className="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
                                <button type="submit" className="btn btn-success"onClick={(val) => this.editVouchers(val, index)}>Edit</button>
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
      slider : state.feature.slider[0].big.list,
      social : state.social,
      vouchers : state.feature.vouchers[0].list,
      news : state.feature.news[0].list
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
    updateImage: (data) => updateImage(data)
  }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(Home)
