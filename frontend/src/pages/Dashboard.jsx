
import CourseCard from "../components/CourseCard";
import TodoList from "../components/TodoList";
import coursesData from "../data/courses.json";
import tasksData from "../data/tasks.json";
import "../css/Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="course-grid">
        {coursesData.map((c) => (
          <CourseCard key={c.id} {...c} />
        ))}
      </div>
      <TodoList todos={tasksData} />
    </div>
  );
}

