import React from "react";
import RandHandLogo from "../../assets/logo/RandHand.png";
import ReviveLogo from "../../assets/logo/Revivefitness.png";
import model from '../../assets/img_gym/sreejandaiback2a.png';
import { Link } from 'react-router-dom';


export default function Intro() {
  return (
    <>
      <section id="home" style={{backgroundImage: `url(${model})`}}>
        <div className="about-content">
          <img src={ReviveLogo} alt="ReviveFitness.np" id="logo" />
          <p className="quote">“Unleash your true self”</p>
          <p className="about-trainers">with Nepal's Best Trainer(s)</p>
          <div className="nav-btn">
            <Link to="">Join Us</Link>

          </div>
        </div>
      </section>

      <section className="section-about">
        <h1>
          About <span>ReviveFitness</span>
        </h1>
        <div className="content-about">
          <img
            src={RandHandLogo}
            alt="ReviveFitness Logo"
            className="logo-about"
          />
          <div className="text-about">
            <h2>Our Story</h2>
            <p>
              ReviveFitness.np was founded with a simple vision: to make fitness
              accessible, enjoyable, and sustainable for everyone in Nepal. We
              believe in a holistic approach to health—where mind, body, and
              community thrive together.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
