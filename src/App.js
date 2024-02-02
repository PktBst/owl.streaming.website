import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Tv from './components/Tv';
import Movie from './components/Movie';
import Person from './components/Person';
import Genres from './components/Genres';
function App() {
  
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <header className="App-header">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/tv/:id" element={<Tv/>} />
          <Route exact path="/movie/:id" element={<Movie/>} />
          <Route exact path="/person/:id" element={<Person/>} />
          <Route exact path="/genres/:id" element={<Genres/>} />
        </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
