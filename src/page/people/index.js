import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import { CardPeople } from "../../components";

import { ApiGetPeopleList } from "../../api";

const Index = () => {
  const [dataPeople, setDataPeople] = useState([]);
  useEffect(() => {
    ApiGetPeopleList().then((response) => {
      setDataPeople(response.results);
    });
  }, []);
  return (
    <Row>
      {dataPeople.map((people, i) => (
        <Col key={i} md="4" className="mb-4">
          <CardPeople index={i} data={people} />
        </Col>
      ))}
    </Row>
  );
};

export default Index;
