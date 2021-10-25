import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import AboutStyles from "../../../styles/mainpage/about.module.css"


class Countdown extends React.Component {
  state = {
    days: 0,
    hours:0,
    minutes:0,
    seconds:0
  }
  countDownDate;

  constructor(){
    super();
    this.countDownDate = new Date("Nov 15, 2021 00:00:00").getTime();
    this.updateRemainingTime();
  }

  updateRemainingTime() {

    var now = new Date().getTime();

    var distance = this.countDownDate - now;
    
    this.setState({
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds:Math.floor((distance % (1000 * 60)) / 1000)
    });

  }

  componentDidMount() {
    this.interval = setInterval(()=>{
      this.updateRemainingTime();
    },1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render(){
    return (
      <Row>
      <Col>
        <Row className={AboutStyles.CountdownRow}>
          {this.state.days}
        </Row>
        <Row className={AboutStyles.CountdownRow}>
          Days
        </Row>
      </Col>

      <Col>
        <Row className={AboutStyles.CountdownRow}>
          {this.state.hours}
        </Row>
        <Row className={AboutStyles.CountdownRow}>
          Hours
        </Row>
      </Col>

      <Col>
        <Row className={AboutStyles.CountdownRow}>
          {this.state.minutes}
        </Row>
        <Row className={AboutStyles.CountdownRow}>
          Minutes
        </Row>
      </Col>

      <Col>
        <Row className={AboutStyles.CountdownRow}>
          {this.state.seconds}
        </Row>
        <Row className={AboutStyles.CountdownRow}>
          Seconds
        </Row>
      </Col>
      </Row>
  )
  }
}

export default Countdown
