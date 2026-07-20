
import React, { useState } from "react";

const UseState_ex3 = () => {

  const [emps, setEmps] = useState([]);
  const [ename, setEname] = useState("");
  const [esal, setEsal] = useState(0);

  const handleClick = () => {
    setEmps([
      ...emps,
      {
        id: emps.length + 1,
        name: ename,
        sal: esal,
      }
    ])
  }

  return (
    <div>
      Name:
      <input type="text" onChange={(e) => setEname(e.target.value)} />

      Salary: <input type="number" onChange={(e) => setEsal(e.target.value)} />

      <button onClick={handleClick}>
        Add Employee
      </button>

      <ul>
        {emps.map((emp) => (
          <li key={emp.id}>
            Id: {emp.id} Name: {emp.name} Sal: {emp.sal}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UseState_ex3;