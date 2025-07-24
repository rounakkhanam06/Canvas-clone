
import { useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Tabs from "../components/Tabs";
import AssignmentList from "../components/AssignmentList";
import GradeList from "../components/GradeList";
import courseDetails from "../data/courseDetails.json";
import "../css/CourseDetail.css";

export default function CourseDetail() {
  const { id } = useParams();
  const course = courseDetails[id];

  if (!course) return <h2>Course not found</h2>;

  const breadcrumbItems = [
    { label: "Dashboard", link: "/" },
    { label: course.title, link: `/courses/${id}` },
    { label: "Module" }
  ];

  const tabs = {
    Overview: <p>{course.overview}</p>,
    Assignments: <AssignmentList assignments={course.assignments} />,
    Grades: <GradeList grades={course.grades} />
  };

  return (
    <div className="course-detail">
      <Breadcrumb items={breadcrumbItems} />
      <h2>{course.title}</h2>
      <Tabs tabs={tabs} />
    </div>
  );
}

