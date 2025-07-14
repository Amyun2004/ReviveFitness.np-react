import TrainerCard from "./TrainerCard.jsx";
import sreejandaiImg from '../../assets/img_gym/sreejandai.png'

const trainers = [
    {
    img: sreejandaiImg,
    name: "Shreejan Shrestha",
    title: "Certified Fitness Trainer",
    achievements: [
      "💪 2000+ Body Transformations",
      "🏆 9 Years of Professional Experience",
      "🥇🥇🥇 bodybuilder"
    ],
    bio: "With nearly a decade of experience, Shreejan has helped thousands achieve their fitness goals. His personalized coaching style combines science, discipline, and motivation to deliver lasting transformations."
  }
];


export default function TrainerSection() {
  return (
    <section>
      <h2 className="heading">Our <span>Trainers</span></h2>
      <div className="about-container">
        {trainers.map((t, i) => (
          <TrainerCard key={i} {...t} />
        ))}
      </div>
    </section>
  );
}