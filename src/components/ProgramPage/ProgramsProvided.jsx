// src/components/ProgramPage/ProgramGallery.jsx


import {programs} from './programsData';

export default function ProgramGallery() {
  return (
    <>
    <span className="scroll-hint">⇠ Scroll ⇢</span>
    <div className="services-content">
      
      {programs.map((prog, i) => (
        <div className="row" key={i}>
          <div className="img-wrapper">
            <img src={prog.img} alt={prog.title} />
            <div className="img-overlay" />
            <div className="overlay-text">{prog.title}</div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
