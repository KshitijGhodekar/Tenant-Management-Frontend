import React, { useState, useEffect } from "react";
import "./SideBar.css";
import { useNavigate } from "react-router-dom";
import { FaBars, FaHome, FaUserAlt, FaCog } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import {
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CloseIcon from "@mui/icons-material/Close";
import { getAllProperties, serachProperty } from "../Apis/AddProperty";
import { imageList } from "./imageList";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [type, setType] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [available, setAvailable] = useState(false);
  const [properties, setProperties] = useState([]);
  const [popupData, setPopupData] = useState(null);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = async () => {
    const searchData = {
      location: searchTerm,
      minPrice: minPrice,
      maxPrice: maxPrice,
      type: type,
      bedrooms: bedrooms,
      bathrooms: bathrooms,
      available: true,
    };
    try {
      const data = await serachProperty(searchData);
    } catch (error) {
      console.error("Error loading properties:", error);
    }
  };

  const handleImageClick = (image) => {
    setPopupData(image);
  };

  const handleClosePopup = () => {
    setPopupData(null);
  };

  const handleProfileClick = () => {
    navigate("/tenant-profile");
  };

  const handleLogout = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await getAllProperties();
        setProperties(data);
      } catch (error) {
        console.error("Error loading properties:", error);
      }
    };

    fetchProperties();
  }, []);

  const cleanPrice = (price) => {
    return parseFloat(price.replace(/[^0-9.-]+/g, ""));
  };
  const calculateFinalPrice = (price, discount, vatRate) => {
    const numericPrice = cleanPrice(price);
    if (isNaN(numericPrice) || isNaN(discount)) {
      return "Invalid price or discount";
    }
    const discountedPrice = numericPrice - numericPrice * discount;
    const priceWithVAT = discountedPrice + discountedPrice * vatRate;
    return priceWithVAT.toFixed(2);
  };

  const calculateVAT = (price, discount, vatRate) => {
    const numericPrice = cleanPrice(price);
    if (isNaN(numericPrice) || isNaN(discount)) {
      return "Invalid price or discount";
    }
    const discountedPrice = numericPrice - numericPrice * discount;
    const vatAmount = discountedPrice * vatRate;
    return vatAmount.toFixed(2);
  };

  return (
    <div className="mainContainer">
      <div className="menuButton" onClick={toggleSidebar}>
        <FaBars size={24} />
      </div>

      <div className="sidebarContainer">
        <div className="sidebar" style={{ width: isOpen ? "200px" : "60px" }}>
          <div className="sidebarItem">
            <FaHome className="icon" />
            {isOpen && <span>Home</span>}
          </div>
          <div className="sidebarItem" onClick={handleProfileClick}>
            <FaUserAlt className="icon" />
            {isOpen && <span>Profile</span>}
          </div>
          <div
            className="sidebarItem"
            onClick={() => navigate("/subscription-plans")}
          >
            <FaUserAlt className="icon" />
            {isOpen && <span>Subscription</span>}
          </div>

          <div className="sidebarItem">
            <FaCog className="icon" />
            {isOpen && <span>Settings</span>}
          </div>
          <div className="sidebarItem" onClick={handleLogout}>
            <LuLogOut className="icon" />
            {isOpen && <span>Logout</span>}
          </div>
        </div>
      </div>

      <div className="content">
        <div className="searchContainer">
          <TextField
            label="What are you looking for?"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="searchField"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Location"
            variant="outlined"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="searchField"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Min Price"
            variant="outlined"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="searchField"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Max Price"
            variant="outlined"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="searchField"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Type"
            variant="outlined"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="searchField"
          />
          <TextField
            label="Bedrooms"
            variant="outlined"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="searchField"
            type="number"
          />
          <TextField
            label="Bathrooms"
            variant="outlined"
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
            className="searchField"
            type="number"
          />
          <Button
            variant="contained"
            color="primary"
            className="searchButton"
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>

        <h2>RENT PROPERTY</h2>

        <div className="imageGallery">
          {imageList.map((image, index) => (
            <div
              className="imageItem"
              key={index}
              onClick={() => handleImageClick(image)}
            >
              <img src={image.src} alt={image.name} />
              <p>{image.name}</p>
            </div>
          ))}
        </div>
      </div>

      {popupData && (
        <Dialog open={true} onClose={handleClosePopup}>
          <DialogTitle>
            {popupData.name}
            <IconButton
              aria-label="close"
              onClick={handleClosePopup}
              style={{ position: "absolute", right: 8, top: 8 }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent style={{ padding: "20px", textAlign: "center" }}>
            <img
              src={popupData.src}
              alt={popupData.name}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                marginBottom: "20px",
              }}
            />

            <h3 style={{ marginBottom: "15px" }}>{popupData.name}</h3>

            <p style={{ fontSize: "16px", marginBottom: "10px" }}>
              <strong>Location:</strong> {popupData.location}
            </p>

            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              <strong>Original Price:</strong> <span>{popupData.price}</span>
            </p>

            <p style={{ fontSize: "16px", marginBottom: "10px" }}>
              <strong>Discount:</strong> {popupData.discount}% Off
            </p>

            <p style={{ fontSize: "16px", marginBottom: "10px" }}>
              <strong>VAT (23%):</strong> €
              {calculateVAT(popupData.price, popupData.discount / 100, 0.23)}
            </p>

            <p
              style={{
                fontSize: "18px",
                marginBottom: "15px",
                fontWeight: "bold",
                color: "#4caf50",
              }}
            >
              <strong>Final Price (with Discount & VAT):</strong> €
              {calculateFinalPrice(
                popupData.price,
                popupData.discount / 100,
                0.23
              )}
            </p>

            <p style={{ fontSize: "16px", marginBottom: "10px" }}>
              <strong>Size:</strong> {popupData.size}
            </p>

            <p
              style={{ fontSize: "14px", marginBottom: "10px", color: "#777" }}
            >
              <strong>Description:</strong> {popupData.description}
            </p>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Sidebar;
