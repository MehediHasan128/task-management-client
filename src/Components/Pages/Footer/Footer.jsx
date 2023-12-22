import { Typography } from "@mui/material";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-slate-900 text-white">
        <aside>
          <Typography variant="h5">
          <p>
            T - <span className="text-red-600">Management</span>
          </p>
          </Typography>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Social Media</header>
          <div className="flex gap-10 text-2xl">
          <a href="https://www.facebook.com/" className="link link-hover">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/" className="link link-hover">
            <FaInstagram />
          </a>
          <a href="https://bd.linkedin.com/" className="link link-hover">
            <FaLinkedin />
          </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
