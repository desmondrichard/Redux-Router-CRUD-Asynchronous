import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { updateTaskInServer } from './Slices/TasksSlice';
import { useNavigate } from 'react-router-dom';

function UpdateTask() {
    const navigate = useNavigate();
    const {selectedTask}=useSelector((state)=>state.tasks);

    const dispatch=useDispatch();
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const [id,setId]=useState("");
    function Update(){
        dispatch(updateTaskInServer({id,title,desc}))
        navigate('/tasklist');
    }

    useEffect(()=>{
        if(Object.keys(selectedTask).length!==0){
            setTitle(selectedTask.title);
            setDesc(selectedTask.desc);
            setId(selectedTask.id);
        }
    },[selectedTask])
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: "500px" }}>
            <Card border="primary" style={{ width: '18rem' }} >
                <Card.Header className='fw-bolder text-center'>Updating User</Card.Header>
                <Card.Body>
                    {/* Adding Form */}
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupTitle">
                            <Form.Label>Task Title</Form.Label>
                            <Form.Control type="text" Value={title} placeholder="Enter Task Title" onChange={(e) => setTitle(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupDesc">
                            <Form.Label>Task Decription</Form.Label>
                            <Form.Control type="text" Value={desc} placeholder="Enter Task Description" onChange={(e) => setDesc(e.target.value)} />
                        </Form.Group>
                        <div className='text-end'>
                            <Button type="submit" variant="success" onClick={(e) => Update(e)}>Update User</Button>
                        </div>
                    </Form>
                    
                </Card.Body>
            </Card>
        </div>
    )
}

export default UpdateTask