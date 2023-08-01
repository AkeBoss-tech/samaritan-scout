import React from 'react';

function About() {
  return (
    // <body id='page-top'>
    //   {/* <!-- Navigation--> */}
    //   <nav
    //     className='navbar navbar-expand-lg bg-secondary text-uppercase fixed-top'
    //     id='mainNav'
    //   >
    //     <div className='container'>
    //       <a className='navbar-brand' href='home.html'>
    //         Samaritan Scout
    //       </a>
    //       <button
    //         className='navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded'
    //         type='button'
    //         data-bs-toggle='collapse'
    //         data-bs-target='#navbarResponsive'
    //         aria-controls='navbarResponsive'
    //         aria-expanded='false'
    //         aria-label='Toggle navigation'
    //       >
    //         Menu
    //         <i className='fas fa-bars'></i>
    //       </button>
    //       <div className='collapse navbar-collapse' id='navbarResponsive'>
    //         <ul className='navbar-nav ms-auto'>
    //           <li className='nav-item mx-0 mx-lg-1'>
    //             <a
    //               className='nav-link py-3 px-0 px-lg-3 rounded'
    //               href='search.html'
    //             >
    //               Search
    //             </a>
    //           </li>
    //           <li className='nav-item mx-0 mx-lg-1'>
    //             <a
    //               className='nav-link py-3 px-0 px-lg-3 rounded'
    //               href='about.html'
    //             >
    //               About
    //             </a>
    //           </li>
    //           <li className='nav-item mx-0 mx-lg-1'>
    //             <a
    //               className='nav-link py-3 px-0 px-lg-3 rounded'
    //               href='contact.html'
    //             >
    //               People
    //             </a>
    //           </li>
    //           <li className='nav-item mx-0 mx-lg-1'>
    //             <a
    //               className='nav-link py-3 px-0 px-lg-3 rounded'
    //               href='donate.html'
    //             >
    //               Donate
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>

    //   {/* <!-- Masthead--> */}
    //   <header className='masthead text-center bg-primary text-white h-25'>
    //     <div className='container d-flex align-items-center flex-column h-25'>
    //       {/* <!-- Masthead Heading--> */}
    //       <h1 className='masthead-heading text-uppercase mb-0'>ABOUT</h1>
    //       {/* <!-- Icon Divider--> */}
    //       <div className='divider-custom divider-light'>
    //         <div className='divider-custom-line'></div>
    //       </div>
    //     </div>
    //   </header>
    //   {/* <!-- About Section--> */}
    //   <section className='page-section mb-0' id='about'>
    //     <div className='container'>
    //       {/* <!-- About Section Heading--> */}
    //       <h2 className='page-section-heading text-center text-uppercase'>
    //         Our Mission
    //       </h2>
    //       {/* <!-- Icon Divider--> */}
    //       <div className='divider-custom divider-dark'>
    //         <div className='divider-custom-line'></div>
    //         <div className='divider-custom-icon'>
    //           <i className='fas fa-star'></i>
    //         </div>
    //         <div className='divider-custom-line'></div>
    //       </div>
    //       {/* <!-- About Section Content--> */}
    //       <div className='row'>
    //         <div className='col-lg-4 ms-auto'>
    //           <p className='lead'>
    //             Samaritan Scout utilizes a program developed with natural
    //             language processing, crawling and scraping functionality, and
    //             database management, which serves as the basis htmlFor the
    //             search engine.{' '}
    //           </p>
    //         </div>
    //         <div className='col-lg-4 me-auto'>
    //           <p className='lead'>
    //             To identify the websites of nonprofit organizations that seek
    //             volunteers, we are leveraging both technologies – using a
    //             diverse range of libraries and repositories – and human
    //             expertise. We are automating searches to help build our library,
    //             while also finding new websites and organizations from volunteer
    //             researchers and partners.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   {/* <!-- envision Section--> */}
    //   <section
    //     className='page-section text-white bg-info envision'
    //     id='envision'
    //   >
    //     <div className='container'>
    //       {/* <!-- envision Section Heading--> */}
    //       <h2 className='page-section-heading text-center text-uppercase mb-0 '>
    //         We Envision
    //       </h2>
    //       {/* <!-- Icon Divider--> */}
    //       <div className='divider-custom divider-light'>
    //         <div className='divider-custom-icon'>
    //           <i className='fas fa-star'></i>
    //         </div>
    //       </div>
    //       <div className='row'>
    //         <div className='ms-auto'>
    //           <h2 className='lead fs-2 text-center '>a brighter tomorrow</h2>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   <section className='page-section plan' id='plan'>
    //     <div className='container'>
    //       {/* <!-- plan Section Heading--> */}
    //       <h2 className='page-section-heading text-center text-uppercase text-secondary mb-0'>
    //         Our Plan
    //       </h2>
    //       {/* <!-- Icon Divider--> */}
    //       <div className='divider-custom'>
    //         <div className='divider-custom-line'></div>
    //         <div className='divider-custom-icon'>
    //           <i className='fas fa-star'></i>
    //         </div>
    //         <div className='divider-custom-line'></div>
    //       </div>
    //       <div className='row'>
    //         <div className='col-lg-4 ms-auto'>
    //           <p className='lead'>
    //             Samaritan Scout [a 501(c)3] is developing a back-end{' '}
    //             <strong>Search Engine</strong> and front-end{' '}
    //             <strong>Community Platform</strong> to help people easily
    //             discover experiences where they can have an impact, apply
    //             skills, build community, and find joy.
    //           </p>
    //         </div>
    //         <div className='col-lg-4 me-auto'>
    //           <p className='lead'>
    //             The underlying web crawler and criterion-specific search
    //             experience (developed by{' '}
    //             <a
    //               className='link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'
    //               href='https://www.linkedin.com/in/reneravenel/'
    //             >
    //               Rene Ravenal
    //             </a>
    //             ,{' '}
    //             <a
    //               className='link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'
    //               href='https://www.linkedin.com/in/william-rosenthal-77072b247/'
    //             >
    //               Will Rosenthal
    //             </a>
    //             , and a team of volunteers) will let you specify location and
    //             dates, causes, and activities. The front-end platform will
    //             support account creation, ‘favorite-ing’ of search results, and
    //             posting/sharing your activities.
    //           </p>
    //         </div>
    //         <div className='col-lg-4 me-auto'>
    //           <p className='lead'>
    //             The team is currently building the proof of concept in the New
    //             York/New Jersey area and will select additional regions htmlFor
    //             future expansion.
    //           </p>
    //         </div>
    //       </div>
    //       <div className='text-center mt-4'>
    //         <a className='btn btn-xl btn-secondary' href='search.html'>
    //           <i className='fas fa-search me-2'></i>
    //           Check out our Search Engine!
    //         </a>
    //       </div>
    //     </div>
    //   </section>
    //   <section className='page-section bg-primary text-white mb-0' id='about'>
    //     <div className='container'>
    //       {/* <!-- About Section Heading--> */}
    //       <h2 className='page-section-heading text-center text-uppercase text-white'>
    //         Meet the People
    //       </h2>

    //       {/* <!-- About Section Button--> */}
    //       <div className='text-center mt-4'>
    //         <a className='btn btn-xl btn-outline-light' href='contact.html'>
    //           <i className='fas fa-person me-2'></i>
    //           Meet our Team!
    //         </a>
    //       </div>
    //     </div>
    //   </section>
    //   {/* <!-- Contact Section--> */}
    //   <section className='page-section' id='contact'>
    //     <div className='container'>
    //       <div className='row align-items-center'>
    //         {/* <!-- First Column --> */}
    //         <div className='col-sm'>
    //           {/* <!-- Contact Section Heading--> */}
    //           <h2 className='page-section-heading text-center text-uppercase text-secondary mb-0'>
    //             Join the Effort!
    //           </h2>
    //           {/* <!-- Icon Divider--> */}
    //           <div className='divider-custom'>
    //             <div className='divider-custom-line'></div>
    //             <div className='divider-custom-icon'>
    //               <i className='fas fa-star'></i>
    //             </div>
    //             <div className='divider-custom-line'></div>
    //           </div>
    //           {/* <!-- Contact Section Form--> */}
    //           <form id='contactForm' data-sb-form-api-token='API_TOKEN'>
    //             {/* <!-- Name input--> */}
    //             <div className='form-floating mb-3'>
    //               <input
    //                 className='form-control'
    //                 id='name'
    //                 type='text'
    //                 placeholder='Enter your name...'
    //                 data-sb-validations='required'
    //               />
    //               <label htmlFor='name'>Full name</label>
    //               <div
    //                 className='invalid-feedback'
    //                 data-sb-feedback='name:required'
    //               >
    //                 A name is required.
    //               </div>
    //             </div>
    //             {/* <!-- Email address input--> */}
    //             <div className='form-floating mb-3'>
    //               <input
    //                 className='form-control'
    //                 id='email'
    //                 type='email'
    //                 placeholder='name@example.com'
    //                 data-sb-validations='required,email'
    //               />
    //               <label htmlFor='email'>Email address</label>
    //               <div
    //                 className='invalid-feedback'
    //                 data-sb-feedback='email:required'
    //               >
    //                 An email is required.
    //               </div>
    //               <div
    //                 className='invalid-feedback'
    //                 data-sb-feedback='email:email'
    //               >
    //                 Email is not valid.
    //               </div>
    //             </div>
    //             {/* <!-- Phone number input--> */}
    //             <div className='form-floating mb-3'>
    //               <input
    //                 className='form-control'
    //                 id='phone'
    //                 type='tel'
    //                 placeholder='(123) 456-7890'
    //                 data-sb-validations='required'
    //               />
    //               <label htmlFor='phone'>Phone number</label>
    //               <div
    //                 className='invalid-feedback'
    //                 data-sb-feedback='phone:required'
    //               >
    //                 A phone number is required.
    //               </div>
    //             </div>
    //             {/* <!-- Message input--> */}
    //             <div className='form-floating mb-3'>
    //               <textarea
    //                 className='form-control'
    //                 id='message'
    //                 // type='text'
    //                 placeholder='Enter your message here...'
    //                 // style='height: 10rem'
    //                 data-sb-validations='required'
    //               ></textarea>
    //               <label htmlFor='message'>Message</label>
    //               <div
    //                 className='invalid-feedback'
    //                 data-sb-feedback='message:required'
    //               >
    //                 A message is required.
    //               </div>
    //             </div>
    //             {/* <!-- Submit success message--> */}
    //             {/* <!----> */}
    //             {/* <!-- This is what your users will see when the form--> */}
    //             {/* <!-- has successfully submitted--> */}
    //             <div className='d-none' id='submitSuccessMessage'>
    //               <div className='text-center mb-3'>
    //                 <div className='fw-bolder'>Form submission successful!</div>
    //                 To activate this form, sign up at
    //                 <br />
    //                 <a href='https://startbootstrap.com/solution/contact-forms'>
    //                   https://startbootstrap.com/solution/contact-forms
    //                 </a>
    //               </div>
    //             </div>
    //             {/* <!-- Submit error message--> */}
    //             {/* <!----> */}
    //             {/* <!-- This is what your users will see when there is--> */}
    //             {/* <!-- an error submitting the form--> */}
    //             <div className='d-none' id='submitErrorMessage'>
    //               <div className='text-center text-danger mb-3'>
    //                 Error sending message!
    //               </div>
    //             </div>
    //             {/* <!-- Submit Button--> */}
    //             <div className='text-center'>
    //               <button
    //                 className='btn btn-secondary btn-xl'
    //                 id='submitButton'
    //                 type='submit'
    //               >
    //                 Send
    //               </button>
    //             </div>
    //           </form>
    //         </div>
    //         <div className='col-sm '>
    //           {/* <!-- plan Section Heading--> */}
    //           <h2 className='page-section-heading text-center text-uppercase text-secondary mb-0'>
    //             Support Our Work
    //           </h2>

    //           <div className='text-center mt-4'>
    //             <a
    //               className='btn btn-xl btn-secondary'
    //               href='https://startbootstrap.com/theme/freelancer/'
    //             >
    //               <i className='fas fa-dollar me-2'></i>
    //               Donate!
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   {/* <!-- Footer--> */}
    //   <footer className='footer text-center'>
    //     <div className='container'>
    //       <div className='row mb-5 align-items-center'>
    //         <div className='col-lg-4 mb-5 mb-lg-0'>
    //           <img
    //             src='resources/dog.jpg'
    //             alt='Our Logo'
    //             className='img-rounded'
    //           />
    //         </div>
    //         <div className='col-lg-4 mb-5 mb-lg-0'>
    //           <h4 className='text-uppercase mb-4'>Samaritan Scout</h4>
    //           <p className='lead mb-0'>
    //             The World's 1st Search Engine focused on finding Volunteer
    //             Opportunities
    //           </p>
    //         </div>

    //         {/* <!-- Footer Social Icons--> */}
    //         <div className='col-lg-4 mb-5 mb-lg-0'>
    //           <h4 className='text-uppercase mb-4'>Around the Web</h4>
    //           <a className='btn btn-outline-light btn-social mx-1' href='#!'>
    //             <i className='fab fa-fw fa-facebook-f'></i>
    //           </a>
    //           <a className='btn btn-outline-light btn-social mx-1' href='#!'>
    //             <i className='fab fa-fw fa-twitter'></i>
    //           </a>
    //           <a className='btn btn-outline-light btn-social mx-1' href='#!'>
    //             <i className='fab fa-fw fa-linkedin-in'></i>
    //           </a>
    //           <a
    //             className='btn btn-outline-light btn-social mx-1'
    //             href='home.html'
    //           >
    //             <i className='fa fa-home'></i>
    //           </a>
    //         </div>
    //       </div>
    //       <div className='row'>
    //         {/* <!-- Footer Location--> */}
    //         <div className='col-lg-4 mb-5 mb-lg-0'>
    //           <h4 className='text-uppercase mb-4'>Discover</h4>
    //           <p className='lead mb-0'>
    //             <a
    //               className='link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'
    //               href='#'
    //             >
    //               Volunteer Events
    //             </a>
    //             <br />
    //             <a
    //               className='link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'
    //               href='#'
    //             >
    //               Organizations
    //             </a>
    //           </p>
    //         </div>
    //         {/* <!-- Footer About Text--> */}
    //         <div className='col-lg-4 mb-5 mb-lg-0'>
    //           <h4 className='text-uppercase mb-4'>
    //             <a
    //               className='link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'
    //               href='about.html'
    //             >
    //               About Us
    //             </a>
    //           </h4>
    //           <p className='lead mb-0'>
    //             <a
    //               className='link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'
    //               href='#'
    //             >
    //               Our Plan
    //             </a>
    //             <br />
    //             {/* <a className="link-light" href="contact.html">Our Team</a> <!-- Is this color better? --> */}
    //             <br />
    //             <a className='link-light' href='#'>
    //               Donate
    //             </a>
    //           </p>
    //         </div>
    //         {/* <!-- Footer About Text--> */}
    //         <div className='col-lg-4'>
    //           <h4 className='text-uppercase mb-4'>Learn More</h4>
    //           <p className='lead mb-0'>
    //             <a
    //               className='link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'
    //               href='contact_us.html'
    //             >
    //               Contact Us
    //             </a>
    //             <br />
    //             {/* <a className="link-light" href="#">Help & FAQ</a> <!-- Is this color better? --> */}
    //             <br />
    //             <a className='link-light' href='#'>
    //               Privacy Policy
    //             </a>
    //             <br />
    //             <a className='link-light' href='#'>
    //               Terms of Use
    //             </a>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </footer>
    //   {/* <!-- Copyright Section--> */}
    //   <div className='copyright py-4 text-center text-white'>
    //     <div className='container'>
    //       <div>
    //         Copyright &copy; Samaritan Scout 2023
    //         <br /> A 501(C)(3) Organization. <br />
    //         EIN: 92-3607846
    //       </div>
    //     </div>
    //   </div>
    // </body>
    <div></div>
  );
}

export default About;
