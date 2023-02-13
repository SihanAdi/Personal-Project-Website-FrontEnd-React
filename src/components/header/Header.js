import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink, useNavigate} from "react-router-dom";
import api from '../../api/axiosConfig';
import {useEffect, useState} from 'react';



const Header = ({currentUserId, updated}) => {
    const navigate = useNavigate();
    const [currentUserName, setCurrentUserName] = useState("");

    function login()
    {
        navigate('/Login');
    }
    function register()
    {
        navigate('/Register');
    }
    function userInfo()
    {
        navigate('/UserInfo');
    }
    
    const getPerson = async () => {
        try{
        const response = await api.get(`/api/adsh/person/${currentUserId}`);
        
        setCurrentUserName(response.data.userName);
        console.log(currentUserName);
        }catch(err){
        console.log(err);
        }
    }
    useEffect(() => {
        getPerson();
    },[currentUserId, updated])
    
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/" style={{"color":'gold'}}>
                <FontAwesomeIcon icon={faDog} /> AD
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                    <NavLink className ="nav-link" to="/">Home</NavLink>
                    <NavLink className ="nav-link" to="/WatchList">Watch List</NavLink>
                       
                </Nav>
                {currentUserId === "" && <Button variant="outline-info" className="me-2" onClick={() => login()}>Login</Button>}
                {currentUserId !== "" && <Button variant="outline-info" className="me-2" onClick={() => userInfo()}>User</Button>}
                <Button variant="outline-info" onClick={() => register()}>Register</Button>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header