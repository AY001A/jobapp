import React from "react";
import { useHistory } from "react-router-dom";

const TodoCard = (props) => {
  const { todo } = props;
  const { id, completed, title } = todo;
  let history = useHistory();

  return (
    <div
      style={{
        backgroundColor: "#76C48A",
        margin: "2px",
        padding: "15px",
        width: "220px",
      }}
      onClick={() => history.push(`/todos/${id}`)}
    >
      <h4>{title}</h4>
      <h6>{`completed: ${completed}`}</h6>
    </div>
  );
};

export default TodoCard;
