import React, { useState } from 'react'
import { login } from '../api/allapi';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Login = () => {

    const [error, setError] = useState('');




;


   

    const navigate=useNavigate()


    

    const handlelogin= async(e)=>{
     e.preventDefault();


        const form = new FormData(e.target);
        const UserData = Object.fromEntries(form)
          //  console.log(UserData);

            const result=await login(UserData)

            // check all input field are filled 
        const requiredFields = ['email', 'password'];
        const emptyFields = requiredFields.filter(field => !UserData[field]);

        if (emptyFields.length > 0) {
            alert('Please fill in all required fields');
            return
        }
              
            if(result.status===200){

                const { token } = result.data;

                localStorage.setItem('token',token)
           
                console.log(result);

                toast("login success")

                setTimeout(() => {
                    navigate('/')
                    window.location.reload();

                }, 3000);

            }else{
                setError(result.response.data);

               setTimeout(() => {
                  setError('')
               }, 2000);
            }
           

    }







  return (

   <div>
      
     <div className='d-flex justify-content-center align-content-center  w-100 h-100 p-3 '>
          <div style={{height:'250px'}} className='sign-main bg-primary rounded   mt-5'>
          <h2 className='fw-bold'>Login</h2>
        <form onSubmit={handlelogin} className='sign-2     w-75'>
              <input
                            class="form-control"
      
                  type="text"
                  name='email'
                  placeholder="Email"
              /><br/>
              <input
                            class="form-control"
      
                  type="password"
                  name='password'
                  placeholder="Password"
              />
                   {error&& <p style={{ color: "red" }}>{error.message}</p>}
      
              <button type='submit' className='btn btn-success mt-2'>Login</button>
<Link to={'/sign'}>
<button  className='btn btn-warning mt-2 ms-2'>signup</button>

</Link>
              

        </form>
      </div> 
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

export default Login