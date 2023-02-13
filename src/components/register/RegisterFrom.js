
import {Form,Button} from 'react-bootstrap';

const RegisterForm = ({handleSubmit,user,setUser, defaultValue}) => {
  const onInput = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setUser({...user, [key]: value})
  }
  return (

    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>UserName</Form.Label>
        <Form.Control onChange={onInput} type="text" defaultValue={defaultValue} placeholder="UserName" name="UserName"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={onInput} type="password" placeholder="Password" name="Password" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="validationFormik01">
        <Form.Label>Gender</Form.Label>
        <Form.Control onChange={onInput} type="text" placeholder="Gender" name="Gender" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="validationFormik02">
        <Form.Label>Birthday</Form.Label>
        <Form.Control onChange={onInput} type="text" placeholder="Birthday" name="Birthday" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="validationFormik03">
        <Form.Label>Phone</Form.Label>
        <Form.Control onChange={onInput} type="text" placeholder="Phone" name="Phone" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="validationFormik04">
        <Form.Label>Address</Form.Label>
        <Form.Control onChange={onInput} type="text" placeholder="Address" name="Address" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="validationFormik05">
        <Form.Label>Age</Form.Label>
        <Form.Control onChange={onInput} type="text" placeholder="Age" name="Age" required/>
      </Form.Group>
        
      <Button variant="outline-info" onClick={handleSubmit}>Submit</Button>
    </Form>   

  )
}

export default RegisterForm