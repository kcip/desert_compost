import React from 'react';
import './homepage.scss';
import Button from '../../components/button/Button';
import Checkmark from '../../components/checkmark/Checkmark';
import image1 from '../../assets/images/image-2.jpeg';
import image2 from '../../assets/images/image-3.jpeg';
import image3 from '../../assets/images/image-1.jpg';
import { FaFacebook} from "react-icons/fa";
import { FaInstagram} from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaYoutube} from "react-icons/fa";

const HomePage = () => {
  return (
    <main className="container-homepage">
      <section className="container-hero">
        <div className="container-cta">
          <h1>Desert Compost</h1>
          <h3>EAT.EARTH.REPEAT</h3>
          <Button />
        </div>  
      </section>
      <section className="container-content-hp">

      <div className="row row-2 pattern-background">
        <div className="full-width ">
          <div className="content-wrapper full-width-left flex-center padding-5">
            <h3>our story</h3>
            <p>Desert Compost (DC), is a grass roots, volunteer-based Coachella Valley community initiative founded in 2021. Desert Compost serves as a catalyst for the social change and climate resilience that will strengthen our communities and help heal our planet. Our practices foster education, build awareness and civic engagement.</p>
            {/* <Button /> */}
          </div>

          <div className="content-wrapper full-width-right">
            <div className="container-images">
              <div className="image-left"><img src={image1} alt="Logo" /></div>
              <div className="image-right"><img src={image2} alt="Logo" /></div>
            </div>
          </div>
        </div>
      </div>
        
      <div className="row row-3">
        <div className="container-images">
          <div className="image-left"><img src={image3} alt="Logo" /></div>
        </div>
        <div className="pattern-background">
          <div className="join">
            <h2>Join the Desert Compost Community</h2>
            <p>Sign up for the Desert Compost Community and help heal our planet!</p>
            <p>email@email.com</p>
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
        </div>

        <div className="row full-width">
          {/* <div className="row-1-image"></div> */}
          <div className="row-1-content pattern-background">
            <div className="content-wrapper">
              <div className="container-purpose">
                <h3>purpose</h3>
                <p className="content-paragraph line-top">Desert Compost works with organizations, schools, cities, and businesses involved in food recovery and food security by expanding the ways these organizations meet the state of CA/’s SB 1383 requirements. Since food waste is the second highest polluter in greenhouse gasses next to car pollution, composting is a critical practice for climate regeneration.</p>
              </div>
            </div>
          </div>
          <div className="row-1-image"></div>
        </div>

        <div className="row">
          <div className="content-wrapper hp-image hp-image-three"></div>
          <div className="content-wrapper hp-image hp-image-four"></div>
        </div>




       <div className="full-width row pattern-background" id="dsp-flex">
          <div className="text-content padding-42">
            <div className="content-wrapper" id="DC-best">
              <h3 className="DC-best-practices-header">Desert Compost Best Practices</h3>
              <p className="text-style">In an effort to reduce methane and other greenhouse gas emissions to mitigate climate change, CA State Bill 1383 will require us all to begin separating our organic waste and compost it, starting in October 2022. Waste hauling companies, which typically have a monopoly within their geographic area, have been tasked with creating large-scale composting sites to handle municipal organic waste.</p>
              <p className="text-style">As the Coachella Valley’s definitive source for composting information and expertise, we at Desert Compost (DC) would like to suggest a few best practices for composting in our communities.</p>
              <p className="text-style">Since 80% of methane emissions from organic waste is emitted in the first few days after disposal, it is vital to get the material in the ground as soon as possible. The best possible way to reduce GHG emissions is for individual homeowners to compost in their own backyards.</p>
              <p className="text-style">However, many homeowners may not have either the space, time or physical capacity to create their own personal composting system. The next best solution for the planet is a nearby neighborhood or community site, where households can bring their organic scraps every week or few days. This also guarantees that gasses are being sequestered quickly, with as little fossil fuel expenditure used to deliver the waste for processing as possible.</p>
              <p className="text-style">Home and community composting solutions keep things small and local, helping us to build long term resilience within our food systems. At the largest end of the scale, municipal composting programs need to be able to support all the households in their region. How and when haulers need to collect organic wastes are issues of prime importance, especially in the light of our unique climate conditions here in the desert</p>
              <p className="text-style">To that end, Desert Compost proposes the following set of proposed Best Practices:</p>
              <p className="text-style">DC believes that municipal waste haulers can provide clean air vehicles in the near future, which upon implementation, will immediately cut GHG emissions.</p>
              <p className="text-style">DC suggests waste haulers consider scheduling twice weekly pickup of compostable wastes, further lowering GHG emissions</p>
              <p className="text-style">DC challenges waste haulers to find acceptable methods for storing compostable material. Compostable bags quickly degrade in our heat, and plastic bags cannot be composted. If residents are required to collect scraps in plastic bags, then the municipal hauler will be forced to add another step to the process, to rip open and empty the bags. The collected bags will then need to be added to the landfill, ultimately increasing GHG emissions</p>
              <p className="text-style">DC hopes that local waste companies will experiment with various kinds of organic waste canisters or bins, dedicated solely for compostable materials. If all organic waste is confined within a bin with a lid, with no plastic bags involved, and picked up frequently for sequestration, GHG emissions will be reduced.</p>
              <p className="text-style">DC recommends the waste industry institute oversight, compliance measures, and efficacy reviews as soon as organic waste operations begin. Our cities require the most conscientious level of service in their hauling contracts, in order to reflect the urgency of the climate crisis and maintain the trust of communities served.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="content-wrapper hp-image hp-image-one"></div>
          <div className="content-wrapper hp-image hp-image-two"></div>
        </div>

        <div className="row row-4">
          <div className="pattern-background full-width brown-background">
            <div className="content-wrapper facts-section padding-42">
              <h3>composting facts</h3>
              <span>Compost offers a significant answer to climate change.</span>
              <div className="facts-section-content">
                <div className="fact">
                  <Checkmark />
                  <p>Compost is a huge benefit for both water conservation and quality.</p>
                </div>
              
                <div className="fact">
                  <Checkmark />
                  <p>Soil health and productivity is dependent on organic matter 
                  – the essence of compost. </p>
                </div>
                  <div className="fact">
                  <Checkmark />
                  <p>
                    The use of landfill space and incineration can be reduced by at least one-third when organics are recycled. Focused attention on recycling organic residuals is key to achieving high-waste diversion rates.
                  </p>
                </div>
                <div className="fact">
                  <Checkmark />
                  <p>Methane, a greenhouse twenty-five times as powerful as carbon dioxide, can be significantly reduced through the recycling of organics instead of their being landfill.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row full-width">
          <div className="row-1-image"></div>
          <div className="row-1-content pattern-background brown-background">
            <div className="content-wrapper">
              <div className="container-purpose">
                <h3>purpose</h3>
                <p className="content-paragraph line-top">Desert Compost works with organizations, schools, cities, and businesses involved in food recovery and food security by expanding the ways these organizations meet the state of CA/’s SB 1383 requirements. Since food waste is the second highest polluter in greenhouse gasses next to car pollution, composting is a critical practice for climate regeneration.</p>
              </div>
            </div>
          </div>
        </div> */}

      </section>  
    </main>
  )
}

export default HomePage