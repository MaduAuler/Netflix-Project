
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyFooter from './components/Footer.jsx'
import Gallery from './components/Gallery';
import NavBar from './components/NavBar';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
     <Gallery/>
       <MyFooter />
    </div>
  );
}

export default App;
