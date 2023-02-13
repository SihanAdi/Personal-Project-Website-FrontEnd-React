import {useState, useEffect} from 'react';
import api from '../../api/axiosConfig';
import {Container, Row, Col} from 'react-bootstrap';
import './WatchList.css';
import Button from "react-bootstrap/Button";
import {NavLink, useNavigate} from "react-router-dom";



const WatchList = ({currentUserId, setPersonalProjects, personalProjects, setChanged, changed}) => {
    const [currentUserPersonalProjects, setCurrentUserPersonalProjects] = useState([]);
    // const [Varify, setVarify] = useState(false);
    // const [message, setMessage] = useState('');

    // const [updated, setUpdated] = useState(message);

    // console.log("varify",Varify);
    // const handleChange = (event) => {
    //     setMessage(event.target.value);
    //   };
    // const varify = () => {
    //     setVarify(true);
    // }
    // const update = async (r,s) => {
     
    //     try 
    //     {
    //         setUpdated(message);
    //         console.log(updated);
    //         const index = currentUserPersonalProjects.indexOf(r);
    //         if (index > -1) { 
    //             currentUserPersonalProjects.splice(index, 1); 
    //         }

    //         const index2 = personalProjects.indexOf(r);
    //         if (index2 > -1) { 
    //             personalProjects.splice(index2, 1); 
    //         }
    //         let title1 = s==="title" ? updated : r.title;
    //         let trailerLink1 = s==="trailerLink" ? updated : r.trailerLink; 
    //         let poster1 = s==="poster" ? updated : r.poster;
    //         let genres1 = s==="genres" ? updated : r.genres;
    //         let backdrops1 = s==="backdrops" ? updated : r.backdrops;
            
    //         const response = await api.post('/api/adsh/person/update',{title:title1, trailerLink:trailerLink1, 
    //             poster:poster1, genres:genres1, backdrops:backdrops1, imdbId:r.imdbId, userId:currentUserId});
    
    //         const PersonalProject = response.data;
    //         const newUserPersonalProjects = currentUserPersonalProjects.push(PersonalProject)
    //         const newPersonalProjects = personalProjects.push(PersonalProject)
            
    //         setCurrentUserPersonalProjects(newUserPersonalProjects);
    //         setPersonalProjects(newPersonalProjects);
    //         setVarify(false);
    
    //     } 
    //     catch (error) 
    //     {
    //       console.error(error);
    //     }
    
    //   }
    const getcurrentUserPersonalProjects = async () => {
     
        try 
        {
            console.log(currentUserId)
            const response = await api.get(`/api/adsh/person/${currentUserId}`);
    
            const currentUser = response.data;
            console.log(response.data)
    
            setCurrentUserPersonalProjects(currentUser.personalProjectIds);
    
            
            
    
        } 
        catch (error) 
        {
          console.error(error);
        }
    
      }
    useEffect(() => {
        getcurrentUserPersonalProjects();
    },[changed])
    const navigate = useNavigate();
    function add()
    {
        setChanged(changed + 1);
        navigate('/AddWatchList');
    }
  return (
    <Container>
        <Row>
            <Col md={{ offset: 2}}><h3 className='watchList'>WatchList</h3></Col>
            <Col md={{ offset: 2}}><Button variant="outline-info" onClick={() => add()} className='addButton'>Add New Personal Project</Button></Col>
            
        </Row>
        <Row>
            <hr />
            <br />
        </Row>
        {
            currentUserPersonalProjects?.map((r) => {
                return(
                <div>
                    <Row className="mt-2">
                                <Col>
                                    <img src={r?.poster} alt="" width={600} className='watchListImg'/>
                                </Col>

                                <Col>
                                    <Row>
                                        <Col className='watchListLabel'>Title</Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr />
                                        </Col>
                                    </Row> 
                                    <Row>
                                        <Col>{r.title}</Col>
                                        {/* <Col>
                                            <Button variant="outline-info" onClick={() => varify()}>Varify</Button>
                                            {Varify && 
                                            (<div>
                                                <input type="text" id="message" name="message" onChange={handleChange} value={message}/>
                                                <Button variant="outline-info" onClick={() => update(r,'title')}>Submit</Button>
                                            </div>)
                                            }
                                        </Col> */}
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr />
                                        </Col>
                                    </Row> 


                                    <Row>
                                        <Col className='watchListLabel'>ReleaseDate</Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr />
                                        </Col>
                                    </Row> 
                                    <Row>
                                        <Col>{r.releaseDate}</Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr />
                                        </Col>
                                    </Row>


                                    <Row>
                                        <Col className='watchListLabel'>TrailerLink</Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>{r.trailerLink}</Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr />
                                        </Col>
                                    </Row>


                                    <Row>
                                        <Col className='watchListLabel'>Poster</Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>{r.poster}</Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr />
                                        </Col>
                                    </Row> 


                                    <Row>
                                        <Col className='watchListLabel'>Genres</Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>{
                                                r.genres?.map((g) => {
                                                    return(
                                                        <>
                                                            <Row>
                                                                <Col>{g}</Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <hr />
                                                                </Col>
                                                            </Row>                                
                                                        </>
                                                    )
                                                })
                                            }</Col>
                                    </Row>
                                    

                                    <Row>
                                        <Col className='watchListLabel'>Backdrops</Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>{
                                                r.backdrops?.map((g) => {
                                                    return(
                                                        <>
                                                            <Row>
                                                                <Col>{g}</Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <hr />
                                                                </Col>
                                                            </Row>                                
                                                        </>
                                                    )
                                                })
                                            }</Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <br />
                                            <br />
                                        </Col>
                                    </Row>  
                                    
                                </Col>
                                                                 
                    </Row>
                    <Row>
                        <Col>

                            <br />
                            <hr />
                            <br />
                            <br />
                        </Col>
                    </Row>
                </div>
                )
            })
        }

            
    </Container>
  )
}

export default WatchList