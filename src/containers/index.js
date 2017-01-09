import React, { PropTypes } from 'react'
import OwlCarousel from 'react-owl-carousel'
import { connect } from 'react-redux'

//constanta
import * as constant from 'app_path/actions/const'
import Immutable from 'immutable'

//redux
import fetchContainer from 'app_path/actions/Container'

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

  renderSlider(){
    $('.post-slider .slides').bxSlider({
		  speed: 300,
		  touchEnabled: true,
		  pager: false,
		  infiniteLoop: true,
		  nextSelector: ".post-slider .controls .next",
		  prevSelector: ".post-slider .controls .prev",
		  fadeText: true,
		  auto: true,
		  pause: 4000
		});
  }

  componentWillMount(){
    this.props.getContainer(this)
  }

  render(){
    if(!this.props.main_menu) return (<h1> Loading ... </h1>)
    return(
      <div className="main-container">
        <Header main_menu={ this.props.main_menu.list } logo={ this.props.logo }/>
        <div className="container">
           
          { this.props.children }

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
      main_menu: state.container.main_menu[0],
      logo: state.container.logo[0]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getContainer: (context) => dispatch(fetchContainer(context))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
