import React, { PropTypes } from 'react'
import OwlCarousel from 'react-owl-carousel'
import { connect } from 'react-redux'
import Form from 'components_path/Form'
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

  constructor(props) {
    super(props);
    // this.state = {
    //     startDate: moment()
    // }
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
    let detail = this.props.routes[1].path.split("-")[0]
    console.log('props ',this.props)
    let index = this.props.location.search.split('?')[1]
    console.log('index dexxxxx',index)
    let form = new Form()
    return(
      <div>
        <div className="main">

          <div>
            <div className="row">

            </div>
            <div className="row">
              <Desc detail={ detail } trip={ this.props.trip.list[index].DETAIL } voucher={ this.props.voucher.list[index].DETAIL } />
            </div>
            <div className="row">
                <Form index={ this.props.trip.list[index].FORM } />
            </div>
          </div>

        </div>
      </div>
    )
  }
 }

const Desc = ({ detail, voucher, trip }) => {
    if(detail == "/Trip"){
      console.log(trip)
      return (
          <div className="info col-md-offset-1 col-md-10">
              <h1>{ trip.TITTLE }</h1>

              <div className="text">
                  <p>{ trip.TEXT }</p>
              </div>
          </div>
      )
    }else{
      console.log(voucher)
      return (
          <div className="info col-md-offset-1 col-md-10">
              <h1>{ voucher.TITTLE }</h1>

              <div className="text">
                  <p>{ voucher.TEXT }</p>
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
