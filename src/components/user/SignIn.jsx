import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import instance from "../../services/instance";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignIn() {
 
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[msg,setMsg]=useState('');
  const navigate=useNavigate();
  
  const handleSignin =(event) =>
  {
    event.preventDefault();
    signin({email,password})  
  }

  const signin = async({email,password})=>{
    if(email!="" && password!="")
    {
      try
      {  
          const response = await instance.authInstance.post('/users/signin',{email,password});
          sessionStorage.setItem("token", response.data.token)
          if (response.status === 200) {
            setMsg("")
             const response = await instance.protectedInstance.get('/users/getId');
             const res=response.data;
             console.log(response.data.user_name);
             const params_id=res.user_ID;
             console.log(params_id)
             navigate(`/`)
             window.location.reload();
          }   
      }
      catch(error)
      {   
          setMsg("Invalid Email/Password");
      }     
    }
    else
    {
        if(email=="" && password==""){
          setMsg("Please enter your Email and password")
        }else if(email==""){
          setMsg("Email is required")
        }else{
          setMsg("Password cannot be empty")
        }
    }  
  }

  const formStyles = {    
    background: "white",
    width: "40rem",
    borderRadius: "2rem",  
  };

    return (
      <>
      <section className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
      <h1 className="mt-5" style={{color:"#ce5cbf",fontStyle:'italic','fontWeight':'bolder','textAlign':'center'}}>Babies eShop <span style={{fontSize:'15px',fontStyle:'italic',color:'#07c388a3'}}>- Let's Shop for babies</span></h1> 
        <div className="p-md-5" style={formStyles} >
            <Form onSubmit={handleSignin}>
              <div>
                <h3 className="mb-4 text-uppercase" style={{color:"#0d6efd",'fontWeight':'bolder','textAlign':'center','fontStyle':'italic'}}>LOGIN PAGE</h3>
                <br/>
              </div>
                <Form.Group className="mb-3">
                    <Form.Control 
                    size="lg"
                    type="email" 
                    placeholder="Enter Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value) }
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control 
                    size="lg"
                    type='password'
                    value={password}
                    placeholder='Password'
                    onChange={(event) => setPassword(event.target.value) }
                    />
                </Form.Group>
                
                <p style={{ color: "red" }}>{msg}</p>

                <div className="text-center mt-4">
                    <Button variant="primary" type="submit">
                      SIGN IN
                    </Button>

                    <div className='mt-4' style={{'fontSize':'17px'}}>
                        <Link to='/forgot_password'>Forgot Password</Link>
                    </div>

                    <div className='mt-4' style={{'fontSize':'17px'}}>
                        <p>_________________________OR__________________________</p>
                    </div>

                    <div className='mt-4' style={{'fontSize':'17px'}}>
                        <p>New User? <Link to="/signup">Sign Up</Link></p>
                    </div>
                    
                </div>
              </Form>           
        </div>
        </div>
        </section>
      </>
    )
  }
  

export default SignIn