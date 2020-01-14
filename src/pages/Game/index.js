import React, { useState } from 'react';

import Main from '../Main';
import Tutorial from '../Tutorial';

export default function Game() {
  const [readTutorial, setReadTutorial] = useState(
    localStorage.getItem('readTutorial')
  );
  function renderGame() {
    if (readTutorial) {
      return <Main />;
    }
    return <Tutorial readTutorial={setReadTutorial} />;
  }
  return renderGame();
}
