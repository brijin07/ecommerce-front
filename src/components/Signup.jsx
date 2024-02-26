import React, { useState } from 'react'
import { signup } from '../api/allapi';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';




const Signup = () => {

    const [err,seterr]=useState('')

    const [confirmPassword,setconfirmpassword]=useState('')


    const navigate=useNavigate()
    const  handleSubmit=async (e)=>{
        e.preventDefault();

        const form = new FormData(e.target);
        const UserData = Object.fromEntries(form)
        console.log(UserData);


        // check all input field are filled 
        const requiredFields = ['username', 'email', 'password'];
        const emptyFields = requiredFields.filter(field => !UserData[field]);

        if (emptyFields.length > 0) {
            alert('Please fill in all required fields');
            return
        }



                
                if(UserData.password!==confirmPassword){
                 alert('password do not match');
            

                }else{
                    const response=await signup(UserData) 

                    if(response.status===201){
                        console.log(response);

                        toast("signup successful")

                        setTimeout(() => {
                          navigate('/login')        
                        }, 3000);
            
                    }else{
                        seterr(response.response.data)
                        console.log(err);
                        // hide err message timeout
                        setTimeout(() => {
                            seterr('');
                        }, 3000);
            
                    }

                }


           
       
            

        

        

        

          

        //  console.log(response.response.data);

         

            





      
    
    }
  return (
  <div className='d-flex justify-content-center align-content-center  w-100 h-100 p-3    '>
        <div className='sign-main bg-primary rounded  mt-5 pt-3'>
             <h2 className=' fw-bolder '>Signup Page</h2>
    
          <form onSubmit={handleSubmit} className='sign-2  h-100   w-75'>
            <div>
              <input
              class="form-control"
                type="text"
                name='username'
                placeholder='username'
              />
            </div><br />
            <div>
              <input
              class="form-control"
                type="text"
                name='email'
                placeholder='email'
              />
            </div><br />
            <div>
              <input
                type="password"
                name='password'
                class="form-control"
                placeholder='password'
              />
            </div><br />
    
            <div>
              <input
              class="form-control"
                type="password"
                placeholder='confirm password'
                // name='password'
                value={confirmPassword}
                onChange={(e)=>setconfirmpassword(e.target.value)}
              />
            {/* message is from console */}
    
     {err && <p className='' style={{ color: "red" }}>{err.message}</p>}
    
            </div>
    
    
            <button  className='btn btn-success mt-1 ' type="submit">Sign Up</button>

<Link to={'/login'}>
                <button  className='btn btn-danger ms-3  mt-1' >login</button>
    
</Link>
          </form>
        </div>
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
  </div>
  )
}

export default Signup