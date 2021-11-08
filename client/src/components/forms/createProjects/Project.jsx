import React, { useState } from 'react'
import { FormControl, TextField, Box, Button } from '@mui/material'

export default function Project() {

  const [ name, setName ] = useState(false)
  const [ description, setDescription ] = useState(false)
  const [ colaborations, setColaborations ] = useState(false)

  const handleChange = (event) => {

    switch (event.name){

      default:
        setName(false)
        setDescription(false)
        setColaborations(false)
    }
  }

  return (
    <Box>
      <FormControl>
        <TextField name='Name' label='Project Name' onChange={e => handleChange(e)} error={name}/>
        <TextField name='Description' label='Description' onChange={e => handleChange(e)} error={description}/>
        <TextField name='Colaboration' label='Colaboration' onChange={e => handleChange(e)} error={colaborations}/>
        <TextField />
        <Button type='submit'>Create</Button>
      </FormControl>
    </Box>
  )
}
