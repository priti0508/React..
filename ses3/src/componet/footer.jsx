import React, { useState } from 'react'

const Footer = () => {
    const[emps,setEmps] = useState([])
    const [ename,setEname] = useState('')
    const [esal,setEsal]  =useState(0)

    const handleClick = () =>{
        setEmps([
            ...emps,
            {
                id:emps.length+1 ,
                name :ename,
                sal:esal
            }
        ])
    }
  return (
    <div>
        
        <input type="text" onChange={(e)=>setEname(e.target.value)}/>
        <input type="number" onChange={(e)=>setEsal(e.target.value)}/>
        <button onClick={handleClick}>Add employee</button>
        <ul>{
            emps.map((emp)=>(
                <li key={emp.id}> Id-{emp.id}-{emp.name}-{emp.sal}</li>
            ))
}</ul>
    </div>
  )
}

export default Footer