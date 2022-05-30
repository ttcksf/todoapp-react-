import React from "react";

export const InputForm = ({ inputText, handleSubmit, handleChange }) => {
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
