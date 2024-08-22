/*
Child File of App.jsx
Holds code for user home page, Project Cards will be a child file holding code 
for each project card displayed on homepage
Components in here, Project List, Sign Out button, New Project Form
*/

import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {Form, Button, FormField} from 'semantic-ui-react'
import ProjectCard from './ProjectCard'

function Userpage ({user, setUser, setProjectId, projectId}) {

    const [projects, setProjects] = useState([]);
    const [title, setTitle] = useState("");  
    const [description, setDescription] = useState("");
    const [budget, setBudget] = useState("");
    const navigate = useNavigate()

    function handleLogout(){
        fetch('/api/logout',{method:"DELETE"})
        .then(r=>r.json())
        .then(data => setUser(undefined))
        .then(()=>navigate('/'))
    }

    useEffect(() => {
        if (user) {
            console.log(user)
            fetch('/api/projects', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch projects');
                }
            })
            .then(data => setProjects(data))
        }
    }, [user]);

    function handleSubmit(newProj){
        fetch("/api/projects",{
          method:"POST",
          headers:{
            "Content-Type": "Application/json"
          },
          body: JSON.stringify(newProj)
        })
        .then(r=>r.json())
        .then(data=>{
          const newArr = [...projects,data]
          setProjects(newArr)
        })
    }

    function addProject(e){
        e.preventDefault()
        if (user) {
            const newProj = {
                title: title,
                budget: parseInt(budget, 10),
                description: description,
                user_id: user.id
            };
            handleSubmit(newProj);
        } else {
            alert("User not found");
        }
    }
    
    const projectRender = projects.map((project)=>{
        return <ProjectCard key={project.id} project={project} projectId={projectId} setProjectId={setProjectId}/>
    })

    return (
        <div>
            <h3>InteriYOUR Design</h3>
            <h2>Welcome {user ? user.name : 'User'}</h2>
            <Button color='black' onClick={(e)=>handleLogout(e)}>Sign Out</Button>
            {projectRender}
            <Form onSubmit={addProject}>
                <h2>Create a New Project</h2>
                    <FormField>
                        <label>Title</label>
                        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title" required />
                    </FormField>
                    <FormField>
                        <label>Budget</label>
                        <input type="text" value={budget} onChange={(e)=>setBudget(e.target.value)} placeholder="Budget" required />
                    </FormField>
                    <FormField>
                        <label>Description</label>
                        <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Description" required />
                    </FormField>
                    <Button color='black' type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default Userpage