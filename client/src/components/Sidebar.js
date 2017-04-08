import React from 'react'
import { connect } from 'react-redux'
import * as constant from 'app_path/actions/const'
import fetchSocial from 'app_path/actions/Social'

class Sidebar extends React.Component{

  componentWillMount(){
    this.props.getTwitterConfig(this)
    this.props.twitterWidget()
  }

  refresh(){
    window.location.reload() 
  }

  render(){
    if(!this.props.twitter) return (<h1> Loading ... </h1>)
    return (
      <aside className="col-md-3 col-sm-12">

        <div className="hidden-xs hidden-sm hidden-md hidden-lg"></div>

        <div id="twitter" className="col-md-12 col-sm-6">
          <h4 > { this.props.twitter.TITLE } <i className="fa fa-refresh" id="refresh" onClick={() => this.refresh()}></i> </h4>
          <div>
            {/*<a  className="twitter-timeline" href="https://twitter.com/valentinancy" data-widget-id={ this.props.twitter.WIDGET_ID }
                data-link-color={ this.props.twitter.LINK_COLOR } data-chrome={ this.props.twitter.DATA_CHROME }
                lang={ this.props.twitter.LANG } data-tweet-limit={ this.props.twitter.LIMIT }>
            </a>*/}
            <a className="twitter-timeline" href={ this.props.twitter.LINK } data-tweet-limit="5">
              Tweets by { this.props.twitter.USERNAME }
            </a>
            <script async src="//platform.twitter.com/widgets.js" charSet="utf-8"></script>
          </div>
        </div>

        <div className="banner click-able visible-md visible-lg" id="facebook" onClick={ () => (window.location = this.props.facebook.URL) }>
          <img src={ this.props.facebook.ICON } alt="banner" />
        </div>

      </aside>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        twitter: state.social.twitter,
        facebook: state.social.facebook
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTwitterConfig: (context) => dispatch(fetchSocial(context)),
        twitterWidget: () => {
          !function(d,s,id){
            var js,fjs=d.getElementsByTagName(s)[0],
            p=/^http:/.test(d.location)?'http':'https';
            if( !d.getElementById(id) ){
              js=d.createElement(s);
              js.id=id;
              js.src=p+"://platform.twitter.com/widgets.js";
              fjs.parentNode.insertBefore(js,fjs);
            }
          }(document,"script","twitter-wjs")
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
