
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import './App.css';
import MyFooter from './components/Footer.jsx'
import Gallery from './components/Gallery';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      
      <NavBar/>
     
      <Gallery/>
       <MyFooter />
      
    </div>
    
  );
}

export default App;
