import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addTasksToServer } from './Slices/TasksSlice';


function AddTask() {
    const dispatch=useDispatch();
    const { tasksList, error } = useSelector((state) => state.tasks);

    const navigate = useNavigate();
    
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    function Submit(e) {
        e.preventDefault();
        console.log({ title, desc });
        dispatch(addTasksToServer({title,desc}));
        navigate("/tasklist");
        setTitle('');
        setDesc('');
    }
    return (

        <div className='container' style={{ paddingTop: "12%" }}>
            <div>
                <h3 className='text-center text-primary'>Todo List</h3>
                <h4 className='text-center text-danger'>Currently {tasksList.length} tasks are pending</h4>
                {
                   (error!==''?<h5 className='text-center text-danger'>{error}</h5>:null)
                }
            </div>
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupTitle">
                        <Form.Label>Task Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Task Title" onChange={(e) => setTitle(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupDesc">
                        <Form.Label>Task Decription</Form.Label>
                        <Form.Control type="text" placeholder="Enter Task Description" onChange={(e) => setDesc(e.target.value)} />
                    </Form.Group>
                    <div className='text-end'>
                        <Button type="submit" variant="success" style={{ marginBottom: "10px" }} onClick={(e) => Submit(e)}>Add Task</Button>
                    </div>
                </Form>
            </div>
        </div>

    )
}

export default AddTask