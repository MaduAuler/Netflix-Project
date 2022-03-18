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
  
  componentDidMount(){
    this.state.searchQuery.length>0 && this.fetchMovies()
  }

 fetchMovies = async () => {
   try {
     let response = await fetch("http://www.omdbapi.com/?apikey=9448849c&s=" + this.state.searchQuery )
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
        <Form>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Search</Form.Label>
        <Form.Control
            type="text"
            placeholder="Search here"
            value={this.state.searchQuery}
            onChange={e => this.setState({ searchQuery: e.target.value })}
       />
    </Form.Group>
    <Button variant="primary" type="submit" onClick={e => this.setState({ searchQuery: e.target.value })}>
    Submit
  </Button>
    </Form>
    
    <Col>
       {
        
        this.state.searchQuery.length>0 && this.state.stateMovies
        
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