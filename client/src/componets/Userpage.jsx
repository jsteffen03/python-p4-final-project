/*
Child File of App.jsx
Holds code for user home page, Project Cards will be a child file holding code 
for each project card displayed on homepage
Components in here, Project List, Sign Out button, New Project Form
*/

import { useNavigate } from 'react-router-dom'
import {Form, Button, FormField} from 'semantic-ui-react'
import ProjectCard from './ProjectCard'

function Userpage (){

    return (
        <div>
            <h3>InteriYOUR Design</h3>
            <h2>Welcome User</h2>
            <Button color='black' onClick={(e)=>console.log(e)}>Sign Out</Button>
            <ProjectCard/>
            <Form>
            <h2>Create a New Project</h2> 
                    <FormField>
                        <label>Title</label>
                        <input type="text" placeholder="Title" ></input>
                    </FormField>
                    <FormField>
                        <label>Budget</label>
                        <input type="Text" placeholder="Budget"></input>
                    </FormField>
                    <FormField>
                        <label>Description</label>
                        <input type="text" placeholder="Description" ></input>
                    </FormField>
                    <Button color='black' onClick={(e)=>addProject(e)}>Submit</Button>
            </Form>
        </div>
    )
}

export default Userpage