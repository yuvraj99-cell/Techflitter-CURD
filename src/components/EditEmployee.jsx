import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
const EditEmployee = () => {
    const {id}=useParams();
   
    const[user, setUser]=useState({
        name:'',
        email:'',
        designation:'',
       
       
    });

    useEffect(() => {
        loadUser();
      }, []);

      const loadUser= async ()=>{
        const result = await axios.get("https://serverr-7mee.vercel.app/users"); 
        console.log(result,"hmm");
        setUser(result.data);
      }

    const navigate=useNavigate();
    const{name,email,designation}= user;
      const onInputChange =e=>{
          setUser({...user,[e.target.name]:e.target.value})
      }
      const onSubmit = async e=>{
          e.preventDefault();

        //   console.log(useParams);
          console.log(id);
          await axios.patch(`https://serverr-7mee.vercel.app/users/${id}`,user);
          console.log(user);
         return navigate('/');

          
  
      }
  return (
    <>
   <section className='add-contact p-3'>
     <div className="container shadow-lg p-3 mb-5 bg-white rounded">
        <div className="row">
            <div className="col">
                <p className='h4 text-success fw-bold'>Edit Employee Details</p>
            </div>
           <div className="row">
            <div className="col-md-4">
            <form onSubmit={e=>onSubmit(e)} >
               
                {/* <div className="mb-2">
                    <input type="url" className='form-control' placeholder='Add Image' name="img"  onChange={e=> onInputChange(e)}/>
                </div> */}
                <div className="mb-2">
                    <input type="text" className='form-control' placeholder='name' name="name" value={name} onChange={e=> onInputChange(e)} />
                </div>
                <div className="mb-2">
                    <input type="text" className='form-control' placeholder='email' name="email" value={email}  onChange={e=> onInputChange(e)}/>
                </div>
                <div className="mb-2">
                    <input type="text" className='form-control' placeholder='Designation' name='designation' value={designation}  onChange={e=> onInputChange(e)}/>
                </div>
                <div className="mb-2 d-flex justify-content-between">
                    <input type="submit"  className='btn btn-success' value='Create'  onClick={e=> onSubmit(e)}/>
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

export default EditEmployee;