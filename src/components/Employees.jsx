
import { Link } from 'react-router-dom'
import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';


const Employees = () => {

  const[page, setPage]=useState(1);
    
  const[query,setQuery]=useState({

  })
   
    const[user,setUser]=useState([]);
   

    useEffect(() => {
        loadUser();
      }, [page]);

      const loadUser= async ()=>{
        const result = await axios.get(`https://serverr-7mee.vercel.app/users?_page=${page}&_limit=4`); 
        console.log(result,"hmm");
        setUser(result.data);
      }

     const handlePrev=()=>{
      setPage(page=>page-1)
     }
     const handleNext=()=>{
      setPage(page=>page+1)
     }
const handleDelete=(id)=>{
  axios.delete(`https://serverr-7mee.vercel.app/users/${id}`);
  loadUser();
}

let searchEmployee=(e)=>{
  setQuery({...query, text : e.target.value})
  console.log(query);
}


  return (
    <>
<pre>{query.text}</pre>

    <div className="container">
    <div className="py-4">
    <p className="h3 text-success">Employees-List</p>
    <div className="col-md-6">
        <form className="d-flex">
        <input className="form-control me-2" type="search" name="text" value={query.text} onChange={searchEmployee} placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success"  type="submit">Search</button>
      </form>
        </div>
   <section className='contact-list mt-5 shadow-sm p-3 mb-5 bg-white rounded' >
    <div className="row">
        {
           user.map((user,index) => {
                return(
                    <div className="col-md-6 my-2"  key={user.id}>
                    <div className="card">
                        <div className="card-body">
                            <div className="row align-items-center justify-content-center">
                            <div className="col-md-4">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR-XfDlChPcR1ZrTGuSJ19ODVL2q_Ux3sVT3d34vsT&s" alt="" className='image-fluid  contact-img'/>
                            </div>
                            <div className="col-md-7">
                             <ul className='list-group'>
                                <li className='list-group-item list-group-item-action'>
                                  Name : <span className='fw-bold'>{user.name}</span>
                                </li>
                                <li className='list-group-item list-group-item-action'>
                                  Email : <span className='fw-bold'>{user.email}</span>
                                </li>
                                <li className='list-group-item list-group-item-action'>
                                Designation : <span className='fw-bold'>{user.designation}</span>
                                </li>
                             </ul>
                            </div> 
                            
                            </div>
        
                            <div className=" d-flex flex-row align-items-center justify-content-around justify-content-around">
                             <Link to={`/edit/${user.id}`} className='btn btn-warning my-2 '>
                               Edit
                             </Link>
                             <Link to={`/details/${user.id}`} className='btn btn-warning my-2'>
                               View
                             </Link>
                             <button className='btn btn-danger my-2' onClick={()=>{handleDelete(user.id)}}>
                                Delete
                             </button>
                            </div>
                            
                        </div>
                    </div>
                </div>
                )

            })
        }
      
    </div>
   </section>
   </div>
   <section style={{width:"100%" ,marginBottom:"10vh"}}>
    <div className="md-col-8" style={{width:"20%", margin:"auto "}}>
      <button onClick={handlePrev} disabled={page==1}  style={{width:"10%",margin:"auto 10px", borderRadius:"50%", textAlign:"center", backgroundColor:"royalblue", color:"white" , fontStyle:"italic"}}>-</button>
      <input type="number" value={page} style={{width:"10%",margin:"auto 10px", borderRadius:"50%", textAlign:"center", backgroundColor:"royalblue", color:"white" , fontStyle:"italic"}} />
      <button  onClick={handleNext}  style={{width:"10%",margin:"auto 10px", borderRadius:"50%", textAlign:"center", backgroundColor:"royalblue", color:"white" , fontStyle:"italic"}}>+</button>
    </div>
   </section>
    </div>

    
    </>
  )
}

export default Employees;