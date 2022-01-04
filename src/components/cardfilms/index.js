import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";

const Index = ({ data }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h3">{data.title}</CardTitle>
        <hr />

        <Col md="12">
          <Row>
            <Col md="6">
              <h5>Release Date</h5>
            </Col>
            <Col md="6">{data.release_date}</Col>
          </Row>
        </Col>

        <Col md="12">
          <Row>
            <Col md="6">
              <h5>Director</h5>
            </Col>
            <Col md="6">{data.director}</Col>
          </Row>
        </Col>

        <Col md="12">
          <Row>
            <Col md="6">
              <h5>Producer</h5>
            </Col>
            <Col md="6">{data.producer}</Col>
          </Row>
        </Col>
        <CardText>{data.opening_crawl}</CardText>
      </CardBody>
    </Card>
  );
};

export default Index;
