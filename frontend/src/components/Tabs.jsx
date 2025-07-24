
import { useState } from "react";
import "../css/Tabs.css"

export default function Tabs({ tabs }) {
  const [active, setActive] = useState(Object.keys(tabs)[0]);

  return (
    <div className="tabs-wrapper">
      <div className="tabs">
        {Object.keys(tabs).map((key) => (
          <button
            key={key}
            className={active === key ? "active" : ""}
            onClick={() => setActive(key)}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="tab-content">{tabs[active]}</div>
    </div>
  );
}
