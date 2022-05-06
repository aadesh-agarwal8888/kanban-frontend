import React from "react";
import { Button, Modal, FormGroup, FormLabel , Form} from "react-bootstrap";
import Select from 'react-select';

function TaskForm(props) {
    return (
        <Modal show={props.show} onHide={props.toggleTaskCreator}>
          <Modal.Header closeButton>
            <Modal.Title>{props.taskState} Task</Modal.Title>
          </Modal.Header>
            <Modal.Body>
              <FormGroup>
                <FormLabel>Title</FormLabel>
                <Form.Control
                  type="text"
                  id="title"
                  name="title"
                  onChange={props.updateText.bind(null, 'title')}
                  value = {props.initialTitle}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Description</FormLabel>
                <Form.Control
                  id="description"
                  name="description"
                  as="textarea"
                  value = {props.initialDesc}
                  onChange={props.updateText.bind(null, 'desc')}
                />
              </FormGroup>
              {
                props.taskState !== "Update" ?
                  <FormGroup>
                      <FormLabel>Select Employee</FormLabel>
                      <Select
                            className="basic-single"
                            classNamePrefix="select"
                            options = {props.employees.map((employee) => {
                            return {
                                value: employee.id,
                                label: employee.name
                            }
                            })}
                            onChange = {props.handleEmployeeChange}
                        />
                  </FormGroup> : <div></div>
              }       
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={props.toggleTaskCreator}
                type="reset"
              >
                Close
              </Button>
              <Button 
                variant="primary" 
                type="submit"
                onClick={props.addTask}
                >
                Save Changes
              </Button>
            </Modal.Footer>
        </Modal>
      );
  }
  
  export default TaskForm;
  