/*
Card for all the furiture for each project.
Child file of Project.jsx
*/

import { CardMeta, CardHeader, CardContent, Card, Button, Image } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'

function SelectedFurniture({furniture, projectId}){

    const navigate = useNavigate()
    function handleClick() {
        fetch(`api/project/1/remove_furniture`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                project_id: projectId,
                furniture_id: furniture.id,
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                alert(data.message);
             
            } else {
                alert("Failed to remove furniture from project");
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    }

    return (
        <div>
            <Card>
                <Image alt="uh oh" src={furniture.img}/>
                <CardContent>
                    <CardHeader>{furniture.name}</CardHeader>
                    <CardMeta>
                        ${furniture.price}
                    </CardMeta>
                    <CardMeta>
                        {furniture.type}
                    </CardMeta>
                    <Button color='green' onClick={(e)=>handleClick(e)}>Remove</Button>
                </CardContent>
            </Card>    
        </div>
    )
}

export default SelectedFurniture;