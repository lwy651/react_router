import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router'
import Tempcomp from './components/Tempcomp.js'
import Itemslist from './components/Itemslist.js'
import Tempchart from './components/Tempchart.js'

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
			<div className="full_div">
				<Tempcomp />
				<Itemslist />
				<Tempchart />
			</div>
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
		<Route path='/' component={About}>
			<Route path='about' component={About}/>
			<Route path='users' component={Users} />
		</Route>
	</Router>
	,document.getElementById('app')
)