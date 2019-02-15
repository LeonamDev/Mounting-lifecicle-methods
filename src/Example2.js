import React from 'react';

export class Example2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: '' };
  }

  componentWillMount() {
    this.setState({ text: 'Hello world' });
  }

  componentDidMount() {
    alert("componentDidMount call")
  }

  render() {
    return <h1>{this.state.text}</h1>;
  }
}

export default Example2;

