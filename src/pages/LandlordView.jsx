import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Button, Modal } from "react-bootstrap";
import EarningsChart from "../pages/Landlord/EarningsChat";
import AddPropertyForm from "./PropertyForm/AddPropertyForm";
import "./LandlordDashboard.css";
import { useNavigate } from "react-router-dom";

const LandlordDashboard = () => {
  const [properties, setProperties] = useState([
    { id: 1, name: "Luxury Apartment", location: "Dublin", price: 1500, bedrooms: 2, bathrooms: 1 },
    { id: 2, name: "Cozy Cottage", location: "Limerick", price: 1200, bedrooms: 1, bathrooms: 1 },
    { id: 3, name: "Modern Studio", location: "Galway", price: 1000, bedrooms: 1, bathrooms: 1 },
    { id: 4, name: "Spacious Penthouse", location: "Cork", price: 2500, bedrooms: 3, bathrooms: 2 },
  ]);

  const [showModal, setShowModal] = useState(false); // Manage modal visibility
  const navigate = useNavigate();
  const [chartData, setChartData] = useState({
    labels: properties.map(property => property.name),
    datasets: [
      {
        label: 'Price of Properties',
        data: properties.map(property => property.price),
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      }
    ]
  });

  const handleEditProperty = (id) => {
    console.log(`Edit property with ID: ${id}`);
  };

  const handleDeleteProperty = (id) => {
    setProperties(properties.filter(property => property.id !== id));
    console.log(`Deleted property with ID: ${id}`);
  };

  const handleAddProperty = () => {
    setShowModal(true); 
  };

  const handleProfile = () => {
    navigate('/landlord-profile')
  };

  const handleCloseModal = () => {
    setShowModal(false); 
  };

  return (
    <div className="dashboardContainer">
      <div className="header">
        <h2>Landlord Dashboard</h2>
        <div style={{display:'flex',gap:'1em'}}>
        <Button onClick={handleProfile} className="addPropertyBtn">
          Profile
        </Button>
        <Button onClick={handleAddProperty} className="addPropertyBtn">
          Add Property
        </Button>
        </div>
      </div>

      <div className="dashboardContent">
        <h3>Properties Managed By You:</h3>
        <div className="propertyList">
          {properties.map((property) => (
            <div key={property.id} className="propertyItem">
              <h4>{property.name}</h4>
              <p><strong>Location:</strong> {property.location}</p>
              <p><strong>Price:</strong> €{property.price}</p>
              <p><strong>Bedrooms:</strong> {property.bedrooms} | <strong>Bathrooms:</strong> {property.bathrooms}</p>

              <div className="propertyActions">
                <Button variant="outline-primary" onClick={() => handleEditProperty(property.id)}>
                  <FaEdit /> Update
                </Button>
                <Button variant="outline-danger" onClick={() => handleDeleteProperty(property.id)}>
                  <FaTrashAlt /> Delete
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="chartContainer">
          <EarningsChart data={chartData} />
        </div>
      </div>

      {/* Modal for adding a new property */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Property</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddPropertyForm /> 
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LandlordDashboard;
