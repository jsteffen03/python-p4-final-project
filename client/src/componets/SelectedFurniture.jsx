/*
Card for all the furiture for each project.
Child file of Project.jsx
*/

import { CardMeta, CardHeader, CardContent, Card, Button, Image } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'

function SelectedFurniture({furniture, furnitureName,furnitureImg, furniturePrice, id, furnitureType, projectId, removeFurniture,img, name, price, type}){
    // useEffect(() => {
    //     const newTotalPrice = selectedFurniture.reduce((acc, item) => acc + item.price, 0);
    //     setTotalPrice(newTotalPrice);
    // }, [selectedFurniture]);
    console.log(furnitureName)
    const navigate = useNavigate()
    // function handleClick() {
    //     removeFurniture(furniture.id);  // This should update the state and remove the item
    }
    // function handleClick() {
    //     fetch(`/api/project/${projectId}/remove_furniture`, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             furniture_id: furniture.id,
    //         }),
    //     })
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         return response.json();
    //     })
    //     .then(data => {
    //         console.log(data);  // Log the response from the backend
    //         if (data.success) {  // Ensure the backend returns a success flag
    //             removeFurniture(furniture.id);  // Remove from frontend state
    //         } else {
    //             alert(data.message || "Failed to remove furniture from project");
    //         }
    //     })
    //     .catch(error => {
    //         console.error('There was a problem with the fetch operation:', error);
    //         alert("Failed to remove furniture due to a network issue.");
    //     });
    // }
    function handleClick() {
        fetch(`/api/project/1/remove_furniture`, {
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
            console.log(data)
            if (data.message) {
                alert(data.message);
                removeFurniture(furniture.id);  // Remove from the local state
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
                <Image alt="uh oh" src={furnitureImg}/>
                <CardContent>
                    <CardHeader>{furnitureName}</CardHeader>
                    <CardMeta>${furniturePrice}</CardMeta>
                    <CardMeta>{furnitureType}</CardMeta>
                    <Button color='green' onClick={(e) => {removeFurniture(img, id, name, price, type)}}>Remove</Button>
                   
                </CardContent>
            </Card>    
        </div>
    )
}

export default SelectedFurniture
