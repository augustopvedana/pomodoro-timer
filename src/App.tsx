import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';

function App(): JSX.Element {
  return (
    <div className="container">
      <PomodoroTimer
        pomodoroTime={25 * 60}
        shortRestTime={5 * 60}
        longRestTime={20 * 60}
        cycles={4}
      />
    </div>
  );
}

export default App;
