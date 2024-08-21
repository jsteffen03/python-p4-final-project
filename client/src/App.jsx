import { useState, useEffect } from 'react'
import Project from './componets/Project.jsx'
import Userpage from './componets/Userpage.jsx'
import Login from './componets/Login.jsx'
import { BrowserRouter, Routes, Route, Navigate, useNavigate} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

function App(){
  
  const [user, setUser] = useState(null);

  useEffect(()=>{
    fetch('/api/checksessions')
    .then(r=>{
      if (r.ok){
        return r.json()
      }
      else{
        throw new Error
      }
    })
    .then(data => {
      setUser(data)
    })
    .catch(()=>{})
  },[])

  return (
    <div className="body2">
      <BrowserRouter>
        <Routes>
          {user ? (
            <>
              <Route path="/user" element={<Userpage user={user} setUser={setUser} />} />
              <Route path="/user/project" element={<Project />} />
              <Route path="*" element={<Navigate to="/user" />} /> 
            </>
          ) : (
            <>
              <Route path="/" element={<Login user={user} setUser={setUser} />} />
              <Route path="*" element={<Navigate to="/" />} /> 
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App