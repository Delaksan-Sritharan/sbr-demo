import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import StudentsView from './component/student/StudentsView';
import Home from './Home';
import { Nav } from 'react-bootstrap';
import NavBar from './component/common/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddStudents from './component/student/AddStudents';



function App() {
  return (
    <main className="container mt-5">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} >
          </Route>
          <Route exact path="/view-students" element={<StudentsView />} >

          </Route>
          <Route exact path="/add-students" element={<AddStudents />} >

          </Route>
        </Routes>
      </Router>
    </main >
  );
}

export default App;
