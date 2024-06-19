import './App.css';
import { useSelector } from 'react-redux';
import Login from './Component/Login';
import Sidebar from './Component/Sidebar';
import { Routes, Route } from 'react-router-dom';


  const App = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
  
    <div>
      {isAuthenticated ?(
        <Routes>
          {/* Always display Sidebar and handle nested routes */}
          <Route path="/*" element={<Sidebar />} /> {/* Changed */}
        </Routes>
      ) : <Login />}
    </div>
   
  );
}

export default App
