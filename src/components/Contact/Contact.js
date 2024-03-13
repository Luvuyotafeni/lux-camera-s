import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
        <section id='contact'>
            <div>
                <h2 className='center_title'>Enquire us</h2>
               <div className='form_container'>
                <form>
                    <div>
                        <div>
                        <label>Name</label>
                        </div>
                        <div>
                        <input type='text'></input>
                        </div>
                    </div>
                    <div>
                        <div>
                        <label>Surname</label>
                        </div>
                        <input type='text'></input>
                    </div>
                    <div>
                        <div>
                        <label>Email</label>
                        </div>
                        <input type='email'></input>
                    </div>
                    <div>
                        <div>
                        <label>Subject</label>
                        </div>
                        <input type='text'></input>
                    </div>
                    <div>
                        <div>
                        <label>Message</label>
                        </div>
                        <div>
                        <textarea></textarea>
                        </div>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
                </div> 
            </div>
        </section>
    </>
  )
}

export default Contact