import { useEffect, useState } from 'react'

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

    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>