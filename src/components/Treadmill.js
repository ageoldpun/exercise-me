import React from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Treadmill(props) {
  const selectedPace = 'Pace'

  return (
    <div className="mt-4">
      <h2>Treadmill</h2>
      <div>
        <form>
          <div className="form-row">
            <div className="col">
              <input type="text" className="form-control" placeholder="Time" />
            </div>
            <div className="col">
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  {selectedPace}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Base Pace</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Push Pace</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">All Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Incline" />
            </div>
          </div>
        </form>
        <Button variant="primary">Add Block</Button>
      </div>
    </div>
  )
}
