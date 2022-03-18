import React, { useState, useRef, useEffect } from 'react';

const PomoTimer = () => {
  const Ref = useRef(null);
  const [timer, setTimer] = useState('00:00:00');


  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 * 60 * 60) % 24);
    return {
      total, hours, minutes, seconds
    };
  }

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : '0' + hours) + ':' +
        (minutes > 9 ? minutes : '0' + minutes) + ':'
        + (seconds > 9 ? seconds : '0' + seconds)
      )
    }
  }

  const clearTimer = (e) => {
    setTimer('00:00:10');

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000)
    Ref.current = id;
  }

  const getDeadTime = () => {
    let deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + 10);
    return deadline;
  }

  const onClickReset = () => {
    clearTimer(getDeadTime());
  }


  return (
    <div className="section-container d-flex justify-content-center align-items-center">
      <div className="clock-container">
        <h2 className="text-white text-center mb-3">Next Short Break </h2>
        <div className="clock d-flex justify-content-center">
          <h2>{timer}</h2>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <button className="mx-2 btn btn-warning btns-clock py-3" onClick={onClickReset}>RESET</button>
          <button className="mx-2 btn btn-primary btns-clock py-3" onClick={onClickReset}>START</button>
        </div>
      </div>
    </div>
  );
};

export default (PomoTimer);
