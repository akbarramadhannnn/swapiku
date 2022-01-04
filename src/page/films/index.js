import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import { CardFilms } from "../../components";

import { ApiGetFilmsList } from "../../api";

const Index = () => {
  const [dataFilms, setDataFilms] = useState([]);
  useEffect(() => {
    ApiGetFilmsList().then((response) => {
      setDataFilms(response.results);
    });
  }, []);
  return (
    <Row>
      {dataFilms.map((film, i) => (
        <Col key={i} md="6" className="mb-4">
          <CardFilms data={film} />
        </Col>
      ))}
    </Row>
  );
};

export default Index;
