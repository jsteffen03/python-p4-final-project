/* Child file of Project, holding code for all furniture cards in the data
*/

import { CardMeta, CardHeader, CardContent, Card, Button, Image } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import SelectedFurniture from './SelectedFurniture';

function Furniture({furniture, projectId, furnitureId, setSelectedFurniture, selectedFurniture}){
//below is the function to add furniture to filtered furnitre

function handleClick({projectId}) {
    console.log(projectId)
    fetch(`/api/project/1/add_furniture`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            project_id: projectId,  
            furniture_id: furniture.id,  
        }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response bad');
        }
        return response.json();
    })
    .then(data=>{
        const newArr = [...selectedFurniture, data]
        setSelectedFurniture(newArr)
    })
    .then(data => {
        if (data.message) {
            alert(data.message);
        } else {
            alert("Failed to add furniture to project");
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
                    <Button color='green' onClick={(e)=>handleClick(e)}>Add to Project</Button>
                </CardContent>
            </Card>    
        </div>
    )
}

export default Furniture