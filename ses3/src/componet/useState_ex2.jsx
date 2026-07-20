
import React, { useState } from "react";

const useState_ex2 = () => {

  const [user, setUser] = useState({ uname:'',upass:0});

  return (
    <div>

      Username:
      <input type="text" onChange={(e) => setUser({ ...user, uname: e.target.value })}/>

      Password:<input type="password" onChange={(e) => setUser({ ...user, upass: e.target.value }) }/>

      <h1>
        {user.uname} -- {user.upass}
      </h1>

    </div>
  )
}

export default useState_ex2;