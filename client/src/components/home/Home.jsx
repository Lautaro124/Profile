import React from 'react'
import Card from '../card/Card'
import { useSelector } from 'react-redux'

export default function Home() {

    const projects = useSelector(state => state.project)
    return (
        <div>
            <h1>Projects</h1>
            {
                projects?.map(project => 
                    <Card 
                        title={project.title} 
                        description={project.description}
                        img={project.img} 
                        colaborations={project.colaborations}/>
                )
            }
        </div>
    )
}
