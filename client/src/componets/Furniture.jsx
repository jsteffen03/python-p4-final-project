/* Child file of Project, holding code for all furniture cards in the data
*/

import { CardMeta, CardHeader, CardContent, Card, Button, Image } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import SelectedFurniture from './SelectedFurniture';

function Furniture({furniture, projectId, furnitureId, setSelectedFurniture, selectedFurniture}){
//below is the function to add furniture to filtered furnitre

function handleClick() {
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
            throw new Error('Network response was bad');
        }
        return response.json();
    })
    .then(data => {
        if (selectedFurniture && Array.isArray(selectedFurniture)) {
            const newArr = [...selectedFurniture, furniture];
            setSelectedFurniture(newArr);
        } else {
            console.error('selectedFurniture is not an array');
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