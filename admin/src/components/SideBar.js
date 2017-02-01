import React from 'react'

class SideBar extends React.Component{
  render(){
    return(

      <div className="col-md-3 left_col">
          <div className="left_col scroll-view">
          <div className="navbar nav_title" style={{border:" 0"}}>
              <a href="dashboard.html" className="site_title"><i className="fa fa-paw"></i> <span>Radical Admin!</span></a>
          </div>

          <div className="clearfix"></div>

          <div className="profile clearfix">
              <div className="profile_pic">
                <img src="assets/images/img.jpg" alt="..." className="img-circle profile_img" />
              </div>
              <div className="profile_info">
              <span>Welcome,</span>
              <h2>Admin</h2>
              </div>
          </div>

          <br />

          <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
              <div className="menu_section">
              <h3>General</h3>
              <ul className="nav side-menu">
                  <li>
                    <a href="dashboard.html"><i className="fa fa-home"></i> Dashboard</a>
                  </li>
              </ul>
              </div>
              <div className="menu_section">
              <h3>Live On</h3>
              <ul className="nav side-menu">
                  <li><a><i className="fa fa-windows"></i> Pages <span className="fa fa-chevron-down"></span></a>
                  <ul className="nav child_menu">
                      <li><a href="page_about.html">About Page</a></li>
                      <li><a href="page_contact.html">Contact Page</a></li>
                      <li><a href="page_home.html">Home Page</a></li>
                      <li><a href="page_trip.html">Trip Page</a></li>
                      <li><a href="plain_page.html">Other</a></li>
                      <li><a href="pricing_tables.html">Pricing Tables</a></li>
                  </ul>
                  </li>
              </ul>
              </div>

          </div>

          <div className="sidebar-footer hidden-small">
              <a data-toggle="tooltip" data-placement="top" title="Settings">
              <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="FullScreen">
              <span className="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Lock">
              <span className="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
              </a>
              <a href="index.html" data-toggle="tooltip" data-placement="top" title="Logout">
              <span className="glyphicon glyphicon-off" aria-hidden="true"></span>
              </a>
          </div>
          </div>
      </div>
    )
  }
}

export default SideBar
