import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextprovider } from './context/AuthContext';
import { MycasesContextProvider } from './context/MycasesContext';
import { MyIncidentsContextProvider } from './context/MyIncidentsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextprovider>
      <MycasesContextProvider>
        <MyIncidentsContextProvider>
          <App />
        </MyIncidentsContextProvider>
      </MycasesContextProvider>
    </AuthContextprovider>
  </React.StrictMode>
);

