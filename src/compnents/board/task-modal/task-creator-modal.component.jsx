import React from "react";
import { Button, Modal, FormGroup, FormLabel , Form} from "react-bootstrap";
import Select from 'react-select';
import { PRIORITIES } from "../../../data";

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
                  </FormGroup> : 
                  <FormGroup>
                    <FormLabel>Task Status</FormLabel>
                    <Select 
                      className = "basic-single"
                      classNamePrefix="select"
                      options = {props.lanes.map((lane) => {
                        return {
                          value: lane.id,
                          label: lane.title
                        }
                      })}
                      onChange = {props.handleEmployeeChange}
                      defaultValue = {props.lanes.filter(lane => lane.id == props.initialStatus).map((filteredLane) => {
                        return {
                          value: filteredLane.id,
                          label: filteredLane.title
                        }
                      })}
                    />
                  </FormGroup>
              }    
              <FormGroup>
                <FormLabel>Priority</FormLabel>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  options = {PRIORITIES}
                  onChange = {props.handlePriorityChange}
                  defaultValue = {PRIORITIES.filter(pri => pri.value == props.initialPriority).map(filteredPri => {
                    return filteredPri
                  })}
                />
              </FormGroup>   
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
  