const Timer = () => ( 
  <div class="section-container d-flex justify-content-center align-items-center">
    <div class="clock-container">
      <div class="clock">
        <div class="minutes">
          <div>
            <div>0</div>
          </div>
          <div>
            <div>0</div>
          </div>
        </div>
        <div class="tick">:</div>
        <div class="seconds">
          <div>
            <div>0</div>
          </div>
          <div>
            <div>0</div>
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

export default (Timer);
