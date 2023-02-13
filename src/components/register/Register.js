import {useEffect, useState} from 'react';
import api from '../../api/axiosConfig';
import RegisterForm from './RegisterFrom';
import React from 'react';
import './Register.css';
import {Container, Row, Col} from 'react-bootstrap';
import {NavLink, useNavigate} from "react-router-dom";

const Register = () => {
    const [allPerson, setAllPerson] = useState([]);
    const [user, setUser] = useState({});
    let invalid = false;
    const navigate = useNavigate();

    const getAllPerson = async () => {
        try{
        const response = await api.get('/api/adsh/person');

        setAllPerson(response.data);
        }catch(err){
        console.log(err);
        }
    }
    const createPerson = async () => {
        try{
        const response = await api.post('/api/adsh/person', {userName:user.UserName, 
            userPassword:user.Password, gender:user.Gender, birthday:user.Birthday, 
            phone:user.Phone, address:user.Address, age:user.Age});
        
        let newAllPerson = allPerson.push(response.data);
        setAllPerson(newAllPerson);
        console.log(allPerson)
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
            invalid = false;
            allPerson.map((person) => {
                if (person.userName === user.UserName
                && person.userPassword === user.Password
                && person.gender === user.Gender
                && person.birthday === user.Birthday
                && person.phone === user.Phone
                && person.address === user.Address
                && person.age === user.Age){
                    invalid = true;
                    console.log(invalid);
                }
            })
            if (!invalid){
                createPerson();
                navigate('/Login');
            }
        }
        catch(err)
        {
            console.error(err);
        }
        console.log(invalid);
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
                            <Col><h1>Register</h1></Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                        <Row className='loginForm'>
                            <Col md={{ span: 6}}>
                                <RegisterForm handleSubmit={handleSubmit} user={user} setUser={setUser}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr />
                                {{invalid} && <h3 className='invalid'>Invalid, Maybe already exist!</h3>}
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

export default Register