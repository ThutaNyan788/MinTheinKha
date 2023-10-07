import React from 'react'
import { Outlet } from "react-router-dom"
import { ContextProvider } from './hooks/store'
const App = () => {
  return (
    <>
      <ContextProvider>
        <div className="container">
          <div className="logo-container">
            <img src="/logo.jpg" alt="" className="logo-img" />
            <h1>လက်ထောက်ဗေဒင်</h1>
          </div>


          <div className="swap-container">
            <Outlet />
          </div>
        </div>
      </ContextProvider>
    </>
  )
}

export default App