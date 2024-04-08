 
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faAngleUp,faAngleDown } from "@fortawesome/free-solid-svg-icons";
import './sidebar.css'
   export function Sidebar(){
   const [down,setup]=useState(true)
   const [isVisible, setIsVisible] = useState(false);

   const [downs,setups]=useState(true)
   const [isVisibles, setIsVisibles] = useState(false);


    return<>
    <div className='conatiner'>
<div className='event' onClick={()=>{
  setup(!down)
  setIsVisible(!isVisible)
  }}>
 
  <div> Events</div>
  {down?<div><FontAwesomeIcon icon={faAngleDown}/></div> :<div> <FontAwesomeIcon icon={faAngleUp} /></div>}
</div>
<div className={isVisible ? "visible" :"hidden"}>
 <div className='request'>New Request</div>
<div>Estimate</div>
<div>Events</div>
<div>Partial Request</div>
 </div>

 <div className='text'>Positions</div>
<div className='text'>contractors</div>

<div className='texts' onClick={()=>{
  setups(!downs)
  setIsVisibles(!isVisibles)
  }} >
  <div>Users</div>
  <div>
  {downs?<div><FontAwesomeIcon icon={faAngleDown}/></div> :<div> <FontAwesomeIcon icon={faAngleUp} /></div>}

  </div>
</div>
<div className={isVisibles ? "visibles" :"hiddens"} >

  <div>Admins</div>
  <div>clients</div>
  <div>Coordinatorts</div>
</div>

<div className='text'>Profile</div>


    </div>


    
    </>
  }