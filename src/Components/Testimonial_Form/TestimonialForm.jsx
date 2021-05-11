import React from 'react'
import './TestimonialForm.css'

function TestimonialForm() {
    return (
        <div className="testimonialForm">
                    <form className='form'>
                        <p>Tell us about your experience, so we can improve</p>
                        <div className='form-input'>
                            <textarea type="text"/>
                            <span>0/140</span>
                        </div>
                        <button className='submit-btn' type= "submit">
                            SUBMIT
                        </button>
                    </form>
        </div>
    )
}

export default TestimonialForm
