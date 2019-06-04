import React, { Component } from "react";
import OtroSumador from "./OtroSumador";
import OtroRestador from "./OtroRestador";
import { connect } from 'react-redux';
import { increment, decrement } from './redux/actions';


class Sumador extends Component {
  render() {
    return (
        <div className="Sumador">
          <div className="Sumador-container">
            <input className="boton" type={"button"} value={'+'} onClick={this.sumar.bind(this)}/>
            <span className="count-minor">{this.props.count}</span>
            <input className="boton" type={"button"} value={'-'} onClick={this.restar.bind(this)}/>
          </div>
          <div style={{clear: "both"}}></div>
          <OtroSumador />
          <OtroRestador />
        </div>
    );
  }

  sumar(e) {
    this.props.increment();
  }

  restar(e) {
    this.props.decrement();
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

function mapDispatchToProps()  {
  return {
    increment,
    decrement
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sumador);