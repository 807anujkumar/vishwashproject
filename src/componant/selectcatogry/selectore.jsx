import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft,faArrowRight } from "@fortawesome/free-solid-svg-icons";
    import { Link } from "react-router-dom";
    import data from"../../assets/ApiData.json"
import { Table } from "../table";
import { useState } from "react";
import './selectore.css'
function Selectore({number}){
   
const[left, setleft]=useState("0")
const[right, setright]=useState("0")
const lefthandler=(e)=>{
 if(number=="1"){
    return false
 }
else if(number>1){
    setleft(number-1)
    number=left
    console.log(number)
}
 
}

  
 return<>
    <div> 
<div> 
        
{
    data.map((x)=>{

        if(number=="1" && x.numberrange<12)
        return <Table name={x.name} date={x.date} date1={x.date1} name1={x.name1} address={x.address}></Table>
else if(number=="2" && x.numberrange>48)
return <Table name={x.name} date={x.date} date1={x.date1} name1={x.name1} address={x.address}></Table>
else if(number=="3" && x.numberrange<12)
return <Table name={x.name} date={x.date} date1={x.date1} name1={x.name1} address={x.address}></Table>

else if(number=="4" && x.numberrange>48)
return <Table name={x.name} date={x.date} date1={x.date1} name1={x.name1} address={x.address}></Table>
else if(number=="left" && x.numberrange<12)
return <Table name={x.name} date={x.date} date1={x.date1} name1={x.name1} address={x.address}></Table>

else if(number=="right" && x.numberrange>48)
return <Table name={x.name} date={x.date} date1={x.date1} name1={x.name1} address={x.address}></Table>



    })

}
</div>
        
    <div className="tableselect">
       <Link to="/left"> <div onClick={(e)=>{lefthandler(e)}}> <FontAwesomeIcon icon= {faArrowLeft} /></div></Link>
      <Link to="/1"> <div onClick={()=>{}}>1</div></Link>
      <Link to="/2"> <div onClick={()=>{}}>2</div></Link>
      <Link to="/3"> <div onClick={()=>{}}>3</div></Link>
      <Link to="/4"> <div onClick={()=>{}}>4</div></Link>      
      <Link to="/right"> <div onClick={()=>{}}><FontAwesomeIcon icon={faArrowRight} /></div>
</Link>
    </div> 
    </div>
    </>
}
export default Selectore