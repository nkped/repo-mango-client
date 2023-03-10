//import { useEffect } from "react"
import axios from "axios"
import { Button } from "react-bootstrap"

function Posts() {
  const handleClick = (event) => {
    event.preventDefault()
    axios.get('/create/posts')
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}

          return (
        <div><h1>Posts page</h1>
        <Button onClick={handleClick}>GET POSTS</Button>


        
        
        </div>
        
    )
}









export default Posts