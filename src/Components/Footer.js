import React from 'react'

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer">

                <a href="mailto:leahemily1@gmail.com" className="footer-link">leahemily1@gmail.com</a>
               
                <ul className="social-list">
                    <li className="social-list__item">
                        <a href="https://www.github.com/LeahEsc" className="social-list__link"><i className="fab fa-github"></i></a></li>
                    <li className="social-list__item">
                        <a href="https://www.linkedin.com/in/leahschlackman" className="social-list__link"><i className="fab fa-linkedin"></i></a></li>
                    <li className="social-list__item">
                        <a href="https://www.instagram.com/leah.schlackman" className="social-list__link"><i className="fab fa-instagram"></i></a></li>
                    <li className="social-list__item">
                        <a href="https://www.leahschlackman.medium.com" className="social-list__link"><i className="fab fa-blogger"></i></a></li>
                </ul>

            </div>
        </div>
    )
}
