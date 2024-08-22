/* Child file of App.js
Will hold nessacry components for Project Page, Furniture card list for project, 
furniture cards of furniture data, and new furniture form 
*/
import {React, useState, useEffect, useRef} from "react"
import { useNavigate } from 'react-router-dom'
import {Form, Button, FormField, Card} from 'semantic-ui-react'
import SelectedFurniture from './SelectedFurniture'
import Furniture from './Furniture'
import  '../styles.css'

function Project(){
    const [totalPrice, setTotalPrice] = useState(0)
    const [budget, setBudget] = useState(0)
    const [furnitureData, setFurnitureData] = useState([])
    const [filteredFurniture, setFilteredFurniture] = useState([]) 
    const [selectedFurniture, setSelectedFurniture] = useState([])
    const [projectId, setProjectId] = useState(null)
    const navigate = useNavigate()

    useEffect(()=>{
        fetch("/api/furniture")
        .then(r=>r.json())
        .then(data=>{
            console.log(data)
            setFurnitureData(data)
            setFilteredFurniture(data)
        })
    }
    ,[])

    useEffect(() => {
        const newTotalPrice = selectedFurniture.reduce((acc, item) => acc + item.price, 0);
        setTotalPrice(newTotalPrice);
    }, [selectedFurniture]);
 
    const furnitureRender = filteredFurniture.map((furniture)=>{
        return <Furniture key={furniture.id} furniture={furniture} selectedFurniture={selectedFurniture} setSelectedFurniture={setSelectedFurniture}/>
    })
    console.log(selectedFurniture)
//code from other projects
//     function onRemove(img,id, name, price, type) {
//         const newSFList = selectedFurniture.filter(f => f.img !== img || f.id !== id || f.name !== name || f.price !== price || f.type !== type);
//         setSelectedFurniture(newSFList);
// }
    function onRemove(furnitureId) {
        const newSFList = selectedFurniture.filter(furniture => furniture.id !== furnitureId);
        setSelectedFurniture(newSFList);
}
    return (
        <div className="container">
            <div className="Header"> 
                <h1>Project Page</h1>
                <Button color='black' onClick={(e)=>navigate('/user')}>Back to Home</Button>
            </div> 
            <div className="Content2">
                <div className="plants">
                    <div>
                        <h2>Budget: ${budget}</h2>
                        <h2>Total Price of Selected Furniture: ${totalPrice}</h2>
                        {totalPrice > budget && <p style={{ color: 'red' }}>Over Budget!</p>}
                            </div>
                    <Card.Group itemsPerRow={1}>
                    {selectedFurniture.map(furniture => (
                         <SelectedFurniture
                            key={furniture.id}
                            furniture={furniture}
                            projectId={projectId}
                            furnitureName = {furniture.name}
                            furniturePrice= {furniture.price}
                            furnitureType= {furniture.type}
                            furnitureImg= {furniture.img}
                           
                            removeFurniture={onRemove}
                             />
                            ))}
                    </Card.Group>
                </div>
                <div className="plants">
                    <Card.Group>
                        {furnitureRender}
                    </Card.Group>
                </div>
            </div>
        </div>
    )
}

export default Project