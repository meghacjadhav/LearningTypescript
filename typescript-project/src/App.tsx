import React from 'react';
import './App.css';
import {  Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import Lists from "./Components/Lists";
import Course_Description from "./Course_Description";
const App: React.FC = () => {
  return (
   <div>
       <Routes>
           <Route path="/" element={ <LoginPage/>} />
           <Route
               element={
                   localStorage.getItem("token") ? (
                       <Lists/>
                   ) : (
                       <Navigate replace to={"/"} />
                   )
               }
               path="/list"
           />
           <Route path="/course" element=<Course_Description/> />
           <Route path="*" element={<h1>Page Not Found</h1>} />
       </Routes>
    </div>
  );
}

export default App;
