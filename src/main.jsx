import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import './index.css'
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Pos from './pages/Pos.jsx';
import Pay from './pages/pay.jsx';
import Online from './pages/online.jsx';
import QR from './pages/QR.jsx';
import Shopify from './pages/shopify.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App /> } />
      <Route path='/home' element={<Home />} />
      <Route path='/pos' element={<Pos />} />
      <Route path='/pay' element={<Pay />} />
      <Route path='/online' element={<Online />} />
      <Route path='/qr' element={<QR />} />
      <Route path='/shopify' element={<Shopify />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
