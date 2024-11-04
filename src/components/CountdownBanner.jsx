import Countdown from "react-countdown";
import PropTypes from "prop-types";

import { useState } from "react";
import Button from "./Button";

// TimeBox component

function TimeBox({ time, label }) {
  return (
    <div key={label} className="time-box flex flex-col items-center">
      <h4 className="time mb-2 w-[3.75em] text-center text-xl lg:text-2xl">
        {time}
      </h4>
      <span className="label text-xs">{label}</span>
    </div>
  );
}

TimeBox.propTypes = {
  time: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

function CountdownBanner({ displaySection }) {
  const [showCountdown, setShowCountdown] = useState(displaySection);

  // let complete date = 25/11/2024
  let completeDate = new Date("2024-11-25T23:59:59");
  const convertDateToMilliseconds = (date) => {
    return new Date(date).getTime();
  };

  const getDateDifference = (startDate, endDate) => {
    const start = convertDateToMilliseconds(startDate);
    const end = convertDateToMilliseconds(endDate);
    return end - start;
  };

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      //   setShowCountdown(false);
      return (
        <div>
          <Button type="secondary">Shop Now</Button>
        </div>
      );
    } else {
      return (
        <div className="flex w-fit items-center gap-0 px-5 lg:px-10">
          <TimeBox time={days} label="DAYS" />
          <TimeBox time={hours} label="HOURS" />
          <TimeBox time={minutes} label="MINUTES" />
          <TimeBox time={seconds} label="SECONDS" />
        </div>
      );
    }
  };
  return (
    <div
      id="countdown-section"
      className="mx-auto flex h-fit justify-center bg-gray-950 px-5 py-7 text-white md:px-8 lg:py-5"
    >
      <div className="@container/content flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-0">
        <h3 className="w-fit text-center text-xl lg:text-2xl">
          Annual Sales Event
        </h3>
        <Countdown
          date={Date.now() + getDateDifference(new Date(), completeDate)}
          renderer={renderer}
        />
        <div className="subscription-reference grid w-fit grid-cols-[1fr_auto] items-center justify-center gap-3 lg:gap-10">
          <p className="text-wrap text-center text-sm">
            Save on all best selling and exclusive styles
          </p>
          <Button type="secondary">GET NOTIFIED</Button>
        </div>
      </div>
    </div>
  );
}

export default CountdownBanner;
