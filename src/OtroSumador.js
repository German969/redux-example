import React, { Component } from "react";

class OtroSumador extends Component {
  constructor (props) {
    super(props);

    this.state = {
      count: 1
    }
  }

  render() {
    return (
        <div className="OtroSumador">
          <input className="otro-boton" type={"button"} value={'Yo tambien quiero +'} onClick={this.incrementar.bind(this)}/>
          <span className="count-minor">{this.state.count}</span>
        </div>
    );
  }

  incrementar(e) {
    let count = this.state.count;
    this.setState({
      count: count + 1
    });
  }

}

export default OtroSumador;