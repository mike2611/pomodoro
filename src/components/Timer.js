import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(
    {
      minutes: 25,
      seconds: 0,
    });

  const [start, setStart] = useState(false);

  useEffect(() => {
    const updateCounter = () => {
      console.log(start)
      if( timeLeft.seconds === 0) {
        return (
          {minutes: timeLeft.minutes - 1, seconds: 59}
        );
      }

      return (
        {minutes: timeLeft.minutes, seconds: timeLeft.seconds - 1}
      );
    }

    setTimeout(() => {
      if(start) {
        setTimeLeft(updateCounter);
      }
    }, 1000)
  }, [start, timeLeft])

  
  return(
  <div className="section-container d-flex justify-content-center align-items-center">
    <div className="clock-container">
      <h2 className="text-white text-center mb-3">Next Short Break </h2>
      <div className="clock">
        <div className="minutes">
          <div>
            <div>{timeLeft.minutes}</div>
          </div>
        </div>
        <div className="tick">:</div>
        <div className="seconds">
          <div>
            <div>{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}</div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button className="mx-2 btn btn-warning btns-clock py-3">RESET</button>
        <button className="mx-2 btn btn-primary btns-clock py-3" onClick={() => setStart((prevState) => !prevState)}>START</button>
      </div>
    </div>
  </div>
  );
};

export default (Timer);
