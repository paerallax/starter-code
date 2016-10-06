'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Clicker extends React.Component {
  constructor() {
    super();
    this.state = {counter : 0};
    this.click_handler = this.click_handler.bind(this);
  }

  click_handler(e) {
    console.log(e);
    this.setState({counter: this.state.counter + 1});
  }

  render() {
    return (
      <button onClick={this.click_handler}>
	Click me please, counter is: {this.state.counter}
      </button>
    );
  }
};

ReactDOM.render(<Clicker />,
		document.getElementById('react-container'));
