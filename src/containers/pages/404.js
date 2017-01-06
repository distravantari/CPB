import React, { PropTypes } from 'react'
import OwlCarousel from 'react-owl-carousel'
import { connect } from 'react-redux'

//constanta
import * as constant from 'app_path/actions/const'
import Immutable from 'immutable'

//redux
import fetchFeature from 'app_path/actions/Feature'

class Index extends React.Component{

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount(){
    this.props.getFeature(this)
  }

  render(){
    if(!this.props.errorPage) return (<h1>LOADING ..</h1>)
    return(
      <div>
        <div className="main">
          
          <div>
            <div className="row">
              <Main errorpage={ this.props.errorPage }/>
            </div>
          </div>

        </div>
      </div>
    )
  }
 }

const Main = ({ errorpage }) => {
    return (
      <div className="main-404 clearfix">
        <img src={ errorpage.IMG } alt="404" />
        <div className="info-404">
          <h1>
            <span>404.</span><br/>
            <small> { errorpage.TITLE } </small>
          </h1>
          <p>
            { errorpage.MESSAGE }
          </p>
        </div>
      </div>
    )
}

const mapStateToProps = (state) => {
    return {
      errorPage: state.feature.errorpage[0]
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
      getFeature: (context) => dispatch(fetchFeature(context))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
