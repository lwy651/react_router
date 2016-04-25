import { Router, Route, Link, browserHistory } from 'react-router'
import React,{ Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component{
  render(){
    return(
      <div>
        <header>
          <ul>
            <li><Link to="/posts" activeClassName="active" activeStyle={{color: '#c00'}}>Posts</Link></li>
            <li><Link to="/about" activeClassName="active" activeStyle={{color: '#c00'}}>About</Link></li>
          </ul>
        </header>
        {this.props.children}
      </div>
      )
  }
}
class About extends Component{
  render(){
    return(
      <div>1</div>
      )
  }
}

class Posts extends Component{
  render(){
    return(
      <div>2</div>
      )
  }
}

ReactDOM.render(
    <Router>
      <Route path="/" component={App}>
        <Route path="about" component={About}></Route>
        <Route path="posts" component={Posts}></Route>
      </Route>
    </Router>
    ,document.getElementById('app')
  );