import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk"; //Para poder manejar acciones asincrónicas (todas nuestras acciones)

const initialState = {
  tasks: [],
  taskValue: ""
};

// 1er parametro: que informacion tiene el estado.
// 2do parámetro: el reducer va a actuar en base a la action que la llama.
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_TASK_VALUE":
      return {
        ...state,
        taskValue: action.value
      };
    case "ADD_TASK":
      const {tasks, taskValue} = state;
      //const newTask = [...state.task, state.taskValue]
      return {
        ...state,
        tasks: [...tasks, taskValue],
        taskValue: ""
      };
    default:
      return state;
  }
};

export const changeTaskValue = (inputValue) => (dispatch) => {
  return dispatch({ type: "CHANGE_TASK_VALUE", value: inputValue });
};

export const addTask = () => (dispatch) => {
  return dispatch({ type: "ADD_TASK" });
};

export function initializeStore() {
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware));
}
