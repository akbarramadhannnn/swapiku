import React, { Fragment } from "react";
import Header from "./header";
import { Container } from "reactstrap";

const Index = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Container className="mt-4">{children}</Container>
    </Fragment>
  );
};

export default Index;
