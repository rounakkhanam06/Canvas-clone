import "../css/AssignmentList.css";

export default function AssignmentList({ assignments }) {
  if (!assignments || assignments.length === 0) {
    return <p>No assignments available.</p>;
  }

  return (
    <ul className="assignment-list">
      {assignments.map((a, index) => (
        <li key={index}>
          {a.title} <span className="due-date">Due: {a.due}</span>
        </li>
      ))}
    </ul>
  );
}
