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
    console.log('NANCY  ',this.props.voucher)
    return(
      <div>
        <div className="main">
          <div>
            <div className="row">
              <Desc detail={ detail } trip={ this.props.trip.list[index] } voucher={ this.props.voucher.list[index] } />
            </div>  
          </div>
        </div>
      </div>
    )
  }
 }  

const Desc = ({ detail, voucher, trip }) => {
  console.log('hah ',trip)
    if(detail == "/Trip"){
      return (
          <div>
            <div className="info col-md-offset-1 col-md-10">
                <h1>{ trip.DETAIL.TITTLE }</h1>

                <div className="text">
                    <p>{ trip.DETAIL.TEXT }</p>
                </div>
            </div>
            <div className="row">
              <div className="wrapper">
                {trip.CHILD.list.map((list, index) => (
                    <article className="col-md-3 col-sm-6 mid" key={index}>
                          <div className="img">
                              <img src={ list.IMG } alt="post" />
                              <div className="overlay"></div>
                          </div>
                          <div className="info">
                              <h1><Link to={ `${list.URL}` }>{ list.TITLE }</Link></h1>
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
    }else{
      console.log("voucher",voucher)
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
