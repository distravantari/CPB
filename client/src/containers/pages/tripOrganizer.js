import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import OwlCarousel from 'react-owl-carousel'
import { connect } from 'react-redux'

//redux
import fetchFeature from 'app_path/actions/Feature'

//constanta
import * as constant from 'app_path/actions/const'
import Immutable from 'immutable'

//conmponents
import Slider from 'components_path/Slider'

class Trip extends React.Component{

  constructor(props) {
    super(props)
  }

  componentDidMount(){
      this.props.getPackets(this)
  }

  componentWillReceiveProps(){
    this.setState({})
  }

  render(){
    return(
      <div>
        <div className="main">

            <div>
            <div className="row">
                <Slider />
            </div>
            <div className="row">
                <Main trip={ this.props.packets.list } />
                <Desc />
            </div>
            </div>

        </div>
    </div>
    )
  }

}

const Main = ({ trip }) => {
    return (
        <div className="col-md-12 col-sm-12">
            <div className="row">

                { trip.map((list, index) => (
                    <article className="col-md-3 col-sm-6 mid" key={index}>
                        <div className="img">
                            <img src={ list.IMG } alt="post" />
                            <div className="overlay"></div>
                        </div>
                        <div className="info">
                            <p className="tags">

                                {list.TAGS.map((tag, index) => (
                                    <a key={ index } >{tag}</a>
                                ))}

                            </p>
                            <h1><Link to={ `${list.URL}` }>{ list.TITTLE }</Link></h1>
                            <p className="details"> { list.DATE }</p>
                            <p className="text">
                                { list.TEXT }
                            </p>

                        </div>
                        <ul className="counters list-inline">
                            <li>
                                <a href=""><i className="fa fa-eye"></i> { list.NOTIFICATION.COMMENT } </a>
                            </li>
                            <li>
                                <a href=""><i className="fa fa-comment"></i> { list.NOTIFICATION.LIKES } </a>
                            </li>
                        </ul>
                    </article>
                ))}

            </div>
        </div>
    )
}

const Desc = () => {
    return (
        <div className="info col-md-offset-1 col-md-10">
            <h1>{ constant.description.TITTLE }</h1>

            <div className="text">
                <p>{ constant.description.TEXT }</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        packets: state.feature.packets[0]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPackets: (context) => dispatch(fetchFeature(context))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trip)
