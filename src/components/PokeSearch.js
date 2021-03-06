import React from 'react';

class PokeSearch extends React.Component {
  constructor() {
    super();
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  
  handleOnChange(event) {
    this.props.onChange && this.props.onChange(event.target.value);
  }

  render() {
    const style = {
      height: "30px",
      width: "25%",
      fontSize: "18px",
      border: "2px solid rgb(235, 27, 42)",
      borderRadius: "5px",
      veticalAlign: "top",
      paddingLeft: "10px",
      outline: "none",
      position: "sticky",
      top: "0"
    }
    return (
      <input placeholder="Search by Name or ID" style={style} onChange={this.handleOnChange}></input>
    );
  }
}

export default PokeSearch;