import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export default class extends Component {
  render() {
    return (
      <div className="section-header">
        <div className="section-title">
          <div className="title">产品</div>
          <div className="subtitle">All Product</div>
        </div>
        <div className="section-category">
          <Link to="/">艺术设计</Link>
          <Link to="/">摄影摄像</Link>
          <Link to="/">建筑园林</Link>
          <Link to="/">数码家居</Link>
          <Link to="/">医疗教育</Link>
          <Link to="/">企业集团</Link>
        </div>
      </div>
    );
  }
}
