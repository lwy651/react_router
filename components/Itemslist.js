import React, { Component } from 'react';
import Weatheritem from './Weatheritem.js';

export default class Itemslist extends Component {
	render() {
		return (
			<div className="items_list">
				<Weatheritem />
				<Weatheritem />
				<Weatheritem />
				<Weatheritem />
				<Weatheritem />
			</div>
		);
	}
}
