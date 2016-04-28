import React, { Component } from 'react';

export default class Tempcomp extends Component {
	render() {
		return (
			<div className="div_temp">
				<div  className="temp">
					<span className="city">南京</span>
					<br/>
					<span className="temp_num">38</span>
				</div>
			</div>
		);
	}
}
