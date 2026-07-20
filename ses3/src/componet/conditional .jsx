import React from 'react'

const Conditional1 = ({isLoggedIn}) => {
 if (isLoggedIn) {
    return <h1>Login Succefull</h1>
 } else {
    return <h1>Login Failed</h1>
 }
}

export default Conditional