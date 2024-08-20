/* 
Child file of App.jsx
Holds code for login page, and login form
*/
import {Form, Button, FormField} from 'semantic-ui-react'
import { useState, useEffect } from 'react'

function Login() {

    const [user, setUser] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [sLI, setSLI] = useState(false)
  
    useEffect(()=>{
      fetch('/checksessions')
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
    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://127.0.0.1:5555/login",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({username:username, stayLoggedIn: sLI,password:password}),
          }
        )
        .then(r=>{
          if (r.ok) { return r.json()}
          else {throw new Error}
        })
        .then(data=>{
          setUser(data)
        })
        .catch(data=>{
          alert("Not valid username/password")
        })
      }
      function handleLogout() {
        fetch("http://127.0.0.1:5555/logout", { method: "DELETE" })
        .then(r => {
            if (r.ok) {
                return r.json();
            } else {
                throw new Error('Logout failed');
            }
        })
        .then(data => setUser(null))
        .catch(err => console.error("Logout Error:", err));
    }
    
      function handleNewUser(e) {
        e.preventDefault();
        fetch("/signup",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({username:e.target.user.value,password:e.target.password.value}),
          }
        )
        .then(r=>r.json())
        .then(data=>setUser(data))
      }
    
      if (user) {
        return (
          <div className="App">
            <header className="App-header">  
              <h2>Welcome, {user.username}!</h2>
              <button onClick={handleLogout}> Logout </button>
            </header>
          </div>
      )
      } else {
        return (
          <div className="App">
          <header className="App-header">  
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
              <button type="submit">Login</button>
              <input type='checkbox' name='stayLoggedIn' value={sLI} onChange={e=>setSLI(!sLI)}/>
            </form>
            <header>New User Form</header>
            <form onSubmit={handleNewUser}>
              <input
                type="text"
                name = "user"
                />
                <input
                type="text"
                name = 'password'
                />
              <button type="submit">Submit</button>
            </form>
          </header>
        </div>
      );
    }
    
  return (
    <div>
      <h1>InteriYOUR Design</h1>
        <h2>Have an Account</h2>
          <Form onSubmit={(e)=>console.log(e)}>
              <h2>Login</h2> 
              <FormField>
                  <label>Username</label>
                  <input type="text" onChange={(e)=>console.log(e)} placeholder="Username" ></input>
              </FormField>
              <FormField>
                  <label>Password</label>
                  <input type="text" onChange={(e)=>console.log(e)} placeholder="Password" ></input>
              </FormField>
              <Button color='black' onClick={(e)=>handleSubmit(e)}>Submit</Button>
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
              <Button color='black' onClick={(e)=>handleNewUser(e)}>Submit</Button>
          </Form>          
    </div>
  )
}

export default Login;