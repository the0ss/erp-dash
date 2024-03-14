import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import { Product } from './components/Products.jsx/Product'
import { Orders } from './components/Orders.jsx/Orders'
import Home from './components/Home/Home'
import { CalendarView } from './components/CalenderView/CalenderView'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/order' element={<Orders/>}/>
      <Route path='/calendar' element={<CalendarView/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
