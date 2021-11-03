import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ticketsStyles from "../../styles/mainpage/tickets.module.css";
import AboutStyles from "../../styles/mainpage/about.module.css";

const Tickets = () => (
  <section id="tickets" className={ticketsStyles.section}>
    <Container>
      <div
        className={`border border-5 border-white px-2 py-4 ${ticketsStyles.CountdownContainer}`}
      >
        <Row>
          <Col>
            <Row className={`h1 ${`h1 ${AboutStyles.CountdownRow}`}`}>03</Row>
            <Row className={`h4 ${AboutStyles.CountdownRow}`}>Dias</Row>
          </Col>

          <Col>
            <Row className={`h1 ${AboutStyles.CountdownRow}`}>08</Row>
            <Row className={`h4 ${AboutStyles.CountdownRow}`}>Palestras</Row>
          </Col>

          <Col>
            <Row className={`h1 ${AboutStyles.CountdownRow}`}>02</Row>
            <Row className={`h4 ${AboutStyles.CountdownRow}`}>Workshops</Row>
          </Col>

          <Col>
            <Row className={`h1 ${AboutStyles.CountdownRow}`}>04</Row>
            <Row className={`h4 ${AboutStyles.CountdownRow}`}>Painéis</Row>
          </Col>
        </Row>
      </div>
      <div>
        <Row>
          <a
            className={ticketsStyles.signUp}
            target="_blank"
            rel="noopener noreferrer"
          >
            Incrições em breve
          </a>
        </Row>
      </div>
    </Container>
  </section>
);

export default Tickets;
