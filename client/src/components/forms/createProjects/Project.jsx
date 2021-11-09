import React, { useState } from 'react'
import { TextField, Box, Button, Typography } from '@mui/material'

export default function Project() {

  const [ colaborator, setColaborator ] = useState([])
  const [ names, setNames ] = useState('')
  const [ link, setLink ] = useState('')

  const addColaborator = (colaborator, linkedin) => {

    setColaborator([...colaborator,{name: colaborator, linkedin}])
  }
  return (
    <Box>
        <TextField label='Project Name' />
        <TextField label='Description' />
        <TextField label='Colaboration' onChange={e => setNames(e.target.value)} value={names}/>
        <TextField label='Linkedin Colaborator' onChange={e => setLink(e.target.value)} value={link}/>
        <Button onClick={addColaborator(names, link)}>Add Colaborator</Button>
        {
          colaborator?.map(person => 
            <Typography>Nombre: {person.name} Linkedin: {person.linkedin}</Typography>
          )
        }
        <Button>Create</Button>
    </Box>
  )
}
