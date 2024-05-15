import { useState } from "react";
import CustomInput from "../Custom-input/Custom-input";

import "./Add-task.scss";

const AddTask = () => {
  const [task, setTask] = useState("");

  const onChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <div className="add-task-container">
      <CustomInput
        label="Adicionar tarefa..."
        value={task}
        onChange={onChange}
      />
    </div>
  );
};

export default AddTask;