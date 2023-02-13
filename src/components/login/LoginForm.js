
import {Form,Button} from 'react-bootstrap';


const LoginForm = ({handleSubmit,user,setUser, defaultValue}) => {
  const onInput = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setUser({...user, [key]: value})
  }
  return (

    <Form>
      
      <Form.Group className="mb-3" controlId="validationFormik03">
        <Form.Label className="loginformLabel">Phone</Form.Label>
        <Form.Control onChange={onInput} type="text" placeholder="Phone" name="Phone" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="loginformLabel">Password</Form.Label>
        <Form.Control onChange={onInput} type="password" placeholder="Password" name="Password" required/>
      </Form.Group>
        
      <Button variant="outline-info" onClick={handleSubmit} className="loginform">Submit</Button>
    </Form>   

  )
}

export default LoginForm