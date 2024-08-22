// Child file of Userpage holding code for each project card.

import { CardMeta, CardHeader, CardContent, Card, Button, Image } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'

function ProjectCard({project, setProjectId, projectId, setPBudget, projects, setProjects}){

    const navigate = useNavigate()

    // Function to edit project and takes you to project page
    function editProject(){
        setProjectId(project.id)
        setPBudget(project.budget)
        navigate('/user/project')
    }

    // Function to delete project
    function deleteProject(){
        fetch(`/api/project/${project.id}`, {
            method: 'DELETE',
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to delete project');
            }
            return response.json();
        })
        .then(() => {
            const notRemoved = projects.filter(proj=>{
                if(proj.id == project.id){
                    return false
                }
                return true    
            })
            setProjects(notRemoved)
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
        const notRemoved = projects.filter(proj=>{
            if(proj.id == project.id){
                return false
            }
            return true    
        })
        setProjects(notRemoved)
    }

    return (
        <Card>
            <CardContent>
                <CardHeader>{project.title}</CardHeader>
                <CardMeta>
                    {project.budget}
                </CardMeta>
                <CardMeta>
                    {project.description}
                </CardMeta>
                <Button color='green' onClick={editProject}>Edit Project</Button>
                <Button color='red' onClick={deleteProject}>Delete Project</Button>
            </CardContent>
        </Card>
    )
}

export default ProjectCard 