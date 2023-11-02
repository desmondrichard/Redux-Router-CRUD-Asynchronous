import "bootstrap-icons/font/bootstrap-icons.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateTask from "./components/UpdateTask";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddTask />} />
          <Route path='/tasklist' element={<TasksList />} />
          <Route path='/updatetask' element={<UpdateTask />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
