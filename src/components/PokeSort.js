import React from 'react'

class PokeSort extends React.Component {
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
      backgroundColor: "white",
      border: "2px solid rgb(235, 27, 42)",
      borderRadius: "5px",
      verticalAlign: "top",
      outline: "none",
    }
    return (
      <select style={style} onChange={this.handleOnChange}>
        <option value='Sort by Ascending ID'>Sort by Ascending ID</option>
        <option value='Sort by Descending ID'>Sort by Descending ID</option>
        <option value='Sort A-Z'>Sort A-Z</option>
        <option value='Sort Z-A'>Sort Z-A</option> 
      </select>
    )
  }
}

export default PokeSort;