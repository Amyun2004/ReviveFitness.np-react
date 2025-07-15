import React from "react";
import RandHandLogo from "../../assets/logo/RandHand.png";
import ReviveLogo from "../../assets/logo/Revivefitness.png";
import model from '../../assets/img_gym/sreejandaiback2a.png';
import Signup from '../LoginPage/SignupReviveFitness';
import {useState} from 'react';


export default function Intro() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <section id="home" style={{backgroundImage: `url(${model})`}}>
        <div className="about-content">
          <img src={ReviveLogo} alt="ReviveFitness.np" id="logo" />
          <p className="quote">“Unleash your true self”</p>
          <p className="about-trainers">with Nepal's Best Trainer(s)</p>
          <div className="nav-btn">
            <a onClick={() => setShowSignup(true)}>Join Us</a>

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
      {showSignup && (
            <div
              className="modal-overlay"
              onClick={() => setShowSignup(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                display: 'flex',
                justifyContent: 'center',              
                alignItems: 'center',                
                zIndex: 1000                           
              }}
            >
              <div
                className="modal-content"
                onClick={e => e.stopPropagation()}
                style={{
                  background: '#1a1a1a',
                  padding: '2rem',
                  borderRadius: '1rem',               
                  position: 'relative',
                  width: '90%',
                  maxWidth: '500px',                  
                  color: 'white',
                }}
              >
                <button
                  className="modal-close"
                  onClick={() => setShowSignup(false)}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'none',
                    color: 'white',
                    border: 'none',
                    fontSize: '1.5rem',               
                    cursor: 'pointer',
                  }}
                >
                  ✖
                </button>
                <Signup />
              </div>
            </div>
      )}
    </>
  );
}
