import React from 'react';
import './App.less';
import Header from './components/Header';
import { hot } from 'react-hot-loader'; //热加载

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div id="aside" style={{background:'#999'}}>aside</div>
      <div id="main" style={{background:'#419',gridColumn:'2/span 2'}}>main</div>
      <div id="footer"style={{background:'#740',gridColumn:'1/span 3'}}>footer</div>
    </div>
  );
}

export default hot(module)(App);
