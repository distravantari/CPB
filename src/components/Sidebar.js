import React from 'react';
import * as constant from 'app_path/actions/const'

class Sidebar extends React.Component{
  render(){
    return (
      <aside className="col-md-3 col-sm-12">

        <div className="hidden-xs hidden-sm hidden-md hidden-lg"></div>

        <div id="twitter" className="col-md-12 col-sm-6">
          <h4> { constant.twitter.TITTLE } </h4>
          <div>
            <a  className="twitter-timeline" href={ constant.twitter.LINK } data-widget-id={ constant.twitter.WIDGET_ID } 
                data-link-color={ constant.twitter.LINK_COLOR } data-chrome={ constant.twitter.DATA_CHROME } 
                lang={ constant.twitter.LANG } data-tweet-limit={ constant.twitter.LIMIT }></a>
          </div>
        </div>

        <div className="banner visible-md visible-lg">
          <img src="assets/img/banner.jpg" alt="banner" />
        </div>

      </aside>
    )
  }
};

export default Sidebar;
