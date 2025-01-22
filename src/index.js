import "./assets/scss/argon-dashboard-react.scss";
import App from './app';
import { createRoot } from 'react-dom/client';
import React from 'react';
import './assets/css/variables.css';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);

