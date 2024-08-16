/* Child file of App.js
Will hold nessacry components for Project Page, Furniture card list for project, 
furniture cards of furniture data, and new furniture form 
*/

import { useNavigate } from 'react-router-dom'
import {Form, Button, FormField} from 'semantic-ui-react'

function Project(){

    const navigate = useNavigate()

    return (
        <div>
            <h1>Project</h1>
            <Button color='black' onClick={(e)=>navigate('/user')}>Back to Home</Button>
        </div>
    )
}

export default Project