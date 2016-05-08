import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router'
import ajax from 'superagent'
import Tempcomp from './components/Tempcomp.js'
import Itemslist from './components/Itemslist.js'
import Tempchart from './components/Tempchart.js'

var url = 'http://localhost:3000/nowWeather'
var temdata;




const Home = React.createClass({
	componentDidMount: function() {
		ajax.get(url)
			.end((error,response)=>{
				if(!error&&response){
					temdata = JSON.parse(response.text).results[0]
					this.setState({data:temdata})
				}
				else
				{
					console.log(error)
				}
			}
		)},
	render(){

		console.log(temdata)
		var rows = [<Tempcomp key="651" data={temdata}/>,<Itemslist />,<Tempchart />]
		return(
			<div id="app">
				{rows}
			</div>
			)
	}
})


ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Home}>
			<Route path='about' component={Home}/>
		</Route>
	</Router>
	,document.getElementById('app')
)