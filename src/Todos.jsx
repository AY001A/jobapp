import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import TodoCard from "./TodoCard";

const Todos = () => {
  const [todos, setTodos] = useState();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
      const responseTodos = res.data;
      setTodos(responseTodos);
    });
  }, []);

  return (
    <>
      {todos ? (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {todos.map((todo) => (
            <TodoCard todo={todo} />
          ))}
        </div>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Todos;
