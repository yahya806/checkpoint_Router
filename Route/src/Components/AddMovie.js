import React from 'react'
import { Button, Form,  Modal } from 'react-bootstrap'
import { useState } from 'react';

export const AddMovie = ({addmovies}) => {
const [movie,setmovie]=useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange=(e)=>{
        setmovie({...movie,[e.target.name]:e.target.value})
    }
    return (
        <div>
        <Button variant="primary" onClick={handleShow}>
        Add new movie
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Adding movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Movie Title</Form.Label>
    <Form.Control name="titre" type="text" placeholder="Enter Movie name" onChange={handleChange} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Movie description</Form.Label>
    <Form.Control name="desc" type="text" placeholder="Enter description" onChange={handleChange} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Insert the image</Form.Label>
    <Form.Control name="imag" type="text" placeholder="Enter image" onChange={handleChange} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Rating</Form.Label>
    <Form.Control name="rat" type="number" placeholder="Enter Rating" onChange={handleChange} />
  </Form.Group>

</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleClose();addmovies(movie)}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>    
        </div>
    )
}
