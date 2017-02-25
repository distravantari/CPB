import React from 'react'
import { Link } from 'react-router'
import * as constant from 'app_path/actions/const'

class Header extends React.Component{
  constructor(props) {
    super(props)
  }

  render(){
    return (

      <header>
        <div className="container" style ={ { backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/balizee-e308b.appspot.com/o/headerbalizee.jpg?alt=media&token=ee7365d0-fc7a-4e59-9d99-a5993d420e09')" } }>
          <nav className="clearfix">
            <a href="" id="header-menu-button"><i className="fa fa-bars"></i></a>
            <ul className="list-inline">

              { this.props.main_menu.map((list,idx) => (
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
