import React, { useState } from 'react';
import Calendar from 'react-calendar';
// import Schedule from './Schedule';
import {NavLink} from "react-router-dom";
import './Datesch.css';

const bookings = [
    {
        id:1,
        name: '',
        time: '08.00 AM - 09.00 AM',
        
    },
    {
        id:2,
        name: '',
        time: '09.00 AM - 10.00 AM',
        
    },
    {
        id:3,
        name: '',
        time: '10.00 AM - 11.00 AM',
        
    },
    {
        id:4,
        name: '',
        time: '11.00 AM - 12.00 PM',
        
    },
    {
        id:5,
        name: '',
        time: '06.00 PM - 07.00 PM',
        
    },
    {
        id:6,
        name: '',
        time: '07.00 AM - 08.00 PM',
    
    }
]




const Datesch = () => {
    const [value, onChange] = useState(new Date());
    console.log(value)
    

    return (
        <div className='mt-5 container flex'>
           <div className="row row-cols-1 row-cols-md-2 g-4">
           <div className="col-lg-3 me-3 mb-5">
            <Calendar onChange={onChange} value={value} />
            

            
            </div>

            <div className="col-lg-8">
                <div className='row'>
                    {
                        bookings.map(book=><>
                         <div className='col-lg-6  '>
                         <div class="card text-bg-dark mb-3">
  <div class="card-header">Time Available</div>
  <div class="card-body">
    <h6 class="card-title">Timing : {book.time}</h6>
    <NavLink to="/sh">
        <button  className='fw-bold border rounded-pill datecolor'>Schedule</button>
    </NavLink>
  </div>
</div>

                         </div>
                        </>)
                    }
                </div>

            </div>
           </div>

        </div>
    );
};

export default Datesch;