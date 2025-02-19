import React, { Component } from 'react';
import { connect } from 'react-redux';

class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state.name)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add band</label>
            <input type="text" onChange={this.handleChange} value={this.state.name} />
          </p>
          <input type="submit" />
        </form>
        {this.state.name}
      </div>
    )
  }
}

export default BandInput;