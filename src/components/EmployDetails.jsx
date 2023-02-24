import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const EmployDetails = () => {
    const[user,setUser]=useState([]);

    const {id}= useParams();
    console.log(id);
    useEffect(() => {
        loadUser();
      }, []);

      const loadUser= async ()=>{
        const result = await axios.get(`https://serverr-7mee.vercel.app/users/${id}`); 
        console.log(result,"view page");
        setUser(result.data);
      }
  return (
   <>
   <section className='view-contact-intro p-3'>
   <div className="container">
    <div className="row">
        <div className="col">
            <p className="h3 text-warning">
                Employee Details
            </p>
            
        </div>
    </div>
   </div>
   </section>
   <section className='view-contact mt-3'>
    <div className="container">
        <div className="row">
            <div className="col-md-2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR-XfDlChPcR1ZrTGuSJ19ODVL2q_Ux3sVT3d34vsT&s" alt="" className='image-fluid  contact-img'/>
            </div>
            <div className="col-md-8">
            <ul className='list-group'>
                                <li className='list-group-item list-group-item-action'>
                                  Name : <span className='fw-bold'>{user.name}</span>
                                </li>
                                <li className='list-group-item list-group-item-action'>
                                  Email : <span className='fw-bold'>{user.email}</span>
                                </li>
                                <li className='list-group-item list-group-item-action'>
                                 Designition : <span className='fw-bold'>{user.designation}</span>
                                </li>
                               
                             </ul>
            </div>
            
        </div>
        <div className="col-md-2 " style={{width:"100%"}}>
        <div className="row " style={{width:"30%", margin:" 10px auto "}}>
            <Link to={"/"} className="btn btn-warning">Back</Link>
        </div>
        </div>
        
    </div>
   </section>
   </>
  )
}

export default EmployDetails;