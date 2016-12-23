import React, { PropTypes } from 'react'
import { fetchToken } from "app_path/actions/authentication"
import OwlCarousel from 'react-owl-carousel'
import { connect } from 'react-redux'
import * as constant from 'app_path/actions/const'
import Immutable from 'immutable'

//conmponents
import Header from 'components_path/Header'
import Sidebar from 'components_path/Sidebar'
import Main from 'components_path/Main'
import Slider from 'components_path/Slider'
import Footer from 'components_path/Footer'

class Index extends React.Component{

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount(){}

  componentWillReceiveProps(){
    this.setState({
      
    })
  }

  render(){
    return(
      <div className="main-container">
        <Header />
        <div className="container">
           
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

          <Footer />
        </div>
      </div>
    )
  }
 }

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
