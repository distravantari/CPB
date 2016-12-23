import React from 'react'
import { Link } from 'react-router'
import * as constant from 'app_path/actions/const'

class Header extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }

  render(){
    return (

      <header>
        <div className="container">
          <a href="" className="logo"><img src="assets/img/logo.png" alt="logo" /></a>
          <nav className="clearfix">
            <a href="" id="header-menu-button"><i className="fa fa-bars"></i></a>
            <ul className="list-inline">

              { constant.main_menu.map((list,idx) => (
                <li key={idx}> <Link to={ `${constant.routes[idx]}` }> { list } </Link></li>
              ))}

            </ul>
          </nav>
        </div>
      </header>

    )
  }
};

export default Header;
