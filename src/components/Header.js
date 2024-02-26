import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
// import Cart from './Cart';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import {  useEffect, useState } from 'react';
import { setSearchTerm } from '../Redux/store/searchslice';
import "jwt-decode";
import { jwtDecode } from 'jwt-decode';








function Header() {

  const[search,setsearch]=useState('')

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [mail,setmail]=useState('')
  

//  console.log(search);

 const dispatch=useDispatch()

 dispatch(setSearchTerm(search))

 const searchTerm=useSelector(state=>state.searchBar.searchTerm)




 
    // meterial ui
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: -3,
          top: 13,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
      }));

      // cart
      const productcart=useSelector(state=>state.cart)
// favorite
      const productlike=useSelector(state=>state.like)




// verify user


useEffect(() => {
  const token = localStorage.getItem('token');
  if (token) {

    const decoded = jwtDecode(token);

    const email = decoded.email;

    setmail(email);



    setIsLoggedIn(true);

    
  }else{
    console.log("Token not found");
  }
}, [])



const handleLogout = () => {

  localStorage.removeItem('token'); // Remove token from local storage

  setIsLoggedIn(false);
  console.log('Logged out');
  window.location.reload();



};






    
      
  return (
    <Navbar expand="lg" className="bg-body-tertiary w-100  ">
      <Container fluid>
        <Link to={'/'} style={{textDecoration:'none'}}>
        <Navbar.Brand href="#" className='ms-5'>¥ØỮ Ň€€Đ</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
         
           
          <Form className="d-flex mt-2 ms-5 ">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={(e)=>setsearch(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>

<div className='d-flex'>
  
            <Link to="/cart">
          <div className='ms-5'>
          <IconButton aria-label="cart">
        <StyledBadge badgeContent={productcart.length} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
          </div>
          </Link>
          
            <Link to="/favorite">
          <div className='ms-5'>
          <IconButton aria-label="cart">
        <StyledBadge badgeContent={productlike.length} color="secondary">
        <svg viewBox="0 0 24 24"fill="red" width={'25px'} xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>      </StyledBadge>
      </IconButton>
          </div>
          </Link>
             
             <Link to={'/'}>
  <div className='mt-2' style={{marginLeft:'55px'}}>
              <svg  fill="#10c145" width={'25px'} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 39.434 39.434" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <g> <path d="M39.434,20.718c0,1.104-0.896,2-2,2c-0.005,0-0.012,0-0.021,0h-3.706v0.249c0,0.206-0.04,0.399-0.099,0.587v9.801 c0,1.104-0.896,2-2,2h-6.567c-1.104,0-2-0.896-2-2v-5.638c0-1.838-1.496-3.333-3.333-3.333c-1.838,0-3.334,1.495-3.334,3.333v5.638 c0,1.104-0.896,2-2,2H7.806c-1.104,0-2-0.896-2-2V22.718H2.001c-0.844,0-1.598-0.528-1.883-1.322 c-0.284-0.795-0.043-1.682,0.607-2.22L18.432,4.538c0.74-0.611,1.808-0.611,2.548,0l5.477,4.526V8.966c0-1.104,0.896-2,2-2h3.25 c1.104,0,2,0.896,2,2v6.091l4.817,3.983C39.071,19.398,39.434,20.016,39.434,20.718z" /> </g> </g></svg>
    
  </div>
             </Link>
</div>
{isLoggedIn ? (
   <div className='d-flex ms-5'>
   {/* <p>You are logged in!</p> */}
   
   <div className="dropdown">
      <select >
        
        <option  value="option3">{mail}</option>
      </select>
      <button className='btn btn-warning ms-2' onClick={handleLogout}>logout</button>
    </div>
 </div>
) :(

<Link to={'/login'}>
<button className='btn btn-success ms-5'>login</button>
</Link>
)}
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Header;