import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import DynamicInput from './component/Button/button.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <div className="scroll-box">
         <App />
         <DynamicInput />
      </div>
   </React.StrictMode>
);
