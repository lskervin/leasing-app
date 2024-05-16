import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import './index.scss'
import App from './App';
// import reportWebVitals from './reportWebVitals';

// const { createRoot } = ReactDOM
const root = document.getElementById('root')

createRoot(root).render(<HashRouter><App /></HashRouter>)