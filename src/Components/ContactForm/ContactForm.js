import React, { Component } from 'react';
import T from 'prop-types';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  propTypes = {
    submitContactInfo: T.func.isRequired,
  };

  handleInputChange = e => {
    e.preventDefault();
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submitContactInfo(this.state.name, this.state.number);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Name</h3>
          <input
            type="name"
            value={name}
            onChange={this.handleInputChange}
            name="name"
          />
          <h3>Number</h3>
          <input
            type="number"
            value={number}
            onChange={this.handleInputChange}
            name="number"
          />
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
