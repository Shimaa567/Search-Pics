import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: "",
  };
  //Another way to call event handler
  //instead of refernce a callback func we use
  // <input type="text" onChange={(e) => console.log(e.target.value)} />

  //<input type="text" onChange={this.onInputChange} />
  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
