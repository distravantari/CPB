import React from 'react'

class About extends React.Component{
  render(){
    return(
        <div className="right_col" role="main">
          <div className="">
            <div className="page-title">
              <div className="title_left">
                <h3>About Page</h3>
              </div>

              <div className="title_right">
                <div className="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for..." />
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button">Go!</button>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="clearfix"></div>

            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="x_panel">
                  <div className="x_title">
                    <h2>About Us</h2>
                    <ul className="nav navbar-right panel_toolbox">
                      <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                      </li>
                      <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                        <ul className="dropdown-menu" role="menu">
                        </ul>
                      </li>
                      <li><a className="close-link"><i className="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div className="clearfix"></div>
                  </div>
                  <div className="x_content">
                    <div id="alerts"></div>

                    <div className="col-md-3 col-sm-3 col-xs-12">
                      <div>
                        <form action="#" className="dropzone"></form>
                        image size: 470 x 220
                      </div>
                    </div>

                   <div className="col-md-9 col-sm-9 col-xs-12">
                      <div className="form-group">
                        <div className="col-md-9 col-sm-9 col-xs-12">
                          <textarea className="resizable_textarea form-control" placeholder="Title Here .."></textarea>
                        </div>
                      </div>

                      <br /><br /><br />

                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <textarea className="resizable_textarea form-control" placeholder="Content Here .." style={{height:"230px"}}></textarea>
                      </div>
                   </div>
                   <div className="col-md-1 col-sm-1 col-xs-12 col-md-offset-11 col-sm-offset-11">
                      <span className="btn btn-success">Edit</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="x_panel">
                  <div className="x_title">
                    <h2> Our Team</h2>
                    <ul className="nav navbar-right panel_toolbox">
                      <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                      </li>
                      <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                        <ul className="dropdown-menu" role="menu">
                          <li><a href="#">Settings 1</a>
                          </li>
                          <li><a href="#">Settings 2</a>
                          </li>
                        </ul>
                      </li>
                      <li><a className="close-link"><i className="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div className="clearfix"></div>
                  </div>
                  <div className="x_content">


                    <div className="" role="tabpanel" data-example-id="togglable-tabs">
                      <ul id="myTab" className="nav nav-tabs bar_tabs" role="tablist">
                        <li role="presentation" className="active"><a href="#tab_content1" role="tab" data-toggle="tab" aria-expanded="true">Name1</a>
                        </li>
                        <li role="presentation" className=""><a href="#tab_content2" role="tab" data-toggle="tab" aria-expanded="false">Name2</a>
                        </li>
                        <li role="presentation" className=""><a href="#tab_content3" role="tab" data-toggle="tab" aria-expanded="false">Name3</a>
                        </li>
                      </ul>
                      <div id="myTabContent" className="tab-content">
                        <div role="tabpanel" className="tab-pane fade active in" id="tab_content1" aria-labelledby="home-tab">
                          <div className="x_content">
                            <div id="alerts"></div>

                            <div className="col-md-3 col-sm-3 col-xs-12">
                              <div>
                                <form action="#" className="dropzone"></form>
                                image size: 270 x 280
                              </div>
                            </div>

                          <div className="col-md-9 col-sm-9 col-xs-12">
                              <div className="form-group">
                                <div className="col-md-9 col-sm-9 col-xs-12">
                                  <input placeholder="Position"></input>
                                  <input placeholder="Name" style={{width: "500px"}}></input>
                                </div>
                              </div>

                              <br /><br /><br />

                              <div className="col-md-12 col-sm-12 col-xs-12">
                                <textarea className="resizable_textarea form-control" placeholder="Short Desc" style={{height:"230px"}}></textarea>
                              </div>
                          </div>

                          <div className="col-md-1 col-sm-1 col-xs-12 col-md-offset-11 col-sm-offset-11">
                            <span className="btn btn-success">Edit</span>
                          </div>

                          </div>
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="tab_content2" aria-labelledby="profile-tab">
                          <div className="x_content">
                            <div id="alerts"></div>

                            <div className="col-md-3 col-sm-3 col-xs-12">
                              <div>
                                <form action="#" className="dropzone"></form>
                                image size: 270 x 280
                              </div>
                            </div>

                          <div className="col-md-9 col-sm-9 col-xs-12">
                              <div className="form-group">
                                <div className="col-md-9 col-sm-9 col-xs-12">
                                  <input placeholder="Position"></input>
                                  <input placeholder="Name" style={{width: "500px"}}></input>
                                </div>
                              </div>

                              <br /><br /><br />

                              <div className="col-md-12 col-sm-12 col-xs-12">
                                <textarea className="resizable_textarea form-control" placeholder="Short Desc" style={{height:"230px"}}></textarea>
                              </div>
                          </div>

                          <div className="col-md-1 col-sm-1 col-xs-12 col-md-offset-11 col-sm-offset-11">
                            <span className="btn btn-success">Edit</span>
                          </div>

                          </div>
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="tab_content3" aria-labelledby="profile-tab">
                          <div className="x_content">
                            <div id="alerts"></div>

                            <div className="col-md-3 col-sm-3 col-xs-12">
                              <div>
                                <form action="#" className="dropzone"></form>
                                image size: 270 x 280
                              </div>
                            </div>

                          <div className="col-md-9 col-sm-9 col-xs-12">
                              <div className="form-group">
                                <div className="col-md-9 col-sm-9 col-xs-12">
                                  <input placeholder="Position"></input>
                                  <input placeholder="Name" style={{width: "500px"}}></input>
                                </div>
                              </div>

                              <br /><br /><br />

                              <div className="col-md-12 col-sm-12 col-xs-12">
                                <textarea className="resizable_textarea form-control" placeholder="Short Desc" style={{height:"230px"}}></textarea>
                              </div>
                          </div>

                          <div className="col-md-1 col-sm-1 col-xs-12 col-md-offset-11 col-sm-offset-11">
                            <span className="btn btn-success">Edit</span>
                          </div>

                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
    )
  }
}

export default About
