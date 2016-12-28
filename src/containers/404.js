import React, { PropTypes } from 'react'
import OwlCarousel from 'react-owl-carousel'
import { connect } from 'react-redux'

import * as constant from 'app_path/actions/const'
import fetchFeature from 'app_path/actions/Feature'
import fetchContainer from 'app_path/actions/Container'
import Immutable from 'immutable'

//conmponents
import Header from 'components_path/Header'
import Footer from 'components_path/Footer'

class Index extends React.Component{

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
      <div className="main-container">
        <Header />
        <div className="container">
           
          <div>
            <div className="main">
              
              <div>
                <div className="row">
                  { Main() }
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

const Main = () => {
    return (
      <div className="main-404 clearfix">
        <img src="assets/img/404.jpg" alt="404" />
        <div className="info-404">
          <h1>
            <span>404.</span><br/>
            <small> { constant.errorpage.TITLE } </small>
          </h1>
          <p>
            { constant.errorpage.MESSAGE }
          </p>
        </div>
      </div>
    )
}

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
