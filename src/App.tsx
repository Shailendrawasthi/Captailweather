import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import InputForm from './Component/InputForm';
import Details from './Component/Details';
 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<InputForm />} />
          <Route  path='/Details' element={<Details/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
