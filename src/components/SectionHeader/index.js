import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 50px;
`;

const SectionTitle = styled.div`
  font-size: 20px;
  color: #444;
`;

const Title = styled.div`
  font-size: 20px;
  color: #444;
`;

const SubTitle = styled.div`
  font-family: HELVETICANEUELTPRO-THEX, "微软雅黑";
  text-align: left;
  font-size: 16px;
  color: #bdbdbd;
  margin-top: 4px;
`;

const Category = styled.div`
  a {
    margin: 0 16px;
    line-height: 16px;
    height: 16px;
    color: #616161;
    display: inline-block;
    transition: all 0.3s ease-out 0s;
    font-size: 14px;

    &:hover {
      color: #34c9fb;
    }
  }
`;

export default class extends Component {
  render() {
    return (
      <SectionHeader>
        <SectionTitle>
          <Title>产品</Title>
          <SubTitle>All Product</SubTitle>
        </SectionTitle>
        <Category>
          <Link to="/">艺术设计</Link>
          <Link to="/">摄影摄像</Link>
          <Link to="/">建筑园林</Link>
          <Link to="/">数码家居</Link>
          <Link to="/">医疗教育</Link>
          <Link to="/">企业集团</Link>
        </Category>
      </SectionHeader>
    );
  }
}
