import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import "./AddPropertyForm.css";

const AddPropertyForm = () => {
  const [formData, setFormData] = useState({
    address: "",
    propertyTitle: "",
    price: "",
    type: "",
    bedrooms: "",
    bathrooms: "",
    available: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    setFormData({ ...formData, available: checked });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Property Submitted:", formData);

      setFormData({
        address: "",
        price: "",
        type: "",
        bedrooms: "",
        bathrooms: "",
        available: false,
      });
    } catch (error) {
      console.error("Error adding property:", error);
    }
  };

  return (
    <form className="addPropertyForm" onSubmit={handleFormSubmit}>
      <h2>Add New Property</h2>

      <TextField
        label="Address"
        name="address"
        variant="outlined"
        value={formData.address}
        onChange={handleInputChange}
        className="formField"
        fullWidth
      />

      <TextField
        label="Property Title"
        name="propertyTitle"
        variant="outlined"
        value={formData.propertyTitle}
        onChange={handleInputChange}
        className="formField"
        fullWidth
      />

      <TextField
        label="Price"
        name="price"
        variant="outlined"
        type="number"
        value={formData.price}
        onChange={handleInputChange}
        className="formField"
        fullWidth
      />

      <FormControl fullWidth className="formField">
        <InputLabel>Type</InputLabel>
        <Select
          label="Type"
          name="type"
          value={formData.type}
          onChange={handleInputChange}
        >
          <MenuItem value="apartment">Apartment</MenuItem>
          <MenuItem value="house">House</MenuItem>
          <MenuItem value="condo">Condo</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Bedrooms"
        name="bedrooms"
        variant="outlined"
        type="number"
        value={formData.bedrooms}
        onChange={handleInputChange}
        className="formField"
        fullWidth
      />

      <TextField
        label="Bathrooms"
        name="bathrooms"
        variant="outlined"
        type="number"
        value={formData.bathrooms}
        onChange={handleInputChange}
        className="formField"
        fullWidth
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={formData.available}
            onChange={handleCheckboxChange}
            name="available"
            color="primary"
          />
        }
        label="Available"
      />

      <div className="submitButtonContainer">
        <Button variant="contained" color="primary" type="submit">
          Add Property
        </Button>
      </div>
    </form>
  );
};

export default AddPropertyForm;
