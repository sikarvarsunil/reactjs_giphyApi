import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchKey: ''
    }
  }

  handleSearch(searchKey) {
    this.setState({ searchKey })
    this.props.onChange(searchKey)
  }

  render() {
    return (
      <div className="form-element">
        <input className="form-input" type="text" placeholder="Search animated gif image" value={this.state.searchKey} onChange={(e) => this.handleSearch(e.target.value)}/>
      </div>
    )
  }
}

export default Search
