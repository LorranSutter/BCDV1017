import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Greeter from './Greeter';
import LikeButton from './LikeButton';

const Display = () => {

  let buttons = []
  for (let i = 0; i < 10; i++)
    buttons.push(<LikeButton key={i} />);

  return (
    <>
      <Greeter />
      {buttons}
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Display />
  </React.StrictMode>,
  document.getElementById('root')
);
