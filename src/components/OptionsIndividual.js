import React, { Component } from "react";

class OptionsIndividual extends Component {
  render() {
    return (
      <>
        <OptionsIndividual
          options={this.props.options}
          updateFeature={this.props.updateFeature}
          selected={this.props.selected}
          USCurrencyFormat={this.props.USCurrencyFormat}
        />
      </>
    );
  }
}

export default OptionsIndividual;
