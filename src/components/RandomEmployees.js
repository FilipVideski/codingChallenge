import { useNavigate } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import  DisplayTable from "./displayTable"; 
import "./RandomEmployees.css"

 function newRandomEmployee() {
    const newEmployee = async (fetchEmployee) => {
        const response = await fetch("http://dummy.restapiexample.com/api/v1/employees/random")
        const data = await response.json()
        const [employee] = data.employee
        fetchEmployee(employee)
    
    };

    return (
        <div>
        <button onClick={ newRandomEmployee }>New Random Employee</button>
        </div>
    )
 }



 function RandomEmployees() {
    const navigate = useNavigate();
    const navigateBackToList = () => {
        navigate('/displayTable');
      }
        
 return (
<div>
    <div>
    <button onClick={ navigateBackToList }>Back To List</button>
    <Routes>
    <Route path = "/displayTable" element = {<DisplayTable />}/>
    </Routes>
      
    </div>
</div>
 ) 
}

export default RandomEmployees;
        
