import { useEffect, useState } from "react";
import axios from "axios";

const Todos = ({ data }) => {
  const [title, setTitle] = useState(data.title);
  const [updateToggle, setUpdateToggle] = useState(false);

  const onClickUpdate = () => {
    setUpdateToggle(!updateToggle);
  };

  const onSubmitUpdate = async e => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:3010/todo/${data._id}`,
        {
          title,
        }
      );
      setTitle(response.data.title);
      setUpdateToggle(false);
    } catch (error) {
      console.error(error);
    }
  };
  const onChangeTitle = e => {
    setTitle(e.target.value);
  };
  const onClickDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3010/todo/${data._id}`
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {updateToggle ? (
        <li key={data._id}>
          <form onSubmit={onSubmitUpdate}>
            <input type="text" value={title} onChange={onChangeTitle} />
            <input type="submit" value="확인" />
          </form>
          <button onClick={onClickUpdate}>취소</button>
        </li>
      ) : (
        <li key={data._id}>
          {title}
          <button onClick={onClickUpdate}>수정</button>
          <button onClick={onClickDelete}>삭제</button>
        </li>
      )}
    </>
  );
};

export default Todos;
