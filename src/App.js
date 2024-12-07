import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { LoginPage } from './pages/LoginPage';
import TenantView from './pages/TenantView';
import LandlordDashboard from './pages/LandlordView';
import Profile from './pages/Profile';
import LandlordProfile from './pages/Landlord/LandLordProfile';
import AddPropertyForm from './pages/PropertyForm/AddPropertyForm';
import SubscriptionPlans from "./pages/Subscription/Subscription"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="tenant-view" element={<TenantView />} />
        <Route path="tenant-profile" element={<Profile />} />
        <Route path="landlord-profile" element={<LandlordProfile />} />
        <Route path="landlord-view" element={<LandlordDashboard />} />
        <Route path="add-property" element={<AddPropertyForm />} />
        <Route path="/subscription-plans" element={<SubscriptionPlans />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
