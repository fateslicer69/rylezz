import React from 'react';
import './Tab3Container.css';
import { FaClipboardList, FaCog, FaSignOutAlt, FaUser, FaLanguage } from 'react-icons/fa';

const Tab3Container: React.FC = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="profile-image"
          />
          <h2 className="profile-name">Sridhar Mysore</h2>
          <p className="profile-username">@iamnagender</p>
        </div>

        <div className="profile-body">
          <div className="profile-action">
            <FaUser className="action-icon" />
            <p>Personal Information</p>
          </div>
          <div className="profile-action">
            <FaLanguage className="action-icon" />
            <p>Languages</p>
          </div>
          <div className="profile-action">
            <FaClipboardList className="action-icon" />
            <p>Manage Your Complaints</p>
          </div>
          <div className="profile-action">
            <FaCog className="action-icon" />
            <p>Settings</p>
          </div>
        </div>

        <div className="sign-out-section">
          <button className="sign-out-btn">
            <FaSignOutAlt className="sign-out-icon" /> Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tab3Container;
