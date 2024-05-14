import { useEffect, useState } from "react";
import axios from "axios";

import TaskItem from "./components/Task-item/Task-item";

function App() {
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
    <>
      <div>
        {task.map((task) => {
          return <TaskItem key={task} task={task} />;
        })}
      </div>
    </>
  );
}

export default App;
