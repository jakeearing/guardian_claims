import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './routes/App';
import reportWebVitals from './reportWebVitals';
import ReactGA from "react-ga4";

const root = ReactDOM.createRoot(document.getElementById('root'));

//Initialize GA4 for Google Analytics
ReactGA.initialize("G-W902GQV7DE");

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Send Analytics Data
const SendAnalytics = ()=> {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
}

reportWebVitals(SendAnalytics);
