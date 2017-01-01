import React from 'react'
import { connect } from 'react-redux'
import * as constant from 'app_path/actions/const'

class Slider extends React.Component{

  constructor() {
    super()
  };

  // componentWillReceiveProps(){
  //   location.reload()
  // }

  render(){
    return (
      <div className="col-md-12 col-sm-12">

        <News news={ this.props.news.list } />

        <BigSlider big_slider={ this.props.slider.list } />
        
      </div>
    )
  }
  
};

// COMPONENTS
const News = ({ news }) => {
  return (
    <div className="row">
        <div className="breaking col-md-12 col-sm-12">
          <div className="controls">
            <p className="prev"><i className="fa fa-angle-left"></i></p>
            <p className="next"><i className="fa fa-angle-right"></i></p>
          </div>

          <ul className="news">

            { news.map((list, index) => (
              
              <li key={index} >
                <span> { list.IMPORTANT } </span>
                { list.TEXT }
              </li>

            ))}

          </ul>

        </div>
      </div>
  )
}

const BigSlider = ({ big_slider }) => {
  return (
    <div className="row">
      <div className="post-slider col-md-12 col-sm-12">
        <div className="controls">
          <p className="prev"><i className="fa fa-angle-left"></i></p>
          <p className="next"><i className="fa fa-angle-right"></i></p>
        </div>

        <div className="slides">

          { 
            big_slider.map((list, index) => (
              <article className="big clearfix" key={ index }>
                <img src="assets/img/slider12.jpg" alt="post1" />
                <div className="info">
                  <p className="tags">
                    <a> { list.TYPE } </a>
                  </p>
                  <h1><a> { list.TITTLE } </a></h1>
                  <p className="text">
                    {
                      list.INFO
                    }
                  </p>
                  <p className="details"> { list.DATE } <a> { list.CREATE } </a></p>
                </div>
                <ul className="counters list-inline">
                  <li>
                    <a><i className="fa fa-comment"></i> { list.COMMENT } </a>
                  </li>
                  <li>
                    <a><i className="fa fa-heart"></i> { list.LIKE } </a>
                  </li>
                </ul>
              </article>
          ))}

        </div>

      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        news: state.feature.slider[0].news,
        slider: state.feature.slider[0].big
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider)
