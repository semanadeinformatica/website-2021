import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import AboutStyles from "../../../styles/mainpage/about.module.css"

var countDownDate = new Date("Nov 15, 2021 00:00:00").getTime();

var now = new Date().getTime();

var distance = countDownDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

const Countdown = () => {
  return (
      <Row>
      <Col>
        <Row className={AboutStyles.CountdownRow}>
          {days}
        </Row>
        <Row className={AboutStyles.CountdownRow}>
          Days
        </Row>
      </Col>

      <Col>
        <Row className={AboutStyles.CountdownRow}>
          {hours}
        </Row>
        <Row className={AboutStyles.CountdownRow}>
          Hours
        </Row>
      </Col>

      <Col>
        <Row className={AboutStyles.CountdownRow}>
          {minutes}
        </Row>
        <Row className={AboutStyles.CountdownRow}>
          Minutes
        </Row>
      </Col>

      <Col>
        <Row className={AboutStyles.CountdownRow}>
          {seconds}
        </Row>
        <Row className={AboutStyles.CountdownRow}>
          Seconds
        </Row>
      </Col>
      </Row>
  )
}

export default Countdown
