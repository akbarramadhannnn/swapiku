import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Row,
  Col,
} from "reactstrap";

import { ApiGetPeopleList, ApiGetFilmsListByLink } from "../../api";

const Index = (props) => {
  const id = props.match.params.id;
  const [dataPeople, setDataPeople] = useState({});
  const [filmList, setFilmList] = useState([]);

  useEffect(() => {
    ApiGetPeopleList(id).then((response) => {
      for (let i = 0; i < response.films.length; i++) {
        ApiGetFilmsListByLink(response.films[i]).then((response) => {
          setFilmList((oldState) => [...oldState, response]);
        });
      }
      setDataPeople(response);
    });
  }, [id]);

  return (
    <Fragment>
      <h2>{dataPeople.name}</h2>
      <Card>
        <CardBody>
          <Col md="12">
            <Row>
              <Col md="2">
                <h5>Birth year</h5>
              </Col>
              <Col md="2">{dataPeople.birth_year}</Col>
            </Row>
          </Col>

          <Col md="12">
            <Row>
              <Col md="2">
                <h5>Eye color</h5>
              </Col>
              <Col md="2">{dataPeople.eye_color}</Col>
            </Row>
          </Col>

          <Col md="12">
            <Row>
              <Col md="2">
                <h5>Film List</h5>
              </Col>
              <Col md="10">
                <Row>
                  {filmList.map((film, i) => (
                    <Col key={i} md="4" className="mb-4">- {film.title}</Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Col>
        </CardBody>
      </Card>

      <Link to="/people" className="btn btn-warning mt-3">
        Back
      </Link>
    </Fragment>
  );
};

export default Index;
