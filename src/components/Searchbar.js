import React, { Component } from 'react';

class Searchbar extends Component {

  state = {
    city: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.changeCityFunc(this.state.city)
  }


  render() {
    let fontColor = {
      color: 'white'
    }
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <h1 style={fontColor}>Weather Time</h1>

      <form
        onSubmit = {this.handleSubmit}
        className="form-inline my-2 my-lg-0">
        <div className="form-group mx-sm-3 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="ex: London"
            onChange = {e => this.setState({city:e.target.value})}/>
        </div>
      <button type="submit" className="btn btn-primary mb-2">Search City</button>
    </form>

    </nav>

    );
  }
}

export default Searchbar;
