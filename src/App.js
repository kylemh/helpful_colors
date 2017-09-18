import React from 'react';
import Header from './Containers/Header';
import Nav from './Containers/Nav';
import View from './Containers/View';
import './App.styl';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Nav />
        <View>
          {this.props.children}
        </View>
      </div>
    );
  }
}
