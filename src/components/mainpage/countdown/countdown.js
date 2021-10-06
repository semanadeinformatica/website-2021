import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import AboutStyles from "../../../styles/mainpage/about.module.css"

const Countdown = () => {
  return (
      <Row>
      <Col>
        <Row className={AboutStyles.CountdownRow}>
          3
        </Row>
        <Row className={AboutStyles.CountdownRow}>
          Days
        </Row>
      </Col>

      <Col>
        <Row className={AboutStyles.CountdownRow}>
          3
        </Row>
        <Row className={AboutStyles.CountdownRow}>
          Hours
        </Row>
      </Col>

      <Col>
        <Row className={AboutStyles.CountdownRow}>
          3
        </Row>
        <Row className={AboutStyles.CountdownRow}>
          Minutes
        </Row>
      </Col>

      <Col>
        <Row className={AboutStyles.CountdownRow}>
          3
        </Row>
        <Row className={AboutStyles.CountdownRow}>
          Seconds
        </Row>
      </Col>
      </Row>
  )
}

export default Countdown
