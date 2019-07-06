import React, { Component } from "react";
import { Link } from "react-router-dom";
import moduleCss from "./index.module.scss";

export default class extends Component {
  render() {
    return (
      <div className={moduleCss["page-header"]}>
        <div className={moduleCss["page-center"]}>
          <div className={moduleCss["page-logo"]}>
            <Link to="/">
              <img
                src="//resources.jsmo.xin/templates/upload/1164/201611/1479704672537.png"
                alt=""
              />
            </Link>
          </div>
          <ul className={moduleCss["page-nav"]}>
            <li className={moduleCss["active"]}>
              <Link to="/">首页</Link>
            </li>
            <li>
              <Link to="/product">产品</Link>
            </li>
            <li>
              <Link to="/about">关于我们</Link>
            </li>
            <li>
              <Link to="/idea">愿景</Link>
            </li>
            <li>
              <Link to="/contact">联系我们</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
