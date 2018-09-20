import React from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: null,
        };
      }
    
      render() {
        // TODO: use onClick={this.props.onClick}
        // TODO: replace this.state.value with this.props.value
        return (
          <button className="square" onClick={() => this.setState({value: 'X'})}>
            {this.state.value}
          </button>
        );
      }
}

export default Square;