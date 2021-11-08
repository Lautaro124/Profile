import React,{ useEffect } from 'react'
import Home from './components/home/Home'
import Project from './components/forms/createProjects/Project'
import './App.css'
import LandingPage from './components/landingPage/LandingPage'
import { useDispatch } from 'react-redux'
import { getProjects } from './action/actions'
import { BrowserRouter, Route } from 'react-router-dom'

export default function App() {

  const dispatch = useDispatch()
  useEffect(() => {

    // Despacho de accion para optener infomración de cada proyecto
    dispatch(getProjects())
    
  },[dispatch])

  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={LandingPage}/>
        <Route path='/Home' component={Home}/>
        <Route path='/Create_Project' component={Project}/>
      </div>
    </BrowserRouter>
  );
}