import "../css/CourseCard.css";
import { Link } from "react-router-dom";

export default function CourseCard({ id, title, instructor, progress }) {
  return (
    <div className="course-card">
      <h3>{title}</h3>
      <p>{instructor}</p>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
     
      <Link to={`/courses/${id}`} className="go-btn">Go to Course</Link>
    </div>
  );
}

