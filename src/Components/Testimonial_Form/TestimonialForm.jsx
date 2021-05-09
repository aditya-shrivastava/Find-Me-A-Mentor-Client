import React from 'react'
import './TestimonialForm.css'

function TestimonialForm() {
    return (
        <div className="testimonialForm">

            <div className="form">
                <p>Tell us about your experience, so we can improve</p>

                    <form>
                        <div>
                            <textarea type="text" id="testimonial" rows="8" cols="100" className="textarea"/>
                        </div>
                    </form>

                    <div className="button_style">
                        <button type= "submit">
                            SUBMIT
                        </button>
                    </div>
                    
            </div>

        </div>
    )
}

export default TestimonialForm
