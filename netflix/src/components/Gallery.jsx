import {Row, Container} from "react-bootstrap";
import GalleryRow from './GalleryRow'
import { Component } from "react";
import Filter from "./Filter";

class Gallery extends Component {
 
 state = {
    stateMovies: [],
    stateMovies2: [],
    stateMovies3: [],
   
  };

  componentDidMount(){
     this.fetchMovies()
     this.fetchMovies2()
     this.fetchMovies3()
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

      
  fetchMovies2 = async () => {
    try {
      let response = await fetch("http://www.omdbapi.com/?apikey=9448849c&s=game%20of%20thrones" )
        if(response.ok) {
            const data = await response.json()
            this.setState({stateMovies2: data.Search}, ()=> console.log(this.state.stateMovies2))
              
          } else {
              console.log('error while fetching')
          }
        } catch(e) {
          console.log(e)
        }
      }

      
  fetchMovies3 = async () => {
    try {
      let response = await fetch("http://www.omdbapi.com/?apikey=9448849c&s=lord%20of%20the%20rings" )
        if(response.ok) {
            const data = await response.json()
            this.setState({stateMovies3: data.Search}, ()=> console.log(this.state.stateMovies3))
              
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
          <Row>
          <Filter/>
          </Row>
        <h2 className="text-left mb-2">Trending</h2>
        <Row className="mb-5">
        <GalleryRow movies= {this.state.stateMovies} />
        </Row>
      
        <h2 className="text-left mb-2">Watch it again</h2>
        <Row className="mb-5">
        <GalleryRow movies= {this.state.stateMovies2}/>
        </Row>
      
        <h2 className="text-left">New Releases</h2>
        <Row className="mb-5">
        <GalleryRow movies= {this.state.stateMovies3}/>
        </Row>
      
        </Container>
          
          )}
}

export default Gallery

