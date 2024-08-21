/*
Card for all the furiture for each project.
Child file of Project.jsx
*/

import { CardMeta, CardHeader, CardContent, Card, Button, Image } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'

function SelectedFurniture(){

    const navigate = useNavigate()

    return (
        <div>
            <Card>
                <Image alt="uh oh" />
                <CardContent>
                    <CardHeader>Furniture Name, THATS in PROJECT</CardHeader>
                    <CardMeta>
                        Furniture Price
                    </CardMeta>
                    <CardMeta>
                        Furniture Type
                    </CardMeta>
                    <Button color='red' onClick={(e)=>navigate('/user/project')}>Remove from Project</Button>
                </CardContent>
            </Card>    
        </div>
    )
}

export default SelectedFurniture