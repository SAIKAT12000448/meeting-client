
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useFirebase from '../hooks/useFirebase';
import Navbar from './Navbar';
// import Calendar from 'react-calendar';


const Schedule = () => {
    const { register,reset } = useForm();
    const{user} = useFirebase();

    const handleSubmit =data=>{
        
      
        //  fetch("https://localhost:5000/metpost",{
        //     method:"POST",
        //     headers:{"Content-Type":"application/json"},
        //     body:JSON.stringify(data)
        //  })
        //  .then(()=>{
        //     console.log("new schedule added");
        //     reset();
        //  })

        axios.post('http://localhost:3000/metpost',data)
        console.log(data)
        .then(res=>{
            console.log(res)
            if(res.data.insertdId){
                alert("added successfully");
                reset();

            }
        })


    }
    

    
    
    return (
        <div className='container mt-5 w-100 '>
            <Navbar></Navbar>
            
        <h4 className='text-center text-danger'>Fill Up your details</h4>
         <div className="d-flex justify-content-center text-center ">

         <form onSubmit={handleSubmit} className='d-flex flex-column justify-content-center w-50' >
      <input className='mb-3' {...register("name")} />

      <input className='mb-3' {...register("email")} defaultValue={user.email} />
      <textarea className="mb-3"{...register("description")} placeholder="notes"/>
      <button type="button,submit" className="btn btn-info fw-bold rounded-pill">Submit</button>
    </form>
            

         </div>
        </div>
    );
};

export default Schedule;