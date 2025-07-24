import { Link } from "react-router-dom";
import "../css/Breadcrumb.css";

export default function Breadcrumb({ items }) {
  return (
    <div className="breadcrumb">
      {items.map((item, index) => (
        <span key={index}>
          {item.link ? <Link to={item.link}>{item.label}</Link> : item.label}
          {index < items.length - 1 && " > "}
        </span>
      ))}
    </div>
  );
}
