import React, { Component } from "react";
import Multiplicador from './Multiplicador';
import Divisor from './Divisor';

class Sumador extends Component {
  constructor (props) {
    super(props);

    this.state = {
      count: 0
    }
  }

  render() {
    return (
        <div className="Sumador">
          <div className="Sumador-container">
            <input className="boton" type={"button"} value={'+'} onClick={this.sumar.bind(this)}/>
            <span className="count-minor">{this.state.count}</span>
            <input className="boton" type={"button"} value={'-'} onClick={this.restar.bind(this)}/>
          </div>
          <div style={{clear: "both"}}></div>
          <Multiplicador />
          <Divisor />
        </div>
    );
  }

  sumar(e) {
    let count = this.state.count;
    this.setState({
      count: count + 1
    });
  }

  restar(e) {
    let count = this.state.count;
    this.setState({
      count: count - 1
    });
  }
}

export default Sumador;