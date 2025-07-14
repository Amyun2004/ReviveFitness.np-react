

export default function TrainerCard({ img, name, title, achievements, bio }) {
  return (
    <div className="trainer-card">
      <div className="trainer-image">
        <img src={img} alt={`${name} - Fitness Trainer`} />
        <div className="trainer-info">
          <h2>
            Meet <span>{name}</span>
          </h2>
          <p className="title">{title}</p>
          <ul className="achievements">
            {achievements.map((ach, i) => (
              <li key={i}>{ach}</li>
            ))}
          </ul>
          <p className="bio">{bio}</p>
        </div>
      </div>
    </div>
  );
}