import {Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



function CreatePost() {
    const navigate = useNavigate()
    return (
        <div style={{width:'90%', margin: 'auto auto', textAlign: 'center'}}>
            <h1>CreatePost</h1>
            <Form>
                <Form.Group>
                    <Form.Control style={{marginBottom: '1rem'}} name='title' placeholder='Title' />
                    <Form.Control style={{marginBottom: '1rem'}} name='description' placeholder='Description' />
                </Form.Group>
            </Form>
            <Button style={{width: '100%'}}
  variant='outline-dark' onClick={()=> {
                navigate(-1)
            }}>Back</Button>
        </div>
    )
}


export default CreatePost