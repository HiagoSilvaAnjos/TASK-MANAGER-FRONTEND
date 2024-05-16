import "./App.scss";

import Sidebar from "./components/Sidebar/Sidebar";
import Tasks from "./components/Tasks/Tasks";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <Tasks />
    </div>
  );
}

export default App;
