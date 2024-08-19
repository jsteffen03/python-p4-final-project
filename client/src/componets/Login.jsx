/* 
Child file of App.jsx
Holds code for login page, and login form
*/
import { useNavigate } from 'react-router-dom'
import {Form, Button, FormField} from 'semantic-ui-react'
import {useEffect,useState} from 'react'

const [user, setUser] = useState(null);
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

function Login(){

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({username:username,password:password}),
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
        <div>
            <h1>InteriYOUR Design</h1>
                <h2>Have an Account</h2>
                <Form onSubmit={(e)=>navigate('/user')}>
                    <h2>Login</h2> 
                    <FormField>
                        <label>Username</label>
                        <input type="text" placeholder="Username" ></input>
                    </FormField>
                    <FormField>
                        <label>Project Details</label>
                        <input type="text" placeholder="Password" ></input>
                    </FormField>
                    <Button color='black' onClick={(e)=>navigate('/user')}>Submit</Button>
                </Form>
            )
        else {
        return (
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