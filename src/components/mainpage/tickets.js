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
        className={`rounded border border-4 border-white px-2 py-4 ${ticketsStyles.CountdownContainer}`}
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
            href="https://sinf2020.webex.com/sinf2020/onstage/g.php?PRID=9f676374423b492057001485c2a6be9e"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inscreve-te
          </a>
        </Row>
      </div>
    </Container>
  </section>
);

export default Tickets;
