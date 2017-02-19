import React from 'react'

import * as constant from '../../actions/const'

class Login extends React.Component{

  authenticate(val){
    if(this.usernameRef.value === constant.authentication.username && this.passwordRef.value === constant.authentication.password){
      alert('success')
      this.props.history.push('/dashboard')
    }
    else{
      alert('failed')
      this.props.history.push('/')
    }
  }
  render(){
    console.log(this.props,'string');
      return(
          <div className="login">
            <a className="hiddenanchor" id="signup"></a>
            <a className="hiddenanchor" id="signin"></a>

            <div className="login_wrapper">
              <div className="animate form login_form">
                <section className="login_content">
                  <form onSubmit = {(val) => this.authenticate(val)}>
                    <h1>Login Form</h1>
                    <div>
                      <input type="text" className="form-control" placeholder="Username" required="" ref={(ref) => this.usernameRef = ref}/>
                    </div>
                    <div>
                      <input type="password" className="form-control" placeholder="Password" required="" ref={(ref) => this.passwordRef = ref}/>
                    </div>
                    <div>
                      <input className="btn btn-success" type="submit" name="submit" onClick={(val) => this.authenticate(val)}/>
                      <a className="reset_pass" href="#">Lost your password?</a>
                    </div>

                    <div className="clearfix"></div>

                    <div className="separator">

                      <div className="clearfix"></div>
                      <br />

                      <div>
                        <h1><i className="fa fa-paw"></i> Radical Admin!</h1>
                        <p>©2016 All Rights Reserved. Radion! is a Bootstrap 3 template. Privacy and Terms</p>
                      </div>
                    </div>
                  </form>
                </section>
              </div>

              <div id="register" className="animate form registration_form">
                <section className="login_content">
                  <form>
                    <h1>Create Account</h1>
                    <div>
                      <input type="text" className="form-control" placeholder="Username" required="" />
                    </div>
                    <div>
                      <input type="email" className="form-control" placeholder="Email" required="" />
                    </div>
                    <div>
                      <input type="password" className="form-control" placeholder="Password" required="" />
                    </div>
                    <div>
                      <a className="btn btn-default submit" href="index.html">Submit</a>
                    </div>

                    <div className="clearfix"></div>

                    <div className="separator">
                      <p className="change_link">Already a member ?
                        <a href="#signin" className="to_register"> Log in </a>
                      </p>

                      <div className="clearfix"></div>
                      <br />

                      <div>
                        <h1><i className="fa fa-paw"></i> Gentelella Alela!</h1>
                        <p>©2016 All Rights Reserved. Gentelella Alela! is a Bootstrap 3 template. Privacy and Terms</p>
                      </div>
                    </div>
                  </form>
                </section>
              </div>
            </div>
          </div>
      )
  }
}

export default Login
