import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';

const router = 
  <BrowserRouter>
    <React.StrictMode>
      <App /> 
    </React.StrictMode>
  </BrowserRouter>;

ReactDOM.render(router, document.getElementById('root'));