import React from 'react'

const Conditional2 = ({isLoggedIn}) => {
  return (
    <div>
        {
            isLoggedIn ? <h1>WElcome</h1> : <h1>Try Again</h1>
        }
        {
            isLoggedIn && <h1>Welcome</h1>
        }
    </div>
  )
}

export default Conditional1