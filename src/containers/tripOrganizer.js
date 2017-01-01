import React, { PropTypes } from 'react'
import { Link } from 'react-router'
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
    super(props)
  }

  componentDidMount(){
      this.props.getContainer(this)
      this.props.getPackets(this)
  }

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
                  <Main trip={ this.props.packets } />
                  <Desc />
                </div>
              </div>

            </div>
          </div>

          <Footer footer={ this.props.footer } footer_component={ this.props.footer_component } />
        </div>
      </div>
    )
  }
 }

const Main = ({ trip }) => {
    return (
        <div className="col-md-12 col-sm-12">
            <div className="row">

                { trip.map((list, index) => (
                    <article className="col-md-3 col-sm-6 mid" key={index}>
                        <div className="img">
                            <img src="assets/img/mid.jpg" alt="post" />
                            <div className="overlay"></div>
                        </div>
                        <div className="info">
                            <p className="tags">

                                {list.TAGS.map((tag, index) => (
                                    <a key={ index } >{tag}</a>
                                ))}

                            </p>
                            <h1><Link to={ `${constant.routes_detail[1]}` }>{ list.TITTLE }</Link></h1>
                            <p className="details"> { list.DATE }</p>
                            <p className="text">
                                { list.TEXT }
                            </p>

                        </div>
                        <ul className="counters list-inline">
                            <li>
                                <a href=""><i className="fa fa-eye"></i> { list.NOTIFICATION.COMMENT } </a>
                            </li>
                            <li>
                                <a href=""><i className="fa fa-comment"></i> { list.NOTIFICATION.LIKES } </a>
                            </li>
                        </ul>
                    </article>
                ))}

            </div>
        </div>
    )
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
    return {
        footer: state.container.footer[0],
        footer_component: state.container.footer_component[0],
        main_menu: state.container.main_menu[0].list,
        packets: state.feature.packets[0].list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getContainer: (context) => dispatch(fetchContainer(context)),
        getPackets: (context) => dispatch(fetchFeature(context))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trip)
