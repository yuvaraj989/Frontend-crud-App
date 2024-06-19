import React from 'react';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Dashborad.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
    <div className="sidebar">
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Menu</Accordion.Header>
          <Accordion.Body>
            <ul>
              {/* Navigation links */}
              <li>
                <Link to="/students">
                  <i className="bi bi-people-fill icon"></i> Students Information
                </Link>
              </li>
              <li>
                <Link to="/teachers">
                  <i className="bi bi-person-fill icon"></i> Teachers Information
                </Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  </div>
  );
};

export default Dashboard;
