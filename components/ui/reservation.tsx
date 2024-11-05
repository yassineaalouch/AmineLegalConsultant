import React, { FC } from "react";
import { InlineWidget } from "react-calendly";

const Reservation: FC = () => {
    return (
        <div className="bg-white">
            <InlineWidget url="https://calendly.com/amine-legal-consulting" />
        </div>
    );
};

export default Reservation;
