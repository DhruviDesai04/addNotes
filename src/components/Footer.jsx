import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p className="center">Copyright ⓒ {year}, Made by Dhruvi Desai.</p>
    </footer>
  );
}

export default Footer;