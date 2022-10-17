import React from 'react';
import { Link } from 'react-router-dom';
import './about.scss';
import image7 from '../../assets/images/image-7.jpg';
import image6 from '../../assets/images/image-6.png';
import image5 from '../../assets/images/image-5.png';
import image8 from '../../assets/images/image-23.jpg';
import image9 from '../../assets/images/image-19.jpg';
import image10 from '../../assets/images/image-29.jpg';

import map from '../../assets/images/map.png'
import { FaFacebook} from "react-icons/fa";
import { FaInstagram} from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaYoutube} from "react-icons/fa";


const AboutUs = () => {
  return (
    <main className="main-container">
      <section className="about-hero">
        <div className="content-top">
          <div className="content-middle">
            <h2 className="about-hero-text">About Us</h2>
            <p className="about-hero-text-p">Desert Compost serves as a catalyst for social change and climate resilience that will strengthen our communities and help heal our planet.</p>
          </div>
          <div className="content-bottom">
            <p>Desert Compost organized as a Coachella Valley community initiative in 2021.As a grassroots volunteer coalition, Desert Compost applied to become a fiscally sponsored program of the California Alliance for Community Composting (CACC) and participated in the first round of the Community Composting for Green Spaces Grant awarded to CACC from CalRecycle. With CACC/’s support, Desert Compost established the desert/’s first community composting sites and has become the definitive resource for composting in the Coachella Valley.</p>
          </div>
        </div> 
      </section>
      <div className="about-content">
        <div className="about-images">
          <img src={image6} alt="Logo" />
          <img src={image5} alt="Logo" />
          <img src={image7} alt="Logo" />
        </div>

        <div className="pattern-background">
          <div className="text-content">
            <h3>The Desert Compost Way</h3>
            <p className="text-style">Desert Compost has coalesced into a movement. We galvanize communities into action not only because of what we do, but the way we do it.</p>
            <p className="text-style">The Desert Compost Way consists of three fundamental principles:</p>
            <ul className="flex-ul">
              <li className="number-liststyle">Integrity</li>
              <li className="number-liststyle">Communication</li>
              <li className="number-liststyle">Earth</li>
            </ul>
          </div> 
        </div> 

        <div className="pattern-background">
          <div className="text-content">
            <h3>INTEGRITY</h3>
            <p className="text-style">We show our care by integrating our thoughts, words, and actions.</p>
            <p className="text-style">We say what we mean. We do what we say. We think before we speak or act - with intention. We think after we speak or act - in reflection.</p>
            <p className="text-style">We inspire trust and interdependence by being reliable, consistent, and accountable.</p>
          </div>
          
          <div className="text-content padding-02">
            <h3>COMMUNICATION</h3>
            <p className="text-style">We ask questions and we listen to the answers. We work through conflicts to strengthen understanding and relationships.</p>
            <p className="text-style">Community depends on communication - making ideas shared so as to unite us in ways that establish common ground.</p>
          </div>
            
          <div className="text-content">
            <h3>EARTH</h3>
            <p className="text-style">Earth is a big idea. But while “saving the planet one compost bin at a time” may seem like a grand vision, Earth is also the grit, soil, and compost under our fingernails. The Desert Compost Corps rolls up our sleeves and digs in with our neighbors.</p>
            <p className="text-style">We don’t take our work home with us. Our work - this planet - IS our home.</p>
          </div>
        </div>
          
        <div className="about-details pattern-background">
          <div className="text-content">
            <h3>A Note About Unity and Inclusion</h3>
            <p className="text-style">In today’s culture people are often divided. We believe that caring for Earth is a cause that can bring everyone together.</p>
            <p className="text-style">Desert Compost celebrates every single person who has the desire to steward our environment and provide for our collective well-being. That is what community composting is all about.</p>
            <p className="text-style">We look for the same qualities in our volunteers and community partners. We strengthen our identity and our projects by collaborating with individuals and organizations whose working practices are also guided by Integrity, Communication, and Earth. When you know what you’re looking for, it becomes easy to see how these values are evident in project management, from the biggest strategic decisions to the most seemingly insignificant moments.</p>
            <p className="text-style">That is why we are selective about our projects. We apply specific and rigorous evaluative criteria to select those community projects who demonstrate the greatest need and the most potential to meet that need. This work is too important to leave to chance and hope for the best.</p>
            <p className="text-style">We learned this lesson the hard way. In the early days of Desert Compost, we encountered mixed reactions to the idea of community composting. We received enthusiastic support in some of the least expected places. We were also surprised when local government agencies - even a sustainability manager! - dragged their feet or aligned their interests with waste haulers rather than support our efforts to collect and process organic material.</p>
            <p className="text-style">In January 2022, Desert Compost became a fiscally sponsored project of the California Alliance for Community Composting. The community members that formed Desert Compost determined that the nature of community partnerships and project management demand accountability. Desert Compost firmly believes that accountability begins with us. In the same way we cannot look past using plastic straws or tossing organic material into a landfill, we choose to partner only with organizations and community groups who exercise ethical and honest practices, even if that means we must take an unpopular position or look elsewhere for support.</p>
            <p className="text-style">Our integrity, our communication, and our Earth depend on it. </p>
          </div>  
        </div>   
      </div>
      
      <div className="about-images mb-05">
          <img src={image8} alt="Logo" />
          <img src={image9} alt="Logo" />
          <img src={image10} alt="Logo" />
        </div>
<div className="pattern-background height-50"></div>
        <div className="about-youtube-container">
          <div className="about-youtube-details pattern-background">
            <div className="about-youtube-text">
              <div className="learn-more-text">
                <h3>learn more about what we do...</h3>
                <p className="learn-more-text-span">...check out our explainer video <span className="pointing-finger">👉</span></p>
              </div>
              <div className="learn-more-text">
                <h3>questions?</h3>
                <p>read out <span className="faq-span"><Link to="/faq">FAQ</Link></span> guide for more information.</p>
                
              </div>
            </div>
            
          </div>
          <div className="about-youtube-video">
            <iframe width="100%" height="300px" src="https://www.youtube.com/embed/yc2NUIKCj0s" title="mreandeau" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>


        <div className="about-contact-details">
          <div className="about-details-map">
            <img src={map} alt="map" />
          </div>

          <div className="pattern-background about-address-wrappper">  
              <div className="container-about-address">
                <h3 className="about-address-header">Desert Compost</h3>
                <div className="about-address-details">
                  <p>Desert Compost Street Address</p>
                  <p>Desert Compost City, State, Zip Code</p>
                  <p><strong>phone number: </strong>555-555-5555</p>
                  <p>emailaddress@email.com</p>
                </div>
              </div>
              <div className="container-social">
                <p>folow us on social</p>
                  <ul className="social-icons-list">
                    <li className="social-icon"><FaFacebook /></li>
                    <li className="social-icon"><FaInstagram /></li>
                    <li className="social-icon"><FaYoutube /></li>
                    <li className="social-icon"><FaTwitter /></li>
                  </ul>
              </div>
          </div>
        </div>








      {/* </div> */}
    </main>
  )
}

export default AboutUs