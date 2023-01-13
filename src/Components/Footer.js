import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
      <footer>
          <p>
            Copywright © {currentYear} Andrew Park. All Rights Reserved.
          </p>
      </footer>
  );
}

export default Footer