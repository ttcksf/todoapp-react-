import React from "react";
import { useState } from "react";
import { Card } from "../components/Card";
import { InputForm } from "../components/InputForm";
import { Title } from "../components/Title";

export const TodoList = () => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        text: inputText,
        completed: false,
      },
    ]);

    setInputText("");
  };

  const handleDelete = (index) => {
    //filer11はfalseで除外して、trueで残す関数
    setTaskList(taskList.filter((task) => task.id !== index));
  };
  const handleCompleted = (index) => {
    setTaskList(
      taskList.map((task) => {
        if (index === task.id) {
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
    <div className="body">
      <>
        <Title />
        <InputForm
          value={inputText}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </>
      <div className="todoList">
        <div className="todos">
          {taskList.map((task, index) => (
            <Card
              task={task}
              index={index}
              handleDelete={handleDelete}
              handleCompleted={handleCompleted}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
