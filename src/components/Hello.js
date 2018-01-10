import React, { Component } from 'react';
import Header from './Header';

export default class Hello extends Component {
  state = {
    name: '',
  };

  onChange = e => {
    const name = e.target.value;
    this.setState({ name: '💩' });
  };

  handleClick = e => {
    e.preventDefault();

  };

  render() {
    return (
      <div className="container-fluid text-center">
        <Header name={this.state.name} />
        <div>
          <input
            type="text"
            placeholder="Type your name here"
            class="col-sm-6 col-sm-offset-3"
            value={this.state.name}
            onChange={this.onChange}
          />
          <div
            className="row justify-content-center"
            style={{ margin: '40px 0' }}
          >
          {/**
           * @to-do Add a button element
           * @to-do the button text should be the word Clear
           * @to-do Add the following CSS Bootstrap classes to the button - "btn btn-lg btn-danger col-sm-2 col-sm-offset-5"
           * @to-do add an onClick event to the button that calls the handleClick method
           * HINT - the handleClick method should clear any text inside the text input
           * @to-do delete this big ugly comment including the surrounding braces. (now you know how to comment inside JSX 😎)
           */}
          </div>
        </div>
      </div>
    );
  }
}
