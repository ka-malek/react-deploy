import React from 'react';
import {Navbar , Container, Nav, Button} from "react-bootstrap"
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../JS/actions/action';
import Login from './Login';
import Register from './Register';



const AppNavbar = () => {
  const dispatch = useDispatch();
  const handleLogout = () =>{
    dispatch(logoutUser())
  }
  // const user = useSelector((state)=>state.authReducer.user)
  const isAuth = useSelector(state=>state.authReducer.isAuth)
  return (
    <Navbar className='navbars'>
    <Container>
      <Navbar.Brand className='forja'>Forja</Navbar.Brand>
      <Nav className="me-auto">
        {/* {user?<Nav.Link style={{color:'black'}}> {user.name} </Nav.Link>:(<></>)} */}
        <Nav.Link style={{color:'white' , fontSize:'30px', textDecoration:'none' }}><Link to="/"> Home </Link></Nav.Link>
        {isAuth?<Nav.Link style={{color:'black', marginLeft:'15px', fontSize:'30px', textDecoration:'none'}}> <Link to="/dashboard"> Dashboard  </Link> </Nav.Link>:(<></>)}
        {isAuth?<Nav.Link style={{color:'black', marginLeft:'15px', fontSize:'30px', textDecoration:'none'}}> <Link to="/movies"> Movies  </Link> </Nav.Link>:(<></>)}
        
      </Nav>
      {isAuth ? (<Button variant="dark" onClick={()=>handleLogout()}>Logout</Button>):(<>
      <Register />
      <Login />
      </>)}
      
    </Container>
  </Navbar>   
  )
}

export default AppNavbar