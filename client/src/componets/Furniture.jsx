import { CardMeta, CardHeader, CardContent, Card, Button, Image } from 'semantic-ui-react'

function Furniture({furniture, addToProject}){

    // Function to add furniture to project
    function addFurniture(e){
        e.preventDefault()
        const id = furniture.id
        addToProject(furniture, id);
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