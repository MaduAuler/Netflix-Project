
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Gallery from './components/Gallery'
import Footer from './components/Footer'

import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
