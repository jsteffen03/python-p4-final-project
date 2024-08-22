/* Child file of App.js
Will hold nessacry components for Project Page, Furniture card list for project, 
furniture cards of furniture data, and new furniture form 
*/
import {React, useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import {Form, Button, FormField, Card, FormSelect} from 'semantic-ui-react'
import SelectedFurniture from './SelectedFurniture'
import Furniture from './Furniture'
import  '../styles.css'

function Project({projectId, user, pBudget}) {

    // All states for Project page
    const [furniture, setFurniture] = useState([]) 
    const [selectedFurniture, setSelectedFurniture] = useState([])
    const [filteredFurniture, setFilteredFurniture] = useState([])
    const [filter, setFilter] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [type, setType] = useState("")
    const [img, setImg] = useState("")
    const navigate = useNavigate()
    const [totalPrice, setTotalPrice] = useState(0)

    // Fetch all furniture data and sets selected furniture based on project
    useEffect(()=>{
        fetch("/api/furniture")
        .then(r=>r.json())
        .then(data=>{
            setFurniture(data)
            setFilteredFurniture(data)
        })
        if (user && user.projects) {
            const selectedProject = user.projects.find(project => project.id === projectId);
            
            if (selectedProject) {
                console.log("Project found");
                setSelectedFurniture(selectedProject.furniture);
            } else {
                console.log("Project not found");
            }
        }
    }
    ,[])
    // Function to add furniture to project
    function addToProject(newItem, id) {
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

    // furnction to add new furniture from form to database and trigger add to project
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
          setFilteredFurniture(newArr)
        })
    }
    // function to add new furniture from form
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

    // function to filter furniture by type
    function handleSearch(e){
        e.preventDefault()
        setFilteredFurniture(furniture.filter(furn=>{
            if(filter === ''){
                return true
            }
            else if(filter == furn.type)
                return true
        }))
    }

    // function to set total price based on selected furniture
    useEffect(() => {
        const newTotalPrice = selectedFurniture.reduce((acc, item) => acc + item.price, 0);
        setTotalPrice(newTotalPrice);
    }, [selectedFurniture]);

    // renders furniture based on filter
    const furnitureRender = filteredFurniture.map((furniture)=>{
        return <Furniture key={furniture.id} furniture={furniture} addToProject={addToProject}/>
    })

    // renders selected furniture
    const selectedFurnitureRender = selectedFurniture.map((furniture)=>{
        return <SelectedFurniture key={furniture.id} furniture={furniture} projectId={projectId} selectedFurniture={selectedFurniture} setSelectedFurniture={setSelectedFurniture}/>
    })

    // renders form options
    const options = [ 
        { key: 'a', text: '--Select--', value: '' },
        { key: 't', text: 'Table', value: 'table' },
        { key: 'c1', text: 'Chair', value: 'chair' },
        { key: 's1', text: 'Sofa', value: 'sofa' },
        { key: 'c2', text: 'Carpet', value: 'carpet' },
        { key: 's2', text: 'Shelving', value: 'shelving' },
        { key: 'm', text: 'Misc', value: 'misc' },
        { key: 'l', text: 'Lighting', value: 'lighting' }
    ]

    return (
        <div className="container">
            <div className="Header"> 
                <h1>Project Page</h1>
                <Button color='black' onClick={(e)=>navigate('/user')}>Back to Home</Button>
                <h2>Budget: ${pBudget}</h2>
                <h2>Total Price of Selected Furniture: ${totalPrice}</h2>
                {totalPrice > pBudget && <p style={{ color: 'red' }}>Over Budget!</p>}
            </div> 
                <Form onSubmit={(e)=>handleSearch(e)}>
                    <h2>Filter Search</h2> 
                    <Button color='black' type="submit">Search</Button>
                    <FormSelect onChange={(e, { value })=>setFilter(value)}
                        fluid
                        label='Select Type'
                        options={options}
                        placeholder='--Select--'    
                    />
                </Form>
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
                <div className="plants2" itemsperrow={2}>
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