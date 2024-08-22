/* 
Child file of App.jsx
Holds code for login page, and login form
*/
import {Form, Button, FormField} from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'  
import React, { useState } from 'react';

function Login({setUser}) {

  const navigate = useNavigate()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [nUsername, setNUsername] = useState("");
  const [nPassword, setNPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [sLI, setSLI] = useState(false)

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
    .catch(data=>{
      alert("Not valid username/password")
    })
  }

  function handleCreate(newUser){
    fetch("/api/users",{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    })
    .then(r=>r.json())
    .then(data=>{
      alert('User Added! Please Login')
    })
    .catch(data=>{
      alert("Not valid username/password")
    })
  }

  function addUser(e){
    e.preventDefault()
    if (cPassword === nPassword) {
      const newUser = {
          name: name,
          username: nUsername,
          password: nPassword
      };
      handleCreate(newUser);
    }
    else {
      alert("Passwords do not match");
    }
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
          <Form onSubmit={addUser}>
              <h2>Create an Account</h2> 
              <FormField>
                  <label>Name</label>
                  <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" />
              </FormField>
              <FormField>
                  <label>Username</label>
                  <input type="text" value={nUsername} onChange={(e)=>setNUsername(e.target.value)} placeholder="Username" />
              </FormField>
              <FormField>
                  <label>Password</label>
                  <input type="text" value={nPassword} onChange={(e) =>setNPassword(e.target.value)} placeholder="Password" />
              </FormField>
              <FormField>
                  <label>Confirm Password</label>
                  <input type="text" value={cPassword} onChange={(e) =>setCPassword(e.target.value)} placeholder="Confirm Password" />
              </FormField>
              <Button color='black' >Submit</Button>
          </Form>          
    </div>
  )
}

export default Login;