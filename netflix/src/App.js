import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyFooter from './components/Footer.jsx'
//import Gallery from './components/Gallery';
import NavBar from './components/NavBar';
//import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TvShows from './components/TvShows'
import MovieDetails from './components/MovieDetails';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
        
        <NavBar/>
       <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/tv-shows' element={<TvShows />} />
         <Route path ='/movie-details' element ={<MovieDetails/>} />
       </Routes>
      {/*  <Header/>
       <Gallery/> */}
       <MyFooter />
     </BrowserRouter>
      
    </div>
    
  );
}

export default App;
