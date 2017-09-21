import React from 'react';
import Header from './Containers/Header';
import Nav from './Containers/Nav';
import View from './Containers/View';
import './App.styl';

const colorList = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Brown', 'Gray'];

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <Nav colorList={colorList} />
          <View>
            {this.props.children}
          </View>
        </main>
      </div>
    );
  }
}

export default App;
