import React from 'react';
import './donate.scss';
import {} from 'react-router-dom';
import donateImage from '../../assets/images/donation_code.png';
// const URL = 'https://donorbox.org/donate-to-our-compost-education-fund-to-support-programs-in-schools-community-organizations-food-pantries-and-farmer-s-markets?utm_medium=qrcode&utm_source=qrcode';

const Donate = () => {
  return (
    <main className="main-container row-gap">
      <section className="donate-hero pattern-background donate hero-full">
        <div className="project-hero donate-hero">
            <h2 className="header-underline cta-text donate-hero-text">Donate</h2>   
        </div> 
      </section>
      
      <div className="donate-container">
        <div className="donate-text-container pattern-background">
          <p className="text-style pos-r">Desert Compost is a fiscally sponsored program of the California Alliance for Community Composting. Through this collaboration we are part of a larger effort across the state to strengthen food systems and mitigate climate change through community composting.</p>
          <p className="text-style pos-r">The California Alliance For Community Composting (CACC) is a nonprofit, public benefit corporation in California composed of individuals who work in communities or organizations carrying out community composting and/or its affiliated activities, such as micro-hauling, urban farming, environmental justice, and policy advocacy.</p>
          <p className="text-style pos-r">The California Alliance for Community Composting exists to strengthen, protect, and develop small and medium-scale community composting projects across the state, and to support and empower composters alongside the communities they serve.</p>
          <p className="text-style pos-r">If you would like to donate to Desert Compost, you can scan the QR code or access our donate page <span>here</span>.</p>
        </div>
        <div className="donate-qr-code pr pattern-background">
          <img src={donateImage} alt="donation"/>
        </div>
      </div>
    </main>
  )
}

export default Donate