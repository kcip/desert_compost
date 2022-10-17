import React from 'react'
import Checkmark from '../../components/checkmark/Checkmark';
import './faq.scss';
const FAQ = () => {
  return (
    <main className="main-container row-gap">
      <section className="hero-full faq-header">
        <h2 className="header-underline cta-text">Talking Points</h2>
        <p className='text-style pr'>Frequently Asked Questions</p>
      </section>
      <div className="pattern-background">
        <div className="text-content">
          <p className="text-style">Desert Compost is a Coachella Valley based program of the California Alliance for Community Compost, a nonprofit organization that was founded in 2017 to support and empower composters alongside the communities they serve.</p>
          <p className="text-style">Desert Compost offers volunteer opportunities throughout the week at Coachella Valley Farmers' Markets and at our community compost sites. Get more information at www.desertcompost.org. Volunteers can participate at our compost sites by turning piles, sifting compost, and teaching the public about composting practices.</p>
          <p className="text-style">For any questions you or the Desert Compost volunteers aren't able to answer, refer them to info@desertcompost.org</p>
        </div>
      </div>
      <div className="pattern-background">
        <div className="text-content">
          <h3>Compost Facts</h3>
          <div className="fact">
            <Checkmark />
            <p>Compost is a verb: it is the process of decomposing organic matter. Compost is a noun: the finished product of decomposed materials. Food scraps become compost or are composted.</p>
          </div>
          <div className="fact">
            <Checkmark />
            <p>Compost needs 4 elements to be balanced: Greens (kitchen scraps, coffee grounds, lawn clippings, sources of nitrogen). Browns (dry leaves, newspaper, shredded cardboard, saw dust, mulch, sources of carbon). Air (rotation, flipping, turning). Water (our harsh desert environment requires more water, the consistency of the compost should be that of a wrung out sponge).</p>
          </div>
          <div className="fact">
            <Checkmark />
            <p>Compost does not waste water, in fact it actually conserves it! When you add compost to landscapes, gardens, or soil, it expands the soil's water holding capacity. So for sandy soil it actually increases the soil structure and gives water a place to be stored rather than passing through the sand making it inaccessible to plants. For dense, clay, or impacted soil, compost adds aeration making it more accessible for the development of healthy root systems. Compost is essential for our desert soil!</p>
          </div>
          <div className="fact">
            <Checkmark />
            <p>Composting is the number one way to repair the climate and reduce greenhouse gas emissions! Why? Because of the drawdown effect. Compost draws carbon out of the air and stores it in the ground. And when it’s in the ground, guess what feeds on carbon? Plants! They love it!</p>
          </div>
        </div>
      </div>
      <div className="pattern-background">
        <div className="text-content">
          <div className="question-container">
            <p className="question">Who is Desert Compost?</p>
            <p className="answer">(DC) is a Coachella Valley Based Community Coalition and a non profit program of the California Alliance For Community Composting.</p>
          </div>
          <div className="question-container">
            <p className="question">How does compost work?</p>
            <p className="answer">Bacteria and Fungi are the key components to decomposition.</p>
          </div>
          <div className="question-container">
            <p className="question">What kind of compost does Desert Compost make?</p>
            <p className="answer">The best of course. We test everything and monitor what goes into our compost.</p>
          </div>
          <div className="question-container">
            <p className="question">What’s the difference between dirt and soil?</p>
            <p className="answer">Dirt is devoid of life, it’s been stripped of its nutrients and essential fungi and bacteria that make life possible. Soil on the other hand is a living thing! It is rich and fragrant and smells like earth.</p>
          </div>
          <div className="question-container">
            <p className="question">What kind of compost system is best?</p>
            <p className="answer">This is a question we get frequently and we choose to answer it by asking questions in return while also educating the listener on their options.</p>
          </div>
          <div className="question-container">
            <p>We choose to not recommend any one system, but encourage the listener to make choices based on the answers to these questions:</p>
              <ul className="ul-flex">
                <li className="li-item li-one">How much space do you have?</li>
                <li className="li-item li-two">What kind of time can you spend?</li>
                <li className="li-item li-three">Do you prefer a closed system?</li>
                <li className="li-item li-four">Do you have space for a worm bin?</li>
              </ul>
          </div>
        </div>   
      </div>
     


       



      
    </main>
  )
}

export default FAQ