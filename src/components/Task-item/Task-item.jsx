import PropTypes from "prop-types";

import "./Task-item.scss";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";

const TaskItem = ({ task }) => {
  const handleTaskDeletion = async () => {
    try {
      await axios.delete(
        `https://task-manager-backend-gc5o.onrender.com/tasks/${task._id}`
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="task-item-container">
      <div className="task-description">
        <label
          className={
            task.isCompleted
              ? "checkbox-container-completed "
              : "checkbox-container"
          }
        >
          {task.description}
          <input type="checkbox" defaultChecked={task.isCompleted} />
          <span
            className={task.isCompleted ? "checkmark completed" : "checkmark"}
          ></span>
        </label>
      </div>

      <div className="delete">
        <AiFillDelete onClick={handleTaskDeletion} size={18} color="#f97474" />
      </div>
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    description: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default TaskItem;
