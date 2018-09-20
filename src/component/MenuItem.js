import React from 'react';
import "./style.css"

class MenuItem extends React.Component {
    constructor(props){
		super(props);
		console.log(props);
	}
	render() {
		let menuItem = {
			listStyle: "none",
            backgroundColor: "#e6f7ff",
            marginBottom: "2px", 
            height: "30px", 
			lineHeight: "30px",
			cursor: 'pointer'
        };
		return (
			<li style={menuItem}>{this.props.children}</li>
		);
	}
}

export default MenuItem;