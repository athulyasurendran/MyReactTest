import React from 'react'
import NavLink from './NavLink'
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import LinkedIn from 'react-linkedin-login'

const responseGoogle = (response) => {
  console.log(response);
}

const callbackLinkedIn = (response) => {
    console.log(response);
}

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Registration</h2>
        <FacebookLogin
          appId="1088597931155576"
          autoLoad={true}
          fields="name,email,picture"
          scope="public_profile,user_friends,user_actions.books"
          callback={this.responseFacebook}/><br/><br/>
          <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
          <LinkedIn
          clientId='81an00sup62m2b'
          callback={callbackLinkedIn}
          text='LinkedIn' />
        <ul>
          <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">React</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
