import './App.css';
import{ BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar';
import Error from './components/Error';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import EmployDetails from './components/EmployDetails';
import Employees from './components/Employees';


function App() {
  return (
   <Router>

    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Employees/>}/>
      <Route exact path='/employee/add' element={<AddEmployee/>}/>

      <Route exact path='/edit/:id' element={<EditEmployee/>}/>
      <Route exact path='/details/:id' element={<EmployDetails/>}/>
      <Route exact path='*' element={<Error/>}/>
    </Routes>
   </Router>
  );
}

export default App;
