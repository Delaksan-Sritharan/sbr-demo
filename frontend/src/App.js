import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import StudentsView from './component/student/StudentsView';
import Home from './Home';



function App() {
  return (
    <div className="App">
      <h2>Welcome to our frontend</h2>
      <Home />
      <StudentsView />
    </div>
  );
}

export default App;
