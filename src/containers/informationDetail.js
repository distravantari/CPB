import React, { PropTypes } from 'react'
import OwlCarousel from 'react-owl-carousel'
import { connect } from 'react-redux'

import fetchFeature from 'app_path/actions/Feature'
import fetchContainer from 'app_path/actions/Container'
import * as constant from 'app_path/actions/const'
import Immutable from 'immutable'

//conmponents
import Header from 'components_path/Header'
import Slider from 'components_path/Slider'
import Footer from 'components_path/Footer'

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
      <div className="main-container">
        <Header main_menu={ this.props.main_menu } />
        <div className="container">
           
          <div>
            <div className="main">
              
              <div>
                <div className="row">
                  <Slider />
                </div>
                <div className="row">
                  { desc() }
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

const desc = () => {
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
    return {
        footer: state.container.footer[0],
        footer_component: state.container.footer_component[0],
        main_menu: state.container.main_menu[0].list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getContainer: (context) => dispatch(fetchContainer(context))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trip)
