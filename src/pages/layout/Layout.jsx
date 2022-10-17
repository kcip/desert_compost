import React, {Fragment} from 'react'
import {Routes, Route} from 'react-router-dom';

import HomePage from '../homepage/HomePage';
import FAQ from '../FAQ/FAQ';
import Donate from '../donate/Donate';
import AboutUs from '../../pages/aboutUs/AboutUs';
import Services from '../../pages/services/Services';
import Projects from '../../pages/projects/Projects';
import WhoWeAre from '../../pages/whoWeAre/WhoWeAre';
import Purpose from '../../pages/purpose/Purpose';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import WhyCompost from '../../pages/whyCompost/WhyCompost'
import Project from '../../pages/project/Project';
import {data} from '../../assets/data/data_projects';
import {data_bios} from '../../assets/data/data_bios';
import './layout.scss';


const Layout = (props) => {
  return (
    <Fragment>
      <div className="main-layout">
        <div className="container">
          <header className="container-header">
            <Header />
          </header>
          <div className="container-pages">
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects data={data} />} />
              <Route path="/project/:id"  element={<Project data={data} />}/>
              <Route path="/who-we-are" element={<WhoWeAre data={data_bios}/>} />
              <Route path="/purpose" element={<Purpose />} />
              <Route path="/why-compost" element={<WhyCompost />} />
              <Route path="donate" element={<Donate />} />
            </Routes>
          </div>
          <footer className="container-footer">
            <Footer />
          </footer>
        </div>

      </div>
    </Fragment>
  )
}

export default Layout