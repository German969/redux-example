import React, { Component } from "react";
import OtroRestador from './OtroRestador';

class Divisor extends Component {
  constructor (props) {
    super(props);

    this.state = {
      count: 60
    }
  }

  render() {
    return (
        <div className="Divisor">
          <input className="boton" type={"button"} value={'/2'} onClick={this.dividir2.bind(this)}/>
          <input className="boton" type={"button"} value={'/3'} onClick={this.dividir3.bind(this)}/>
          <span className="count-minor">{this.state.count}</span>
          <div>
            <OtroRestador />
          </div>
        </div>
    );
  }

  dividir2(e) {
    let count = this.state.count;
    this.setState({
      count: count / 2
    });
  }

  dividir3(e) {
    let count = this.state.count;
    this.setState({
      count: count / 3
    });
  }
}

export default Divisor;