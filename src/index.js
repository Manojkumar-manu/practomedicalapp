
import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';
import AuthContextProvider from './Contexts/AuthContextProvider';
createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
