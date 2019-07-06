import React, { Component } from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../SectionHeader";
import "./index.scss";

function Item() {
  return (
    <Link to="/" className="product-item">
      <div className="product-item-wrapper animated">
        <img
          src="//resources.jsmo.xin/templates/upload/1164/201711/1510656713993.jpg"
          alt=""
        />
        <div className="product-item-bottom">
          <div className="product-item-title">
            <div className="title">集团企业网站</div>
            <div className="subtitle">
              企业官网 | 网站模板 | 家居网站 | 原创品牌 | 独立设计
            </div>
          </div>
          <div className="product-item-icon"></div>
        </div>
      </div>
    </Link>
  );
}

export default class extends Component {
  render() {
    return (
      <div className="product-section">
        <SectionHeader />
        <div className="product-list">{Item()}</div>
      </div>
    );
  }
}
