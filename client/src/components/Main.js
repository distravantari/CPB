import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

//redux
import fetchFeature, { addEmail } from 'app_path/actions/Feature'
import fetchAbout from 'app_path/actions/About'
import receiveForm from 'app_path/actions/Form'

//constanta
import * as constant from 'app_path/actions/const'

//container
import { ContactDetail, GetInTouch } from 'app_path/containers/pages/contact'
import fetchSocial from 'app_path/actions/Social'

class Content extends React.Component{
  constructor(props, context){
    super(props)
    context.router
  }

  componentWillMount(){
    this.props.getMain(this)
    this.props.getAbout(this)
  }

  render(){
    if(!this.props.vouchers || !this.props.social ) return (<h1> Loading ... </h1>)
    return (
      <div className="col-md-9 col-sm-12 list-page">

        <Vouchers vouchers= { this.props.vouchers.list } url= { this.props.social.instagram.URL }/>

        <ContactDetail contact={ this.props.contact } facebook={ this.props.social.facebook }/>

        <GetInTouch addToMail = { this.props.addToMail } receiveForm={ this.props.receiveForm }/>

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
                  <img src={ list.IMG } />
                  <div className="overlay"></div>
                </div>
                <div className="info">
                  <h1><Link to={ `${list.URL}` }> { list.TITLE } </Link></h1>
                  {/*<p className="details"> {list.DATE} <a> {list.CREATEDBY} </a></p>*/}
                  <p className="text">
                    { list.TEXT }
                  </p>
                </div>
              </article>
            ))}

          </div>
      </div>
    )
}

const mapStateToProps = (state) => {
    return {
      contact: state.feature.contact[0],
      vouchers: state.feature.vouchers[0],
      social: state.social
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getMain: (context) => dispatch(fetchFeature(context)),
      getAbout: (context) => dispatch(fetchAbout(context)),
      getSocial: (context) => dispatch(fetchSocial(context)),
      receiveForm:(data1, data2) => receiveForm(data1, data2)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
