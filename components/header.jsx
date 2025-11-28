export default function Header() {
    return (
        <header className="site-header">
            <div className="header-top">
                <div className="left-icons">
                    <img src="/icons/brand-icon.png" alt="brand icon" className="brand-icon" />
                </div>

                <div className="center-logo">LOGO</div>

                <div className="right-icons">
                    <img src="/icons/search.png" alt="search" />
                    <img src="/icons/heart.png" alt="wishlist" />
                    <img src="/icons/bag.png" alt="cart" />
                    <span className="lang">ENG ▾</span>
                </div>
            </div>

            <nav className="header-menu">
                <a>SHOP</a>
                <a>SKILLS</a>
                <a>STORIES</a>
                <a>ABOUT</a>
                <a>CONTACT US</a>
            </nav>

            {/* Mobile menu bar */}
            <div className="mobile-header">
                <img src="/icons/hamburger.png" alt="menu" className="hamburger" />
                <img src="/icons/brand-icon.png" alt="brand icon" className="brand-icon" />
                <div className="center-logo">LOGO</div>
                <div className="mobile-icons">
                    <img src="/icons/search.png" alt="search" />
                    <img src="/icons/heart.png" alt="wishlist" />
                    <img src="/icons/bag.png" alt="cart" />
                </div>
            </div>
        </header>
    )
};