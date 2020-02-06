import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBitcoin } from "../actions/bitcoin";

export class Loot extends Component {
  componentDidMount() {
    this.props.fetchBitcoin();
  }
  render() {
    return (
      <div data-test="loot-component">
        <h3>Bitcoin balance</h3>
        <h4 data-test="bitcoin-element">{this.props.bitcoin}</h4>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { bitcoin } = state;
  return { bitcoin };
}

export default connect(mapStateToProps, fetchBitcoin)(Loot);
