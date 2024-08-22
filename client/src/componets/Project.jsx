/* Child file of App.js
Will hold nessacry components for Project Page, Furniture card list for project, 
furniture cards of furniture data, and new furniture form 
*/
import {React, useState, useEffect, useRef} from "react"
import { useNavigate, useLocation } from 'react-router-dom'
import {Form, Button, FormField, Card} from 'semantic-ui-react'
import SelectedFurniture from './SelectedFurniture'
import Furniture from './Furniture'
import  '../styles.css'

function Project({user}) {

    const navigate = useNavigate()
    const location = useLocation();
   
    const [furniture, setFurniture] = useState([]) 
    const [selectedFurniture, setSelectedFurniture] = useState([]) 
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [type, setType] = useState("")
    const [img, setImg] = useState("")
    const [totalPrice, setTotalPrice] = useState(0)
    const [budget, setBudget] = useState(0)
    const [projectId, setProjectId] = useState(initialProjectId);


    useEffect(()=>{
        fetch("/api/furniture")
        .then(r=>r.json())
        .then(data=>{
            setFurniture(data)
        })
        if (user && user.projects && user.projects[projectId - 1]) {
            setSelectedFurniture(user.projects[projectId - 1].furniture || []);
        }
    }
    ,[])
    
    function addToProject(newItem, id) {
        console.log(projectId)
        fetch(`/api/project/${projectId}/add_furniture`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                project_id: projectId,  
                furniture_id: id,  
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response bad');
            }
            return response.json();
        })
        .then(data=>{
            const newArr = [...selectedFurniture, newItem]
            setSelectedFurniture(newArr)
          })
        .catch(error => {
            console.error('There was a problem with the fetch:', error);
        });
    }

    function addToDatabase(newFurn){
        fetch("/api/furniture",{
          method:"POST",
          headers:{
            "Content-Type": "Application/json"
          },
          body: JSON.stringify(newFurn)
        })
        .then(r=>r.json())
        .then(data=>{
          const newArr = [...furniture,data]
          addToProject(data, data.id)
          setFurniture(newArr)
        })
    }

    function addItem(e){
        e.preventDefault()
        const newFurn = {
            name: name,
            price: parseInt(price, 10),
            type: type,
            img: img    
        }
        addToDatabase(newFurn)
    }
    useEffect(() => {
        const newTotalPrice = selectedFurniture.reduce((acc, item) => acc + item.price, 0);
        setTotalPrice(newTotalPrice);
    }, [selectedFurniture]);
 
    const furnitureRender = furniture.map((furniture)=>{
        return <Furniture key={furniture.id} furniture={furniture} addToProject={addToProject}/>
    })

    const selectedFurnitureRender = selectedFurniture.map((furniture)=>{
        return <SelectedFurniture key={furniture.id} furniture={furniture} projectId={projectId} selectedFurniture={selectedFurniture} setSelectedFurniture={setSelectedFurniture}/>
    })

    return (
        <div className="container">
            <div className="Header"> 
                <h1>Project Page</h1>
                <div>
                <h2>Budget: ${budget}</h2>
                    <h2>Total Price of Selected Furniture: ${totalPrice}</h2>
                    {totalPrice > budget && <p style={{ color: 'red' }}>Over Budget!</p>}
                </div>
                <Button color='black' onClick={(e)=>navigate('/user')}>Back to Home</Button>
            </div> 
                <Form onSubmit={(e)=>addItem(e)}>
                    <h3>Can't find what you are looking for? Add one Here!</h3> 
                    <FormField>
                        <label>Item Name</label>
                        <input type="text" placeholder="Item Name" onChange={(e)=>setName(e.target.value)}/>
                    </FormField>
                    <FormField>
                        <label>Item Price</label>
                    <input type="text" placeholder="Item Price" onChange={(e)=>setPrice(e.target.value)}/>
                    </FormField>
                    <FormField>
                        <label>Item Type</label>
                        <input type="text" placeholder="Item Type" onChange={(e)=>setType(e.target.value)}/>
                    </FormField>
                    <FormField>
                        <label>Item Image</label>
                        <input type="text" placeholder="Item Image" onChange={(e)=>setImg(e.target.value)}/>
                    </FormField>
                    <Button color='black' type='submit'>Add Item</Button>
                </Form>            
            <div className="Content2">
                <div className="plants2">
                    <Card.Group>
                        {selectedFurnitureRender}
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