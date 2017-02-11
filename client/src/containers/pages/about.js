import React, { PropTypes } from 'react'
import OwlCarousel from 'react-owl-carousel'
import { connect } from 'react-redux'

//redux
import fetchFeature from 'app_path/actions/Feature'
import fetchAbout from 'app_path/actions/About'

//constanta
import * as constant from 'app_path/actions/const'
import Immutable from 'immutable'

class About extends React.Component{

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount(){
	   this.props.getAbout(this)
  }

  componentWillReceiveProps(){
    this.setState({})
  }

  render(){
	  if(!this.props.team) return (<h1> Loading ... </h1>)
    return(
      <div>
    		<div className="main">

    			<div>
    				<div className="row">
    					<Main about_us={ this.props.aboutus } team={ this.props.team.list } web={ this.props.web } />
    				</div>
    			</div>

    		</div>
    	</div>
    )
  }

}

const Main = ({ about_us, team, web }) => {
    return (
      <div className="main">
			<div className="row">
				<div className="col-md-12 col-sm-12">
					<h2>About us</h2>
					<div className="row">
						<div className="about-us col-md-12 col-sm-12">
							<img src={ about_us.IMG } alt="about" />
							<div className="info">
								<h1><small> { about_us.TITTLE } </small></h1>
								<p> { about_us.TEXT } </p>
							</div>
						</div>
					</div>

					<OurTeam our_team = { team }/>

					<Stats web={ web }/>

				</div>
			</div>
		</div>
    )
}

const OurTeam = ({ our_team }) => {
	return (
		<div>
			<h3>Our team</h3>
				<div className="team row">

					{ our_team.map((list, index) => (
						<article className="col-md-4 col-sm-4 mid member" key={ index }>
							<div className="img">
								<img src={ list.IMG } alt="post2" />
								<div className="overlay"></div>
							</div>
							<div className="info">
								<p className="tags">
									{ list.POSITION.map((pos, idx) => (
										<a key={ idx }>{ pos }</a>
									))}
								</p>
								<h1><a>{ list.NAME }</a></h1>
								<p className="text">
									{ list.TEXT }
								</p>
							</div>
							<ul className="social list-inline">
								<li><a><i className="fa fa-facebook"></i></a></li>
								<li><a><i className="fa fa-twitter"></i></a></li>
								<li><a><i className="fa fa-google-plus"></i></a></li>
								<li><a><i className="fa  fa-tumblr"></i></a></li>
							</ul>
						</article>
					))}

				</div>
		</div>
	)
}

const Stats = ({ web }) => {
	return (
		<div className="statistic row">
			<ul className="statistic list-inline col-md-12 col-sm-12">
				<li>
					<i className="fa fa-user"></i>
					<h3>{ web.users }</h3>
					<p>Users</p>
				</li>
				<li>
					<i className="fa fa-pencil-square-o"></i>
					<h3>{ web.post }</h3>
					<p>Posts</p>
				</li>
				<li>
					<i className="fa fa-comment"></i>
					<h3>{ web.comment }</h3>
					<p>Comments</p>
				</li>
				<li>
					<i className="fa fa-download"></i>
					<h3>{ web.download }</h3>
					<p>Downloads</p>
				</li>
				<li>
					<i className="fa fa-picture-o"></i>
					<h3>{ web.image }</h3>
					<p>Images</p>
				</li>
			</ul>
		</div>
	)
}

const mapStateToProps = (state) => {
		if(state.about){
			return {
				team: state.about.team[0],
				aboutus: state.about.us[0],
				web: state.about.status[0]
			};
		}else return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
			getAbout: (context) => dispatch(fetchAbout(context))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
