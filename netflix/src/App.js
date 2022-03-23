
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyFooter from './components/Footer.jsx'
import Gallery from './components/Gallery';
import NavBar from './components/NavBar';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TvShows from './components/TvShows'
import MovieDetails from './components/MovieDetails';


function App() {
  return (
   
    <BrowserRouter>
      <NavBar/>
      <Header/>
    <Routes>
    <Route path= "/" element={<Gallery/>}/>
      <Route path='/tv-shows' element={<TvShows />}/>
      <Route path="/details/:moviesId" element={<MovieDetails />} />
    </Routes>
    <MyFooter />
    </BrowserRouter>


  );
}

export default App;
