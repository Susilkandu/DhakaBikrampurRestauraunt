import {BrowserRouter, Routes, Route} from 'react-router'
import HomePage from './HomePage'
import OrderFlowPreview from './OrderFlowPreview'
import TrackOrder from './TrackOrderPage'
import Contact from './ContactPage'
import Login from './LoginPage'
import Register from './RegisterPage'

export default function Container() {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Order' element={<OrderFlowPreview/>}/>
        <Route path='/TrackOrder' element={<TrackOrder/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>

    </Routes>
    </>
  )
}
