import React, { Component } from "react";
import Banner from "../../components/Banner";
import "./index.scss";

export default class extends Component {
  render() {
    return (
      <div className="index-page">
        <Banner />
      </div>
    );
  }
}
