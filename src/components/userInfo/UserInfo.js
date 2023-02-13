import {useState, useEffect} from 'react';
import api from '../../api/axiosConfig';
import {Container, Row, Col} from 'react-bootstrap';
import './UserInfo.css';

const UserInfo = ({currentUserId, setUpdated, updated}) => {
    const [updateInfo, setUpdateInfo] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [tmpUser, setTmpUser] = useState({});
    
    const handleClick = () => {
        setUpdateInfo(true);
        setTmpUser(currentUser);
      };
    const handleClickfui = () => {
        setUpdateInfo(false);

      };
    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setTmpUser({...tmpUser, [key]: value});
    }
    const commit = () => {
        setUpdated(updated + 1);
        console.log(tmpUser);
        updatePerson();
        console.log(currentUser)
    }
    const updatePerson = async () => {
        try{
        const response = await api.post('/api/adsh/person/update', {userName:tmpUser.userName, 
            userPassword:tmpUser.userPassword, gender:tmpUser.gender, birthday:tmpUser.birthday, 
            phone:tmpUser.phone, address:tmpUser.address, age:tmpUser.age, userId: currentUserId});
        
        setCurrentUser(tmpUser);
        }catch(err){
        console.log(err);
        }
    }
    const getPerson = async () => {
        try{
        const response = await api.get(`/api/adsh/person/${currentUserId}`);
        
        setCurrentUser(response.data);
        
        
        }catch(err){
        console.log(err);
        }
    }
    useEffect(() => {
        getPerson();
    },[])
  return (
        <Container>
            <Row>
                <Col><h3>UserInfo</h3></Col>
                <Col>
                    <button onClick={handleClick} className='clickbt'>Update Information</button>
                    <button onClick={handleClickfui} className='clickbt'>Finish Update Information</button>
                </Col>
                
            </Row>
  
            <Row className="mt-2">
                <Col>
                    <img src="https://images.pexels.com/photos/1302436/pexels-photo-1302436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={600} className='userInfoImg'/>
                </Col>

                <Col>
                    <Row>
                        <Col className='watchListLabel'>UserName</Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr />
                        </Col>
                    </Row> 
                    <Row>
                        <Col>{currentUser.userName}</Col>
                        <Col>
                            {updateInfo && 
                            <div>
                                <input type="text" onChange={handleChange} name="userName" className='inputbox'></input>
                                <button onClick={commit} className='commitbt'>Commit</button>
                            </div>
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr />
                        </Col>
                    </Row> 


                    <Row>
                        <Col className='watchListLabel'>UserPassword</Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr />
                        </Col>
                    </Row> 
                    <Row>
                        <Col>{currentUser.userPassword}</Col>
                        <Col>
                            {updateInfo && 
                            <div>
                                <input type="text" onChange={handleChange} name="userPassword" className='inputbox'></input>
                                <button onClick={commit} className='commitbt'>Commit</button>
                            </div>
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr />
                        </Col>
                    </Row>


                    <Row>
                        <Col className='watchListLabel'>Gender</Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col>{currentUser.gender}</Col>
                        <Col>
                            {updateInfo && 
                            <div>
                                <input type="text" onChange={handleChange} name="gender" className='inputbox'></input>
                                <button onClick={commit} className='commitbt'>Commit</button>
                            </div>
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr />
                        </Col>
                    </Row>


                    <Row>
                        <Col className='watchListLabel'>Birthday</Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col>{currentUser.birthday}</Col>
                        <Col>
                            {updateInfo && 
                            <div>
                                <input type="text" onChange={handleChange} name="birthday" className='inputbox'></input>
                                <button onClick={commit} className='commitbt'>Commit</button>
                            </div>
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr />
                        </Col>
                    </Row> 

                    <Row>
                        <Col className='watchListLabel'>Phone Number</Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col>{currentUser.phone}</Col>
                        <Col>
                            {updateInfo && 
                            <div>
                                <input type="text" onChange={handleChange} name="phone" className='inputbox'></input>
                                <button onClick={commit} className='commitbt'>Commit</button>
                            </div>
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr />
                        </Col>
                    </Row> 

                    <Row>
                        <Col className='watchListLabel'>Address</Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col>{currentUser.address}</Col>
                        <Col>
                            {updateInfo && 
                            <div>
                                <input type="text" onChange={handleChange} name="address" className='inputbox'></input>
                                <button onClick={commit} className='commitbt'>Commit</button>
                            </div>
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr />
                        </Col>
                    </Row> 

                    <Row>
                        <Col className='watchListLabel'>Age</Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col>{currentUser.age}</Col>
                        <Col>
                            {updateInfo && 
                            <div>
                                <input type="text" onChange={handleChange} name="age" className='inputbox'></input>
                                <button onClick={commit} className='commitbt'>Commit</button>
                            </div>
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr />
                        </Col>
                    </Row> 
                                    
                                    
                </Col>
                                                                 
            </Row>
                    
                

            
    </Container>
  )
}

export default UserInfo