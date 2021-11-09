import React,{ useEffect } from 'react'
import Home from './components/home/Home'
import './App.css'
import { useDispatch } from 'react-redux'
import { getProjects } from './action/actions'

export default function App() {

  const dispatch = useDispatch()
  useEffect(() => {

    // Despacho de accion para optener infomración de cada proyecto
    dispatch(getProjects())
    
  },[dispatch])

  return (
      <div className="App">
        <Home />
      </div>
  );
}