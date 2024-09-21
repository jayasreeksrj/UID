// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Jayasree Website. All rights reserved.</p>
      <p>Follow us on <a href="https://www.facebook.com/jayasreewebsite" target="_blank" rel="noopener noreferrer">Facebook</a>, <a href="https://www.twitter.com/jayasreewebsite" target="_blank" rel="noopener noreferrer">Twitter</a>, and <a href="https://www.instagram.com/jayasreewebsite" target="_blank" rel="noopener noreferrer">Instagram</a>.</p>
    </footer>
  );
}

export default Footer;
