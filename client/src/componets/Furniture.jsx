/* Child file of Project, holding code for all furniture cards in the data
*/

import { CardMeta, CardHeader, CardContent, Card, Button, Image } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'

function Furniture({furniture}){

    function handleClick(e){
        print(e)
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