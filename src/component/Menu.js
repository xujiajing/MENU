import React from 'react';
import "./style.css"

class Menu extends React.Component {
    render() {
        return (
            <ul>{this.props.children}</ul>
        );
    }
}

export default Menu;