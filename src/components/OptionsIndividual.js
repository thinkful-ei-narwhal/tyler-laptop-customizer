import React, { Component } from "react";
import slugify from "slugify";
import Options from "./Options";

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
