import React, { PropTypes } from 'react'
import OwlCarousel from 'react-owl-carousel'
import { connect } from 'react-redux'
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
    console.log('index ',index)
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
              <Form0 />
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

const Form0 = () => {
    return(
        <div className="col-md-offset-1 col-md-10 form">
            <div className="form-group">
                <h5>Tell us about your dream luxury stays, we want to hear from you!</h5>
                <p>Please contact us and fill the form for more information or with any help or advice that you may need.</p>
                <p>We will assist you in designing your vacation Bali. Please fill in this event brief form.</p>
            </div>
            <br/>
            <form className="form-div">
                <div className="form-section">
                    <div className="form-group">
                        <label for="name">Name :</label>
                        <input type="text" className="form-control" id="name" required/>
                    </div>
                    <div className="form-group">
                        <label for="name">Nationality :</label>
                        <input type="text" className="form-control" id="name" required/>
                    </div>
                    <div className="form-group">
                        <label for="phone">Telephone :</label>
                        <input type="number" className="form-control" id="phone" required/>
                    </div>
                    <div className="form-group">
                        <label for="email">E-mail :</label>
                        <input type="email" className="form-control" id="email" required/>
                    </div>
                </div>
                <br/>
                <h5>TRIP DETAILS</h5>
                <div className="form-section">
                    <div className="form-group">
                        <label for="event-start">Starts from :</label>
                        <input type="text" className="form-control" id="event-start" required/>
                    </div>
                    <div className="form-group">
                        <label for="event-end">Ends :</label>
                        <input type="text" className="form-control" id="event-end" required/>
                    </div>
                    <div className="checkbox-inline">
                        <label><input type="checkbox" value=""/>Still Tentative</label>
                    </div>
                    <div className="form-group">
                        <label for="phone">Number of Rooms :</label>
                        <input type="number" className="form-control" id="phone" required/>
                    </div>
                </div>
                <br/>
                <h5>ACCOMMODATION</h5>
                <div className="form-section">
                    <div className="form-group">
                        <label for="name">Venue/Hotel :</label>
                        <div className="dropdown">
                            <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Stars
                            <span className="caret"></span></button>
                            <ul className="dropdown-menu">
                                <li>Apartment</li>
                                <li>Bungalow</li>
                                <li>Guest House</li>
                                <li>5</li>
                                <li>4</li>
                                <li>3</li>
                                <li>2</li>
                            </ul>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="comp-name">Number of Adult :</label>
                        <input type="text" className="form-control" id="comp-name" required/>
                    </div>
                    <div className="form-group">
                        <label for="phone">Number of Kids (if there are any) : </label>
                        <input type="number" className="form-control" id="phone" required/>
                    </div>
                    <div className="form-group">
                        <label for="email">Estimation accommodation budget (per-night, per-room) :</label>
                        <input type="email" className="form-control" id="email" required/>
                    </div>
                    <h5>REQUEST :</h5>
                    <div className="form-section">
                        <div className="form-group">
                            <label for="comp-name">Hotel Area :</label>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Amed</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Candidasa</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Canggu area</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Canggu Beach</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Jimbaran</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Karangasem</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Kerobokan</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Kids/Family Friendly</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Kuta area</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Kuta Beach</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Legian Area</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Legian Beach</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Lembongan</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Lovina Beach</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Lovina</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Menjangan</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Near The Beach</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Nusadua Beach</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Petitenget</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Seminyak Beach</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Seminyak</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Tabanan</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Tanjung Benoa</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Sanur Beach</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Sanur Area</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Sinaraja</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Tuban</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Tulamben</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Ubud</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Uluwatu</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Ungasan</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="phone">Hotel Preference :</label>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Beachfront</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Business facilities</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Golf Course</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Kids/Family Friendly</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Near The Beach</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Near Mountain</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Near Restaurant</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Heart of the City</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Tranquil Area</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Near Nightclub</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="comp-name">Hotel Facility :</label>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Family Room</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Fitness Centre</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Pool</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Private Pool</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>WIFI</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Non-smoking room</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Smoking room</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Spa & Wellness Center</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Restaurant</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="email">Others :</label>
                            <input type="email" className="form-control" id="email" required/>
                        </div>
                    </div>    
                </div>
                <br/>
                <div className="form-group">
                    <label for="name">TRANPORTATION :</label>
                    <div className="checkbox-inline">
                        <label><input type="checkbox" value=""/>Yes</label>
                    </div>
                    <div className="checkbox-inline">
                        <label><input type="checkbox" value=""/>No</label>
                    </div>
                </div>
                <div className="form-group">
                    <p for="comp-name">Details :</p>
                    <input type="text" className="form-control" id="comp-name" required/>
                </div>
                <div className="form-group">
                    <label for="email">Special Remarks :</label>
                    <input type="email" className="form-control" id="email" required/>
                </div>
                <br/>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      trip: state.feature.packets[0],
      voucher: state.feature.vouchers[0]
    }
}

export default connect(mapStateToProps)(Trip)
