import React, { PropTypes } from 'react'
import OwlCarousel from 'react-owl-carousel'
import { connect } from 'react-redux'
import Form from 'components_path/Form'
import { Link } from 'react-router'
// import DatePicker from 'react-datepicker'
// import moment from 'moment'


//redux
import fetchFeature from 'app_path/actions/Feature'

//constanta
import * as constant from 'app_path/actions/const'
import Immutable from 'immutable'

//conmponents
import Slider from 'components_path/Slider'

class Trip extends React.Component{
  static get contextTypes() {
    return {
      router: PropTypes.object.isRequired,
    }
  }

  constructor(props, context){
    super(props)
    context.router

  }

  componentDidMount(){}

  componentWillReceiveProps(){
    this.setState({})
  }

//   handeDate(date) {
//       this.setState({
//           startDate: date
//       })
//   }

  render(){
    let hal = 'kosong'
    if(this.props.location.search.split('&')[1]){
      hal = this.props.location.search.split('&')[1]
    }
    let detail = this.props.routes[1].path.split("-")[0]
    let index = this.props.location.search.split('?')[1].split('&')[0]
    return(
      <div>
        <div className="main">
          <div>
            <div className="row">
              <Desc hal={ hal } context={ this.context } detail={ detail } trip={ this.props.trip.list[index] } voucher={ this.props.voucher.list[index] } />
            </div>
          </div>
        </div>
      </div>
    )
  }
 }

const Video = ({ video }) => {
  if(video) {
    return(
      <div className="text-center video">
        <iframe src= { video } width="640" height="360" frameborder="0" allowfullscreen></iframe>
      </div>
    )
  }
  else {
    return(
      <div></div>
    )
  }
}

const Desc = ({ detail, voucher, trip, context, hal }) => {
    if((detail == "/Trip") && (hal=="kosong")){
      const url = trip.URL
      return (
          <div>
            <div className="post-slider col-md-12 col-sm-12">
              <div className="controls">
                <p className="prev"><i className="fa fa-angle-left"></i></p>
                <p className="next"><i className="fa fa-angle-right"></i></p>
              </div>
              <div className="slides">
                {trip.CHILD.list && trip.CHILD.list.map((list, index) => (
                    <article className="big clearfix" key={ index }>
                      <img src={ list.SLIDER[0] } alt="post1" />
                    </article>
                ))}
              </div>
            </div>
            <div className="info col-md-offset-1 col-md-10">
                <h1>{ trip.TITLE }</h1>

                <div className="text">
                    <p>{ trip.DESCRIPTION }</p>
                </div>
            </div>
            <Video video={ trip.VIDEO }/>
            <div className="row">
              <div className="wrapper">
                {trip.CHILD.list.map((list, index) => (
                  <article className="col-md-3 col-sm-6 mid" key={index}>
                        <div className="img">
                            <img src={ list.IMG } alt="post" />
                            <div className="overlay"></div>
                        </div>
                        <div className="info">
                            <h1 className="click-able" onClick={ () => context.router.push(`${url}&${index}`) }>{ list.TITLE }</h1>
                            <p className="text">
                                { list.TEXT }
                            </p>
                        </div>
                    </article>
                ))}
              </div>
            </div>
            <div className="row">
                <Form index={ trip.FORM } />
            </div>
          </div>
      )
    }
    else if(detail == "/Voucher"){
      return (
          <div className="info col-md-offset-1 col-md-10">
              <Video video={ voucher.VIDEO }/>
              <h1>{ voucher.TITLE }</h1>
              <div className="text">
                  <p>{ voucher.DESCRIPTION }</p>
              </div>
              <div className="text">
                <p>Please contact us or check our instagram for latest promo <a href={ voucher.INSTAGRAM }>{ voucher.INSTAGRAM }</a></p>
              </div>
          </div>
      )
    }
    else {
      return(
        <div>
            <div className="post-slider col-md-12 col-sm-12">
              <div className="controls">
                <p className="prev"><i className="fa fa-angle-left"></i></p>
                <p className="next"><i className="fa fa-angle-right"></i></p>
              </div>
              <div className="slides">
                {
                  (trip.CHILD.list[hal]) ? (trip.CHILD.list[hal].SLIDER.map((slider, index) => (
                    <article className="big clearfix" key={ index }>
                      <img src={ slider } alt="post1" />
                    </article>
                ))) : <div> no content founds </div>
                }
              </div>
            </div>
            <div className="info col-md-offset-1 col-md-10">
                <h1>{ trip.CHILD.list[hal].TITLE }</h1>
                <div className="text">
                    <p>{ trip.CHILD.list[hal].DESCRIPTION }</p>
                </div>
            </div>
          </div>
      )
    }
}

const mapStateToProps = (state) => {
    return {
      trip: state.feature.packets[0],
      voucher: state.feature.vouchers[0]
    }
}

export default connect(mapStateToProps)(Trip)
