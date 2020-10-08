import React from "react";
import { connect } from "react-redux";
class TaskList extends React.Component {
  render() {
    const { tasks } = this.props;
    return (
      <ul>
        {tasks.map((task, key) => {
          return <li key={key}>{task}</li>;
        })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

export default connect(mapStateToProps)(TaskList);
