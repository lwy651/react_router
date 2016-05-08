import React, { Component } from 'react';

export default class Tempcomp extends Component {
	render() {
		var data = this.props.data
		var city = ""
		var temp = ""
		if (typeof(data)!="undefined") {
			city = data.location.name
			temp = data.now.temperature
		}
		return (
			<div className="tempcomp">
				<div className="center">
		    		<span className="city">{city}</span>
		    		<span className="temp_num">{temp}</span>
		    		<div className="temp_num du">°</div>
    			</div>	
			</div>
		);
	}
}
