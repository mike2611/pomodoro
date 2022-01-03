import React, { useState } from 'react';
import Timer from './Timer';

const PomoTimer = () => {
  const [timeLeft, setTimeLeft] = useState
  (
    {
      minutes: 25,
      seconds: 0,
    }
  );

  const [start, setStart] = useState(false);

  const resetTimer = (() => {
    setTimeLeft
    (
      {
        minutes: 25,
        seconds: 0,
      }
    );
  });

  
  return(
  <div className="section-container d-flex justify-content-center align-items-center">
    <div className="clock-container">
      <h2 className="text-white text-center mb-3">Next Short Break </h2>
      <div className="clock d-flex justify-content-center">
        <Timer />
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button className="mx-2 btn btn-warning btns-clock py-3" onClick={resetTimer}>RESET</button>
        <button className={start ? 'mx-2 btn btn-danger btns-clock py-3' : 'mx-2 btn btn-primary btns-clock py-3'} 
        onClick={() => setStart((prevState) => !prevState)}>{start ? 'STOP' : 'START'}</button>
      </div>
    </div>
  </div>
  );
};

export default (PomoTimer);
