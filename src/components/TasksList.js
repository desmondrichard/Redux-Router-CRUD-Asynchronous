import React, {useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { deleteTaskFromServer, getTasksFromServer, removeTaskFromList } from './Slices/TasksSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedTask } from './Slices/TasksSlice'; 

function TasksList() {
  const dispatch = useDispatch();
  const { tasksList } = useSelector((state) => state.tasks);
  const navigate = useNavigate();

  function updateTask(task) {
    console.log("update");
    navigate('/updatetask');
    dispatch(setSelectedTask(task))
  }

  useEffect(() => {
    dispatch(getTasksFromServer())
  }, [dispatch])

  function deleteTask(task) {
    console.log("delete");
    dispatch(deleteTaskFromServer(task))
    .unwrap()
    .then(()=>{
      dispatch(removeTaskFromList(task))
    })
  }

  
  return (
    <div className='container my-5'>
      <Table striped bordered hover>
        <thead>
          <tr className='text-center'>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            tasksList && tasksList.map((task, index) => {
              return (
                <tr key={task.id}>
                  <td>{task.id}</td>
                  <td>{task.title}</td>
                  <td>{task.desc}</td>
                  <td className='text-center'><Button variant="primary" style={{ marginRight: "6px" }} onClick={() => updateTask(task)}><i className="bi bi-pencil-square"></i></Button><Button variant="primary" onClick={() => deleteTask(task)}><i className="bi bi-x-square-fill"></i></Button></td>
                </tr>
              )
            })
          }

        </tbody>
      </Table>
    </div>
  )
}

export default TasksList