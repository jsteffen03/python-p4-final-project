import { useState, useEffect } from 'react'
import Project from './componets/Project.jsx'
import Userpage from './componets/Userpage.jsx'
import Login from './componets/Login.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

function App() {

  return (
    <div className="body2">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ // home route that is the login page
          <Login/>
        }/>
        <Route path="/logout" element={ // home route that is the login page
          <Login/>
        }/>
        <Route path="/user" element={ // route to user homepage
          <Userpage />
        }/>
        <Route path="/user/project" element={ // route to project page
          <Project />
        }/>
      </Routes>
    </BrowserRouter>
  </div>
  )
}
export default App