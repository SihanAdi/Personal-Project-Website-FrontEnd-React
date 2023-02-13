
import {Form,Button} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import ReactDOM from "react-dom/client";

const AddWatchListForm = ({handleSubmit,curPersonalProject, setCurPersonalProject, defaultValue}) => {
  const [counterGenres, setCounterGenres] = useState([0]);
  const [counterBackdrops, setCounterBackdrops] = useState([0]);
  const [genres, setGenres] = useState([]);
  const [backdrops, setBackdrops] = useState([]);
  const onInput = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setCurPersonalProject({...curPersonalProject, [key]: value})
  }
  const onInputGenres = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    let newgenres = genres;
    if (genres.length - 1 >= key){
      newgenres.splice(key, 1); 
      newgenres.splice(key, 0, value);
    }else{
      newgenres.push(value);
    }
    
    setGenres(newgenres)
    setCurPersonalProject({...curPersonalProject, "Genres": genres})
    if (key == counterGenres.length - 1){
      counterGenres.push(counterGenres[counterGenres.length - 1] + 1);
      var newcounterGenres = counterGenres;
      setCounterGenres(newcounterGenres);

    }
  }
  const onInputBackdrops = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    let newbackdrops = backdrops;
    if (backdrops.length - 1 >= key){
      newbackdrops.splice(key, 1); 
      newbackdrops.splice(key, 0, value);
    }else{
      newbackdrops.push(value);
    }
    
    setBackdrops(newbackdrops)
    setCurPersonalProject({...curPersonalProject, "Backdrops": backdrops})
    if (key == counterBackdrops.length - 1){
      counterBackdrops.push(counterBackdrops[counterBackdrops.length - 1] + 1);
      var newcounterBackdrops = counterBackdrops;
      setCounterBackdrops(newcounterBackdrops);

    }
  }
  return (

    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Title</Form.Label>
        <Form.Control onChange={onInput} type="text" defaultValue={defaultValue} placeholder="Title" name="Title"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="validationFormik01">
        <Form.Label>TrailerLink</Form.Label>
        <Form.Control onChange={onInput} type="text" placeholder="TrailerLink" name="TrailerLink" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="validationFormik02">
        <Form.Label>Poster</Form.Label>
        <Form.Control onChange={onInput} type="text" placeholder="Poster" name="Poster" />
      </Form.Group>
      <label>Genres</label>
        {
          counterGenres?.map((i) => {
            return (<Form.Group className="mb-3" controlId="validationFormik02">
              {/* <Form.Label>Genres</Form.Label> */}
              <Form.Control onChange={onInputGenres} type="text" placeholder="Genres" name={i}/>
            </Form.Group>)
          })
        }
        
      <label>Backdrops</label>
        {
          counterBackdrops?.map((i) => {
            return (<Form.Group className="mb-3" controlId="validationFormik02">
                <Form.Control onChange={onInputBackdrops} type="text" placeholder="Backdrops" name={i}/>
              </Form.Group>)
          })
        }
      
      
      
      
        
      <Button variant="outline-info" onClick={handleSubmit}>Submit</Button>
    </Form>   

  )
}

export default AddWatchListForm