import React from 'react'

import SideBar from '../components/SideBar'
import Footer from '../components/Footer'

class Index extends React.Component{
  render(){
      return (
        <body className="nav-md">
          <div className="container body">
            <div className="main_container">
              <SideBar />
              { this.props.children }
              <Footer />
            </div>
          </div>
        </body>
      )
  }
}

export default Index
