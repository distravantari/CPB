import React from 'react'
import {connect} from 'react-redux'

import fetchFeature from '../../actions/Feature'
import fetchSocial from '../../actions/Social'

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

          <div className="row">
            <Slider slider = {this.props.slider}/>
            <Social social = {this.props.social}/>
            <Voucher vouchers = {this.props.vouchers}/>
          </div>
        </div>
      </div>
    )
  }
}

const News = () => {
  return(
      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="x_panel">
          <div className="x_title">
            <h2>News <small>Click to validate</small></h2>
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

            <form id="demo-form" data-parsley-validate>

              <label for="heard">IMPORTANT Message</label>
              <select id="heard" className="form-control" required>
                <option value="">Choose..</option>
                <option value="press">HOT!</option>
                <option value="net">CLICK HERE!</option>
                <option value="mouth">CHECK THIS OUT</option>
              </select>

              <label for="message">News Text (20 chars min, 100 max) :</label>
              <textarea id="message" required="required" className="form-control" name="message" data-parsley-trigger="keyup" data-parsley-minlength="20" data-parsley-maxlength="100" data-parsley-minlength-message="Come on! You need to enter at least a 20 caracters long comment.."
                data-parsley-validation-threshold="10"></textarea>

              <br/>
              <button type="submit" className="btn btn-success">Edit</button>
              <span className="btn btn-primary">Add</span>

            </form>
          </div>
        </div>
      </div>
  )
}

const Slider = ({slider}) => {
  return(
      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="x_panel">
          <div className="x_title">
            <h2>Slider</h2>
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

            <div className="col-md-5 col-sm-5 col-xs-12">
              <div>
                <form action="#" className="dropzone"></form>
                image size: 470 x 220
              </div>
            </div>

           <div className="col-md-7 col-sm-7 col-xs-12">
              <form className="form-horizontal form-label-left">

              <div className="form-group">
                <label className="control-label col-md-3 col-sm-3 col-xs-12">Tittle</label>
                <div className="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" className="form-control" placeholder="Tittle" value={slider[0].TITTLE} />
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-md-3 col-sm-3 col-xs-12">Info</label>
                <div className="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" className="form-control" placeholder="Info" value={slider[0].INFO} />
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-md-3 col-sm-3 col-xs-12">Create</label>
                <div className="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" className="form-control" placeholder="Create" value={slider[0].CREATE} />
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-md-3 col-sm-3 col-xs-12">Date</label>
                <div className="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" className="form-control" placeholder="Date" value={slider[0].DATE} />
                </div>
              </div>

              <div className="control-group">
                <label className="control-label col-md-3 col-sm-3 col-xs-12">Type</label>
                <div className="col-md-9 col-sm-9 col-xs-12">
                  <input id="tags_1" type="text" className="tags form-control" value="social, adverts, sales" />
                  <div id="suggestions-container" style={{position: "relative", float: "left", width: "250px", margin: "10px"}}></div>
                </div>
              </div>

              <div className="form-group">
                <div className="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
                  <button type="submit" className="btn btn-success">Edit</button>
                  <span className="btn btn-primary">Add</span>
                </div>
              </div>

            </form>
           </div>
          </div>
        </div>
      </div>
  )
}

const Social = ({social}) => {
  return(
      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="x_panel">
          <div className="x_title">
            <h2>Social</h2>
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

           <div className="col-md-7 col-sm-7 col-xs-12">
              <form className="form-horizontal form-label-left">

              <div className="form-group">
                <label className="control-label col-md-3 col-sm-3 col-xs-12">Facebook URL</label>
                <div className="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" className="form-control" placeholder="URL" value={social.facebook[0].URL}/>
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-md-3 col-sm-3 col-xs-12">Instagram URL</label>
                <div className="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" className="form-control" placeholder="URL" value={social.instagram[0].URL}/>
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-md-3 col-sm-3 col-xs-12">Twitter Tittle</label>
                <div className="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" className="form-control" placeholder="Tittle" value={social.twitter[0].TITTLE}/>
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-md-3 col-sm-3 col-xs-12">Twitter Limmit</label>
                <div className="col-md-9 col-sm-9 col-xs-12">
                  <input type="number" className="form-control" placeholder="Limmit" value={social.twitter[0].LIMIT}/>
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-md-3 col-sm-3 col-xs-12">Twitter URL</label>
                <div className="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" className="form-control" placeholder="URL" value={social.twitter[0].LINK}/>
                </div>
              </div>

              <div className="form-group">
                <div className="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
                  <button type="submit" className="btn btn-success">Edit</button>
                </div>
              </div>

            </form>
           </div>
          </div>
        </div>
      </div>
  )
}

const Voucher = ({vouchers}) => {
  return(
      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="x_panel">
          <div className="x_title">
            <h2>Voucher</h2>
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

            <div className="col-md-5 col-sm-5 col-xs-12">
              <div>
                <form action="#" className="dropzone"></form>
                image size: 270 x 280
              </div>
            </div>

           <div className="col-md-7 col-sm-7 col-xs-12">
              <form className="form-horizontal form-label-left">

              <div className="form-group">
                <label className="control-label col-md-3 col-sm-3 col-xs-12">Tittle</label>
                <div className="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" className="form-control" placeholder="Tittle" value={vouchers[0].TITTLE}/>
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-md-3 col-sm-3 col-xs-12">Info</label>
                <div className="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" className="form-control" placeholder="Info"/>
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-md-3 col-sm-3 col-xs-12">Create</label>
                <div className="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" className="form-control" placeholder="Create" value={vouchers[0].CREATEDBY}/>
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-md-3 col-sm-3 col-xs-12">Date</label>
                <div className="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" className="form-control" placeholder="Date" value={vouchers[0].DATE}/>
                </div>
              </div>

              <div className="control-group">
                <label className="control-label col-md-3 col-sm-3 col-xs-12">Type</label>
                <div className="col-md-9 col-sm-9 col-xs-12">
                  <input id="tags_1" type="text" className="tags form-control" value="social, adverts, sales" />
                  <div id="suggestions-container" style={{position: "relative", float: "left", width: "250px", margin: "10px"}}></div>
                </div>
              </div>

              <div className="form-group">
                <div className="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
                  <button type="submit" className="btn btn-success">Edit</button>
                  <span className="btn btn-primary">Add</span>
                </div>
              </div>

            </form>
           </div>

          </div>
        </div>
      </div>
  )
}

const mapStateToProps = (state) => {
  if(state.feature){
    console.log('jkjl', state.feature.vouchers[0].list)
    return{
      slider : state.feature.slider[0].big.list,
      social : state.social,
      vouchers : state.feature.vouchers[0].list
    }
  }else return{}
}

const mapDispatchToProps = (dispatch) => {
  return{
    getFeature: (context) => dispatch(fetchFeature(context)),
    getSocial: (context) => dispatch(fetchSocial(context))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
