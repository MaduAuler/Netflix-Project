import {Image,Col, Form, Button } from "react-bootstrap";
import { Component} from "react";

const colStyle= {
    height:'15vh',
    width: '10vw',
    objectFit: 'cover'
  };

  class Filter extends Component{
    state = {
      stateMovies:[],
      searchQuery: ''
  }
  
 

 fetchMovies = async (query) => {
   try {
     let response = await fetch("http://www.omdbapi.com/?apikey=9448849c&s=" + query )
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
        <>
        <Form onSubmit={(event)=> event.preventDefault()}>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Search</Form.Label>
        <Form.Control
            type="text"
            placeholder="Search here"
            /*value={this.state.searchQuery}*/
            onKeyUp={e => {
              console.log(e)
              if (e.key=="Enter") {
              this.fetchMovies(e.target.value)
              }}}
              
       />
    </Form.Group>
    
    </Form>
    
    <Col>
       {
        
        this.state.stateMovies
        
        .map(b => (
          <Image src={b.Poster} rounded style={colStyle} className="ml-2"/>
          ))
        
        }
        </Col>      
        </> 
    )
   }
}
  

export default Filter