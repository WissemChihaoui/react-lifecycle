import React, { Component } from 'react';

class ComponentWillUnmount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component is about to be unmounted');
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChild: true
    };
  }

  toggleChild = () => {
    this.setState({ showChild: !this.state.showChild });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleChild}>
          {this.state.showChild ? 'Hide' : 'Show'} Child Component
        </button>
        {this.state.showChild && <ComponentWillUnmount />}
      </div>
    );
  }
}

export default ParentComponent;
