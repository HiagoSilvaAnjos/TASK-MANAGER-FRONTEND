import PropTypes from "prop-types";

const TaskItem = ({ task }) => {
  return (
    <div>
      <h1>{task.description}</h1>
      <p>{task.isCompleted ? "Completa" : "Não completa"}</p>
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    description: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TaskItem;
