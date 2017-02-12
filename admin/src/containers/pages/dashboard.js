import React from 'react'
import * as con from '../../actions/const'

class Dashboard extends React.Component{
  render(){
      return(
        <div className="right_col" role="main">
          <div className="">
            <div className="page-title"><h1>Welcome, {con.authentication.username}</h1></div>

            <div className="clearfix"></div>
            <div className='row'></div>
          </div>
        </div>
      )
  }
}

export default Dashboard
