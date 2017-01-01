import React, { PropTypes } from 'react'
import OwlCarousel from 'react-owl-carousel'
import { connect } from 'react-redux'

import * as constant from 'app_path/actions/const'
import Immutable from 'immutable'

import fetchContainer from 'app_path/actions/Container'
import fetchSocial from 'app_path/actions/Social'
import fetchAbout from 'app_path/actions/About'
import fetchFeature from 'app_path/actions/Feature'

//conmponents
import Header from 'components_path/Header'
import Sidebar from 'components_path/Sidebar'
import Main from 'components_path/Main'
import Slider from 'components_path/Slider'
import Footer from 'components_path/Footer'

class Index extends React.Component{

  constructor(props) {
    super(props)
  }

  componentWillMount(){
    this.props.getContainer(this)
    this.props.getSocial(this)
    this.props.getAbout(this)
    this.props.getFeature(this)
  }

  render(){
    return(
      <div className="main-container">
        <Header main_menu={ this.props.main_menu.list } />
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

          <Footer footer={ this.props.footer } footer_component={ this.props.footer_component }/>
        </div>
      </div>
    )
  }
 }

const mapStateToProps = (state) => {
    return {
      footer: state.container.footer[0],
      footer_component: state.container.footer_component[0],
      main_menu: state.container.main_menu[0]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getContainer: (context) => dispatch(fetchContainer(context)),
      getSocial: (context) => dispatch(fetchSocial(context)),
      getAbout: (context) => dispatch(fetchAbout(context)),
      getFeature: (context) => dispatch(fetchFeature(context))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
