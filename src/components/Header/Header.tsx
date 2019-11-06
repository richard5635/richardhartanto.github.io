import * as React from "react";
import { Container, Header, Segment, Icon } from "semantic-ui-react";
import logo from "./../../../data/icons/logo.svg";

export default () => {
  return (
    <div className="site-header">
      <a href="/"><img className="logo" src={logo}></img></a>
    </div>
  );
};
