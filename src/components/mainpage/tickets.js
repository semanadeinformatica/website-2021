import React from "react"
import Container from "react-bootstrap/Container"
import ticketsStyles from "../../styles/mainpage/tickets.module.css"
import Countdown from "./countdown/countdown"

const Tickets = () => (
  <section id="tickets" className={ticketsStyles.section}>
    <Container>
      <div className={ticketsStyles.CountdownContainer}>
        <Countdown/>
      </div>
      <a
        className={ticketsStyles.signUp}
        href="https://sinf2020.webex.com/sinf2020/onstage/g.php?PRID=9f676374423b492057001485c2a6be9e"
        target="_blank"
        rel="noopener noreferrer"
      >
        Inscreve-te
      </a>
    </Container>
  </section>
)

export default Tickets
