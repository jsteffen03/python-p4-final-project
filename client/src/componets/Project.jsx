/* Child file of App.js
Will hold nessacry components for Project Page, Furniture card list for project, 
furniture cards of furniture data, and new furniture form 
*/
import {React, useState, useEffect, useRef} from "react"
import { useNavigate } from 'react-router-dom'
import {Form, Button, FormField, Card} from 'semantic-ui-react'
import FurnitureCard from './SelectedFurniture'
import Furniture from './Furniture'
import  '../styles.css'

function Project(){

    const [furnitureData, setFurnitureData] = useState([])
    const [filteredFurniture, setFilteredFurniture] = useState([])

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
 
    const furnitureRender = filteredFurniture.map((furniture)=>{
        return <Furniture key={furniture.id} furniture={furniture}/>
    })


    return (
        <div className="container">
            <div className="Header"> 
                <h1>Project Page</h1>
                <Button color='black' onClick={(e)=>navigate('/user')}>Back to Home</Button>
            </div> 
            <div className="Content2">
                <div className="plants">
                    <Card.Group itemsPerRow={1}>
                        <FurnitureCard/>
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