import AddTask from "../Add-task/Add-task";
import TaskItem from "../Task-item/Task-item";

import "./Tasks.scss";

import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";

const Tasks = () => {
  const [task, setTasks] = useState([]);

  const fetchTask = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://task-manager-backend-gc5o.onrender.com/tasks"
      );

      setTasks(data);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const lastTasks = useMemo(() => {
    return task.filter((task) => task.isCompleted == false);
  }, [task]);

  const completedTasks = useMemo(() => {
    return task.filter((task) => task.isCompleted);
  }, [task]);

  useEffect(() => {
    fetchTask();
  }, [fetchTask]);

  return (
    <div className="tasks-container">
      <h2>Minhas Tarefas</h2>
      <div className="last-tasks">
        <h3>Ultimas Tarefas</h3>
        <AddTask fetchTask={fetchTask} />
        <div className="tasks-list">
          {lastTasks.map((lastTask) => (
            <TaskItem
              key={lastTask._id}
              task={lastTask}
              fetchTasks={fetchTask}
            />
          ))}
        </div>
      </div>
      <div className="completed-tasks">
        <h3>Tarefas concluídas</h3>
        <div className="tasks-list">
          {completedTasks.map((completedTask) => (
            <TaskItem
              key={completedTask._id}
              task={completedTask}
              fetchTasks={fetchTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
