import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

export default class Treadmill extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      treadmillExercises: [],
      selectedTreadmillExercise: {
        number: 1,
        time: 0,
        incline: 1,
        name: 'Base Pace',
      },
    }
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handlePaceChange = this.handlePaceChange.bind(this);
    this.handleInclineChange = this.handleInclineChange.bind(this);
    this.onAddBlockClick = this.onAddBlockClick.bind(this);
  }

  handleTimeChange(changeEvent) {
    this.setState({
      selectedTreadmillExercise: {
        ...this.state.selectedTreadmillExercise,
        time: changeEvent.target.value,
      },
    })
  }

  handlePaceChange(changeEvent) {
    this.setState({
      selectedTreadmillExercise: {
        ...this.state.selectedTreadmillExercise,
        name: changeEvent.target.value,
      },
    });
  }

  handleInclineChange(eventKey) {
    this.setState({
      selectedTreadmillExercise: {
        ...this.state.selectedTreadmillExercise,
        incline: eventKey,
      },
    });
  }

  onAddBlockClick() {
    this.state.treadmillExercises.push(this.state.selectedTreadmillExercise);
    this.setState({
      selectedTreadmillExercise: {
        number: this.state.selectedTreadmillExercise.number + 1,
        time: 0,
        incline: 1,
        name: 'Base Pace',
      }
    });
  }

  render() {
    return (
      <div className="mt-4">
        <h2>Treadmill</h2>
        {this.state.treadmillExercises.length > 0 &&
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Block Number</th>
                <th>Time</th>
                <th>Pace</th>
                <th>Incline</th>
              </tr>
            </thead>
            <tbody>
              {this.state.treadmillExercises.map(exercise => (
                <tr key={exercise.number}>
                  <td>{exercise.number}</td>
                  <td>{exercise.time}</td>
                  <td>{exercise.name}</td>
                  <td>{exercise.incline}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        }
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Time
            </Form.Label>
            <Col sm={2}>
              <Form.Control type="number" placeholder='seconds' value={this.state.selectedTreadmillExercise.time} onChange={this.handleTimeChange} />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Incline
            </Form.Label>
            <Col sm={10}>
              <Dropdown  onSelect={this.handleInclineChange}>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  {this.state.selectedTreadmillExercise.incline}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="1">1</Dropdown.Item>
                  <Dropdown.Item eventKey="2">2</Dropdown.Item>
                  <Dropdown.Item eventKey="3">3</Dropdown.Item>
                  <Dropdown.Item eventKey="4">4</Dropdown.Item>
                  <Dropdown.Item eventKey="5">5</Dropdown.Item>
                  <Dropdown.Item eventKey="6">6</Dropdown.Item>
                  <Dropdown.Item eventKey="7">7</Dropdown.Item>
                  <Dropdown.Item eventKey="8">8</Dropdown.Item>
                  <Dropdown.Item eventKey="9">9</Dropdown.Item>
                  <Dropdown.Item eventKey="10">10</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Form.Group>

          <fieldset>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2}>
                Pace
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  value="Base Pace"
                  label="Base Pace"
                  id="Base Pace"
                  checked={this.state.selectedTreadmillExercise.name === 'Base Pace'}
                  onChange={this.handlePaceChange}
                />
                <Form.Check
                  type="radio"
                  value="Push Pace"
                  label="Push Pace"
                  id="Push Pace"
                  checked={this.state.selectedTreadmillExercise.name === 'Push Pace'}
                  onChange={this.handlePaceChange}
                />
                <Form.Check
                  type="radio"
                  value="All Out"
                  label="All Out"
                  id="All Out"
                  checked={this.state.selectedTreadmillExercise.name === 'All Out'}
                  onChange={this.handlePaceChange}
                />
              </Col>
            </Form.Group>
          </fieldset>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button onClick={this.onAddBlockClick}>Add Block</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    )
  }
}
