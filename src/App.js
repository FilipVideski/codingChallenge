import FetchRandomData from './components/FetchRandomData';
import DisplayTable from './components/displayTable';
import './App.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import RandomEmployees  from "./components/RandomEmployees"

function App() {
  
  const [employeeData, fetchEmployees] = useState('')
  const randomEmployee = () => {
    FetchRandomData (fetchEmployees)  
  
  }
  
  useEffect(() => {
    FetchRandomData(fetchEmployees);
  }, [])
  
  return (
    <div className='App'>
      <button onClick = { randomEmployee }>
        { employeeData  ? employeeData.tags[0].name : 'Random Employee'}
      </button>
      <DisplayTable employee = { employeeData }></DisplayTable>
        </div>
    );
  }
  function Navigate() {
  const navigate = useNavigate();
  const navigateToRandomEmployee = () => {
    navigate('/RandomEmployees');
  }
  return (
    <div>
      <div>
        <button onClick={ navigateToRandomEmployee }>Random Employee</button>
        <hr/>
        
        <Routes>
          <Route path = "/RandomEmployees" element = {<RandomEmployees />}/>
        </Routes>
          

      </div>

    </div>
   );

}
  
  
    
    
 
  export default App;
  




    
  

