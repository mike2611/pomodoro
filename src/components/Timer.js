import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(
    {
      minutes: 25,
      seconds: 0,
    });

  useEffect(() => {
    const updateCounter = () => {
      if( timeLeft.seconds === 0 ) {
        return (
          {minutes: timeLeft.minutes - 1, seconds: 59}
        );
      }

      return (
        {minutes: timeLeft.minutes, seconds: timeLeft.seconds - 1}
      );
    }

    setTimeout(() => {
      setTimeLeft(updateCounter);
    }, 1000)
  }, [timeLeft])

  
  return(
  <div class="section-container d-flex justify-content-center align-items-center">
    <div class="clock-container">
      <h2 class="text-white text-center mb-3">Next Short Break </h2>
      <div class="clock">
        <div class="minutes">
          <div>
            <div>{timeLeft.minutes}</div>
          </div>
        </div>
        <div class="tick">:</div>
        <div class="seconds">
          <div>
            <div>{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}</div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-5">
        <button class="mx-2 btn btn-warning btns-clock py-3">RESET</button>
        <button class="mx-2 btn btn-primary btns-clock py-3">START</button>
      </div>
    </div>
  </div>
  );
};

export default (Timer);
