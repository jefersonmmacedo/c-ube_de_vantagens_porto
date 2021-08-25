import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Routes from './routes/Routes';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes />
    </BrowserRouter>
  );
}

export default App;