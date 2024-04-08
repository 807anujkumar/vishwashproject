 
import './App.css'
import { Table } from "./componant/table"
import Heading from "./componant/heading"
import { Sidebar } from "./componant/sidebar/sidebar"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom'
import { useState } from 'react';
import { Second } from './componant/secondForm/second';
 
function App() {
   
  const[value,setvalue]= useState(false)
  function plushendler(){
setvalue(!value)
  }
  return (
    <>
    < div className="Appcontainer"> 
     <div>
     <Sidebar></Sidebar>
     </div>
    <div className="mainclass"> 
  <Heading plus={ plushendler}></Heading>
  <Outlet></Outlet>
 
  </div>
 
    </div>

    {value?<Second></Second>:null}
    </>
  )
}

export default App
