import "../css/GradeList.css";

export default function GradeList({ grades }) {
  if (!grades || grades.length === 0) {
    return <p>No grades available.</p>;
  }

  return (
    <ul className="grades-list">
      {grades.map((g, index) => (
        <li key={index}>
          {g.item}: <strong>{g.score}</strong>
        </li>
      ))}
    </ul>
  );
}
