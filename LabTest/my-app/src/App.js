import React from 'react';
import './App.css';

import TweetContainer from './Components/TweetContainer'

function App() {
  return (
    <div className="App">
      <TweetContainer status="At home doing the lab!"></TweetContainer>
      <TweetContainer status="Who is Chuck Norris???"></TweetContainer>
      <TweetContainer status="It snowed quickly today"></TweetContainer>
    </div>
  );
}

export default App;
