import {Row, Container} from "react-bootstrap";
import GalleryRow from './GalleryRow'
import { Component } from "react";

class Gallery extends Component {
 
 state = {
    stateMovies: [],
   
  };

  componentDidMount(){
     this.fetchMovies()
  };

  fetchMovies = async () => {
    try {
      let response = await fetch("http://www.omdbapi.com/?apikey=9448849c&s=harry%20potter" )
        if(response.ok) {
            const data = await response.json()
            this.setState({stateMovies: data.Search}, ()=> console.log(this.state.stateMovies))
              
          } else {
              console.log('error while fetching')
          }
        } catch(e) {
          console.log(e)
        }
      }

  render() {

    return (
        <Container>

        <h2 className="text-left mb-2">Trending</h2>
        <Row className="mb-5">
        <GalleryRow movies= {this.state.stateMovies}/>
        </Row>
      
        <h2 className="text-left mb-2">Watch it again</h2>
        <Row className="mb-5">
        <GalleryRow movies= {this.state.stateMovies}/>
        </Row>
      
        <h2 className="text-left">New Releases</h2>
        <Row className="mb-5">
        <GalleryRow movies= {this.state.stateMovies}/>
        </Row>
      
        </Container>
          
          )}
}

export default Gallery

