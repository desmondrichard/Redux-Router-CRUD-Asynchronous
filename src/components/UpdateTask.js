import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
function UpdateTask() {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");

    function Update(){
        
    }

    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: "500px" }}>
            <Card border="primary" style={{ width: '18rem' }} >
                <Card.Header className='fw-bolder text-center'>Updating User</Card.Header>
                <Card.Body>
                    {/* Adding Form */}
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupTitle">
                            <Form.Label>Task Title</Form.Label>
                            <Form.Control type="text" defaultValue={title} placeholder="Enter Task Title" onChange={(e) => setTitle(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupDesc">
                            <Form.Label>Task Decription</Form.Label>
                            <Form.Control type="text" defaultValue={desc} placeholder="Enter Task Description" onChange={(e) => setDesc(e.target.value)} />
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