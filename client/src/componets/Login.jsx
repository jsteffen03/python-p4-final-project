/* 
Child file of App.jsx
Holds code for login page, and login form
*/
import { useNavigate } from 'react-router-dom'
import {Form, Button, FormField} from 'semantic-ui-react'

function Login(){

    const navigate = useNavigate()


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
                    <Button color='black' onClick={(e)=>addProject(e)}>Submit</Button>
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

export default Login