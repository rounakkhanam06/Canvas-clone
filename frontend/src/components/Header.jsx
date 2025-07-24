import "../css/Header.css";
import students from "../data/student.json";

export default function Header() {
  const student = students[0]; // first student
  const today = new Date().toLocaleDateString();

  return (
    <header className="header">
      <h1>Welcome, {student.name}</h1>
      <span className="date">{today}</span>
    </header>
  );
}


