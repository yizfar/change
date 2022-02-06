import React ,{useContext }from 'react';
import { ChangeContext } from "../conetext";
function ViewChange(props){
    let tot = props.tot
    let { total, setTotal } = useContext(ChangeContext);
   
   


    return(
        <div id='view' className='mt-5'>
            <h3 className='text-danger'>       is   </h3>
            <h1 style={{color: "red"}}>       {total.toFixed(2)}   </h1> 
            <hr/>
        </div> 
    )
}

export default ViewChange