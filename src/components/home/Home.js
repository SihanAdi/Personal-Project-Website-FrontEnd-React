import React from 'react'
import ProjectsShow from '../projectsShow/ProjectsShow'
const Home = (props) => {
  return (
    <ProjectsShow personalProjects={props.personalProjects}/>
  )
}

export default Home