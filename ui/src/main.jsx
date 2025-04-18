import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter, Routes, Route} from 'react-router'
import './index.css'
import VistorPage from './components/Vistor_Portal/Container.jsx'
import CustomerPortal from './components/Customer_Portal/Dashboard.jsx'
import AdminPortal from './components/Admin_Portal/Dashoboard.jsx'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/*' element={<VistorPage/>}></Route>
      <Route path='/Customer-Portal' element={<CustomerPortal/>}></Route>
      <Route path='/Admin-Portal/*' element={<AdminPortal/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  </StrictMode>
)
