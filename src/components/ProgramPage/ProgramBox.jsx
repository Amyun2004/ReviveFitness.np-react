

export default function ProgramBox({ title, children }) {
  return (
    <div className="program-box">
      <h3>{title}</h3>
      {children}
    </div>
  );
}
