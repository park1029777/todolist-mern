import { useEffect, useState } from "react";
import axios from "axios";

import Todos from "./Todos";
// CORS 에러 왜 생기는거지?
const Todolist = ({ reload }) => {
  const [todos, setTodos] = useState();
  const [deleteReload, setDeleteReload] = useState();

  const reloadList = res => {
    setDeleteReload(res);
    console.log(res);
  };

  useEffect(async () => {
    try {
      const response = await axios.get("http://localhost:3010/todo");
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [reload, deleteReload]);

  // useEffect(() => {
  //   console.log(reload);
  // }, [reload]);

  return (
    <>
      <ul>
        {todos &&
          todos.map(v => {
            return <Todos data={v} key={v._id} reloadList={reloadList} />;
          })}
      </ul>
    </>
  );
};

export default Todolist;
