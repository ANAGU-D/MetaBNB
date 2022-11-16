import './App.css';
import Home from './pages/home';
import PlacetoStay from './pages/placetostay';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/placetostay' element={ <PlacetoStay/>}/>
      </Routes>
      
    </Router>
  );
}

export default App;
