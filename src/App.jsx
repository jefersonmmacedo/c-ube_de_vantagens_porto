import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Routes from './routes/Routes';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
import AuthProvider from './contexts/Auth';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <ToastContainer autoClose={3000}/>
    <Navbar />
    <Routes />
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
