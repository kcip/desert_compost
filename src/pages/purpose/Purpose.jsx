import React from 'react';
import './purpose.scss';
import image from '../../assets/images/image-5.png';
import image2 from '../../assets/images/image-11.png';



const Purpose = () => {
  return (
    <main className="main-container row-gap">
      <section className="hero-full" id="purpose-header">
        <h2 className="header-underline cta-text">Purpose & Impact</h2>
      </section>

      <div className="column reset-height">
        <div className="row-two order-2"> 
          <div className="content-wrapper-full pattern-background">
            <div>
              <h3 className="header-h4 pr">community composting:</h3>
              <ol className="counter pr">
                <li className="number-liststyle">strengthens local food systems</li>
                <li className="number-liststyle">reduces landfill waste</li>
                <li className="number-liststyle">restores the soil</li>
                <li className="number-liststyle">helps our neighbors learn about composting as a way to conserve  water, grow healthy food, and sequester carbon, which reduces greenhouse gas emissions and fights climate change.</li>
              </ol>
            </div>
            <div className="paragraph-full pr mt-5">
              <p>Desert Compost was founded on the principle that composting is an economical, convenient way for members of our community to make an immediate impact on our physical environment and our society.  What we can make together today will heal the planet tomorrow.</p>
 
              <p>Our vision is based on science. Generations of observation and research have proven that composting is an inexpensive, doable way for each of us to create immediate benefits.</p>
              <p className="paragraph-last">"We want to heal our environment and keep organic resources close to home."</p>
            </div>
          </div>
        </div>
   
      <div className="row-two order-1">
        <div className="column-images-wrapper">
          <div className="column-images">
            <img src={image} alt="" />
          </div>
          <div className="column-images">
            <img src={image2} alt="" />
          </div>
        </div> 
      </div>

      </div>

    </main>
  )
}

export default Purpose;