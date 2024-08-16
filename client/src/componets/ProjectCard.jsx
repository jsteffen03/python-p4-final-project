// Child file of Userpage holding code for each project card.

import { CardMeta, CardHeader, CardContent, Card, Button, Image } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'



function ProjectCard(){

    const navigate = useNavigate()

    return (
        <Card>
            <Image alt="uh oh" />
            <CardContent>
                <CardHeader>Project Name</CardHeader>
                <CardMeta>
                    Project Budget
                </CardMeta>
                <CardMeta>
                    Project Description
                </CardMeta>
                <Button color='green' onClick={(e)=>navigate('/user/project')}>Edit Project</Button>
            </CardContent>
        </Card>
    )
}

export default ProjectCard