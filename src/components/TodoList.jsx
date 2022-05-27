import React from "react";

export const TodoList = ({ taskList, setTaskList }) => {
  const handleDelete = (id) => {
    //filer11はfalseで除外して、trueで残す関数
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  const handleCompleted = (id) => {
    setTaskList(
      taskList.map((task) => {
        if (id === task.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  return (
    <div className="todoList">
      <div className="todos">
        {taskList.map((task, index) => (
          <div
            className={`todo ${task.completed ? "completed" : ""}`}
            key={index}
          >
            <div className="todoTextWrapper">
              <div className="todoText">
                <span>{task.text}</span>
              </div>
              <div className="icons">
                <button onClick={() => handleCompleted(task.id)}>
                  <i className="fa-solid fa-square-check"></i>
                </button>
                <button onClick={() => handleDelete(task.id)}>
                  <i className="fa-solid fa-square-minus"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
