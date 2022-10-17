import React from 'react';
import './whyCompost.scss';
import Checkmark from '../../components/checkmark/Checkmark';
//images
import image from '../../assets/images/Compost-Climate-Graphic-Actual.jpg';



const WhyCompost = () => {
  return (
    <main className="main-container row-gap">
      <section className="hero-full" id="compost-page">
        <h2 className="header-underline cta-text">Why Compost?</h2>
      </section>
      <div className="column pattern-background brown-background column-reset">
        <div className="checkmark-container">
          <h3 className="checkmark-text">STRENGTHEN LOCAL FOOD SYSTEMS</h3>
          <div className="fact">
            <Checkmark />
            <p>We’ve lost upwards of 60% of the nation's topsoils. Without soil, we have no food. Without food, there is no us. Compost is an essential component of healthy food systems. Amending soil with high quality compost increases yields and expands our ability to grow and enjoy fresh fruit and vegetables. </p>
          </div>
        </div>
        <div className="checkmark-container">
          <h3 className="checkmark-text">REDUCE WASTE & ITS’ HARMFUL BYPRODUCTS</h3>
          <div className="fact">
            <Checkmark />
            <p>By keeping our organic resources closer to home, we minimize the impact of sending the material out of our communities on large diesel trucks to areas where industrial operations are typically situated in low income communities of color, who are often least equipped to deal with the negative impacts of this dirty industry.
            Composting conserves valuable resources and renews them for the next generation. When we divert organic material from going to the landfill and turn food scraps and yard trimmings into compost locally, we reduce the 80 billion tons of methane that is produced by our country’s landfills each year. AND, composting actually draws carbon down out of the atmosphere which reverses climate change!</p>
          </div>
        </div>
        <div className="checkmark-container">
          <h3 className="checkmark-text">RESTORE THE SOIL & IMPROVE WATER CONDITIONS</h3>
           <div className="fact">
            <Checkmark />
            <p>Over time the nutrients in soil get depleted. Compost helps restore essential nutrients, making plants healthier and yielding more nutritious crops. Compost also relieves us of our dependence on chemical fertilizers which pollute our groundwater systems and air.
            Compost boosts soil’s water holding capacity and helps conserve water by preventing run-off and erosion.</p>
          </div>
        </div>
      </div>
      <div className="grid-photo">
        <div className="grid-photo-row gpr-one bck-img"></div>
        <div className="grid-photo-row gpr-two bck-img"></div>
        <div className="grid-photo-row gpr-three bck-img"></div>
        <div className="grid-photo-row gpr-four bck-img"></div>
        <div className="grid-photo-row gpr-five bck-img"></div>
        <div className="grid-photo-row gpr-six bck-img"></div>
      </div>

      <div className="column pattern-background brown-background column-full">
        <div className="text-content">
          <h3 className="checkmark-text">key compost facts:</h3>
          <div className="fact">
            <Checkmark />
            <p className="text-style">Composting plays an integral role in creating closed loop food systems. </p>
          </div>
          <div className="fact">
            <Checkmark />
            <p>Composting creates the drawdown effect and is the number one way we can pull carbon out of the air, store it in the soil, and repair the climate.</p>
          </div>
          <div className="fact">
            <Checkmark />
            <p>The nation has lost upward of 60% of its topsoil. Composting replenishes and enhances soil, enabling us to continue to grow food for the next generations.</p>
          </div>
          <div className="fact">
            <Checkmark />
            <p>Composting is an act of Climate Justice, Food Justice, and Social Justice.</p>
          </div>
          <div className="fact">
            <Checkmark />
            <p>Composting reduces landfill waste and prevents greenhouse gases from escaping into the atmosphere and warming the planet.</p>
          </div>
          <div className="fact">
            <Checkmark />
            <p>Food scraps are not waste. They are a valuable resource that when composted close to home, have the power to positively impact public health, improve air quality, conserve  water, rebuild soil, strengthen food systems, and create green jobs.</p>
          </div>
          <div className="fact">
            <Checkmark />
            <p>According to the international research coalition Project Drawdown7, reducing food waste is the most impactful solution to global warming.</p>
          </div>
          <div className="fact">
            <Checkmark />
            <p>California state law SB 1383 requires that at least 20% of all currently disposed edible food is recovered for human consumption by 2025.</p>
          </div>
        </div>
      </div>
      <div className="column">
       

        <div className="pattern-background brown-background compost-video-description">
          <div className="row-left girl-scout-text">
            <p className="gs-text">Our Pile of Hope</p> 
            <span className="gs-span">from</span>
            <p className="gs-text gs-text-2">Girl Scout Troop 2517</p> 
            <span className="gs-span-vimeo">on Vimeo</span> 
          </div>
        </div>

         <div className="compost-video-container pattern-background brown-background">
          <div className="row-left pr compost-video">
            <iframe className="responsive-iframe" src="https://player.vimeo.com/video/754554146?h=9b5ae6e037" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
          </div>    
        </div>
      </div>
      <div className="column pattern-background brown-background">
        <div className="image-container-full pr">
          <img src={image} alt="compost graphic" />
        </div>
      </div>
    </main>
  )
}

export default WhyCompost