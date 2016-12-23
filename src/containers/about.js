import React, { PropTypes } from 'react'
import { fetchToken } from "app_path/actions/authentication"
import OwlCarousel from 'react-owl-carousel'
import { connect } from 'react-redux'
import * as constant from 'app_path/actions/const'
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
      <div className="main">
			<div className="row">
				<div className="col-md-12 col-sm-12">
					<h2>About us</h2>
					<div className="row">
						<div className="about-us col-md-12 col-sm-12">
							<img src="assets/img/about.jpg" alt="about" />
							<div className="info">
								<h1><small> { constant.about_us.TITTLE } </small></h1>
								<p> {constant.about_us.TEXT} </p>
							</div>
						</div>
					</div>

					{ ourTeam() }
					
					{ stats() }
					
				</div>
			</div>
		</div>
    )
}

const ourTeam = () => {
	return (
		<div>
			<h3>Our team</h3>
				<div className="team row">

					{ constant.our_team.map((list, index) => (
						<article className="col-md-4 col-sm-4 mid member" key={ index }>
							<div className="img">
								<img src="assets/img/team.jpg" alt="post2" />
								<div className="overlay"></div>
							</div>
							<div className="info">
								<p className="tags">
									{ list.POSITION.map((pos, idx) => (
										<a href="">{ pos }</a>
									))}
								</p>
								<h1><a href="author.html">{ list.NAME }</a></h1>
								<p className="text">
									{ list.TEXT }
								</p>
							</div>
							<ul className="social list-inline">
								<li><a href="#"><i className="fa fa-facebook"></i></a></li>
								<li><a href="#"><i className="fa fa-twitter"></i></a></li>
								<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
								<li><a href="#"><i className="fa  fa-tumblr"></i></a></li>
							</ul>
						</article>
					))}
	
				</div>
		</div>
	)
}

const stats = () => {
	return (
		<div className="statistic row">
			<ul className="statistic list-inline col-md-12 col-sm-12">
				<li>
					<i className="fa fa-user"></i>
					<h3>17,435</h3>
					<p>Users</p>
				</li>
				<li>
					<i className="fa fa-pencil-square-o"></i>
					<h3>2,139</h3>
					<p>Posts</p>
				</li>
				<li>
					<i className="fa fa-comment"></i>
					<h3>244,967</h3>
					<p>Comments</p>
				</li>
				<li>
					<i className="fa fa-download"></i>
					<h3>239</h3>
					<p>Downloads</p>
				</li>
				<li>
					<i className="fa fa-picture-o"></i>
					<h3>32,234</h3>
					<p>Images</p>
				</li>
			</ul>
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
