import './app.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';

import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:userId" element={<User />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
