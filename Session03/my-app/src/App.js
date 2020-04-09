import React from 'react';
import './App.css';

import Student from './student';
import College from './college';

function App() {
  return (
    <>
      <Student name="Rick Rude" number="11111" enrolled={[1, 2, 3]} />
      <Student name="Shawn Micheals" number="22222" enrolled={[0, 1, 2]} />
      <Student name="Bret Hart" number="33333" enrolled={[0, 3, 4, 5]} />
      <College name="George Brown" location="Casa Loma" />
    </>
  );
}

export default App;
