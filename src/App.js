import React from 'react';
import Header from './Containers/Header';
import Nav from './Containers/Nav';
import View from './Containers/View';
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

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <Nav colorObjectArray={colorObjectArray} />
          <View>
            {this.props.children}
          </View>
        </main>
      </div>
    );
  }
}

export default App;
