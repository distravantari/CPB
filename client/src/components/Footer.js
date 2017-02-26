import React from 'react';
import ReactDOM from 'react-dom';
import * as constant from "app_path/actions/const"

class Footer extends React.Component{
  render(){
    return (
    	<div>
        <footer>
          <div className="row">
            <div className="about col-md-12 col-sm-12">
              <img src={ this.props.footer_component.IMG } alt="logo" />
              <h5> { this.props.footer_component.TITTLE } </h5>
              <p>
                { this.props.footer_component.TEXT }
              </p>

              <ul className="social list-inline">
                <li><a href={ this.props.footer_component.LINK.FB }><i className="fa fa-facebook"></i></a></li>
                <li><a href={ this.props.footer_component.LINK.INSTAGRAM }><i className="fa fa-instagram"></i></a></li>
                <li><a href={ this.props.footer_component.LINK.TWITTER }><i className="fa fa-twitter"></i></a></li>
                <li><a href={ this.props.footer_component.LINK.GOOGLE }><i className="fa fa-google-plus"></i></a></li>
                <li><a href={ this.props.footer_component.LINK.YOUTUBE }><i className="fa fa-youtube-play"></i></a></li>
                <li><a href={ this.props.footer_component.LINK.PATH }><i className="fa fa-product-hunt"></i></a></li>
                <li><a href={ this.props.footer_component.LINK.TRIP }><i className="fa fa-plane"></i></a></li>
              </ul>
            </div>
          </div>

          <div className="rights clearfix">
            <p> { this.props.footer.allrightreserve } </p>
            <p>Designed by { this.props.footer.design }.</p>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer
