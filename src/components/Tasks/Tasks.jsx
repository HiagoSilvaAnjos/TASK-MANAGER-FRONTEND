import AddTask from "../Add-task/Add-task";
import TaskItem from "../Task-item/Task-item";

import "./Tasks.scss";

import axios from "axios";
import { useEffect, useState } from "react";

const Tasks = () => {
  const [task, setTasks] = useState([]);

  const fetchTask = async () => {
    try {
      const { data } = await axios.get(
        "https://task-manager-backend-gc5o.onrender.com/tasks"
      );

      setTasks(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <div className="tasks-container">
      <h2>Minhas Tarefas</h2>
      <div className="last-tasks">
        <h3>Ultimas Tarefas</h3>
        <AddTask fetchTask={fetchTask} />
        <div className="tasks-list">
          {task
            .filter((task) => task.isCompleted == false)
            .map((lastTask) => (
              <TaskItem
                key={lastTask.id}
                task={lastTask}
                fetchTasks={fetchTask}
              />
            ))}
        </div>
      </div>
      <div className="completed-tasks">
        <h3>Tarefas concluídas</h3>
        <div className="tasks-list">
          {task
            .filter((task) => task.isCompleted)
            .map((lastTask) => (
              <TaskItem
                key={lastTask.id}
                task={lastTask}
                fetchTasks={fetchTask}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
