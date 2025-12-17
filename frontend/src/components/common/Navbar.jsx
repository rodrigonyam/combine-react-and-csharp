import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../../store/authSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-lg">
      <div className="p-4">
        <h1 className="text-xl font-bold">Project Manager</h1>
      </div>
      
      <ul className="mt-8">
        <li>
          <Link
            to="/dashboard"
            className={`block px-4 py-2 hover:bg-gray-700 ${
              isActive('/dashboard') ? 'bg-gray-700 border-r-4 border-indigo-500' : ''
            }`}
          >
            <span className="flex items-center">
              📊 Dashboard
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={`block px-4 py-2 hover:bg-gray-700 ${
              isActive('/projects') ? 'bg-gray-700 border-r-4 border-indigo-500' : ''
            }`}
          >
            <span className="flex items-center">
              📁 Projects
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/tasks"
            className={`block px-4 py-2 hover:bg-gray-700 ${
              isActive('/tasks') ? 'bg-gray-700 border-r-4 border-indigo-500' : ''
            }`}
          >
            <span className="flex items-center">
              ✅ Tasks
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            className={`block px-4 py-2 hover:bg-gray-700 ${
              isActive('/profile') ? 'bg-gray-700 border-r-4 border-indigo-500' : ''
            }`}
          >
            <span className="flex items-center">
              👤 Profile
            </span>
          </Link>
        </li>
      </ul>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">{user?.firstName} {user?.lastName}</p>
            <p className="text-xs text-gray-400">{user?.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="text-red-400 hover:text-red-300 text-sm"
            title="Logout"
          >
            🚪
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;