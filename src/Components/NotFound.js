import React from 'react';
import SadPanda from '../Images/sad_panda.png';

export default class NotFound extends React.Component {
  render () {
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
    )
  }
}
