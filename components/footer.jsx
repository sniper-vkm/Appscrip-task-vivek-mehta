import { useState } from "react";

export default function Footer() {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    return (
        <footer className="site-footer">
            <div className="newsletter-section">
                <div className="newsletter-left">
                    <h3>BE THE FIRST TO KNOW</h3>
                    <p>Sign up for updates from mettā muse.</p>

                    <div className="newsletter-input">
                        <input type="text" placeholder="Enter your e-mail..." />
                        <button>SUBSCRIBE</button>
                    </div>
                </div>

                <div className="newsletter-right">
                    <h3>CONTACT US</h3>
                    <p>+44 221 133 5360</p>
                    <p>customercare@mettamuse.com</p>

                    <h3 style={{ marginTop: "20px" }}>CURRENCY</h3>
                    <div className="currency-box">
                        <img src="/icons/us-flag.png" alt="flag" />
                        <span>USD</span>
                    </div>
                </div>
            </div>

            <hr className="footer-divider" />

            <div className="footer-links-grid">

                {/* ------------ SECTION 1 ------------ */}
                <div className="footer-col">
                    <h4>mettā muse</h4>
                    <div className="mobile-collapsible-header" onClick={() => setOpen1(!open1)}>
                        <h4>mettā muse</h4>
                        <span className={open1 ? "arrow rotate" : "arrow"}>⌄</span>
                    </div>

                    <div className={`collapsible ${open1 ? "open" : ""}`}>
                        <a href="#">About Us</a>
                        <a href="#">Stories</a>
                        <a href="#">Artisans</a>
                        <a href="#">Boutiques</a>
                        <a href="#">Contact Us</a>
                        <a href="#">EU Compliances Docs</a>
                    </div>
                </div>

                {/* ------------ SECTION 2 ------------ */}
                <div className="footer-col">
                    <h4>QUICK LINKS</h4>
                    <div className="mobile-collapsible-header" onClick={() => setOpen2(!open2)}>
                        <h4>QUICK LINKS</h4>
                        <span className={open2 ? "arrow rotate" : "arrow"}>⌄</span>
                    </div>

                    <div className={`collapsible ${open2 ? "open" : ""}`}>
                        <a href="#">Orders & Shipping</a>
                        <a href="#">Join/Login as a Seller</a>
                        <a href="#">Payment & Pricing</a>
                        <a href="#">Return & Refunds</a>
                        <a href="#">FAQs</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                    </div>
                </div>

                {/* ------------ SECTION 3 ------------ */}
                <div className="footer-col">
                    <h4>FOLLOW US</h4>
                    <div className="mobile-collapsible-header" onClick={() => setOpen3(!open3)}>
                        <h4>FOLLOW US</h4>
                        <span className={open3 ? "arrow rotate" : "arrow"}>⌄</span>
                    </div>

                    <div className={`collapsible ${open3 ? "open" : ""}`}>
                        <div className="footer-social">
                            <div className="social-circle">📸</div>
                            <div className="social-circle">💼</div>
                        </div>
                    </div>
                    <h4 className="accepts-title">mettā muse ACCEPTS</h4>

                    <div className="payments-row">
                        <img src="/icons/gpay.png" alt="GPay" />
                        <img src="/icons/visa.png" alt="Visa" />
                        <img src="/icons/paypal.png" alt="PayPal" />
                        <img src="/icons/amex.png" alt="Amex" />
                        <img src="/icons/applepay.png" alt="Apple Pay" />
                        <img src="/icons/card.png" alt="Card" />
                    </div>
                </div>
            </div>

            <p className="footer-bottom">
                Copyright © {new Date().getFullYear()} mettamuse. All rights reserved.
            </p>
        </footer>
    );
}
