import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

const Index = ({ index, data }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h3">{data.name}</CardTitle>
        <hr />

        <Col md="12">
          <Row>
            <Col md="6">
              <h5>Birth year</h5>
            </Col>
            <Col md="6">{data.birth_year}</Col>
          </Row>
        </Col>

        <Col md="12">
          <Row>
            <Col md="6">
              <h5>Eye color</h5>
            </Col>
            <Col md="6">{data.eye_color}</Col>
          </Row>
        </Col>
        <Link
          className="btn btn-primary mt-4"
          to={`/people-details/${index + 1}`}
        >
          See More
        </Link>
      </CardBody>
    </Card>
  );
};

export default Index;
