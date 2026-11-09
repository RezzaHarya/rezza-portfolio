
function Footer() {
  return (
    <footer className="footer">
      <div className="section-container footer-content">
        <a href="#home" className="nav-logo">
          REZZA<span>.PAGE</span>
        </a>

        <p>
          © {new Date().getFullYear()} Rezza Alfat Harya Sambada.
          Built with React.
        </p>

        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
