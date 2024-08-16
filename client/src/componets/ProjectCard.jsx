// Child file of Userpage holding code for each project card.

import { CardMeta, CardHeader, CardContent, Card, Button, Image } from 'semantic-ui-react'


function ProjectCard(){


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
                <Button color='green' onClick={(e)=>console.log(e)}>Edit Project</Button>
            </CardContent>
        </Card>
    )
}

export default ProjectCard