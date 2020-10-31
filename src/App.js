import React from 'react';
import Mainpage from "./components/mainpage/index";
import Header from "./components/header/index";
import Wrapper from "./components/Wrapper/index";
import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Mainpage />
      </Wrapper>
    </div>
  );
}

export default App;
