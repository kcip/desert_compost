import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './projects.scss';
import {data_partners} from '../../assets/data/data_partners';
import Partners from '../../components/partners/Partners';


const Projects = (props) => {

const [data, setData] = useState([]);
const [dataPartners, setDataPartners] = useState([]);

useEffect(()=> {
 if(props.data){
  setData(props.data);
  setDataPartners(data_partners);
 } else {
  console.log('error')
 }
}, [props.data])


  return (
    <main className="main-container row-gap">
      <section className="hero-full vh-50">
        <h2 className="header-underline cta-text">Projects</h2>
      </section>

      {data && data.map((data, index)=> (
          <div className="column order-flip" key={index}>
            <div className="row-half pattern-background text-order-two"> 
              <div className="center-content-wrapper padding-2">
                <div className="text-content padding-5 project-details-text">
                  <h3>{data.project_name}</h3>
                  <h4>{data.project_location}</h4>
                  <p className="text-style">{data.project_excerpt}</p>
                  <span className="pr read-more-link"><Link to={`/project/${data.url}`}>read more</Link></span>
                </div>
              </div>
            </div>
          <div className="row-half project-image-wrapper image-order-ome">
            <div className="center-content-wrapper padding-2">
              <div className="project_image" style={{backgroundImage: `url(${data.project_hero_image})`}}></div>
            </div> 
          </div>
      </div>
      ))}
      
      <div className="row-half gc-5">
        <div className="pattern-background gc-span-3">
          <div className="text-content center-flex">
            <h3>Become a Desert Compost Project</h3>
            <p className="text-style">Are you interested in establishing a community composting project in your neighborhood? Submit a No-Cost application for funding and support: <span>HERE</span></p>
            
          </div>
        </div> 
        <div className="project-group-photo gc-span-2"></div>
      </div>

      <div className="project-partners">

        <div className="pattern-background">
          <div className="pr iframe-width">
            <iframe src="https://www.google.com/maps/d/embed?mid=1EGKcjgzhAF6HOcs61cxAyNVvnMo97Bw&ehbc=2E312F" width="640" height="480"></iframe>
          </div>
         
        </div>

        <div className="pattern-background full-height">
          <div className="pr projects-wrapper center-flex">
            <h3>Desert Compost's CCGS2 projects</h3>
          </div>  
        </div>

      </div>



    <div className="pattern-background brown-background">
      <div className="pr partners-container">
        <h3>Desert Compost Partners</h3>
            <div className="partners-container-details">
             {dataPartners && dataPartners.map((item, index)=> (
              <Partners data={item} key={index}/>
             ))}
            </div>
      </div>
    </div>

    </main>
  )
}

export default Projects