import React from 'react';
import '../styles/footer.css';

function footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
      <div className="footer-links">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
        <a href="/contact">Contact</a>
      </div>
    </footer>
  );
}

export default footer;
