import React, { Component } from "react";

class OtroRestador extends Component {
  constructor (props) {
    super(props);

    this.state = {
      count: 1
    }
  }

  render() {
    return (
        <div className="OtroSumador">
          <input className="otro-boton" type={"button"} value={'Yo tambien quiero -'} onClick={this.decrementar.bind(this)}/>
          <span className="count-minor">{this.state.count}</span>
        </div>
    );
  }

  decrementar(e) {
    let count = this.state.count;
    this.setState({
      count: count - 1
    });
  }

}

export default OtroRestador;