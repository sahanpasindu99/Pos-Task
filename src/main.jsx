
import React from 'react'
import {createRoot} from 'react-dom/client';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {BrowserRouter, Router,Routes,Route} from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> }>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);