import "../css/TodoList.css";
import comingUp from "../data/comingUpTask.json";

const TodoList = ({ todos = [] }) => {
  return (
    <div className="todo-panel">
      {/* To-Do Section */}
      <h2>To Do</h2>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <input type="checkbox" className="todo-checkbox" />
            <div>
              <p className="todo-title">{todo.text}</p>
              <span className="todo-date">Due: {todo.due}</span>
            </div>
          </div>
        ))
      ) : (
        <p className="empty">Nothing for the next week</p>
      )}

      <hr />

      {/* ComingUp Section- */}
      <div className="todo-coming">
        <h3>
          Coming Up <a href="/calendar">View Calendar</a>
        </h3>
        {comingUp.length === 0 ? (
          <p className="empty">Nothing for the next week</p>
        ) : (
          comingUp.map((item) => (
            <p key={item.id} className="coming-item">
              {item.title} - {item.date}
            </p>
          ))
        )}
      </div>

      <button className="todo-button">Start a New Course</button>
      <button className="todo-button">View Grades</button>
    </div>
  );
};

export default TodoList;





// import "../css/TodoList.css";
// import comingUp from "../data/comingUpTask.json";

// const TodoList = ({ todos = [] }) => {
//   return (
//     <div className="todo-panel">
//       {/* --- To-Do Section --- */}
//       <h2>To Do</h2>
//       {todos.length > 0 ? (
//         todos.map((todo) => (
//           <div key={todo.id} className="todo-item">
//             <p className="todo-title">{todo.text}</p>
//             <span className="todo-date">Due: {todo.due}</span>
//           </div>
//         ))
//       ) : (
//         <p className="empty">Nothing for the next week</p>
//       )}

//       <hr />

//       {/* --- Coming Up Section --- */}
//       <div className="todo-coming">
//         <h3>
//           Coming Up <a href="/calendar"> View Calender</a>
//         </h3>
//         {comingUp.length === 0 ? (
//           <p className="empty">Nothing for the next week</p>
//         ) : (
//           comingUp.map((item) => (
//             <p key={item.id} className="coming-item">
//               {item.title} - {item.date}
//             </p>
//           ))
//         )}
//       </div>

//       <button className="todo-button">Start a New Course</button>
//       <button className="todo-button">View Grades</button>
//     </div>
//   );
// };

// export default TodoList;









