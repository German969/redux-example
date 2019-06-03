import React, { Component } from "react";
import OtroSumador from './OtroSumador';

class Multiplicador extends Component {
  constructor (props) {
    super(props);

    this.state = {
      count: 1
    }
  }

  render() {
    return (
        <div className="Multiplicador">
          <input className="boton" type={"button"} value={'*2'} onClick={this.multiplicar2.bind(this)}/>
          <input className="boton" type={"button"} value={'*3'} onClick={this.multiplicar3.bind(this)}/>
          <span className="count-minor">{this.state.count}</span>
        </div>
    );
  }

  multiplicar2(e) {
    let count = this.state.count;
    this.setState({
      count: count * 2
    });
  }

  multiplicar3(e) {
    let count = this.state.count;
    this.setState({
      count: count * 3
    });
  }
}

export default Multiplicador;
