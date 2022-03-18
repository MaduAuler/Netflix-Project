import { Container, Dropdown } from "react-bootstrap"


const Header = (props) =>  {
    return (
        <Container fluid>
            <div className="d-flex justify-content-between">
                <div className="d-flex mt-2">
                    <h3>TV Shows</h3>
                    <div className="ml-3 ">
                        <Dropdown>
                            <Dropdown.Toggle id="dropdownMenuButton" className="btn-secondary btn-sm dropdown-toggle" style={{backgroundColor:"black"}}>
                                Genres
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>


                </div>
                <div className="mt-2">
                    <i class="bi bi-list lg"></i>
                </div>
            </div>

        </Container>
    )
}

export default Header;