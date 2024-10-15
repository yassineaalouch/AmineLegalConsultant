import React from "react";
import { InlineWidget } from "react-calendly";
import HowToDoIt from "./HowToDoIt";

const Reservation = () => {
  return (
    <div className="bg-white">
      <HowToDoIt/>
      <InlineWidget url="https://calendly.com/amine-legal-consulting" />
    </div>
  );
};

export default Reservation;