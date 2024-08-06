import React, { Component } from 'react';

class ComponentDidMount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    console.log('componentDidMount: Component has been mounted');
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <p>Data: {data ? JSON.stringify(data) : 'Loading...'}</p>
      </div>
    );
  }
}

export default ComponentDidMount;
