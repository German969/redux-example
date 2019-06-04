import React from 'react';
import Sumador from "./Sumador";
import { connect } from 'react-redux';

class Contador extends React.Component {
  render () {
    return (
        <div className="Contador">
          <div>
            {this.props.count}
          </div>
          <Sumador />
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Contador);
