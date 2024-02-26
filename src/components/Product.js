import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Redux/store/cartslice';
import { addlike } from '../Redux/store/Likeslice';
import Footer from './Footer';

const Product = () => {
     


   const[products,getproducts]=useState([])
   
   const dispatch=useDispatch();


    const getData=async()=>{
     const response=await axios.get('https://fakestoreapi.com/products')

     .catch(err=>{
        console.log('cannot fetch data',err);
     })

    //  console.log(response.data)
    getproducts(response.data)
     
    }

    // console.log(products);

    useEffect(() => {
     
        getData()

    }, [])

    // add to cart 

  const addtocart=(product)=>{
    // dispatch add action
    dispatch(add(product))

  }
 

  // add to favorite 
  const Favorite=(product)=>{
     
    dispatch(addlike(product))
  }

  // take searchterm from redux

  const searchTerm=useSelector(state=>state.searchBar.searchTerm)


// console.log(searchTerm);  
  
 
// filter product
const filteredProducts = products.filter(product =>
  product.title.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
      
    <>
    
        <div >
        {filteredProducts.length === 0 ? (
<div className='text-center mt-5 text-danger  '>
          <p >No items found.</p>
<i className="fa-solid fa-earth-americas fa-spin" style={{fontSize:'30px'}} />
</div>      )  : (
           <div className=' row flex justify-content-center'>

          {filteredProducts.map(product => (
        <Card style={{ width: '18rem' }} className='m-3' key={product.id}>
         
           <Card.Img variant="top" style={{height:"160px"}} src={product.image}  className='p-3'/>
          <Card.Body >
            <Card.Title className='fs-5 '>{product.title}</Card.Title>
            
         

            
          </Card.Body>
          <Card.Text className='text-primary ms-5'>
            Rate:${product.price}
            </Card.Text>
          <Card.Footer  className='text-center'> 
            <Button variant="primary" onClick={()=>addtocart(product)}>Add to cart</Button>
            <Button className='ms-2 bg-body' onClick={()=>Favorite(product)}>
              <svg viewBox="0 0 24 24"fill="red" width={'25px'} xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>    </Button>
            </Card.Footer>
        </Card>
        ))}
        </div>
              )}

    
        </div>
     <Footer/>

    </>
  )
}

export default Product