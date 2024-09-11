import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//  import routers
import { BrowserRouter as Router} from 'react-router-dom';
// import house context provider
import HouseContextProivder from './components/HouseContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HouseContextProivder>
  <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
  </Router>
  </HouseContextProivder>
);
