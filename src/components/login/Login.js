import {useEffect, useState} from 'react';
import api from '../../api/axiosConfig';
import {Container, Row, Col} from 'react-bootstrap';
import LoginForm from './LoginForm';
import React from 'react';
import './Login.css';
import {NavLink, useNavigate} from "react-router-dom";


const Login = ({setCurrentUserId}) => {
    const [allPerson, setAllPerson] = useState([]);
    const [user, setUser] = useState({});
    const navigate = useNavigate();


    const getAllPerson = async () => {
        try{
        const response = await api.get('/api/adsh/person');

        setAllPerson(response.data);
        }catch(err){
        console.log(err);
        }
    }
    useEffect(() => {
        getAllPerson();
    },[])
    const handleSubmit = async (e) => {
        e.preventDefault();

        try
        {
            console.log(user);
            allPerson.map((person) => {
                if (person.userPassword === user.Password && person.phone === user.Phone){
                    setCurrentUserId(person.userId);
                    console.log(person.userId);
                    navigate('/');
                }
            })
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
                            <Col><h1>Login</h1></Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                        <Row className='loginForm'>
                            <Col md={{ span: 6}}>
                                <LoginForm handleSubmit={handleSubmit} user={user} setUser={setUser}/>
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

export default Login