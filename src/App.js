import React, { useState } from 'react';
import CarList from './components/CarList'; // Replace with your actual component
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <div className="bg-sky-100 min-h-screen">
      <main>
        <Routes>
          <Route path='/:page' element={<CarList/>} />
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
