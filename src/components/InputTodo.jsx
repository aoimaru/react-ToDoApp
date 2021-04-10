import React from "react";

export const InputTodo = (props) => {
  return (
    <div className="input-area">
      <input
        placeholder="TODOを入力"
        value={props.todoText}
        onChange={props.onChangeTodoText}
      />
      <button onClick={props.onClickAdd}>追加</button>
    </div>
  );
};
