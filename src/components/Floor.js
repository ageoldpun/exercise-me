import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

const EXERCISE_NAMES = [
  'Low Row',
  'High Row',
  'Chest Press',
  'Squat with Rotation',
  'Bicep Curl',
  'Tricep Extension',
  'Lateral Raise',
  'Front Raise',
  'Goblet Squat',
  'Snatch',
  'Reverse Lunge',
  'Curl to Press',
  'Single-arm Swing',
  'Tricep Press/extension',
  'ISO Squat Reverse Fly',
  'Tricep Kickback',
  'Arnold Press',
  'Thruster',
  'Alternating Chest Press',
  'Plank Shoulder Taps',
  'Plank Jacks',
  'Plank Low Row',
  'Palms to Elbows',
  'Pop Jacks',
  'Burpees',
  'Mountain Climbers',
  'Sumo Squats',
  'Squat Jack',
  'Jump Lunge',
];
export default class Floor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      floorExercises: [],
      selectedFloorExercise: {
        number: 1,
        time: 0,
        name: 'Low Row',
        reps: 0,
      },
    }
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleExerciseChange = this.handleExerciseChange.bind(this);
    this.handleRepsChange = this.handleRepsChange.bind(this);
    this.onAddBlockClick = this.onAddBlockClick.bind(this);
  }

  handleTimeChange(changeEvent) {
    this.setState({
      selectedFloorExercise: {
        ...this.state.selectedFloorExercise,
        time: changeEvent.target.value,
      },
    })
  }

  handleExerciseChange(eventKey) {
    this.setState({
      selectedFloorExercise: {
        ...this.state.selectedFloorExercise,
        name: eventKey,
      },
    })
  }

  handleRepsChange(changeEvent) {
    this.setState({
      selectedFloorExercise: {
        ...this.state.selectedFloorExercise,
        reps: changeEvent.target.value,
      },
    })
  }

  onAddBlockClick() {
    this.state.floorExercises.push(this.state.selectedFloorExercise);
    this.setState({
      selectedFloorExercise: {
        number: this.state.selectedFloorExercise.number + 1,
        time: 0,
        name: EXERCISE_NAMES[0],
        reps: 0,
      }
    });
  }

  render() {
    return (
      <div className="mt-4">
        <h2>Floor</h2>
        {this.state.floorExercises.length > 0 &&
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Block Number</th>
                <th>Time</th>
                <th>Name</th>
                <th>Reps</th>
              </tr>
            </thead>
            <tbody>
              {this.state.floorExercises.map(exercise => (
                <tr key={exercise.number}>
                  <td>{exercise.number}</td>
                  <td>{exercise.time}</td>
                  <td>{exercise.name}</td>
                  <td>{exercise.reps}</td>
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
              <Form.Control type="number" placeholder='seconds' value={this.state.selectedFloorExercise.time} onChange={this.handleTimeChange} />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Exercise
            </Form.Label>
            <Col sm={10}>
              <Dropdown  onSelect={this.handleExerciseChange}>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  {this.state.selectedFloorExercise.name}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {EXERCISE_NAMES.map(exercise => (
                    <Dropdown.Item key={exercise} eventKey={exercise}>{exercise}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Reps
            </Form.Label>
            <Col sm={2}>
              <Form.Control type="number" placeholder='reps' value={this.state.selectedFloorExercise.reps} onChange={this.handleRepsChange} />
            </Col>
          </Form.Group>

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
