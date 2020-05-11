import React, { Component } from "react";
import Summary from "./Summary";
import Total from "./Total";

class SummaryList extends Component {
  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <Summary
          selected={this.props.selected}
          USCurrencyFormat={this.props.USCurrencyFormat}
        />
        <Total
          selected={this.props.selected}
          USCurrencyFormat={this.props.USCurrencyFormat}
        />
      </section>
    );
  }
}

export default SummaryList;
