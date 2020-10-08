import React from "react";
import { connect } from "react-redux";
import { changeTaskValue } from "../../store";

class Input extends React.Component {
  handleChange(e) {
    const { dispatch } = this.props;
    const { value } = e.target;

    dispatch(changeTaskValue(value));
  }
  render() {
    const { label } = this.props;
    const { taskValue } = this.props;
    return (
      <>
        <label>
          {label}
          <input
            onChange={(e) => this.handleChange(e)}
            value={taskValue}
            type="text"
          />
        </label>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    taskValue: state.taskValue
  };
}

export default connect(mapStateToProps)(Input);

//Aca necesitaría recibir el input del ususario y transformarla en una prop. y pasarsela al mapStateToProps(state)

/**
 * Si trabajamos con Redux en nuestro componente, tenemos que importar {connect} de react-redux y usarlo como HOC en nuestro export.
 *
 * Si solo queremos mandarle info a nuestro estado:
 *
 * export default connect()(NombreComponente)
 *
 * Si queremos **LEER** información de nuestro estado
 *
 * function mapStateToProps() {
 *  return{}
 * }
 * export default connect(mapStateToProps)(NombreComponente)
 */
