import React,{ Component } from 'react'
import NavLink from './NavLink'
import { Link } from 'react-router'

const users = [
  {
    "key":1,
    "name": "Athulya", 
    "profile": "https://cdn-images-1.medium.com/fit/c/36/36/1*F-rIbA6yKv9NKKjHYA8dtA.jpeg"
  },
  {
    "key":2,
    "name":"Ebin", 
    "profile": "https://cdn-images-1.medium.com/fit/c/36/36/0*8KVWMCSKKWDYrnwN.jpg"
  },
  {
    "key":3,
    "name":"Maria", 
    "profile": "https://cdn-images-1.medium.com/fit/c/36/36/1*F-rIbA6yKv9NKKjHYA8dtA.jpeg"
  },
  {
    "key":4,
    "name":"Dinu", 
    "profile": "https://cdn-images-1.medium.com/fit/c/36/36/1*F-rIbA6yKv9NKKjHYA8dtA.jpeg"
  }];

/*const userList = users.map(
    (user)=> <li key={user.key}><img src={user.profile}/> <span>{user.name}</span> </li>
);
*/
class App extends Component{
  constructor(props){
    super(props);

    this.userList = users.map((user) => {
        return (
            <li key={user.key}><img src={user.profile}/><Link
              to={"/users/"+user.name}
              className="list-group-item"
              key={user.key}>
              {user.name}
              </Link></li>
        )
    });

    //this.userList = users.map((user)=> <li key={user.key} onClick={() => this.userDetail(user)}><img src={user.profile}/> <span>{user.name}</span> </li>);
  }

 /* userDetail(value) {
      console.log(value);
  }*/
  render() {
    return (
        <nav className="navbar navbar-default navbar-static-top">
          <div className="container">
              <div className="navbar-header">
              <Link to="/">
                <img src="http://www.entiros.se/sites/all/themes/bootstrap_subtheme/logoText.png"/>
              </Link>
            </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul id="navbarList" role="nav">
                  <li><NavLink to="/">HOME</NavLink></li>
                  <li><NavLink to="/about">ABOUT</NavLink></li>
                  <li><NavLink to="/repos">REGISTRATION</NavLink></li>
                </ul>
              </div>
              <div className="contentPage">
              {this.props.children ? (
                <div>
                  {this.props.children}
                </div>
              ) : (
                <div className="home_content">
                  <h3 className="page_title">Welcome to ReactJs </h3>
                  <ul className="user_list">
                    {this.userList}
                  </ul>
                </div>
              )}
              </div>
            </div>
        </nav>
    )
  }
}

export default App;
