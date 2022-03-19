import React, { useState, useEffect } from 'react';
import { BsGearFill } from 'react-icons/bs';
import Modal from './Modal';

const PomoTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [minutesBreak, setMinutesBreak] = useState(5);
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
            let min = breakTime ? minutes : minutesBreak - 1;
            let sec = 59;

            setSeconds(sec);
            setMinutes(min);
            setBreakTime((prevState) => (!prevState));
          }
        } else {
          setSeconds((preState) => (preState - 1));
        }
      }, 1000);

      return () => clearTimeout(interval);
    }
  }, [seconds, startTimer]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;


  return (
    <div className="section-container d-flex justify-content-center align-items-center">
      <div className="clock-container">
        <div className="d-flex justify-content-center">
          {breakTime && <h2 className="text-white text-center mt-1"> Break Time!</h2>}
          {!breakTime && <h2 className="text-white text-center mt-1"> Time to Work!</h2>}
          <button className="btn mx-2" onClick={() => setShowModal((prevState) => (!prevState))} > <BsGearFill className="text-white h2" /></button>
        </div>
        <div className="clock d-flex justify-content-center">
          <h2 className="my-4 text-white timer-text">{timerMinutes}:{timerSeconds}</h2>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <button className={startTimer ? 'mx-2 px-3 btn btn-danger btns-clock p-3' : 'mx-2 btn btn-primary btns-clock p-3'} onClick={() => (setStartTimer((prevState) => !prevState))}>{startTimer ? 'STOP' : 'START'}</button>
        </div>
        {
          showModal ? (
            <Modal>
              <div>
                <div>
                  <label htmlFor="workTime">
                    Pomodoro (minutes)
                    <input id="workTime" className="col-md-4 m-4" onChange={(e) => setMinutes(e.target.value)} value={minutes} placeholder="25" />
                  </label>
                </div>
                <div>
                  <label htmlFor="breakTime">
                    Break Time (minutes)
                    <input id="breakTime" className="col-md-4 m-4" onChange={(e) => setMinutesBreak(e.target.value)} value={minutesBreak} placeholder="25" />
                  </label>
                </div>
                <button className="mx-2 px-3 btn btn-danger btns-clock p-3" onClick={() => setShowModal((prevState) => (!prevState))}>Set time</button>
              </div>
            </Modal>
          ) : null
        }
      </div>
    </div >
  );
};

export default (PomoTimer);
