import React, {Comment} from 'react';
import './js/bootstrap.min.js';
import '/css/styles.css';

class App extends React.Component {
  render (){
    return (
    
      <div className="App"/>
	
    <div id="root"/>

<body id="page-top"/>

  <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">Salons and Barbers</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                  <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#blog">Blog</a></li>
                  <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#indicators">Indicators</a></li>
                  <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#testimonials">Testimonials</a></li>
                  <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#signup">Contact</a></li>
              </ul>
          </div>
      </div>
  </nav>
  
  <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
              <h1 className="mx-auto my-0 text-uppercase">Cutting Edge</h1>
              <h2 className="text-white-50 mx-auto mt-2 mb-5">Helping you find a great place to cut hair because we care.</h2>
              <a className="btn btn-primary js-scroll-trigger" href="#about">Get Started</a>
          </div>
      </div>
  </header>
  
  <section className="about-section text-center" id="about">
      <div className="container">
          <div className="row">
              <div className="col-lg-8 mx-auto">
                  <h2 className="text-white mb-4">Finding the right experience for you</h2>
                  <p className="text-white-50">
                      Knowledge is key. The key to quickly finding the best hair salon/barber for you.
                      Let us guide you on your journey to find the best fit for your hair.
                      We know how hard it is to find a good salon/babershop so we have gathered all the 
                      reputable locations around Dubai in one place so you can choose what works best for you.
                  </p>
              </div>
          </div>
      </div>
  </section>
  
  <section className="projects-section bg-light" id="blog">
      <div className="container">
        
          <div className="row align-items-center no-gutters mb-4 mb-lg-5">
              <div className="col-xl-8 col-lg-7"><img className="img-fluid mb-3 mb-lg-0" src={require ("assets/img/image1.jpg")} alt="" /></div>
              <div className="col-xl-4 col-lg-5">
                  <div className="featured-text text-center text-lg-left">
                      <h4>Savvy Salons</h4>
                      <p className="text-black-50 mb-0">Salons around Dubai by locations and price.</p>
                  </div>
              </div>
          </div>
          
          <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
              <div className="col-lg-6"><img className="img-fluid" src={require ("assets/img/image2.jpg")}  alt="" /></div>
              <div className="col-lg-6">
                  <div className="bg-black text-center h-100 project">
                      <div className="d-flex h-100">
                          <div className="project-text w-100 my-auto text-center text-lg-left">
                              <h4 className="text-white">Hidden Barbershop Gems</h4>
                              <p className="mb-0 text-white-50">Barbershops around Dubai and what they can offer you.</p>
                              <hr className="d-none d-lg-block mb-0 ml-0" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          
          <div className="row justify-content-center no-gutters">
              <div className="col-lg-6"><img className="img-fluid" src={require ("assets/img/image3.jpg")}  alt="" /></div>
              <div className="col-lg-6 order-lg-first">
                  <div className="bg-black text-center h-100 project">
                      <div className="d-flex h-100">
                          <div className="project-text w-100 my-auto text-center text-lg-right">
                              <h4 className="text-white">Color Me Impressed</h4>
                              <p className="mb-0 text-white-50">The best places for color in Dubai</p>
                              <hr className="d-none d-lg-block mb-0 mr-0" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>

        <div className="indicators text-center" id="indicators">
          <div className="container p-5">
              <div className="row justify-content-center">
                  <div className="ind my-5 col-md-3 col-sm-6">
                      <span className="ind-icon m-5"><i className="far fa-calendar-plus"></i></span>
                      <div className="ind-details">
                          <h3 className="ind-num">167</h3>
                          <p className="ind-title">Happy Clients</p>
                      </div>
                  </div>
                  
                  <div className="ind my-5 col-md-3 col-sm-6">
                      <span className="ind-icon m-5"><i className="fas fa-coins"></i></span>
                      <div className="ind-details">
                          <h3 className="ind-num">200</h3>
                          <p className="ind-title">Completed Projects</p>
                      </div>
                  </div>
                  
                  <div className="ind my-5 col-md-3 col-sm-6">
                      <span className="ind-icon m-5"><i className="fas fa-book"></i></span>
                      <div className="ind-details">
                          <h3 className="ind-num">96</h3>
                          <p className="ind-title">Blog Posts</p>
                      </div>
                  </div>
                  
                  <div className="ind my-5 col-md-3 col-sm-6">
                      <span className="ind-icon m-5"><i className="far fa-star"></i></span>
                      <div className="ind-details">
                          <h3 className="ind-num">356</h3>
                          <p className="ind-title">Positive Rates</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
      <section className="testimonials" id="testimonials"/>
          <div className="container pt-5 pl-5 pr-5">
              <div className="testimonials-caption text-center m-5">
                  <div className="testimonials-caption-title d-flex justify-content-center">
                      <h2>Client Reviews</h2>
                  </div>
                  <hr>
                  <p>Donec purus est, tincidunt eu sodales quis, vehicula quis enim. Morbi dapibus, tellus a gravida faucibus, elit ipsum sollicitudin risus, id ultricies arcu neque eget velit.</p> </hr>

            

          <div className="bd-example mb-5">
          <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
               <ol class="carousel-indicators">
                  <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
              </ol>
              
          <div className="carousel-inner text-center">        
              <div className="carousel-item active mb-5"/>
                  <img src={require ("assets/img/client-1.jpg")}  className="client-img justify-content-center col-12 rounded-circle" alt="client-1"/>
                  <div className="client-info col-12">
                      <h3>Dave Stevens</h3>
                      <p className="client-caption col-12 text-black-50"><i className="fa fa-quote-left"></i> Aenean sit amet est orci. Aenean at nisi eget nulla lobortis commodo. Nam eget lorem in ex aliquam dapibus. <i class="fa fa-quote-right"></i></p>
                  </div>
              </div>
                  
              <div className="carousel-item mb-5"/>
                  <img src={require ("assets/img/clients-2.jpg")}  className="client-img justify-content-center col-12 rounded-circle" alt="client-2"/>
                  <div className="client-info col-12"/>
                      <h3>Ken Dawson</h3>
                      <p className="client-caption col-12 text-black-50"><i className="fa fa-quote-left"></i> Suspendisse non velit lacus. Mauris efficitur lorem a justo semper, ut suscipit ligula malesuada. Donec dui nulla. <i class="fa fa-quote-right"></i></p>
                  </div>
              </div>
              
               <div className="carousel-item mb-5">
                  <img src={require ("assets/img/clients-3.jpg")}  class="client-img justify-content-center col-12 rounded-circle" alt="client-4"/>
                  <div className="client-info col-12"/>
                      <h3>Jade Lewis</h3>
                      <p className="client-caption col-12 text-black-50"><i className="fa fa-quote-left"></i> Nunc accumsan finibus sollicitudin. Integer malesuada purus sapien, sit amet volutpat sem fringilla ut. Proin viverra scelerisque mollis. <i class="fa fa-quote-right"></i></p>
                  </div>

              
               <div className="carousel-item mb-5"/>
                  <img src={require ("assets/img/clients-4.jpg")}  class="client-img justify-content-center col-12 rounded-circle" alt="client-4"/>
                  <div className="client-info col-12"/>
                      <h3>Sam Jones</h3>
                      <p className="client-caption col-12 text-black-50"><i className="fa fa-quote-left"></i> Fusce euismod eget nulla a tempus. Pellentesque in varius metus. Fusce iaculis cursus ante, vel vestibulum dui sagittis vitae. <i class="fa fa-quote-right"></i></p>
                  </div>

          

  <section className="signup-section" id="signup">
      <div className="container">
          <div className="row">
              <div className="col-md-10 col-lg-8 mx-auto text-center"/>
                  <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
                  <h2 className="text-white mb-5">Subscribe to receive updates and exciting discounts!</h2>
                  <form className="form-inline d-flex">
                      <input className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputEmail" type="email" placeholder="Enter email address..." />
                      <button className="btn btn-primary mx-auto" type="submit">Subscribe</button>
                  </form>
              </div>
          </div>
  </section>
  
  <section className="contact-section bg-black">
      <div className="container">
          <div className="row">
              <div className="col-md-4 mb-3 mb-md-0">
                  <div className="card py-4 h-100">
                      <div className="card-body text-center">
                          <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                          <h4 className="text-uppercase m-0">Address</h4>
                          <hr className="my-4" />
                          <div className="small text-black-50">4923 Dubai UAE</div>
                      </div>
                  </div>
              </div>
              <div className="col-md-4 mb-3 mb-md-0">
                  <div className="card py-4 h-100">
                      <div className="card-body text-center">
                          <i className="fas fa-envelope text-primary mb-2"></i>
                          <h4 className="text-uppercase m-0">Email</h4>
                          <hr className="my-4" />
                          <div classn="small text-black-50"><a href="#!">hello@yourdomain.com</a></div>
                      </div>
                  </div>
              </div>
              <div className="col-md-4 mb-3 mb-md-0">
                  <div className="card py-4 h-100">
                      <div className="card-body text-center">
                          <i className="fas fa-mobile-alt text-primary mb-2"></i>
                          <h4 className="text-uppercase m-0">Phone</h4>
                          <hr className="my-4" />
                          <div className="small text-black-50">+1 (555) 902-8832</div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="social d-flex justify-content-center">
              <a className="mx-2" href="#!"><i className="fab fa-twitter"></i></a>
              <a className="mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
          </div>
      </div>

      </section>
  
  <footer className="footer bg-black small text-center text-white-50"><div className="container">Copyright © Your Website 2020</div></footer>
  
</div>

    );

};

}
