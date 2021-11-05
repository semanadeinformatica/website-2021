import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ParticipateStyles from "../../styles/utils/participate.module.css";

const OpenSoon = ({ children }) => {
  return (
    <div className={ParticipateStyles.participateSection + " container-fluid"}>
      <Container>
        <Row>
          <Col xs="12" className={ParticipateStyles.colContent}>
            {children}
            <Button
              outline
              href="https://www.eventbrite.pt/e/bilhetes-semana-de-informatica-2021-205684105697"
              className={ParticipateStyles.participateButton}
            >
              Inscrições aqui!
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OpenSoon;
