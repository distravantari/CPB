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
    return(
      <div>
        <div className="main">

          <div>
            <div className="row">

            </div>
            <div className="row">
              <Desc />
            </div>
            <div className="row">
              <Form />
            </div>
          </div>

        </div>
      </div>
    )
  }
 }

const Desc = () => {
    return (
        <div className="info col-md-offset-1 col-md-10">
            <h1>{ constant.description.TITTLE }</h1>

            <div className="text">
                <p>{ constant.description.TEXT }</p>
            </div>
        </div>
    )
}

const Form = () => {
    return(
        <div className="col-md-offset-1 col-md-10 form">
            <div className="form-group">
                <h5>Tell us about your ideal event, we want to hear from you!</h5>
                <p>Please contact us and fill the form for more information or with any help or advice that you may need.</p>
                <p>We will assist you in designing your event in Bali. Please fill in this event brief form.</p>
            </div>
            <br/>
            <form className="form-div">
                <h5>COMPANY DETAILS</h5>
                <div className="form-section">
                    <div className="form-group">
                        <label for="name">Name :</label>
                        <input type="text" className="form-control" id="name" required/>
                    </div>
                    <div className="form-group">
                        <label for="comp-name">Company Name :</label>
                        <input type="text" className="form-control" id="comp-name" required/>
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
                <h5>EVENT DETAILS</h5>
                <div className="form-section">
                    <div className="form-group">
                        <label for="event-start">Starts from :</label>
                        <input type="text" className="form-control" id="event-start" required/>
                    </div>
                    <div className="form-group">
                        <label for="event-end">Ends :</label>
                        <input type="text" className="form-control" id="event-end" required/>
                    </div>
                    <div className="form-group">
                        <label for="phone">Event Type :</label>
                        <input type="number" className="form-control" id="phone" required/>
                    </div>
                    <div className="form-group">
                        <label for="email">Guest Gender of Attendees :</label>
                        <input type="email" className="form-control" id="email" required/>
                    </div>
                    <div className="form-group">
                        <label for="email">Age Profile of Attendees :</label>
                        <input type="email" className="form-control" id="email" required/>
                        <label>pax</label>
                    </div>
                    <div className="form-group">
                        <label for="email">Special characteristics of Attendees :</label>
                        <input type="email" className="form-control" id="email" required/>
                    </div>
                    <div className="form-group">
                        <label for="email">Number of Attendees :</label>
                        <input type="email" className="form-control" id="email" required/>
                    </div>
                    <div className="form-group">
                        <label for="email">Managerial Level of Attendees :</label>
                        <input type="email" className="form-control" id="email" required/>
                    </div>
                    <div className="form-group">
                        <label for="email">Theme :</label>
                        <input type="email" className="form-control" id="email" required/>
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
                                <li>5</li>
                                <li>4</li>
                                <li>3</li>
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
                            <label for="name">Bedding type :</label>
                            <input type="text" className="form-control" id="name" required/>
                        </div>
                        <div className="form-group">
                            <label for="comp-name">Hotel Area or Desirable Atmosphere :</label>
                            <input type="text" className="form-control" id="comp-name" required/>
                        </div>
                        <div className="form-group">
                            <label for="phone">Hotel Facility :</label>
                            <input type="number" className="form-control" id="phone" required/>
                        </div>
                        <div className="form-group">
                            <label for="email">Others :</label>
                            <input type="email" className="form-control" id="email" required/>
                        </div>
                    </div>    
                </div>
                <br/>
                <div className="form-group">
                    <label for="name">MEETING/SEMINAR :</label>
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
                    <label for="comp-name">OUTING :</label>
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
                    <label for="phone">TOURS :</label>
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
                    <label for="email">TRANSPORTATION :</label>
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
                    <label for="email">EVENT :</label>
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
                    <label for="email">Talent or Entertainment Need :</label>
                    <div className="checkbox">
                        <label><input type="checkbox" value=""/>Home Band</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" value=""/>Keyboardist + Singer</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" value=""/>Popular Band</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" value=""/>Opening Dance</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" value=""/>Traditional Dance</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" value=""/>Modern/Contemporary Dance</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" value=""/>DJ</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" value=""/>MC</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" value=""/>Ushers</label>
                    </div>
                </div>
                <div className="form-group">
                    <p for="comp-name">Others :</p>
                    <input type="text" className="form-control" id="comp-name" required/>
                </div>
                <div className="form-group">
                    <label for="email">Technical Support Need :</label>
                    <div className="checkbox">
                        <label><input type="checkbox" value=""/>Sound System</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" value=""/>Lighting System</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" value=""/>LED Backdrop</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" value=""/>3D Backdrop</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" value=""/>Projector (standard)</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" value=""/>LCD/Plasma TV</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" value=""/>Photography</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" value=""/>Videography</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" value=""/>Digital Printing Backdrop</label>
                    </div>
                </div>
                <div className="form-group">
                    <p for="comp-name">Others :</p>
                    <input type="text" className="form-control" id="comp-name" required/>
                </div>
                <div className="form-group">
                    <label for="email">Indicative Budget :</label>
                    <input type="email" className="form-control" id="email" required/>
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
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Trip)
