import React, { PropTypes } from 'react'
import OwlCarousel from 'react-owl-carousel'
import { connect } from 'react-redux'

//constanta
import * as constant from 'app_path/actions/const'
import Immutable from 'immutable'

//conmponents
import Sidebar from 'components_path/Sidebar'
import Main from 'components_path/Main'
import Slider from 'components_path/Slider'

class Index extends React.Component{

  constructor(props) {
    super(props)
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
              <Main /> 
              <Sidebar />
            </div>
          </div>

        </div>
      </div>
    )
  }
 }

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
