import './App.css';
import Button from 'react-bootstrap/Button'
import {useNavigate} from 'react-router-dom'


function App() {
  const navigate = useNavigate()
  return (
    <div style={{width:'90%', margin: 'auto auto', textAlign: 'center'}}>
   <h1>Velkommen fra preees layer!</h1>
   <Button onClick={() => navigate('create')} style={{width: '100%'}}
  variant='outline-dark' >Next</Button>
    </div>
  );
}

export default App;
