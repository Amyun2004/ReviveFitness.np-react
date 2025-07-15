import rightHandLogo from '../../assets/logo/RandHand.png'
import {useState} from 'react';
import Signup from '../LoginPage/SignupReviveFitness';
export default function AboutSection() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <section className="section-about">
      <h1>
        About <span>ReviveFitness</span>
      </h1>
      <div className="content-about">
        <img src={rightHandLogo} alt="ReviveFitness Logo" className="logo-about" />
        <div className="text-about">
          <h2>Our Story</h2>
          <p>
            ReviveFitness.np was founded with a simple vision: to make fitness accessible, enjoyable, and sustainable for everyone in Nepal. We believe in a holistic approach to health—where mind, body, and community thrive together.
          </p>
          <h2>What We Do</h2>
          <ul>
            <li>Offer a wide range of fitness programs, from yoga and strength training to HIIT and personalized coaching.</li>
            <li>Build a supportive fitness community—both online and offline.</li>
            <li>Provide expert advice, nutrition tips, and progress tracking tools for all levels.</li>
            <li>Organize regular workshops, challenges, and local events to keep you motivated.</li>
          </ul>
          <h2>Why Choose Us?</h2>
          <p>
            At ReviveFitness, our team is passionate, qualified, and always here to guide you—whether you're a beginner or a pro. We’re committed to helping you achieve real results, in a supportive and judgment-free zone.
          </p>
          <a onClick = {() => setShowSignup(true)} className="join-us-btn">Join Us</a> 
        </div>
      </div>
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
)
}

    </section>
    
  )
};
