import react,{useState} from 'react';
import './App.css';
import Home from './components/Home/Home'
function App() {
  const [count,setCount]=useState(0);
  const [category,setCategory]=useState('any')
  const [level,setLevel]=useState('any') 
  return (
   <Home setCategory={setCategory} setLevel={setLevel}/>
  
  );
}

export default App;
