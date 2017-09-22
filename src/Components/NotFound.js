import React from 'react';
import SadPanda from '../Images/sad_panda.png';

const NotFound = () => {
  return (
    <div className="router-view__contents not-found-view">
      <header className="not-found-view__header">
        <h1>404 Error</h1>
        <h2>Page Not Found</h2>
      </header>
      <br />
      <img src={SadPanda} alt="A sad panda" />
      <br />
      <p>Sorry, but the page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFound;
