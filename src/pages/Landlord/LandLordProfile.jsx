import React, { useState } from 'react';
import './Profile.scss';
import profilePic from "../Images/Profile.png";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';

const LandlordProfile = () => {
  const [profileData, setProfileData] = useState({
    name: 'John Cena',
    email: 'johndoe@realestate.com',
    phone: '(123) 456-7890',
    location: 'Limerick, Ireland',
    address: 'Greenwood Apartments, Suite 42',
    bio: 'I am an experienced landlord managing properties in Limerick and nearby regions. I am passionate about providing tenants with high-quality homes.',
    propertiesOwned: 10,
    activeProperties: 6,
    totalEarnings: '€250,000',
    yearsOfExperience: 12,
    profilePic: profilePic,
    membershipStatus: 'Platinum',
  });

  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

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

        {profileData.membershipStatus === 'Platinum' && (
          <div className="platinumMembershipBadge">
            <span>Platinum Member</span>
          </div>
        )}
      </div>

      <div className="profileDetails">
        {isEditing ? (
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
              <label>Properties Owned:</label>
              <input
                type="number"
                name="propertiesOwned"
                value={profileData.propertiesOwned}
                onChange={handleChange}
                className="profileInput"
              />
            </div>
            <div>
              <label>Active Properties:</label>
              <input
                type="number"
                name="activeProperties"
                value={profileData.activeProperties}
                onChange={handleChange}
                className="profileInput"
              />
            </div>
            <div>
              <label>Total Earnings:</label>
              <input
                type="text"
                name="totalEarnings"
                value={profileData.totalEarnings}
                onChange={handleChange}
                className="profileInput"
              />
            </div>
            <div>
              <label>Years of Experience:</label>
              <input
                type="number"
                name="yearsOfExperience"
                value={profileData.yearsOfExperience}
                onChange={handleChange}
                className="profileInput"
              />
            </div>
            <button className="saveButton" onClick={handleSaveChanges}>
              Save Changes
            </button>
          </div>
        ) : (
          <div>
            <p><strong>Email:</strong> {profileData.email}</p>
            <p><strong>Phone:</strong> {profileData.phone}</p>
            <p><strong>Location:</strong> {profileData.location}</p>
            <p><strong>Address:</strong> {profileData.address}</p>
            <p><strong>Bio:</strong> {profileData.bio}</p>
            <p><strong>Properties Owned:</strong> {profileData.propertiesOwned}</p>
            <p><strong>Active Properties:</strong> {profileData.activeProperties}</p>
            <p><strong>Total Earnings:</strong> {profileData.totalEarnings}</p>
            <p><strong>Years of Experience:</strong> {profileData.yearsOfExperience}</p>
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

export default LandlordProfile;
