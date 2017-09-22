import React, { Component } from 'react';
import Header from './Containers/Header';
import ColorNav from './Containers/ColorNav';
import RoutingView from './Containers/RoutingView/RoutingView';
import './App.styl';

const colorObjectArray = [
  { 'id': 0, 'name': 'Red'},
  { 'id': 1, 'name': 'Orange' },
  { 'id': 2, 'name': 'Yellow' },
  { 'id': 3, 'name': 'Green' },
  { 'id': 4, 'name': 'Blue' },
  { 'id': 5, 'name': 'Purple' },
  { 'id': 6, 'name': 'Brown' },
  { 'id': 7, 'name': 'Gray' }
];

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <ColorNav colorObjectArray={colorObjectArray} />
          <RoutingView />
        </main>
      </div>
    );
  };
}

export default App;
