import { CardMeta, CardHeader, CardContent, Card, Button, Image } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import SelectedFurniture from './SelectedFurniture';

function Furniture({furniture, addToProject}){

    function addFurniture(e){
        e.preventDefault()
        const newItem = {
            name: furniture.name,
            price: furniture.price,
            type: furniture.type,
            img: furniture.img
        };
        const id = furniture.id
        addToProject(newItem, id);
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
                    <Button color='green' onClick={(e)=>addFurniture(e)}>Add to Project</Button>
                </CardContent>
            </Card>    
        </div>
    )
}

export default Furniture