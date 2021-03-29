import React from 'react';
import './App.less';
import Header from './components/Header';
import { hot } from 'react-hot-loader'; //热加载

function App() {
  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default hot(module)(App);
