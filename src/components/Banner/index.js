import React, { Component } from "react";
import "./index.scss";

export default class extends Component {
  state = {
    cur: 0,
    animate: true
  };

  componentDidMount() {
    setInterval(() => {
      console.log(this.state);
      let cur = this.state.cur + 1;
      this.setState({
        animate: true,
        cur
      });
    }, 10000);
  }

  onTransitionEnd = () => {
    if (this.state.cur >= 2) {
      this.setState({
        cur: 0,
        animate: false
      });
    }
  };
  render() {
    const { cur, animate } = this.state;
    return (
      <div className="banner">
        <div
          className="banner-images"
          style={{
            transform: `translateX(${-100 * cur}%)`,
            transition: animate ? `transform ease-out .3s` : "none"
          }}
          onTransitionEnd={this.onTransitionEnd}
        >
          <div
            className="banner-image"
            style={{
              backgroundImage:
                "url(//resources.jsmo.xin/templates/upload/1164/201806/1528352325458.png)"
            }}
          />
          <div
            className="banner-image"
            style={{
              backgroundImage:
                "url(//resources.jsmo.xin/templates/upload/1164/201806/1528352315377.png)"
            }}
          />
          <div
            className="banner-image"
            style={{
              backgroundImage:
                "url(//resources.jsmo.xin/templates/upload/1164/201806/1528352325458.png)"
            }}
          />
        </div>
        <div className="banner-dots">
          {Array(2)
            .fill(0)
            .map((i, index) => {
              return (
                <div
                  className={"banner-dot" + (index === cur ? " active" : "")}
                  key={index}
                />
              );
            })}
        </div>
      </div>
    );
  }
}
