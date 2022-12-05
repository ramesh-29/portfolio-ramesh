import React from 'react'

import  Nitkkr  from '../nit-kurukshetra-NIT.png';

const Index = () => {
  return (
    <div data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
      
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
	    <div className="container">
	      <a className="navbar-brand" href="index.html">Ramesh Vishnoi</a>
	      <button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>

	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav nav ml-auto">
	          <li className="nav-item"><a href="#home-section" className="nav-link"><span>Home</span></a></li>
	          <li className="nav-item"><a href="#about-section" className="nav-link"><span>About</span></a></li>
	          <li className="nav-item"><a href="#resume-section" className="nav-link"><span>Resume</span></a></li>
	          <li className="nav-item"><a href="#services-section" className="nav-link"><span>Services</span></a></li>
	          <li className="nav-item"><a href="#skills-section" className="nav-link"><span>Skills</span></a></li>
	          <li className="nav-item"><a href="#contact-section" className="nav-link"><span>Contact</span></a></li>
	        </ul>
	      </div>
	    </div>
	  </nav>
	  <section id="home-section" className="hero">
		  <div className="home-slider  owl-carousel">
	      

	      <div className="slider-item">
	      	<div className="overlay"></div>
	        <div className="container">
	          <div className="row d-flex no-gutters slider-text align-items-end justify-content-end" data-scrollax-parent="true">
	          	<div className="ramesh_pic one-third js-fullheight order-md-last img" style={{backgroundImage:`url(http://37.media.tumblr.com/fecffac2843f4ff54091f583d05b8bd2/tumblr_n7f0bwBqa61shpedgo1_1280.gif)`,height:`700px`}}>
	          		<div className="overlay"></div>
	          	</div>
		          <div className="one-forth d-flex align-items-center ftco-animate" data-scrollax={{properties: { translateY: '70%' }}}>
		          	<div className="text">
		          		<span className="subheading">Hello!</span>
			            <h1 className="mb-4 mt-3">I'm a <span>Software Developer</span></h1>
			            <p><a href="#contact-section" className="btn btn-primary py-3 px-4">Hire me</a> <a href="#resume-section" className="btn btn-white btn-outline-white py-3 px-4">My works</a></p>
		            </div>
		          </div>
	        	</div>
	        </div>
	      </div>
	    </div>
    </section>

    <section className="ftco-about img ftco-section ftco-no-pb" id="about-section">
    	<div className="container">
    		<div className="row d-flex">
    			<div className="col-md-6 col-lg-5 d-flex">
    				<div className="img-about img d-flex align-items-stretch">
    					<div className="overlay"></div>
	    				<div className="ramesh_pic img d-flex align-self-stretch align-items-center" style={{backgroundImage:`url(ramesh2.png)`}}>
	    				</div>
    				</div>
    			</div>
    			<div className="col-md-6 col-lg-7 pl-lg-5 pb-5">
    				<div className="row justify-content-start pb-3">
		          <div className="col-md-12 heading-section ftco-animate">
		          	<h1 className="big">About</h1>
		            <h2 className="mb-4">About Me</h2>
		            <p>I'm very passionate about coding and after starting my journey of coding I decided to go into the development side as well as I started competitive programming for increasing my knowledge in Data Structures.<br/>
						When I'm not working or coding, I enjoy spending time playing football, cricket etc. I'm always striving to outdo my best time each time I hop in. Plus, it's a great de-stressor, giving me an outlet that ensures, while I am at work, I'm always at my best.</p>
		            <ul className="about-info mt-4 px-md-0 px-2">
		            	<li className="d-flex"><span>Name:</span> <span>Ramesh Vishnoi</span></li>
		            	<li className="d-flex"><span>Email:</span> <span>ramesh_11913104@nitkkr.ac.in</span></li>
						<li className="d-flex"><span>College:</span> <span>National Institute of Technology, Kurukshetra</span></li>
						<li className="d-flex"><span>Branch:</span> <span>Information Technology</span></li>
		            </ul>
		          </div>
		        </div>
	          <div className="counter-wrap ftco-animate d-flex mt-md-3">
              <div className="text">
                <p><a href="/RAMESH_VISHNOI_Resume.pdf" className="btn btn-primary py-3 px-3" download>Download CV</a></p>
              </div>
	          </div>
	        </div>
        </div>
    	</div>
    </section>

    <section className="ftco-section ftco-no-pb" id="resume-section">
    	<div className="container">
    		<div className="row justify-content-center pb-5">
          <div className="col-md-10 heading-section text-center ftco-animate">
          	<h1 className="big big-2">Resume</h1>
            <h2 className="mb-4">Resume</h2>
           
          </div>
        </div>
    		<div className="row">
    			<div className="col-md-6">
				<div className="resume-wrap ftco-animate">
    					<span className="date">Summary</span>
    					<h2>Ramesh Vishnoi</h2>
    					<span className="position">Nagaur, Rajasthan</span>
    					<p className="mt-4">Innovative and deadline-driven Android and IOS Developer with 1+ years of experience in developing app and Website from initial concept to final, polished deliverable.</p>
    				</div>
					
    				<div className="resume-wrap ftco-animate relative">
    					<span className="date">2019-2023</span>
    					<h2>Education(B.Tech)</h2>
    					<span className="position">National Institute of Technology, Kurukshetra</span>
    					<p className="mt-4"><mark style={{ backgroundColor: `silver`}}>8.675 CGPA</mark> while pursed Information Technology.</p>
	{					/*<img style={{position:"absolute",width:"10%",height:"5%",top:"15px",right:"40px"}} src={Nitkkr} />
  */} 
  					</div>
					  <div className="resume-wrap ftco-animate">
					  <span className="date">Quick Chat</span>
					  <h2>Personal Project(Android Application)</h2>
					  <p className="mt-4"> Able to create chat rooms, send text, chat with all users in a room at a time without delay.
					  <br/><br/>Application built with the goal to create a fun and challenging Application based on the MVVM architectural pattern.</p>
				  </div>
    			</div>

    			<div className="col-md-6">
    				<div className="resume-wrap ftco-animate">
    					<span className="date">2020(June-August)</span>
    					<h2>Professional Experience(IOS Developer)</h2>
    					<span className="position">Parth - Tech X Technology</span>
    					<p className="mt-4">Worked on Cricket Fantasy app. As a IOS developer, Develop new fixtures like team creation and editing without
						 login, Referral, Coupon flow, Ad banner and Signup bonus.<br/><br/>
						Involved in developing UI components / Outlets for the application, handling web
						 services and parsing the response data.<br/><br/> Resolved bugs at various stages of Application development.
						 <br/><br/>Frameworks and Library:- Foundation, UIKit, SwiftUI, SBJson, SDWebImage and Lottie etc.</p>
    				</div>
					<div className="resume-wrap ftco-animate">
    					<span className="date">Netflix Clone</span>
    					<h2>Personal Project(IOS Application)</h2>
    					<p className="mt-4">Application Built using Swift 5, UIKIT, SwiftUI, Foundation and SDWebImage based on the MVVM architectural pattern.</p>
    				</div>
    			</div>
    		</div>
			
    		<div className="row justify-content-center mt-5">
    			<div className="col-md-6 text-center ftco-animate">
    				<p><a href="/RAMESH_VISHNOI_Resume.pdf.pdf" className="btn btn-primary py-4 px-5" download>Download CV</a></p>
					
    			</div>
    		</div>
    	</div>
    </section>

    <section className="ftco-section" id="services-section">
    	<div className="container">
    		<div className="row justify-content-center py-5 mt-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
          	<h1 className="big big-2">Services</h1>
            <h2 className="mb-4">Our Services</h2>
            <p>We are a team of talented and passionate developers who are always ready to take on a new challenge.</p>
          </div>
        </div>
    		<div className="row">
					<div className="col-md-4 text-center d-flex ftco-animate">
						<a href="#" className="services-1">
							<span className="icon">
								<i className="flaticon-analysis"></i>
							</span>
							<div className="desc">
								<h3 className="mb-5">Android Developer</h3>
							</div>
						</a>
					</div>
					<div className="col-md-4 text-center d-flex ftco-animate">
						<a href="#" className="services-1">
							<span className="icon">
								<i className="flaticon-flasks"></i>
							</span>
							<div className="desc">
								<h3 className="mb-5">IOS Developer</h3>
							</div>
						</a>
					</div>
					<div className="col-md-4 text-center d-flex ftco-animate">
						<a href="#" className="services-1">
							<span className="icon">
								<i className="flaticon-ideas"></i>
							</span>
							<div className="desc">
								<h3 className="mb-5">Web Developer</h3>
							</div>
						</a>
					</div>

				</div>
    	</div>
    </section>

		
		<section className="ftco-section" id="skills-section">
			<div className="container">
				<div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
          	<h1 className="big big-2">Skills</h1>
            <h2 className="mb-4">My Skills</h2>
          </div>
        </div>
				<div className="row">
					<div className="col-md-6 animate-box">
						<div className="progress-wrap ftco-animate">
							<h3>Java</h3>
							<div className="progress">
							 	<div className="progress-bar color-1" role="progressbar" aria-valuenow="90"
							  	aria-valuemin="0" aria-valuemax="100" style={{width:"90%"}}>
							    <span>90%</span>
							  	</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 animate-box">
						<div className="progress-wrap ftco-animate">
							<h3>Swift</h3>
							<div className="progress">
							 	<div className="progress-bar color-2" role="progressbar" aria-valuenow="85"
							  	aria-valuemin="0" aria-valuemax="100" style={{width:"85%"}}>
							    <span>85%</span>
							  	</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 animate-box">
						<div className="progress-wrap ftco-animate">
							<h3>C++</h3>
							<div className="progress">
							 	<div className="progress-bar color-3" role="progressbar" aria-valuenow="95"
							  	aria-valuemin="0" aria-valuemax="100" style={{width:"95%"}}>
							    <span>95%</span>
							  	</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 animate-box">
						<div className="progress-wrap ftco-animate">
							<h3>React.js</h3>
							<div className="progress">
							 	<div className="progress-bar color-4" role="progressbar" aria-valuenow="90"
							  	aria-valuemin="0" aria-valuemax="100" style={{width:"90%"}}>
							    <span>90%</span>
							  	</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 animate-box">
						<div className="progress-wrap ftco-animate">
							<h3>Kotlin</h3>
							<div className="progress">
							 	<div className="progress-bar color-5" role="progressbar" aria-valuenow="70"
							  	aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
							    <span>70%</span>
							  	</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 animate-box">
						<div className="progress-wrap ftco-animate">
							<h3>JavaScript</h3>
							<div className="progress">
							 	<div className="progress-bar color-6" role="progressbar" aria-valuenow="80"
							  	aria-valuemin="0" aria-valuemax="100" style={{width:"80%"}}>
							    <span>80%</span>
							  	</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
 

    { /* <section className="ftco-section ftco-project" id="projects-section">
    	<div className="container">
    		<div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
          	<h1 className="big big-2">Projects</h1>
            <h2 className="mb-4">Our Projects</h2>
          </div>
        </div>
    		<div className="row">
    			<div className="col-md-4">
    				<div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{backgroundImage: `url(images/project-4.jpg)`}}>
    					<div className="overlay"></div>
	    				<div className="text text-center p-4">
	    					<h3><a href="#">Branding &amp; Illustration Design</a></h3>
	    					<span>Web Design</span>
	    				</div>
    				</div>
  				</div>
  				<div className="col-md-8">
    				<div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{backgroundImage: `url(images/project-5.jpg)`}}>
    					<div className="overlay"></div>
	    				<div className="text text-center p-4">
	    					<h3><a href="#">Branding &amp; Illustration Design</a></h3>
	    					<span>Web Design</span>
	    				</div>
    				</div>
  				</div>

    			<div className="col-md-8">
    				<div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{backgroundImage: `url(images/project-1.jpg)`}}>
    					<div className="overlay"></div>
	    				<div className="text text-center p-4">
	    					<h3><a href="#">Branding &amp; Illustration Design</a></h3>
	    					<span>Web Design</span>
	    				</div>
    				</div>

    				<div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{backgroundImage: `url(images/project-6.jpg)`}}>
    					<div className="overlay"></div>
	    				<div className="text text-center p-4">
	    					<h3><a href="#">Branding &amp; Illustration Design</a></h3>
	    					<span>Web Design</span>
	    				</div>
    				</div>
    			</div>
    			<div className="col-md-4">
    				<div className="row">
    					<div className="col-md-12">
		    				<div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{backgroundImage: `url(images/project-2.jpg)`}}>
		    					<div className="overlay"></div>
			    				<div className="text text-center p-4">
			    					<h3><a href="#">Branding &amp; Illustration Design</a></h3>
			    					<span>Web Design</span>
			    				</div>
		    				</div>
	    				</div>
	    				<div className="col-md-12">
		    				<div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{backgroundImage: `url(images/project-3.jpg)`}}>
		    					<div className="overlay"></div>
			    				<div className="text text-center p-4">
			    					<h3><a href="#">Branding &amp; Illustration Design</a></h3>
			    					<span>Web Design</span>
			    				</div>
		    				</div>
	    				</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </section> */}


  { /* <section className="ftco-section" id="blog-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-5">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <h1 className="big big-2">Blog</h1>
            <h2 className="mb-4">Our Blog</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-md-4 d-flex ftco-animate">
          	<div className="blog-entry justify-content-end">
              <a href="single.html" className="block-20" style={{backgroundImage: `url('images/image_1.jpg')`}}>
              </a>
              <div className="text mt-3 float-right d-block">
              	<div className="d-flex align-items-center mb-3 meta">
	                <p className="mb-0">
	                	<span className="mr-2">June 21, 2019</span>
	                	<a href="#" className="mr-2">Admin</a>
	                	<a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a>
	                </p>
                </div>
                <h3 className="heading"><a href="single.html">Why Lead Generation is Key for Business Growth</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ftco-animate">
          	<div className="blog-entry justify-content-end">
              <a href="single.html" className="block-20" style={{backgroundImage: `url('images/image_2.jpg')`}}>
              </a>
              <div className="text mt-3 float-right d-block">
              	<div className="d-flex align-items-center mb-3 meta">
	                <p className="mb-0">
	                	<span className="mr-2">June 21, 2019</span>
	                	<a href="#" className="mr-2">Admin</a>
	                	<a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a>
	                </p>
                </div>
                <h3 className="heading"><a href="single.html">Why Lead Generation is Key for Business Growth</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ftco-animate">
          	<div className="blog-entry">
              <a href="single.html" className="block-20" style={{backgroundImage: `url('images/image_3.jpg')`}}>
              </a>
              <div className="text mt-3 float-right d-block">
              	<div className="d-flex align-items-center mb-3 meta">
	                <p className="mb-0">
	                	<span className="mr-2">June 21, 2019</span>
	                	<a href="#" className="mr-2">Admin</a>
	                	<a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a>
	                </p>
                </div>
                <h3 className="heading"><a href="single.html">Why Lead Generation is Key for Business Growth</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section> */}

   

  

    <section className="ftco-section contact-section ftco-no-pb" id="contact-section">
      <div className="container">
      	<div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <h1 className="big big-2">Contact</h1>
            <h2 className="mb-4">Contact Me</h2>
          </div>
        </div>

        <div className="row d-flex contact-info mb-5">
          <div className="col-md-6 col-lg-4 d-flex ftco-animate">
          	<div className="align-self-stretch box p-4 text-center">
          		<div className="icon d-flex align-items-center justify-content-center">
          			<span className="icon-map-signs"></span>
          		</div>
          		<h3 className="mb-4">Address</h3>
	            <p>Nagaur, Rajasthan</p>
	          </div>
          </div>
          <div className="col-md-6 col-lg-4 d-flex ftco-animate">
          	<div className="align-self-stretch box p-4 text-center">
          		<div className="icon d-flex align-items-center justify-content-center">
          			<span className="icon-linkedin"></span>
          		</div>
          		<h3 className="mb-4">LinkedIn</h3>
	            <p><a href="https://www.linkedin.com/in/ramesh-vishnoi-1118bb202/">ramesh-vishnoi-1118bb202</a></p>
	          </div>
          </div>
          <div className="col-md-6 col-lg-4 d-flex ftco-animate">
          	<div className="align-self-stretch box p-4 text-center">
          		<div className="icon d-flex align-items-center justify-content-center">
          			<span className="icon-paper-plane"></span>
          		</div>
          		<h3 className="mb-4">Email Address</h3>
	            <p><a href="mailto:info@yoursite.com">ramesh_11913104@nitkkr</a></p>
	          </div>
          </div>
         
        </div>

      
      </div>
    </section>
		

    <footer className="ftco-footer ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">About</h2>
              <p>I am passionate Software Developer who love coding.</p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
                <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
                <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Links</h2>
              <ul className="list-unstyled">
                <li><a href="#home-section"><span className="icon-long-arrow-right mr-2"></span>Home</a></li>
                <li><a href="#about-section"><span className="icon-long-arrow-right mr-2"></span>About</a></li>
                <li><a href="#services-section"><span className="icon-long-arrow-right mr-2"></span>Services</a></li>
                <li><a href="#contact-section"><span className="icon-long-arrow-right mr-2"></span>Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
             <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Services</h2>
              <ul className="list-unstyled">
                <li><a href=""><span className="icon-long-arrow-right mr-2"></span>Android Development</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Web Development</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>IOS Development</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
            	<h2 className="ftco-heading-2">Have a Questions?</h2>
            	<div className="block-23 mb-3">
	              <ul>
	                <li><span className="icon icon-map-marker"></span><span className="text">Nagaur, Rajasthan</span></li>
	                <li><a href="https://www.linkedin.com/in/ramesh-vishnoi-1118bb202/"><span className="icon icon-linkedin"></span><span className="text">ramesh-vishnoi-1118bb202</span></a></li>
	                <li><a href="mailto:info@yoursite.com"><span className="icon icon-envelope"></span><span className="text">ramesh_11913104@nitkkr</span></a></li>
	              </ul>
	            </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">

          </div>
        </div>
      </div>
    </footer>
   
    </div>
  )
}

export default Index
