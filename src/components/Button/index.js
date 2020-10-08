import React from "react";
import { connect } from "react-redux";
import { addTask } from "../../store";

class Button extends React.Component {
  handleClick() {
    const {dispatch} = this.props;
    dispatch(addTask())
    
  }
  render() {
    return (
      <>
        <button onClick={() => this.handleClick()}>Click</button>
      </>
    );
  }
}

export default connect()(Button);
