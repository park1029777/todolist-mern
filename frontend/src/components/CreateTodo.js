import { useState } from "react";
import axios from "axios";
const CreateTodo = () => {
  const [title, setTitle] = useState("");

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
    </>
  );
};
export default CreateTodo;
