import React, { useState } from "react";

function Carddetails({ detail }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <div style={{ fontSize: "20px", paddingBottom: "5px" }}>
        <b>{detail.firstname} {detail.lastname}</b>
      </div>
      <div style={{ paddingBottom: "10px", fontSize: "12px", color: "#555" }}>
        {detail.caseType}
      </div>
      <div style={{ paddingBottom: "10px", fontSize: "12px", color: "#555" }}>
        {detail.email}
      </div>
      <div
        style={{
          
          fontSize: "16px",
          color: "#555",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          
          textOverflow: "ellipsis",
          WebkitLineClamp: 3, // Adjust this to 2 or 3 lines as desired
          whiteSpace: "normal", // Ensures normal spacing
        }}
      >
        {detail.experience}
      </div>
    </div>
  );
}

export default Carddetails;