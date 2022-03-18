import React, { useState, useEffect } from 'react';
import Modal from './Modal';

const PomoTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const [breakTime, setBreakTime] = useState(false);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    if (startTimer) {
      let interval = setInterval(() => {
        clearInterval(interval);
        if (seconds === 0) {
          if (minutes > 0) {
            setSeconds(59);
            setMinutes((preState) => (preState - 1));
          } else {
            let min = breakTime ? 24 : 4;
            let sec = 59;

            setSeconds(sec);
            setMinutes(min);
            setBreakTime((prevState) => (!prevState));
          }
        } else {
          setSeconds((preState) => (preState - 1));
        }
      }, 1000);
    }
  }, [seconds, startTimer]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;


  return (
    <div className="section-container d-flex justify-content-center align-items-center">
      <div className="clock-container">
        {breakTime && <h2 className="text-white text-center mb-3"> Break Time!</h2>}
        {!breakTime && <h2 className="text-white text-center mb-3"> Time to Work!</h2>}
        <div className="clock d-flex justify-content-center">
          <h2>{timerMinutes}:{timerSeconds}</h2>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <button className={startTimer ? 'mx-2 px-3 btn btn-danger btns-clock p-3' : 'mx-2 btn btn-primary btns-clock p-3'} onClick={() => (setStartTimer((prevState) => !prevState))}>{startTimer ? 'STOP' : 'START'}</button>
        </div>
        {
          showModal ? (
            <Modal>
              <div>
                <label htmlFor="workTime">
                  Pomodoro (minutes)
                  <input id="workTime" className="col-md-4 m-4" onChange={(e) => setMinutes(e.target.value)} value={minutes} placeholder="25" />
                </label>
                <button className="mx-2 px-3 btn btn-danger btns-clock p-3" onClick={() => setShowModal((prevState) => (!prevState))}>Set time</button>
              </div>
            </Modal>
          ) : null
        }
      </div>
    </div>
  );
};

export default (PomoTimer);
