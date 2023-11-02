import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
function TasksList() {

    const navigate=useNavigate();

    function updateTask(e){
        e.preventDefault();
        console.log("update");
        navigate('/updatetask');
    }

    function deleteTask(){
        console.log("delete");
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
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td className='text-center'><Button variant="primary" style={{marginRight:"6px"}} onClick={(e)=>updateTask(e)}><i className="bi bi-pencil-square"></i></Button><Button variant="primary" onClick={()=>deleteTask()}><i className="bi bi-x-square-fill"></i></Button></td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default TasksList