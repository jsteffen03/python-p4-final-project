/* 
Child file of App.jsx
Holds code for login page, and login form
*/
import {Form, Button, FormField} from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'  
import React, { useState, useEffect } from 'react';

function Login({setUser, user}) {

  const navigate = useNavigate()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [sLI, setSLI] = useState(false)

  useEffect(()=>{
    fetch('/api/checksessions')
    .then(r=>{
      if (r.ok){
        return r.json()
      }
      else{
        throw new Error
      }
    })
    .then(data => {
      setUser(data)
    })
    .catch(()=>{})
  },[])

  function handleLogin(e) {
    e.preventDefault();
    fetch("/api/login",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({username:username, stayLoggedIn: sLI,password:password}),
      }
    )
    .then(r=>{
      console.log(r.ok)
      if (r.ok) { return r.json()}
      else {throw new Error}
    })
    .then(data=>{
      console.log(data)
      setUser(data)
      navigate('/user')
    })
    // .catch(data=>{
    //   alert("Not valid username/password")
    // })
  }

  return (
    <div>
      <h1>InteriYOUR Design</h1>
        <h2>Have an Account</h2>
          <Form onSubmit={handleLogin}>
              <h2>Login</h2> 
              <FormField>
                  <label>Username</label>
                  <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username" ></input>
              </FormField>
              <FormField>
                  <label>Password</label>
                  <input type="text" value={password} onChange={(e) =>setPassword(e.target.value)} placeholder="Password" ></input>
              </FormField>
              <input type="checkbox" onChange={(e)=>setSLI(!sLI)}/>
              <Button color='black' type='submit'>Submit</Button>
          </Form>
        <h2>Don't Have an Account? Create an account here!</h2>  
          <Form onSubmit={(e)=>console.log(e)}>
              <h2>Create an Account</h2> 
              <FormField>
                  <label>Name</label>
                  <input type="text" placeholder="Name" />
              </FormField>
              <FormField>
                  <label>Username</label>
                  <input type="text" placeholder="Username" />
              </FormField>
              <FormField>
                  <label>Password</label>
                  <input type="text" placeholder="Password" />
              </FormField>
              <FormField>
                  <label>Confirm Password</label>
                  <input type="text" placeholder="Confirm Password" />
              </FormField>
              <Button color='black' >Submit</Button>
          </Form>          
    </div>
  )
}


export default Login;