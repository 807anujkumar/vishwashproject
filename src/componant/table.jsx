 
   export function Table(props){

    return<>
    
 <table class="table caption-top">
 <tbody>
    <tr >
      <td>{props.name}</td>
      <td>{props.date}</td>
      <td>{props.date1}</td>
      <td>{props.name1}</td>
      <td> {props.phone}</td>
      <td>{props.address}</td>
    </tr>
   
  </tbody>
</table>

     
    </>
   }