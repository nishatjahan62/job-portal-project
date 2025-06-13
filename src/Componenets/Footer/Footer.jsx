import React from "react";

const Footer = () => {
  return (
    <>
    <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4 text-xl">
          <a href="http://www.facebook.com " target="_blank">
                <i className="fa-brands fa-square-facebook text-blue-700"></i>
              </a>
              <a href="http://www.linkdin.com">
                <i className="fa-brands fa-linkedin text-[#0A66C2] "></i>
              </a>
              <a href="http://www.twitter.com">
                <i className="fa-brands fa-square-x-twitter"></i>
              </a>
              <a href="http://www.github.com">
                <i className="fa-brands fa-square-github"></i>
              </a>
    </div>
  </nav>
</footer>
    </>
  );
};

export default Footer;
