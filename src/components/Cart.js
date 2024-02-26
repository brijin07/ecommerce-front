import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { remove } from '../Redux/store/cartslice';


const Cart = () => {

   const cartproduct=useSelector(state=>state.cart)

   const dispatch=useDispatch()

   const removeproduct=(id)=>{
     dispatch(remove(id))
   }

//   calculate total price
   const totalPrice = cartproduct.reduce((total, product) => total + product.price, 0);


    
  return (

  <>
         {cartproduct.length > 0 ? (
       <div className='row flex justify-content-center'>
          
    
            {cartproduct.map((product)=>(
            
                <Card style={{ width: '18rem' }} className='m-3' key={product.id}>
                 
                   <Card.Img variant="top" style={{height:"160px"}} src={product.image}  className='p-3'/>
                  <Card.Body >
                    <Card.Title className='fs-5 '>{product.title}</Card.Title>
                    <Card.Text>
                    Rate:{product.price}
                    </Card.Text>
                    
                  </Card.Body>
                  <Card.Footer  className='text-center'> 
                    <Button variant="danger" onClick={()=>removeproduct(product.id)}>Remove cart</Button>
                    </Card.Footer>
                </Card>
                
                ))}
                     <div className=''>
                          <p className='text-start fs-1 ms-5'>Total Price: ${totalPrice.toFixed(2)}<button className=' ms-2 btn btn-success '> BUY NOW</button></p>
        
                     </div>
       </div>
         ) : (
           <div>
                <p className='text-center fs-1 mt-5 '>Cart is empty</p>
<div className='text-center'>
<i style={{fontSize:'15rem'}} className="fa-solid fa-cart-shopping fa-bounce text-center " ></i>    </div>    
           </div>
          )}
  </>
         )
}

export default Cart