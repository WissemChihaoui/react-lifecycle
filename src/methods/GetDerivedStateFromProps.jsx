import React, { Component } from 'react';

class GetDerivedStateFromProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps: Syncing props to state if needed');
    if (props.initialCount !== state.count) {
      return {
        count: props.initialCount
      };
    }
    return null;
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default GetDerivedStateFromProps;
