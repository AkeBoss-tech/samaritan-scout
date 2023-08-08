import React from 'react'
import Contact from '../components/Contact'
import '../pages/styles.css'

function people () {

    return(
        <div>
                <header className="masthead text-center bg-primary text-white h-25" 
                //*style="background-image: url('resources/randomorg.jpg'); 
               // background-size: cover; height:1000px; 
    //padding-top:300px;" */} 
    >
                    <div className="container d-flex align-items-center flex-column h-25">
                       
                        <h1 className="masthead-heading text-uppercase mb-0">PEOPLE</h1>
                        
                        <div className="divider-custom divider-light">
                            <div className="divider-custom-line"></div>
                        </div>
                    </div>
                </header>
                
                <section className="page-section mb-0" id="about" 
                //{ /*style="height:300px; padding-top:80px;"*/}
                >
                    <div className="container">
                        
                        <h2 className="page-section-heading text-center text-uppercase">Meet the People Behind Samaritan Scout</h2>
                       
                        <div className="divider-custom divider-dark">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon"><img src="resources/dog_silhouette.png" alt="Doggy" className="img-fluid" 
                            //style="max-width: 7rem;" 
                            /></div>
                            <div className="divider-custom-line"></div>
                        </div>
                    </div>
                </section>
                
                <section className="text-white bg-info">
                    <h2  
                    //{/*style = "background-image: url(resources/gradient.jpg); background-repeat: repeat;background-size: cover; -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 60px; text-align: center; font-weight: bold; helvetica, arial, sans-serif; font-weight: 800;-webkit-font-smoothing: antialiased;"*/}
                     >
                        Board of Directors </h2>
                </section>
                <section className="page-section mb-0 align-items-center" id="about">
                    <div className = "align-items-center">
                        
                        <div className="row align-items-center" >
                            <div className="col-lg-3 me-auto card list-group:first-child align-items-center">
                                <p className="lead">Dvora Inwood </p>
                                <img src="resources/dvora.jpg" alt="Girl in a jacket" width="150" height="150" />
                            </div>
                            <div className="col-lg-3 me-auto card align-items-center">
                                <p className="lead">Rene Ravenal </p>
                                <img src="resources/dvora.jpg" alt="Girl in a jacket" width="150" height="150"/>
                            </div>
                            <div className="col-lg-3 me-auto card align-items-center">
                                <p className="lead">Will Rosenthal </p>
                                <img src="resources/dvora.jpg" alt="Girl in a jacket" width="150" height="150"/>
                            </div>
                            <div className="col-lg-3 me-auto card align-items-center">
                                <p className="lead"> Scott Thompson </p>
                                <img src="resources/dvora.jpg" alt="Girl in a jacket" width="150" height="150"/>
                            </div>
                            <div className="col-lg-3 me-auto card list-group:last-child align-items-center">
                                <p className="lead">Michelle Milentijevic </p>
                                <img src="resources/dvora.jpg" alt="Girl in a jacket" width="150" height="150"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="text-white bg-info" id="envision">
                    <h2  
                    //{/*} style = "background-image: url(resources/gradient.jpg); background-repeat: repeat;background-size: cover;-webkit-background-clip: text; -webkit-text-fill-color: transparent;font-size: 60px;text-align: center; font-weight: bold;text-transform: uppercase;font-family: 'Steelfish Rg', 'helvetica neue', helvetica, arial, sans-serif;font-weight: 800;-webkit-font-smoothing: antialiased;" */} 
                    >Summer 2023 Interns</h2>
                </section>
                <section className="page-section mb-0 align-items-center" id="about">
                    <div className = "align-items-center">
                        <div className="row" >
                            <div className="col-lg-2 me-auto card list-group:first-child align-items-center">
                                <p className="lead">Akash<br />Dubey </p>
                                <img src="resources/dvora.jpg" alt="Girl in a jacket" width="100" height="100"/>
                            </div>
                            <div className="col-lg-2 me-auto card align-items-center">
                                <p className="lead">Aniket<br />Anvekar </p>
                                <img src="resources/dvora.jpg" alt="Girl in a jacket" width="100" height="100"/>
                            </div>
                            <div className="col-lg-2 me-auto card align-items-center">
                                <p className="lead">Arav<br />Sachdeva </p>
                                <img src="resources/dvora.jpg" alt="Girl in a jacket" width="100" height="100"/>
                            </div>
                            <div className="col-lg-2 me-auto card align-items-center">
                                <p className="lead">Arslan<br />Tariq </p>
                                <img src="resources/dvora.jpg" alt="Girl in a jacket" width="100" height="100"/>
                            </div>
                            <div className="col-lg-2 me-auto card align-items-center">
                                <p className="lead">Deepa<br />Pulugurtha </p>
                                <img src="resources/dvora.jpg" alt="Girl in a jacket" width="100" height="100"/>
                            </div>
                            <div className="col-lg-2 me-auto card list-group:last-child align-items-center">
                                <p className="lead">Dhruvil<br />Mehta</p>
                                <img src="resources/dvora.jpg" alt="Girl in a jacket" width="100" height="100"/>
                            </div>
                        </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-2 me-auto card list-group:first-child align-items-center">
                            <p className="lead">Hongzhi(Ethan)<br />Zhao </p>
                            <img src="resources/dvora.jpg" alt="Girl in a jacket" width="100" height="100"/>
                        </div>
                        <div className="col-lg-2 me-auto card align-items-center">
                            <p className="lead">Jack <br />Greenwald </p>
                            <img src="resources/dvora.jpg" alt="Girl in a jacket" width="100" height="100"/>
                        </div>
                        <div className="col-lg-2 me-auto card align-items-center">
                            <p className="lead">Om Prakash <br />Prajapath</p>
                            <img src="resources/dvora.jpg" alt="Girl in a jacket" width="100" height="100"/>
                        </div>
                        <div className="col-lg-2 me-auto card align-items-center">
                            <p className="lead">Saket<br /> Manolkar</p>
                            <img src="resources/dvora.jpg" alt="Girl in a jacket" width="100" height="100"/>
                        </div>
                        <div className="col-lg-2 me-auto card align-items-center">
                            <p className="lead">S <br />Depaul </p>
                            <img src="resources/dvora.jpg" alt="Girl in a jacket" width="100" height="100"/>
                        </div>
                        <div className="col-lg-2 me-auto card list-group:last-child align-items-center">
                            <p className="lead">Shubham <br />Mishra</p>
                            <img src="resources/dvora.jpg" alt="Girl in a jacket" width="100" height="100"/>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-2 me-auto card list-group:first-child align-items-center">
                            <p className="lead">Sreya <br />Nimmagadda </p>
                            <img src="resources/dvora.jpg" alt="Girl in a jacket" width="100" height="100"/>
                        </div>
                        <div className="col-lg-2 me-auto card list-group:last-child align-items-center">
                            <p className="lead">Yu <br />Gu</p>
                            <img src="resources/dvora.jpg" alt="Girl in a jacket" width="100" height="100"/>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    </div>
                </section>
                <section className = "page-section bg-secondary text-white mb-0">
                    <div className="container">
                    
                        <h2 className="page-section-heading text-center text-uppercase text-white">Want to Join Us?</h2>
                        
                        <div className="text-center mt-4">
                            <a className="btn btn-xl btn-outline-light" href="contact.html">
                                <i className="fas fa-person me-2"></i>
                                Contact Us Here
                            </a>
                        </div>
                        
                    </div>
                </section>

                <section className="page-section bg-primary text-white mb-0" id="about">
                    
                    <div className = "align-items-center" 
                    //</section>style = "height: 40vh;width: 100vw; background-color:#62B16E;margin: 0rem;overflow: hidden;"
                    >
                    <div className = "align-items-center">
                        <h1> &emsp; Why volunteer with us? </h1>
                    </div>
                
                        <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
                            <img className="image" src="resources/stock1.jpg" draggable="false" />
                            <img className="image" src="resources/stock2.jpg" draggable="false" />
                            <img className="image" src="resources/stock3.jpg" draggable="false" />
                            <img className="image" src="resources/stock4.jpg" draggable="false" />
                            <img className="image" src="resources/stock5.jpg" draggable="false" />
                            <img className="image" src="resources/stock1.jpg" draggable="false" />
                            <img className="image" src="resources/stock2.jpg" draggable="false" />
                            <img className="image" src="resources/stock3.jpg" draggable="false" />
                        </div>
                    </div>
                </section>
                <Contact></Contact>
        
        </div>
    );
}

const past = (
    <div>
            <header className="masthead text-center bg-primary text-white h-25" 
            //*style="background-image: url('resources/randomorg.jpg'); 
           // background-size: cover; height:1000px; 
//padding-top:300px;" */} 
>
                <div className="container d-flex align-items-center flex-column h-25">
                   
                    <h1 className="masthead-heading text-uppercase mb-0">PEOPLE</h1>
                    
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                    </div>
                </div>
            </header>
            
            <section className="page-section mb-0" id="about" 
            //{ /*style="height:300px; padding-top:80px;"*/}
            >
                <div className="container">
                    
                    <h2 className="page-section-heading text-center text-uppercase">Meet the People Behind Samaritan Scout</h2>
                   
                    <div className="divider-custom divider-dark">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><img src="resources/dog_silhouette.png" alt="Doggy" className="img-fluid" 
                        //style="max-width: 7rem;" 
                        /></div>
                        <div className="divider-custom-line"></div>
                    </div>
                </div>
            </section>
            
            <section className="text-white bg-info">
                <h2  
                //{/*style = "background-image: url(resources/gradient.jpg); background-repeat: repeat;background-size: cover; -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 60px; text-align: center; font-weight: bold; helvetica, arial, sans-serif; font-weight: 800;-webkit-font-smoothing: antialiased;"*/}
                 >
                    Board of Directors </h2>
            </section>
            <section className="page-section mb-0 align-items-center" id="about">
                <div className = "align-items-center">
                    
                    <div className="row align-items-center" >
                        <div className="col-lg-3 me-auto card list-group:first-child align-items-center">
                            <p className="lead">Dvora Inwood </p>
                            <img src="resources/dvora.jpg" alt="Girl in a jacket" width="150" height="150"/>
                        </div>
                        <div className="col-lg-3 me-auto card align-items-center">
                            <p className="lead">Rene Ravenal </p>
                            <img src="resources/dvora.jpg" alt="Girl in a jacket" width="150" height="150"/>
                        </div>
                        <div className="col-lg-3 me-auto card align-items-center">
                            <p className="lead">Will Rosenthal </p>
                            <img src="resources/dvora.jpg" alt="Girl in a jacket" width="150" height="150"/>
                        </div>
                        <div className="col-lg-3 me-auto card align-items-center">
                            <p className="lead"> Scott Thompson </p>
                            <img src="resources/dvora.jpg" alt="Girl in a jacket" width="150" height="150"/>
                        </div>
                        <div className="col-lg-3 me-auto card list-group:last-child align-items-center">
                            <p className="lead">Michelle Milentijevic </p>
                            <img src="resources/dvora.jpg" alt="Girl in a jacket" width="150" height="150"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-white bg-info" id="envision">
                <h2  
                //{/*} style = "background-image: url(resources/gradient.jpg); background-repeat: repeat;background-size: cover;-webkit-background-clip: text; -webkit-text-fill-color: transparent;font-size: 60px;text-align: center; font-weight: bold;text-transform: uppercase;font-family: 'Steelfish Rg', 'helvetica neue', helvetica, arial, sans-serif;font-weight: 800;-webkit-font-smoothing: antialiased;" */} 
                >Summer 2023 Interns</h2>
            </section>
            <section className="page-section mb-0 align-items-center" id="about">
                <div className = "align-items-center">
                    <div className="row" >
                        <div className="col-lg-2 me-auto card list-group:first-child align-items-center">
                            <p className="lead">Akash<br />Dubey </p>
                            <img src="resources/dvora.jpg" alt="Girl in a jacket" width="100" height="100"/>
                        </div>
                        <div className="col-lg-2 me-auto card align-items-center">
                            <p className="lead">Aniket<br />Anvekar </p>
                            <img src="resources/dvora.jpg" alt="Girl in a jacket" width="100" height="100"/>
                        </div>
                        <div className="col-lg-2 me-auto card align-items-center">
                            <p className="lead">Arav<br />Sachdeva </p>
                            <img src="resources/dvora.jpg" alt="Girl in a jacket" width="100" height="100"/>
                        </div>
                        <div className="col-lg-2 me-auto card align-items-center">
                            <p className="lead">Arslan<br />Tariq </p>
                            <img src="resources/dvora.jpg" alt="Girl in a jacket" width="100" height="100"/>
                        </div>
                        <div className="col-lg-2 me-auto card align-items-center">
                            <p className="lead">Deepa<br />Pulugurtha </p>
                            <img src="resources/dvora.jpg" alt="Girl in a jacket" width="100" height="100"/>
                        </div>
                        <div className="col-lg-2 me-auto card list-group:last-child align-items-center">
                            <p className="lead">Dhruvil<br />Mehta</p>
                            <img src="resources/dvora.jpg" alt="Girl in a jacket" width="100" height="100"/>
                        </div>
                    </div>
                <br></br>
                <div className="row">
                    <div className="col-lg-2 me-auto card list-group:first-child align-items-center">
                        <p className="lead">Hongzhi(Ethan)<br />Zhao </p>
                        <img src="resources/dvora.jpg" alt="Girl in a jacket" width="100" height="100"/>
                    </div>
                    <div className="col-lg-2 me-auto card align-items-center">
                        <p className="lead">Jack <br />Greenwald </p>
                        <img src="resources/dvora.jpg" alt="Girl in a jacket" width="100" height="100"/>
                    </div>
                    <div className="col-lg-2 me-auto card align-items-center">
                        <p className="lead">Om Prakash <br />Prajapath</p>
                        <img src="resources/dvora.jpg" alt="Girl in a jacket" width="100" height="100"/>
                    </div>
                    <div className="col-lg-2 me-auto card align-items-center">
                        <p className="lead">Saket<br /> Manolkar</p>
                        <img src="resources/dvora.jpg" alt="Girl in a jacket" width="100" height="100"/>
                    </div>
                    <div className="col-lg-2 me-auto card align-items-center">
                        <p className="lead">S <br />Depaul </p>
                        <img src="resources/dvora.jpg" alt="Girl in a jacket" width="100" height="100"/>
                    </div>
                    <div className="col-lg-2 me-auto card list-group:last-child align-items-center">
                        <p className="lead">Shubham <br />Mishra</p>
                        <img src="resources/dvora.jpg" alt="Girl in a jacket" width="100" height="100"/>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-lg-2 me-auto card list-group:first-child align-items-center">
                        <p className="lead">Sreya <br />Nimmagadda </p>
                        <img src="resources/dvora.jpg" alt="Girl in a jacket" width="100" height="100"/>
                    </div>
                    <div className="col-lg-2 me-auto card list-group:last-child align-items-center">
                        <p className="lead">Yu <br />Gu</p>
                        <img src="resources/dvora.jpg" alt="Girl in a jacket" width="100" height="100"/>
                    </div>
                </div>
                <br></br>
                <br></br>
                </div>
            </section>
            <section className = "page-section bg-secondary text-white mb-0">
                <div className="container">
                
                    <h2 className="page-section-heading text-center text-uppercase text-white">Want to Join Us?</h2>
                    
                    <div className="text-center mt-4">
                        <a className="btn btn-xl btn-outline-light" href="contact.html">
                            <i className="fas fa-person me-2"></i>
                            Contact Us Here
                        </a>
                    </div>
                    
                </div>
            </section>

            <section className="page-section bg-primary text-white mb-0" id="about">
                
                <div className = "align-items-center" 
                //</section>style = "height: 40vh;width: 100vw; background-color:#62B16E;margin: 0rem;overflow: hidden;"
                >
                <div className = "align-items-center">
                    <h1> &emsp; Why volunteer with us? </h1>
                </div>
            
                    <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
                        <img className="image" src="resources/stock1.jpg" draggable="false" />
                        <img className="image" src="resources/stock2.jpg" draggable="false" />
                        <img className="image" src="resources/stock3.jpg" draggable="false" />
                        <img className="image" src="resources/stock4.jpg" draggable="false" />
                        <img className="image" src="resources/stock5.jpg" draggable="false" />
                        <img className="image" src="resources/stock1.jpg" draggable="false" />
                        <img className="image" src="resources/stock2.jpg" draggable="false" />
                        <img className="image" src="resources/stock3.jpg" draggable="false" />
                    </div>
                </div>
            </section>
            <Contact></Contact>
    
    </div>
);

export default people; 


