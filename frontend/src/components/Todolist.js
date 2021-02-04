import { useEffect, useState } from "react";
import axios from "axios";

import Todos from "./Todos";
// CORS 에러 왜 생기는거지?
const Todolist = ({ reload }) => {
  const [todos, setTodos] = useState();

  useEffect(async () => {
    try {
      const response = await axios.get("http://localhost:3010/todo");
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [reload]);

  // useEffect(() => {
  //   console.log(reload);
  // }, [reload]);

  return (
    <>
      <ul>
        {todos &&
          todos.map(v => {
            return <Todos data={v} key={v._id} />;
          })}
      </ul>
    </>
  );
};

export default Todolist;
