import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Slices/authSlice';
import { Row, Col } from "react-bootstrap";
import { Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import AddTask from './AddTask';
import TaskList from './TaskList';
import Navbar from './Navbar';


const Sidebar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div>
      {isAuthenticated ? (
        <>
          <button onClick={handleLogout} className='col float-end'>Logout</button>
          <Row>
            <Col lg="4">
              <Dashboard /> {/* Sidebar menu component */}
            </Col>
            <Col lg="6">
              <Routes>
                {/* Nested routing within the authenticated section */}
                <Route path="/" element={<div>Welcome to the Dashboard</div>} /> {/* Changed */}
                <Route path="/students" element={
                  <div>
                    <Navbar />
                    <AddTask />
                    <TaskList />
                  </div>
                } /> 
                 <Route path="/teachers" element={<div>Welcome to Teachers Details</div>} />
                {/* Add more routes as needed */}
              </Routes>
            </Col>
          </Row>
        
        </>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
};

export default Sidebar;
