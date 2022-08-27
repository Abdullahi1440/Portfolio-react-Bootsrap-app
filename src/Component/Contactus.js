import React from 'react'

const Contactus = () => {
  return (
    <>
  <section className='bg-success py-5 mx-auto d-block  mt-0 text-light'>
    <p className='text-center display-6'>
        <span className='text-center border-bottom'>Contact us</span>
    </p>
    <div className='row '>
        <div className='col-8 mx-auto'>
            <form className=''>
                <div className='form-group'>
                <div className='row fs-20'>
            <div className='col-6 '>
                <label id='for'>Name :</label>
               <input className='form-control' id='name' name='name'/>
           </div>
           
            <div className='col-6'>
                <label id='for' >Email :</label>
               <input className='form-control' id='name' name='email'/>
           </div>
           
           <div className='col-12'>
            <label className='display-6'>Subject</label>
            <input type='text'className='form-control'/>
           </div>
           <div className='col-12'>
            <label className='form-check-label'>Message</label>
            <textarea className='form-control' rows='10' cols='5'></textarea>
           </div>
           <div className='col-12 mt-1' >
           <div className='btn btn-light d-block text-success fs-18'>Send  </div>
           </div>


        
         

                </div>
                </div>
        
            </form>

        </div>

    </div>

  </section>

  </>
  )
}

export default Contactus