import React, { Component } from 'react';
import Header from './Containers/Header';
import SideNav from './Containers/SideNav';
import RoutingView from './Containers/RoutingView';
import './App.styl';

const colorObjectArray = [
  { id: 0, name: 'Black' },
  { id: 1, name: 'Blue' },
  { id: 2, name: 'Brown' },
  { id: 3, name: 'Cyan' },
  { id: 4, name: 'Gray' },
  { id: 5, name: 'Green' },
  { id: 6, name: 'Magenta' },
  { id: 7, name: 'Orange' },
  { id: 8, name: 'Pink' },
  { id: 9, name: 'Red' },
  { id: 10, name: 'White' },
  { id: 11, name: 'Yellow' },
];

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <SideNav colorObjectArray={colorObjectArray} />
          <RoutingView />
        </main>
      </div>
    );
  }
}

export default App;
