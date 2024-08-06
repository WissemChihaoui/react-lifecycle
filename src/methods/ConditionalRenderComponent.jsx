import React, { Component } from 'react';

class ConditionalRenderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('______________________');
    console.log('Next State is : ', nextState.count);
    // Prevent re-rendering if the count is even
    return nextState.count % 2 !== 0;
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log('Render: Rendering component');
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default ConditionalRenderComponent;
