import React, { useState } from 'react';
import './Profile.scss';
import profilePic from "./Images/Profile.png";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: 'Kshitij Ghodekar',
    email: 'kshitijg@gmai.com',
    phone: '(123) 456-7890',
    location: 'Limerick, Ireland',
    address: 'Capavilla Village',
    bio: 'I am a software developer currently looking for a cozy apartment in the city center of Limerick. I enjoy tech, gaming, and exploring new places.',
    propertiesRented: 2,
    profilePic: profilePic,
    membershipStatus: 'Gold',
  });

  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate(); // Navigation hook

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData({ ...profileData, profilePic: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveChanges = () => {
    console.log('Saved profile data:', profileData);
    setIsEditing(false);
  };

  return (
    <div className="profileContainer">
      <div className="profileHeader">
        <button className="backButton" onClick={() => navigate(-1)}> 
          <ArrowBackIosNewIcon />
        </button>
        <img src={profileData.profilePic} alt="Profile" className="profileImage" />

        {isEditing && (
          <div className="uploadProfilePic">
            <input type="file" accept="image/*" onChange={handleProfilePicChange} />
          </div>
        )}

        <h2>{profileData.name}</h2>

        {profileData.membershipStatus === 'Gold' && (
          <div className="goldMembershipBadge">
            <span>Gold Member</span>
          </div>
        )}
      </div>

      <div className="profileDetails">
        {isEditing ? (
          // Editable fields when in edit mode
          <div>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={profileData.name}
                onChange={handleChange}
                className="profileInput"
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleChange}
                className="profileInput"
              />
            </div>
            <div>
              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                value={profileData.phone}
                onChange={handleChange}
                className="profileInput"
              />
            </div>
            <div>
              <label>Location:</label>
              <input
                type="text"
                name="location"
                value={profileData.location}
                onChange={handleChange}
                className="profileInput"
              />
            </div>
            <div>
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={profileData.address}
                onChange={handleChange}
                className="profileInput"
              />
            </div>
            <div>
              <label>Bio:</label>
              <textarea
                name="bio"
                value={profileData.bio}
                onChange={handleChange}
                className="profileInput"
              />
            </div>
            <div>
              <label>Properties Rented:</label>
              <input
                type="number"
                name="propertiesRented"
                value={profileData.propertiesRented}
                onChange={handleChange}
                className="profileInput"
              />
            </div>
            <button className="saveButton" onClick={handleSaveChanges}>Save Changes</button>
          </div>
        ) : (
          // View mode (non-editable)
          <div>
            <p><strong>Email:</strong> {profileData.email}</p>
            <p><strong>Phone:</strong> {profileData.phone}</p>
            <p><strong>Location:</strong> {profileData.location}</p>
            <p><strong>Address:</strong> {profileData.address}</p>
            <p><strong>Bio:</strong> {profileData.bio}</p>
            <p><strong>Properties Rented:</strong> {profileData.propertiesRented}</p>
          </div>
        )}
      </div>

      <div className="profileActions">
        <button className="editButton" onClick={handleEditToggle}>
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
        <button className="logoutButton">Logout</button>
      </div>
    </div>
  );
};
export default Profile;
