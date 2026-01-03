import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';
import './AdminDashboard.css';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('lots');
  const [parkingLots, setParkingLots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchParkingLots();
  }, []);

  const fetchParkingLots = async () => {
    try {
      const response = await api.get('/parking-lots');
      setParkingLots(response.data.data);
      setError('');
    } catch (err) {
      setError('Failed to load parking lots');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="admin-dashboard">
      <nav className="navbar">
        <h1>Smart Parking - Admin</h1>
        <div className="nav-right">
          <span>Welcome, {user?.name}</span>
          <button onClick={handleLogout} className="btn-logout">Logout</button>
        </div>
      </nav>

      <div className="container">
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'lots' ? 'active' : ''}`}
            onClick={() => setActiveTab('lots')}
          >
            Parking Lots
          </button>
          <button
            className={`tab ${activeTab === 'slots' ? 'active' : ''}`}
            onClick={() => setActiveTab('slots')}
          >
            Parking Slots
          </button>
        </div>

        {error && <div className="error-message">{error}</div>}

        {activeTab === 'lots' && (
          <div className="tab-content">
            <h2>Manage Parking Lots</h2>
            <p>Select a tab to manage parking lots or slots.</p>
          </div>
        )}

        {activeTab === 'slots' && (
          <div className="tab-content">
            <h2>Manage Parking Slots</h2>
            <p>Select a parking lot to manage its slots.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
