import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
const root = ReactDOM.createRoot(document.querySelector('.container '));
root.render(
  <React.StrictMode>
    
    <Router>
      <Routes>
        <Route path='/*' element={<App/>}/>
      </Routes> 
    </Router>
    
  </React.StrictMode>
);
