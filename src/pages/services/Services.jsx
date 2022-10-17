import React from 'react'
import './services.scss';
import image from '../../assets/images/image-8.png';
import image2 from '../../assets/images/image-9.png';
import Checkmark from '../../components/checkmark/Checkmark';  
const Services = () => {
  return (
    <main className="main-container row-gap">
      <section className="hero-full">
        <h2 className="header-underline cta-text">Services</h2>
      </section>

      <div className="column">
        <div className="row-two pattern-background"> 
          <div className="center-content">
            <h3>General Scope of Work</h3>
            <p>Desert Compost support local businesses, schools, organizations, and municipalities in creating local solutions to food insecurity and the climate crisis. Together we can address the problems of hunger and global warming by reducing food waste through food recovery and composting.</p>
          </div>
        </div>
        <div className="row-two bi-services">
          <div className="center-content center-content-image">
            <p>We help municipalities and organizations reach SB 1383 requirements within <span>months</span> instead of years.</p>
          </div>
          
        </div>
      </div>

      <div className="column">
        <div className="row-two">
          <div className="image-container">
            <img src={image} alt="image" className="image-half" />
          </div>
        </div>
        <div className="row-two pattern-background">
          <div className="checkbox-wrapper">
            <h3>Desert Compost:</h3>
          <div className="fact">
            <Checkmark />
            <p>Provides community outreach and engagement that activates Coachella Valley residents to achieve the highest possible reduction in greenhouse gas emissions from food scraps and organics. </p>
          </div>
          <div className="fact">
            <Checkmark />
            <p>Creates community compost solutions that are scalable through compost site consulting, set up, training, monitoring, and support.</p>
          </div>
          <div className="fact">
            <Checkmark />
            <p>Offers educational programs for the public on home composting solutions, community composting, and advocating for public policy that supports industrial compost improvements</p>
          </div>
          </div>

          

        </div>
      </div>

      <div className="column">
        <div className="row-two pattern-background"> 
          <div className="checkbox-wrapper full-height pos-center">
            <div className="fact">
              <Checkmark />
              <p>Orchestrates organics recovery / food scrap collection</p>
            </div>
            <div className="fact">
              <Checkmark />
              <p> Collects and Evaluates data on Greenhouse Gas Diversion, Water Saving Technologies</p>
            </div>
            <div className="fact">
              <Checkmark />
              <p>Coordinates and trains site managers and volunteers</p>
            </div>
            <div className="fact">
              <Checkmark />
              <p>Utilizes and distributes finished compost to support food access gardens</p>
            </div>
          </div>
        
        </div>
        <div className="row-two">
           <div className="image-container">
            <img src={image2} alt="image" className="image-half" />
          </div>
        </div>
      </div>

    <div className="column">
      
      <div className="pattern-background full-height pos-center">
        <div className="text-style pr">
          <h3 className="mb-20">Education & Advocacy</h3>
          <p>Desert Compost’s Education programs focus on the value and practice of composting as a means to support self-sustaining, regenerative food systems, climate repair and community health.  Our programs serve priority populations: youth, communities of color, and the food insecure.</p>
          <p>Desert Compost partnered with the Certified Farmers Markets of the Coachella Valley.</p>
        </div>
      </div>

        <div className="pattern-background">
          <div className="text-style pr pos-center padding-13 flex-ac">
            <p className="DC-event-list">Desert Compost holds monthly tabling events at the markets to teach and engage the public about:</p>
            <ul className="counter pr">
              <li className="number-liststyle">Organics diversion</li>
              <li className="number-liststyle">Waste reduction</li>
              <li className="number-liststyle">Home composting methods</li>
              <li className="number-liststyle">Restoring healthy ecosystems</li>
              <li className="number-liststyle">Building soil</li>
              <li className="number-liststyle">Increasing productive harvests</li>
              <li className="number-liststyle">Strengthening local food systems</li>
              <li className="number-liststyle">Sequestering carbon</li>
              <li className="number-liststyle">Conserving water</li>
              <li className="number-liststyle">Recovering resources</li>
              <li className="number-liststyle">Reducing greenhouse gas emissions</li>
              <li className="number-liststyle">Facilitating community well-being and engagement</li>
              <li className="number-liststyle">Transforming social systems</li>
            </ul>
          </div>  
        </div>
        
      




    </div>






      <div className="column">
        <div className="row-full pattern-background">
          <div className="text-content">
            <h3 className="text-header">Best Practices</h3>
            <p className="text-style line-top-decoration">Desert Compost believes in best practices by keeping composting close to home. Through consulting and education programs, we train community members in home composting methods, and assist cities, organizations, schools, and businesses in setting up on-site composting operations which we track, monitor, and test.  We also advocate for improvements on the industrial level.</p>
            <p className="text-style">In an effort to reduce methane and other greenhouse gas emissions to mitigate climate change, CA State Bill 1383 will require us all to begin separating our organic waste and compost it, starting in October 2022. Waste hauling companies, which typically have a monopoly within their geographic area, have been tasked with creating large-scale composting sites to handle municipal organic waste. </p>
            <p className="text-style">As the Coachella Valley’s definitive source for composting information and expertise, we at Desert Compost (DC) would like to suggest a few best practices for composting in our communities.</p>
            <p className="text-style">Since 80% of methane emissions from organic waste is emitted in the first few days after disposal, it is vital to get the material in the ground as soon as possible. The best possible way to reduce GHG emissions is for individual homeowners to compost in their own backyards. </p>
            <p className="text-style">However, many homeowners may not have either the space, time or physical capacity to create their own personal composting system. The next best solution for the planet is a nearby neighborhood or community site, where households can bring their organic scraps every week or few days. This also guarantees that gasses are being sequestered quickly, with as little fossil fuel expenditure used to deliver the waste for processing as possible.</p>
            <p className="text-style">Home and community composting solutions keep things small and local, helping us to build long term resilience within our food systems. At the largest end of the scale, municipal composting programs need to be able to support all the households in their region. How and when haulers need to collect organic wastes are issues of prime importance, especially in the light of our unique climate conditions here in the desert.</p>
            <p className="text-style">To that end, Desert Compost proposes the following set of proposed Best Practices:</p>
            <p className="text-style">DC believes that municipal waste haulers can provide clean air vehicles in the near future, which upon implementation, will immediately cut GHG emissions.</p>
            <p className="text-style">DC suggests waste haulers consider scheduling twice weekly pickup of compostable wastes, further lowering GHG emissions.</p>
            <p className="text-style">DC challenges waste haulers to find acceptable methods for storing compostable material. Compostable bags quickly degrade in our heat, and plastic bags cannot be composted. If residents are required to collect scraps in plastic bags, then the municipal hauler will be forced to add another step to the process, to rip open and empty the bags. The collected bags will then need to be added to the landfill, ultimately increasing GHG emissions.</p>
            <p className="text-style">DC hopes that local waste companies will experiment with various kinds of organic waste canisters or bins, dedicated solely for compostable materials. If all organic waste is confined within a bin with a lid, with no plastic bags involved, and picked up frequently for sequestration, GHG emissions will be reduced.</p>
            <p className="text-style line-bottom">DC recommends the waste industry institute oversight, compliance measures, and efficacy reviews as soon as organic waste operations begin. Our cities require the most conscientious level of service in their hauling contracts, in order to reflect the urgency of the climate crisis and maintain the trust of communities served. </p>
          </div>
        </div>
      </div>

    </main>
  )
}

export default Services