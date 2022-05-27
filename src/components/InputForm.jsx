import React, { useState } from "react";

export const InputForm = ({ taskList, setTaskList }) => {
  const [inputText, setInputText] = useState("");

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

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="inputForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={inputText}
          placeholder="テキストを入力"
        />
        <button>
          <i className="fa-solid fa-circle-plus"></i>
        </button>
      </form>
      <hr />
    </div>
  );
};
