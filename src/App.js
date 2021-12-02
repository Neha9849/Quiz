import react,{useState} from 'react';
import './App.css';
import Home from './components/Home/Home'
function App() {
  const [count,setCount]=useState(0);
  const [category,setCategory]=useState('')
  const [level,setLevel]=useState('') 
  return (
   <Home/>
  
  );
}

export default App;
