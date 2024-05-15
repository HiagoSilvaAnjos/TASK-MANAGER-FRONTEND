import PropTypes from "prop-types";

import { useState } from "react";

import CustomInput from "../Custom-input/Custom-input";

import "./Add-task.scss";
import CustomButton from "../Custom-button/Custom-button";
import { FaPlus } from "react-icons/fa";
import axios from "axios";

const AddTask = ({ fetchTask }) => {
  const [task, setTask] = useState("");

  const onChange = (e) => {
    setTask(e.target.value);
  };

  const handleTaskAddtion = async () => {
    try {
      if (task.length === 0) {
        return alert("A tarefa precisa de uma descrição para ser adicionada");
      }

      await axios.post("https://task-manager-backend-gc5o.onrender.com/tasks", {
        description: task,
        isCompleted: false,
      });

      await fetchTask();
      setTask("");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="add-task-container">
      <CustomInput
        label="Adicionar tarefa..."
        value={task}
        onChange={onChange}
      />

      <CustomButton onClick={handleTaskAddtion}>
        <FaPlus size={14} color="#ffffff" />
      </CustomButton>
    </div>
  );
};

export default AddTask;

AddTask.propTypes = {
  fetchTask: PropTypes.func.isRequired,
};
