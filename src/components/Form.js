import React, { Component } from "react";
import Options from "./Options";

class Form extends Component {
  render() {
    console.log(this.props);
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <Options
          options={this.props.options}
          updateFeature={this.props.updateFeature}
          selected={this.props.selected}
          USCurrencyFormat={this.props.USCurrencyFormat}
        />
      </form>
    );
  }
}

export default Form;
