import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/properties";

export const addProperty = async (propertyData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/addProperty`,
      propertyData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('Property added successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error adding property:', error.response?.data || error.message);
    throw error;
  }
};

export const getAllProperties = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/allProperties`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all properties:", error);
    throw error;
  }
};

export const serachProperty = async (searchData) => {
  try {
    const params = new URLSearchParams(searchData).toString();
    const response = await axios.get(
      `${API_BASE_URL}/search?${params}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('Properties fetched successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error adding property:', error.response?.data || error.message);
    throw error;
  }
};

export const getSubscriptionPlans = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/all`);
    return response.data;
  } catch (error) {
    console.error("Error fetching subscription plans:", error);
    throw error;
  }
};

export const subscribeToPlan = async (tenantId, planId) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/subscribe`,{ tenantId, planId },
      {headers: {'Content-Type': 'application/json',},});
    console.log('Subscribed to plan successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error subscribing to plan:', error.response?.data || error.message);
    throw error;
  }
};

