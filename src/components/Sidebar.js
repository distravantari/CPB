import React from 'react'
import { connect } from 'react-redux'
import * as constant from 'app_path/actions/const'
import fetchSocial from 'app_path/actions/social'

class Sidebar extends React.Component{
  
  componentDidMount(){
    this.props.getTwitterConfig(this)
  }

  render(){
    return (
      <aside className="col-md-3 col-sm-12">

        <div className="hidden-xs hidden-sm hidden-md hidden-lg"></div>

        <div id="twitter" className="col-md-12 col-sm-6">
          <h4> { this.props.twitter.TITTLE } </h4>
          <div>
            <a  className="twitter-timeline" href={ this.props.twitter.LINK } data-widget-id={ this.props.twitter.WIDGET_ID } 
                data-link-color={ this.props.twitter.LINK_COLOR } data-chrome={ this.props.twitter.DATA_CHROME } 
                lang={ this.props.twitter.LANG } data-tweet-limit={ this.props.twitter.LIMIT }></a>
          </div>
        </div>

        <div className="banner visible-md visible-lg">
          <img src="assets/img/banner.jpg" alt="banner" />
        </div>

      </aside>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        twitter: state.social.twitter[0]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTwitterConfig: (context) => dispatch(fetchSocial(context))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
