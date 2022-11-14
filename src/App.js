import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={ <Body/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
