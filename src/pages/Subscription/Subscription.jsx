import React, { useState } from "react";
import "./SubscriptionPlans.css";
import { Button } from "@mui/material";

const SubscriptionPlans = ({ onSubscribe }) => {
  const [plans] = useState([
    {
      id: "normal",
      name: "Normal Plan",
      price: "€10/month",
      features: ["Message Limit", "Contact Visibility", "Video Request Limit"]
    },
    {
      id: "plus",
      name: "Plus Plan",
      price: "€20/month",
      features: ["Extended Messaging (10)", "Increased Contact Visibility(10)", "Video Requests(3)", "Advanced Property Search"]
    },
    {
      id: "premium",
      name: "Premium Plan",
      price: "€30/month",
      features: ["Unlimited Messaging", "Unlimited Video Requests", "Priority Customer Support", "Property Comparison Tool", "Early Access to Listings"]
    }
  ]);

  const handleSubscription = (planId) => {
    const tenantId = "tenant-123";
    alert(`Successfully subscribed to ${planId} plan!`);
  };

  return (
    <div className="subscriptionPlans">
      <h2>Choose Your Subscription Plan</h2>
      <div className="plansContainer">
        {plans.map((plan) => (
          <div key={plan.id} className="planCard">
            <h3>{plan.name}</h3>
            <p>{plan.price}</p>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleSubscription(plan.id)}
            >
              Subscribe
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlans;
