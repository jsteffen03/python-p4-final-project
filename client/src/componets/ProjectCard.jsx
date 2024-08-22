import { CardMeta, CardHeader, CardContent, Card, Button, Image } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'

function ProjectCard({project, setProjectId, projectId}){

    const navigate = useNavigate()
    const handleEditClick = () => {
        navigate('/user/project', { state: { budget: project.budget, projectId: project.id } });
    };

    // function editProject(){
    //     setProjectId(project.id)
    //     navigate('/user/project')
    // }


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
                <Button color='green' onClick={handleEditClick}>Edit Project</Button>
            </CardContent>
        </Card>
    )
}

export default ProjectCard 