import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <a href="mailto:leahemily1@gmail.com" className="footer-link">leahemily1@gmail.com</a>
      <ul className="social-list">
        <li className="social-list__item">
          <a href="https://www.github.com/LeahEsc" className="social-list__link"><i className="fab fa-github"></i></a>
        </li>
        <li className="social-list__item">
          <a href="https://www.linkedin.com/in/leahschlackman" className="social-list__link"><i className="fab fa-linkedin"></i></a>
        </li>
        <li className="social-list__item">
          <a href="https://leahschlackman.medium.com/" className="social-list__link"><i className="fab fa-blogger"></i></a>
        </li>
      </ul>
    </div>
  )
};

export default Footer;
