import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import * as constant from 'app_path/actions/const'
import { ContactDetail, GetInTouch } from 'app_path/containers/contact'
// import base from 'app_path/config/db'

class Content extends React.Component{
  constructor(props,context){
    super(props)
    context.router
  }

  render(){
    return (
      <div className="col-md-9 col-sm-12 list-page">
        
        <Vouchers vouchers= { this.props.vouchers } url= { this.props.instagram.URL }/>

        <ContactDetail contact={ this.props.contact }/>

        <GetInTouch />

      </div>
    )
  }
} 

const Vouchers = ({ vouchers, url }) => {
    return (
      <div>
        <h3>Vouchers</h3>
          <div className="row col-md-12">

            { vouchers.map((list, index) => (
              <article className="col-md-6 col-sm-6 mid" key={ index }>
                <div className="img" onClick={ () => (window.location = url) }>
                  <img src="assets/img/mid.jpg" />
                  <div className="overlay"></div>
                </div>
                <div className="info">
                  <p className="tags">

                    { list.TAGS.map((tag, idx) => (
                      <a key={ idx } > { tag } </a>
                    )) }

                  </p>
                  <h1><Link to={ `${constant.routes_detail[0]}` }> { list.TITTLE } </Link></h1>
                  <p className="details"> {list.DATE} <a> {list.CREATEDBY} </a></p>
                  <p className="text">
                    { list.TEXT }
                  </p>
                  
                </div>
                <ul className="counters list-inline">
                  <li>
                    <a ><i className="fa fa-comment"></i> {list.NOTIFICATION.COMMENT} </a>
                  </li>
                  <li>
                    <a ><i className="fa fa-heart"></i> {list.NOTIFICATION.LIKES} </a>
                  </li>
                </ul>
              </article>
            ))}

          </div>
      </div>
    )
}

const mapStateToProps = (state) => {
    return {
      contact: state.feature.contact[0],
      vouchers: state.feature.vouchers[0].list,
      instagram: state.social.instagram[0]
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
      getMain: (context) => dispatch(fetchFeature(context))
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(Content);
