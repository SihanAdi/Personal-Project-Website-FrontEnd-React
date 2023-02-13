// import React from 'react'
import './ProjectsShow.css'
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';

const ProjectsShow = (props) => {
    const navigate = useNavigate();

    function reviews(personalProjectId)
    {
        navigate(`/Reviews/${personalProjectId}`);
    }
  return (
    <div className ='personalProject-carousel-container'>
      <Carousel>
        {
            props.personalProjects.map((personalProject) =>{
                return(
                    <Paper>
                        <div className = 'personalProject-card-container'>
                            <div className="personalProject-card" style={{"--img": `url(${personalProject.backdrops[0]})`}}>
                                <div className="personalProject-detail">
                                    <div className="personalProject-poster">
                                        <img src={personalProject.poster} alt="" />
                                    </div>
                                    <div className="personalProject-title">
                                        <h4>{personalProject.title}</h4>
                                    </div>
                                    <div className="personalProject-buttons-container">
                                        <Link to={`/Trailer/${personalProject.trailerLink.substring(personalProject.trailerLink.length - 11)}`}>
                                            <div className="play-button-icon-container">
                                                <FontAwesomeIcon className="play-button-icon"
                                                    icon = {faCirclePlay}
                                                />
                                            </div>
                                        </Link>   
                                        <div className="personalProject-review-button-container">
                                            <Button variant ="info" onClick={() => reviews(personalProject.imdbId)} >Reviews</Button>
                                        </div>  
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </Paper>
                )
            })
        }
      </Carousel>
    </div>
  )
}

export default ProjectsShow