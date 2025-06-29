import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import StudentsView from './component/student/StudentsView';
import Home from './Home';
import { Nav } from 'react-bootstrap';
import NavBar from './component/common/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} >
          </Route>
          <Route exact path="/view-students" element={<StudentsView />} >

          </Route>
        </Routes>
      </Router>
    </div >
  );
}

export default App;
