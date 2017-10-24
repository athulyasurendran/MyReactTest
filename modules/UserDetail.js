import React, { Component } from 'react';

class UserDetail extends Component {
    render(){
        return (<div><h1>Hi {this.props.params.name}</h1></div>
        );
    }
}

export default UserDetail

