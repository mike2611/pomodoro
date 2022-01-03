const About = () => ( 
  <div className="section-container overflow-auto">
    <h1 className="text-muted mb-5 mt-1 ms-3"> The <span className="text-danger">Pomodoro®</span> Core Process consists of 6 steps: </h1>

    <ol>
      <li className="text-white mb-5 ms-3 h3">Choose a task you'd like to get done</li>
      <li className="text-white mb-5 ms-3 h3">Set the <span className="text-danger">Pomodoro®</span> for 25 minutes</li>
      <li className="text-white mb-5 ms-3 h3">Work on the task until the pomotimer rings</li>
      <li className="text-white mb-5 ms-3 h3">When the pomotimer rings, put a checkmark on a paper</li>
      <li className="text-white mb-5 ms-3 h3">Take a short break</li>
      <li className="text-white mb-5 ms-3 h3">Every 4 <span className="text-danger">Pomodoro®</span>, take a longer break</li> 
    </ol>
  </div>
);

export default (About);
  