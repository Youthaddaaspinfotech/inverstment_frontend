import React, { useState } from 'react';
import './App.css';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
import { ToastContainer } from 'react-toastify';  // Import ToastContainer from react-toastify
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      {localStorage.getItem('loginData') == 'true' ? <PrivateRoutes /> : <PublicRoutes />}
      <ToastContainer />
    </>
  );
}

export default App;
