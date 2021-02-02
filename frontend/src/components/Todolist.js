import { useEffect, useState } from "react";
import axios from "axios";

// CORS 에러 왜 생기는거지?
const Todolist = () => {
  const [todos, setTodos] = useState();
  useEffect(async () => {
    try {
      const response = await axios.get("http://localhost:3010/todo");
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <ul>
        {todos &&
          todos.map((v, i) => {
            return <li key={v._id}>{v.title}</li>;
          })}
      </ul>
    </>
  );
};

export default Todolist;
