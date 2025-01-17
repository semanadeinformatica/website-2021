import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutStyles from "../../../styles/mainpage/about.module.css";

class Countdown extends React.Component {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  countDownDate;

  constructor(props) {
    super(props);
    this.countDownDate = new Date("Nov 15, 2021 14:30:00").getTime();
    let now = new Date().getTime();
    let distance = this.countDownDate - now;
    this.state = {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000)
    };
  }

  updateRemainingTime() {
    let now = new Date().getTime();
    let distance = this.countDownDate - now;
    this.setState({
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000)
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.updateRemainingTime();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Row>
        <Col className={AboutStyles.countDownCol}>
          <Row className={AboutStyles.countDownRow}>{this.state.days}</Row>
          <Row className={AboutStyles.countDownRow}>Dias</Row>
        </Col>

        <Col className={AboutStyles.countDownCol}>
          <Row className={AboutStyles.countDownRow}>{this.state.hours}</Row>
          <Row className={AboutStyles.countDownRow}>Horas</Row>
        </Col>

        <Col className={AboutStyles.countDownCol}>
          <Row className={AboutStyles.countDownRow}>{this.state.minutes}</Row>
          <Row className={AboutStyles.countDownRow}>Minutos</Row>
        </Col>

        <Col className={AboutStyles.countDownCol}>
          <Row className={AboutStyles.countDownRow}>{this.state.seconds}</Row>
          <Row className={AboutStyles.countDownRow}>Segundos</Row>
        </Col>
      </Row>
    );
  }
}

export default Countdown;
