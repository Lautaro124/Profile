import React,{ useEffect } from 'react'
import Home from './components/home/Home'
import { useDispatch } from 'react-redux'
import { getProjects } from './action/actions'

function App() {

  const dispatch = useDispatch()
  useEffect(() => {

    // Despacho de accion para optener infomración de cada proyecto
    dispatch(getProjects())
    
  },[dispatch])

  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;
