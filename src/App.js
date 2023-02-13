import './App.css';
import api from "./api/axiosConfig";
import { useState,useEffect } from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/404/NotFound';
import Login from './components/login/Login';
import Register from './components/register/Register'
import WatchList from './components/watchList/WatchList';
import UserInfo from './components/userInfo/UserInfo';
import AddWatchList from './components/watchList/AddWatchList';

function App() {
  const [personalProjects, setPersonalProjects] = useState([]);
  const [personalProject, setPersonalProject] = useState();
  const [reviews, setReviews] = useState([]);
  const [currentUserId, setCurrentUserId] = useState("");
  const [changed, setChanged] = useState(0);
  const [updated, setUpdated] = useState(0);
  

 

  const getPersonalProjects = async () => {
    try{
      const response = await api.get('/api/adsh/personalprojects');

      setPersonalProjects(response.data);
    }catch(err){
      console.log(err);
    }
  }
  const getPersonalProjectData = async (personalProjectId) => {
     
    try 
    {
        const response = await api.get(`/api/adsh/personalprojects/${personalProjectId}`);

        const singlePersonalProject = response.data;

        setPersonalProject(singlePersonalProject);

        setReviews(singlePersonalProject.reviewIds);
        
        

    } 
    catch (error) 
    {
      console.error(error);
    }

  }
  
  useEffect(() => {
    getPersonalProjects();
  },[currentUserId, changed])
  return (
    <div className="App">
      <Header currentUserId={currentUserId} updated={updated}/>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home personalProjects={personalProjects}/>} ></Route>
            <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
            <Route path="/Reviews/:personalProjectId" element ={<Reviews getPersonalProjectData = {getPersonalProjectData} personalProject={personalProject} reviews ={reviews} setReviews = {setReviews} />}></Route>
            <Route path="/Login" element={<Login setCurrentUserId={setCurrentUserId}/>}></Route>
            <Route path="/UserInfo" element={<UserInfo currentUserId={currentUserId} setUpdated={setUpdated} updated={updated}/>}></Route>
            <Route path="/Register" element={<Register />}></Route>
            <Route path="/WatchList" element={<WatchList currentUserId={currentUserId} personalProjects={personalProjects} setPersonalProjects={setPersonalProjects} setChanged={setChanged} changed={changed}/>}></Route>
            <Route path="/AddWatchList" element ={<AddWatchList currentUserId = {currentUserId} personalProjects={personalProjects} setPersonalProjects ={setPersonalProjects} setChanged={setChanged} changed={changed}/>}></Route>
            <Route path="*" element = {<NotFound/>}></Route>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
