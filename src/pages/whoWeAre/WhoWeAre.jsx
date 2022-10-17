import React, {useEffect, useState} from 'react'
import BioCard from '../../components/bioCard/BioCard';
import './whoWeAre.scss';
const WhoWeAre = (props) => {
  const [data, setData] = useState([]);

  useEffect(()=> {
    if(props.data){
      setData(props.data)
    } else {
      console.log('error')
    }
  }, [props.data]);


  return (
    <main className="main-container row-gap">
      <section className="hero-full who-header">
        <h2 className="header-underline cta-text">Who We Are</h2>
        <p className='text-style pr'>The Compost Corps</p>
      </section>
      <div className="pattern-background height-50"></div>

      <div className="who pattern-background">
        {data && data.map((data, index)=> (
          <BioCard data={data} key={index} />
        ))}
      </div>
      <div className="pattern-background height-50"></div>
      <div className="who-container">
        <div className="pattern-background who-container-corps">
          <div className="text-content">
            <h3>Volunteer and Join the Desert Compost Community</h3>
            <p className="text-style">Desert Compost works at the nexus of social change & climate resiliency, coming together to heal the planet and build strong communities through resource stewardship, soil building, environmental education, and community engagement. We hope you will join us!</p>
          </div>
          <div className="text-content">
            <h3>Compost Corps Volunteers</h3>
            <p className="text-style">eTrain with us! Desert Compost partnered with Riverside County Dept of Waste Resources to offer a bi-annual Master Composter training for volunteers.  Upon certification, graduates participate in giving back 8-10 hours annually as members of Desert Compost’s coalition of volunteers, The Compost Corps.</p>
            <p className="text-style">The Compost Corps serve as community liaisons and teach the public about best practices in home composting, community composting, and successfully participating in the industrial programs.</p>
          </div>
        </div>
        <div className="who-container-images">
          <div className="who-container-image image-one"></div>
          <div className="who-container-image image-two"></div>
          <div className="who-container-image image-three"></div>
        </div>
      </div>
      <div className="pattern-background height-50"></div>
      <div className="pattern-background  who-container-compostingHub">
        <div className="text-content">
            <h3>Become a Community Composting Hub</h3>
            <p className="text-style">Join the movement to expand community composting in California! Divert food scraps and organic waste from the landfill, build healthy soil, and grow food ecologically for the community. Help support climate mitigation, waste reduction, food security, and community healing.</p>
            <p className="text-style">Community scale composting recovers food scraps and organic material from local residents, farms, commercial, and community spaces (such as schools, churches, and urban farms and gardens), and composts that material in a healthy and safe way, building local resource recovery networks, and supporting ecological health and food production at the community scale.</p>
            <p className="text-style">The California Alliance for Community Composting (CACC) has been implementing the Community Composting for Green Spaces (CCGS) grant program funded by CalRecycle since October 2020.  We have launched a network of 125 community compost sites and programs including DESERT COMPOST, across the state in the past two years, and we want to continue supporting the development and expansion of compost hubs with funding from the second round of CCGS (2023-2025).</p>
            <p className="text-style">CACC is planning to submit a CCGS-2 grant proposal to CalRecycle for the following regions: Greater Bay Area, Northern California, Sacramento Valley, San Joaquin Valley, Central Sierra, Inland Empire, and Greater San Diego. **If you are applying for the Greater Los Angeles region, you may submit this application and your responses will be forwarded to the lead applicant for that region, LA Compost.</p>
            <p className="text-style">Individuals, groups, and formal organizations in any of these regions interested in sharing their interest to receive no cost support from CACC to start a community compost hub at their site can now submit a pre-selection site application.  Pre-selection site applications will be accepted and reviewed on a rolling basis, with a priority deadline of 9/30/2022 and a secondary deadline of 10/7/2022.</p>
            <p className="text-style">All pre-selected sites will be included in CACC’s grant proposals, and may receive no cost financial and technical assistance from CACC beginning in Spring 2023 to launch their project should CACC be CalRecycle’s award recipient for that region</p>
        </div>
      </div>
    </main>
  )
}

export default WhoWeAre