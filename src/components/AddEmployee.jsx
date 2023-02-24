import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate, } from 'react-router-dom'
const AddEmployee = () => {
   
    const[user, setUser]=useState({
        name:'',
        email:'',
        designation:'',
       
       
       
    });
  const navigate=useNavigate();
  const{name,email,designation}= user;
    const onInputChange =e=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const onSubmit = async e=>{
        e.preventDefault();
        await axios.post("https://serverr-7mee.vercel.app/users",user);
        console.log(user);
        return navigate("/")

    }
  return (
    <>
    <section className='add-contact p-3'>
     <div className="container shadow-lg p-3 mb-5 bg-white rounded">
        <div className="row">
            <div className="col">
                <p className='h4 text-success fw-bold'>Create New Employee</p>
            </div>
           <div className="row">
            <div className="col-md-4">
            <form onSubmit={e=>onSubmit(e)} >
                <div className="mb-2">
                    <input type="text" className='form-control' placeholder='Name' value={name} name="name" onChange={e=> onInputChange(e)}/>
                </div>
                {/* <div className="mb-2">
                    <input type="url" className='form-control' placeholder='Add Image' name="img"  onChange={e=> onInputChange(e)}/>
                </div> */}
            
                <div className="mb-2">
                    <input type="text" className='form-control' placeholder='Please enter Email' name="email" value={email} onChange={e=> onInputChange(e)} />
                </div>
                <div className="mb-2">
                    <input type="text" className='form-control' placeholder='Please enter  Designation' name="designation" value={designation}  onChange={e=> onInputChange(e)}/>
                </div>
                
                <div className="mb-2 d-flex justify-content-between">
                    <input type="submit"  className='btn btn-success' value='Create'  onClick={e=> onSubmit()}/>
                    <Link to={"/"}  className="btn btn-dark">Close</Link>
                </div>
            </form>
            </div>
           </div>
        </div>
     </div>
    </section>
    </>
  )
}

export default AddEmployee