import React, { PropTypes } from 'react'
import { fetchToken } from "app_path/actions/authentication"
import OwlCarousel from 'react-owl-carousel'
import { connect } from 'react-redux'
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
        <Header />
        <div className="container">
           
          <div>
            <div className="main">
              
              <div>
                <div className="row">
                  <Slider />
                </div>
                <div className="row">
                  { Main() }
                  { desc() }
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
        <div className="col-md-12 col-sm-12">
            <div className="row">
                <article className="col-md-3 col-sm-6 mid">
                    <div className="img">
                        <img src="assets/img/mid.jpg" alt="post" />
                        <div className="overlay"></div>
                    </div>
                    <div className="info">
                        <p className="tags">
                            <a href="">Fashion</a>
                            <a href="">Inspiration</a>
                            <a href="">lifestyle</a>
                        </p>
                        <h1><a href="">Somewhere In Europe</a></h1>
                        <p className="details">Sep 25, 2013 | <a href="author.html">Alex Grosville</a></p>
                        <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>

                    </div>
                    <ul className="counters list-inline">
                        <li>
                            <a href=""><i className="fa fa-eye"></i>15271</a>
                        </li>
                        <li>
                            <a href=""><i className="fa fa-comment"></i>25</a>
                        </li>
                        <li>
                            <a href=""><i className="fa fa-heart"></i>724</a>
                        </li>
                    </ul>
                </article>
                <article className="col-md-3 col-sm-6 mid">
                    <div className="img">
                        <img src="assets/img/mid.jpg" alt="post" />
                        <div className="overlay"></div>
                    </div>
                    <div className="info">
                        <p className="tags">
                            <a href="">Science</a>
                            <a href="">lifestyle</a>
                        </p>
                        <h1><a href="">Fishing Nowadays</a></h1>
                        <p className="details">Sep 25, 2013 | <a href="author.html">Alex Grosville</a></p>
                        <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>

                    </div>
                    <ul className="counters list-inline">
                        <li>
                            <a href=""><i className="fa fa-eye"></i>15271</a>
                        </li>
                        <li>
                            <a href=""><i className="fa fa-comment"></i>25</a>
                        </li>
                        <li>
                            <a href=""><i className="fa fa-heart"></i>724</a>
                        </li>
                    </ul>
                </article>
                <article className="col-md-3 col-sm-6 mid">
                    <div className="img">
                        <img src="assets/img/mid.jpg" alt="post" />
                        <div className="overlay"></div>
                    </div>
                    <div className="info">
                        <p className="tags">
                            <a href="">Science</a>
                            <a href="">lifestyle</a>
                        </p>
                        <h1><a href="">NY City Pabs</a></h1>
                        <p className="details">Sep 25, 2013 | <a href="author.html">Alex Grosville</a></p>
                        <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>

                    </div>
                    <ul className="counters list-inline">
                        <li>
                            <a href=""><i className="fa fa-eye"></i>15271</a>
                        </li>
                        <li>
                            <a href=""><i className="fa fa-comment"></i>25</a>
                        </li>
                        <li>
                            <a href=""><i className="fa fa-heart"></i>724</a>
                        </li>
                    </ul>
                </article>
                <article className="col-md-3 col-sm-6 mid">
                    <div className="img">
                        <img src="assets/img/mid.jpg" alt="post" />
                        <div className="overlay"></div>
                    </div>
                    <div className="info">
                        <p className="tags">
                            <a href="">Fashion</a>
                            <a href="">Inspiration</a>
                            <a href="">lifestyle</a>
                        </p>
                        <h1><a href="">Somewhere In Europe</a></h1>
                        <p className="details">Sep 25, 2013 | <a href="author.html">Alex Grosville</a></p>
                        <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>

                    </div>
                    <ul className="counters list-inline">
                        <li>
                            <a href=""><i className="fa fa-eye"></i>15271</a>
                        </li>
                        <li>
                            <a href=""><i className="fa fa-comment"></i>25</a>
                        </li>
                        <li>
                            <a href=""><i className="fa fa-heart"></i>724</a>
                        </li>
                    </ul>
                </article>
            </div>
        </div>
    )
}

const desc = () => {
    return (
        <div className="info col-md-offset-1 col-md-10">
            <h1>Alternative Sources of Energy</h1>
            
            <div className="text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.</p>

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

export default connect(mapStateToProps, mapDispatchToProps)(Trip)
