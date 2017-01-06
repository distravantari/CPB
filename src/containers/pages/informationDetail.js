import React, { PropTypes } from 'react'
import OwlCarousel from 'react-owl-carousel'
import { connect } from 'react-redux'

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
    this.state = {}
  }

  componentDidMount(){}

  componentWillReceiveProps(){
    this.setState({})
  }

  render(){
    return(
      <div>
        <div className="main">
          
          <div>
            <div className="row">
              <Slider />
            </div>
            <div className="row">
              <Desc />
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

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Trip)
