// Child file of Userpage holding code for each project card.

import { CardMeta, CardHeader, CardContent, Card, Button, Image } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'

function ProjectCard({project}){

    const navigate = useNavigate()

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
                <Button color='green' onClick={(e)=>navigate('/user/project')}>Edit Project</Button>
            </CardContent>
        </Card>
    )
}

export default ProjectCard