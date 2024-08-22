/*
Card for all the furiture for each project.
Child file of Project.jsx
*/
import { CardMeta, CardHeader, CardContent, Card, Button, Image } from 'semantic-ui-react'

function SelectedFurniture({furniture, projectId, selectedFurniture, setSelectedFurniture}){

    function handleClick() {
        fetch(`/api/project/${projectId}/remove_furniture`, {
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
        const notRemoved = selectedFurniture.filter(furn=>{
            if(furn.id == furniture.id){
                return false
            }
            return true    
        })
        setSelectedFurniture(notRemoved)
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
                    <Button color='red' onClick={(e)=>handleClick(e)}>Remove</Button>
                </CardContent>
            </Card>    
        </div>
    )
}

export default SelectedFurniture
