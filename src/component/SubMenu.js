import React from 'react';
import "./style.css"

class SubMenu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            display_name: 'block',
            icon: '>'
        }
    }
    onClickButton(){
       if(this.state.display_name === 'none'){
           this.setState({
               display_name: 'block',
               icon:">"
           })
       }else if(this.state.display_name === 'block'){
            this.setState({
                display_name: 'none',
                icon:"V"
            })
       }
    }
	render() {
        let subMenu = {
            backgroundColor: "#e6f7ff",
            borderBottom: "1px solid #eae5e3", 
            marginBottom: "2px", 
            height: "30px", 
            lineHeight: "30px",
            cursor: 'pointer'
        };
		return (
			<div>
				<div style={subMenu}  onClick={this.onClickButton.bind(this)}>
                    {this.props.title}
                    <span style={{marginLeft:"20px"}}>{this.state.icon}</span>
                </div> 
				<ul style={{display: this.state.display_name}}>
                    {this.props.children}
				</ul>
			</div>
		);
	}
}

export default SubMenu;