import {Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react' 
import axios from 'axios'

function CreatePost() {
    const navigate = useNavigate()
    const [ post, setPost] = useState({
        title: '',
        description: ''
    })

const handleChange = (e) => {
    const { name, value } = e.target

    setPost((prev) => {
        return {
            ...prev,
            [name]: value
        }
    })
}

const handleClick = (event) => {
    event.preventDefault()
    axios.post('/create', post)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}
/*
useEffect(() => {
    console.log(post)
}, [post])
*/
    return (
        <div style={{width:'90%', margin: 'auto auto', textAlign: 'center'}}>
            <h1>CreatePost</h1>
            <Form>
                <Form.Group>
                    <Form.Control name='title' placeholder='Title'
                    value={post.title}
                    onChange={handleChange} />
                    <Form.Control name='description' placeholder='Description'
                    value={post.description}
                    onChange={handleChange} />
                </Form.Group>
            </Form>
            <div>
            <Button onClick={handleClick}>CREATE POST</Button>
            </div>
            <div>
            <Button onClick={() => {
                navigate(-1)
            }}>Back</Button>
            </div>
        </div>
    )
}


export default CreatePost