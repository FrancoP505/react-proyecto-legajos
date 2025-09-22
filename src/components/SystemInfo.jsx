import React from "react";
import "../styles/login.css";

const SystemInfo = () => (
  <div
    className="system-info"
    style={{
      position: "absolute",
      right: 51,
      top: 48,
      width: 448,
      height: 600,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div>
      <img
        src="assets/icons/logo_sdl2.png"
        alt="SDL2 logo"
        style={{
          borderRadius: 8,
          boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
          width: 320,
          height: 320,
          objectFit: "contain",
        }}
      />
      <label
        style={{
          backgroundColor: "#343434",
          color: "#fff",
          fontFamily: "'Roboto Mono', monospace",
          fontSize: 28,
          fontWeight: 600,
          marginTop: 24,
          textAlign: "center",
          letterSpacing: 2,
          display: "block",
          padding: "8px 16px",
          borderRadius: 8,
        }}
      >
        Sistema de digitalización de legajos
      </label>
    </div>
  </div>
);

export default SystemInfo;