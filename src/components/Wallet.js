import React, { Component } from "react";
import { connect } from "react-redux";
import { addBalance } from "../actions/balance";

export class Wallet extends Component {
  state = {
    balance: undefined
  };

  updateBalance = event => {
    this.setState({
      balance: parseInt(event.target.value, 10)
    });
  };

  addBalance = () => {
    this.props.addBalance(this.state.balance);
  };

  subtractBalance = () => {
    this.props.subtractBalance(this.state.balance);
  };

  render() {
    return (
      <div data-test="wallet-component">
        <h3>
          Wallet <span data-test="balance-element">{this.props.balance}</span>
        </h3>
        <br />
        <input
          data-test="input-element"
          type="number"
          onChange={this.updateBalance}
        />
        <button data-test="add-button" onClick={this.addBalance}>
          Add
        </button>
        <button data-test="subtract-button" onClick={this.subtractBalance}>
          Add
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { balance } = state.balance;
  return { balance };
}

export default connect(mapStateToProps, { addBalance })(Wallet);
