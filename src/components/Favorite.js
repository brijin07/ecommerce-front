import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { deletelike } from '../Redux/store/Likeslice';



function Favorite() {


    const dispatch=useDispatch()
    const likeproduct=useSelector(state=>state.like)


    const removelike=(id)=>{
      dispatch(deletelike(id))
    }

  return (
   <>
   {likeproduct.length>0 ?(
        <div className='row justify-content-center '>
            {likeproduct.map((product)=>(
        <Card style={{ width: '18rem' }} className='m-3' key={product.id}>
                         
                         <Card.Img variant="top" style={{height:"160px"}} src={product.image}  className='p-3'/>
                        <Card.Body >
                          <Card.Title className='fs-5 '>{product.title}</Card.Title>
                          <Card.Text>
                          Rate:{product.price}
                          </Card.Text>
                          
                        </Card.Body>
                        <Card.Footer  className='text-center'> 
                          <Button variant="danger" onClick={()=>removelike(product.id)}>Remove</Button>
                          </Card.Footer>
                      </Card>  
                      ))}
        </div>
        ):(
<div className='text-center mt-5 '>
    <i className="fa-solid fa-heart-crack " style={{color: '#d41616',fontSize:'200px'}} />
    <p>No favorite list</p>
    
</div>        )}
   </>
              )
}

export default Favorite