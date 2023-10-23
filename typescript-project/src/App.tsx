import React from 'react';
import './App.css';
import LoginPage from './Components/LoginPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="heading">
          SIGN IN
          <img src={"/Images/Logo.png" } alt={"Logo"} width={"90px"} height={"70px"}  />
      </div>
        <LoginPage/>
    </div>
  );
}

export default App;
