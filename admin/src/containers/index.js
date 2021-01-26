import React from 'react'

import SideBar from '../components/SideBar'
import Footer from '../components/Footer'

class Index extends React.Component{
  render(){
      return (
        <div className="nav-md">
          <div className="container body">
            <div className="main_container">
              <SideBar />
              { this.props.children }
              <Footer />
            </div>
          </div>
        </div>
      )
  }
}

export default Index
