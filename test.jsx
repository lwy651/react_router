import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router'

const App = React.createClass({
	render(){
		return(
			<div>
				<Link to="about">5555</Link>
				{this.props.children}
			</div>
			)
	}
})
const About = React.createClass({
	render(){
		return(
			<div>about</div>
			)
	}
})

const Users = React.createClass({
	render(){
		return(
			<div>651</div>
			)
	}
})

const User = React.createClass({
	render(){
		return(
			<div>123</div>
			)
	}
})

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={App}>
			<Route path='about' component={About}/>
			<Route path='users' component={Users} />
		</Route>
	</Router>
	,document.getElementById('app')
)