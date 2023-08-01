import React from 'react';


function contact() {
        return (
                <div>
                        <div className="page-section" id="contact">
                            <div className="container">
                                <div className="row align-items-center">
                                    
                                    <div className="col-sm">
                                        
                                        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Join the Effort!
                                        </h2>
                                    
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><img src="resources/dog_silhouette.png" alt="Doggy" className="img-fluid" max-width='7rem' /></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        
                                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                        
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="name" type="text" placeholder="Enter your name..."
                                                    data-sb-validations="required" />
                                                <label htmlFor="name">Full name</label>
                                                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                            </div>
                                            
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="email" type="email" placeholder="name@example.com"
                                                    data-sb-validations="required,email" />
                                                <label htmlFor="email">Email address</label>
                                                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                            </div>
                                            
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890"
                                                    data-sb-validations="required" />
                                                <label htmlFor="phone">Phone number</label>
                                                <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.
                                                </div>
                                            </div>
                                        
                                            <div className="form-floating mb-3">
                                                <textarea className="form-control" id="message" 
                                                //type="text"
                                                    placeholder="Enter your message here..." 
                                                    //height =  '10rem'
                                                    data-sb-validations="required"></textarea>
                                                <label htmlFor="message">Message</label>
                                                <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.
                                                </div>
                                            </div>
                                        {/* <!-- Submit success message-->
                                            <!---->
                                            <!-- This is what your users will see when the form-->
                                            <!-- has successfully submitted--> */}
                                            <div className="d-none" id="submitSuccessMessage">
                                                <div className="text-center mb-3">
                                                    <div className="fw-bolder">Form submission successful!</div>
                                                    To activate this form, sign up at
                                                    <br />
                                                    <a
                                                        href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                                </div>
                                            </div>
                                            { /*<!-- Submit error message-->
                                            <!---->
                                            <!-- This is what your users will see when there is-->
                                            <!-- an error submitting the form--> */}
                                            <div className="d-none" id="submitErrorMessage">
                                                <div className="text-center text-danger mb-3">Error sending message!</div>
                                            </div>
                                        
                                            <button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Send</button>
                                        </form>
                                    </div>
                                    <div className="col-sm ">

                                        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Support Our Work
                                        </h2>

                                        <div className="text-center mt-4">
                                            <a className="btn btn-xl btn-secondary" href="donate.html">
                                                <i className="fas fa-dollar me-2"></i>
                                                Donate!
                                            </a>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                </div>

        );
                }

        export default contact; 