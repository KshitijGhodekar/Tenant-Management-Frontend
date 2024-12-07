import React from "react";
import Sidebar from "./SideBar/SideBar";

const TenantView = () => {
  return (
    <>
      <div style={{ margin: "10px"}}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "xx-large",
            borderWidth:"3px",
            borderStyle:"solid",
            borderColor:"black",
          }}
        >
          TENANT - TRACK 
        </div>
      <div>
        <Sidebar />
      </div>
      </div>
    </>
  );
};

export default TenantView;
