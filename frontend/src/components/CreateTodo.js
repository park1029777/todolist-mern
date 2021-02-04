import { useState } from "react";
import axios from "axios";
import Todolist from "./Todolist";
const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [reload, setReload] = useState();

  const onChangeTitle = e => {
    setTitle(e.target.value);
  };

  const onSubmitCreate = async e => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3010/todo", {
        title,
      });
      setTitle("");
      setReload(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <form onSubmit={onSubmitCreate}>
        <label>CreateTodo</label>
        <input type="text" value={title} onChange={onChangeTitle} />
        <input type="submit" value="생성" />
      </form>
      <Todolist reload={reload} />
    </>
  );
};
export default CreateTodo;
