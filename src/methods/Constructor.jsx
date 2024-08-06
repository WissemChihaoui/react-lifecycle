import React, { Component } from 'react';

class Constructor extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      count: 0
    };
    // Bind methods
    this.incrementCount = this.incrementCount.bind(this);
    console.log('Constructor: Initializing state');
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default Constructor;
