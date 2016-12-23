import React from 'react'
import * as constant from 'app_path/actions/const'
import { contactDetail, getInTouch } from 'app_path/containers/contact'

class Content extends React.Component{

  render(){
    return (
      <div className="col-md-9 col-sm-12 list-page">
        
        { vouchers() }

        { contactDetail() }

        { getInTouch() }

      </div>
    )
  }
};

const vouchers = (user) => {
  return (
    <div>
      <h3>Vouchers</h3>
        <div className="row col-md-12">

          { constant.vouchers.map((list, index) => (
            <article className="col-md-6 col-sm-6 mid" key={ index }>
              <div className="img">
                <img src="assets/img/mid.jpg" alt="post" />
                <div className="overlay"></div>
              </div>
              <div className="info">
                <p className="tags">
                  { list.TAGS.map((tag, idx) => (
                    <a key={ idx } > { tag } </a>
                  )) }
                </p>
                <h1><a href=""> { list.TITTLE } </a></h1>
                <p className="details"> {list.DATE} <a href="author.html"> {list.CREATEDBY} </a></p>
                <p className="text">
                  { list.TEXT }
                </p>
                
              </div>
              <ul className="counters list-inline">
                <li>
                  <a href=""><i className="fa fa-comment"></i> {list.NOTIFICATION.COMMENT} </a>
                </li>
                <li>
                  <a href=""><i className="fa fa-heart"></i> {list.NOTIFICATION.LIKES} </a>
                </li>
              </ul>
            </article>
          ))}

        </div>
    </div>
  )
}



export default Content;
