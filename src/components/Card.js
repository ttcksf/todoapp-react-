export const Card = ({ task, index, handleDelete, handleCompleted }) => {
  return (
    <div className={`todo ${task.completed ? "completed" : ""}`} key={index}>
      <div className="todoTextWrapper">
        <div className="todoText">
          <span>{task.text}</span>
        </div>
        <div className="icons">
          <button onClick={() => handleCompleted(index)}>
            <i className="fa-solid fa-square-check"></i>
          </button>
          <button onClick={() => handleDelete(index)}>
            <i className="fa-solid fa-square-minus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
