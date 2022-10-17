import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import './project.scss';

const Project = (props) => {
  // let params = useParams()
  const { id } = useParams()
  const [data, setData] = useState([]);
  
  useEffect(()=> {
    const fetchData = () => {
      const url = id;
      const pageData = props.data.find((item)=> (item.url === url));
      setData(pageData)
      
      console.log(url)
    }
    fetchData()
  }, [props])


  const { project_name, project_details, project_location, project_text, project_hero_image, project_images} = data;
  return (
    
    <main className="main-container row-gap-5">
      <section className="project-hero pattern-background project">
        <div className="project-hero">
            <h2 className="header-underline cta-text project-hero-text">{project_name}</h2>
            <h2 className="project-subheading">{project_details}</h2>
        </div> 
      </section>
      <div className="project-detail-image" style={{backgroundImage: `url(${project_hero_image})`}}></div>
      <div className="project-main-content">
        <div className="project-main-content-text pattern-background">
            <div className="text-content">
              <h3>{project_name}</h3>
              <span>{project_location}</span>
              <div className="text-style" dangerouslySetInnerHTML={ {__html: project_text} }></div>
            </div>
        </div>
        <div className="project-main-content-photos">
          {project_images && project_images.map((image=> (
            <img src={image} alt="image" />
          )))}
        </div>
      </div>
    </main>
  )
}

export default Project