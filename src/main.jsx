import React from 'react'
import ReactDOM from 'react-dom/client'
 import {RouterProvider, createBrowserRouter} from'react-router-dom'
import App from './App.jsx'
import './index.css'

 
import Selectore from './componant/selectcatogry/selectore.jsx'
const router=  createBrowserRouter([
  {path:'/', element: <App/>, children:[
    {path: '/', element: <Selectore number="1"></Selectore>},
    {path: '/1', element: <Selectore number="1"></Selectore>},
   {path:'/2', element:<Selectore number="2"></Selectore>},
   {path:'/3', element:<Selectore number="3"></Selectore>},
   {path:'/4', element:<Selectore number="4"></Selectore>},
   {path:'/left', element:<Selectore number="left"></Selectore>},
   {path:'/right', element:<Selectore number="right"></Selectore>},
   ]}
])
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
