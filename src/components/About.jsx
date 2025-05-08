const About =()=>{
    return(
        <div>
            <img src="static/images/Untitled.png" alt="" height={400}/>
            <h1 className="App header">Company Brief</h1>
            <p className="text-center">Future Tech Gear is a world leader in AI PC, gaming, content creation, business & productivity and AIoT solutions. Bolstered by its cutting-edge R&D capabilities and customer-driven innovation, FTG has a wide-ranging global presence spanning over 120 countries. Its comprehensive lineup of laptops, graphics cards, monitors, motherboards, desktops, peripherals, servers, IPCs, robotic appliances, vehicle infotainment and telematics systems, and EV charger are globally acclaimed. Committed to advancing user experiences through the finest product quality, intuitive user interface and design aesthetics, FTG is a leading brand that shapes the future of technology.</p>
                
            <section class="row">    
            <div className="col-md-4">
                <div class="card">
                    <div class="card-body">
                    <h2 className="text-center">About us</h2>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img src="static/images/banner-about-index-aboutus.jpg" alt="" style={{maxWidth: '100%', height: 'auto'}} />

                    </div>
                    <p  className="text-center">See how we become the world leading gaming brand and the trusted name in creator</p>
                    </div>
                </div>
               
            </div>
            <div className="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h3 className="text-center">ONE-STOP Service</h3>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <img 
                            src="static/images/banner-about-index-one-step-service.jpg" 
                            alt="One-Stop Service"
                            style={{maxWidth: '100%', height: 'auto'}} 
                            />
                        </div>
                        <p className="text-center">Experience our customized services system especially for our msi customers requirement.</p>

                    </div>

                </div>

            </div>
            <div className="col-md-4">
                <div class="card">
                    <div className="card-body">
                        <h3 className="text-center">Sustainability</h3>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <img 
                            src="static/images/banner-about-index-sustainability.jpg" 
                            alt="One-Stop Service"
                            style={{maxWidth: '100%', height: 'auto'}} 
                            />
                        </div>
                        <p className="text-center">FTG Environmental Protection , Safety, Health and Corporate Social Responsibility Policy.</p>

                    </div>

                </div>

            </div>
            </section>
           
           <section className="row mt-5">
            <div className="col-md-3 ">
                <div>
                    <h3 className="h">Community</h3>
                    <p>FTG Reward Program</p> <p>Member Center</p> <p>MSI Insider</p> <p>Social Media</p> <p>Forums</p> <p>ESport Terms</p>
                </div>

            </div>
            <div className="col-md-3">
                <div>
                    <h3 className="h">Support</h3>
                    <p>Downloads</p> <p>Product Registrtaiton</p> <p>Warranty Information</p> <p>Online Customer Service</p> <p>Service Location</p> <p>Where To Buy</p>
                </div>

            </div>
            <div className="col-md-3 ">
                <div>
                    <h3 className="h">Resource</h3>
                    <p>Press Room</p>
                    <p>Awards</p>
                    <p>Videos</p>
                    <p>Rss</p>
                    <p>Customer</p>
                    <p>Blogs</p>

                </div>

            </div>
            <div className="col-md-3">
                <div>
                    <h3 className="h">Compnay Information</h3>
                    <p>Artificial Intelligence</p> <p>Brochure</p> <p>Wallpaper</p> <p>PSU Calculator</p>
                </div>

            </div>           
           </section>


            
        </div>
     
    )
}

export default About