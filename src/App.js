import React from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import TaskList from "./components/TaskList";
import { connect } from "react-redux";
import { addTask } from "./store";
import {useDispatch,useSelector,useStore} from 'react-redux' 
class App extends React.Component {
  handleCLick() {
    const { dispatch } = this.props;
    dispatch(addTask());
  }
  render() {
    return (
      <>
        <Input label="Escribí las tareas acá: " />
        <Button label="Agregar tarea" />
        <TaskList />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

export default connect(mapStateToProps)(App);

/*
function mapStateToProps(state) {
  console.log(state);
  return {
    tasks: state.tasks
  };
}

export default connect(mapStateToProps)(App);

 HOC -> High Order Component -> Es lo mismo que hacer 
 
 */
