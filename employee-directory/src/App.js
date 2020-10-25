import React from 'react';
import mainpage from ".components/mainpage/index";
import header from "./components/header/index";
import wrapper from "./components/wrapper/index";
import './App.css';

function App() {
  return (
    <div className="App">
      <wrapper>
        <header />
        <mainpage />
      </wrapper>
    </div>
  );
}

export default App;
