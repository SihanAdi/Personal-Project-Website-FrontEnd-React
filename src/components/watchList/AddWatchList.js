import {useEffect, useState} from 'react';
import api from '../../api/axiosConfig';
import AddWatchListForm from './AddWatchListForm';
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {NavLink, useNavigate} from "react-router-dom";

const AddWatchList = ({
    currentUserId, personalProjects, setPersonalProjects, setChanged, changed
}) => {
    const [curPersonalProject, setCurPersonalProject] = useState([]);
    const navigate = useNavigate();

    
    const createPersonalProject = async () => {
        try{
        const response = await api.post('/api/adsh/personalprojects', {title:curPersonalProject.Title, 
            trailerLink:curPersonalProject.TrailerLink, poster:curPersonalProject.Poster, genres:curPersonalProject.Genres, 
            backdrops:curPersonalProject.Backdrops, userId:currentUserId});
        
        let newAllPersonalProjects = personalProjects.push(response.data);
        setPersonalProjects(newAllPersonalProjects);
        console.log(personalProjects)
        }catch(err){
        console.log(err);
        }
    }
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try
        {
            setChanged(changed + 1)
            createPersonalProject();
            navigate('/WatchList');
            
        }
        catch(err)
        {
            console.error(err);
        }
    }
    return (
        <Container>
        <Row>
            <Col></Col>
        </Row>
        <Row className="mt-2">
            <Col>
                <img src="https://images.pexels.com/photos/1535162/pexels-photo-1535162.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" width={560} height={660} className="loginImg"/>
            </Col>
            <Col>
                {
                    <>
                        <Row>
                            <Col><h1>New Personal Project</h1></Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                        <Row className='loginForm'>
                            <Col md={{ span: 6}}>
                                <AddWatchListForm handleSubmit={handleSubmit} curPersonalProject={curPersonalProject} setCurPersonalProject={setCurPersonalProject}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                    </>
                }
            </Col>
        </Row>
        <Row>
            <Col>
                <hr />
            </Col>
        </Row>        
    </Container>
        
        
        
    )
}

export default AddWatchList