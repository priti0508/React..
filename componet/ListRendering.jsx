import React from "react";

const ListRendering = () => {

  const emps = [
    { id: 1, name: "Tom" },
    { id: 2, name: "Jerry" },
    { id: 3, name: "Henry" }
  ];

  return (
    <div>
      <ul>
        {emps.map((emp) => (
          <li key={emp.id}>
            {emp.id} -- {emp.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListRendering;