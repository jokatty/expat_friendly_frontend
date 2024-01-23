import React from "react";
import "./NavigationBar.css";

export default function NavigationBar() {
    return (
    <div className="navigation-bar">
      {/* Application Name */}
      <div className="logo">expatFriendly</div>

      {/* Login Button */}
      <button className="login-button">Login</button>
    </div>
  );
}