import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer md:grid-cols-4 p-10 gap-16 bg-base-200 text-base-content">
        <div>
          <img className="w-32" src={logo} alt="" />
          <p>
            The NM Sports Academy is a premier sports training facility
            dedicated to nurturing athletes and promoting excellence in sports.
            With state-of-the-art infrastructure and a team of experienced
            coaches, the academy offers comprehensive training programs for
            various sports disciplines
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Contact Us</span>
          <a className="link link-hover">nieemhossen@gmail.com</a>
          <a className="link link-hover">+8801744112183</a>
          <a className="link link-hover">Barguna , Barishal</a>
        </div>
       
      </footer>
      <div className=" p-10 bg-base-200 text-base-content">
      <div className="divider"></div>
        <div>
          <p className="text-center">Copyright © 2023 - All right reserved by Nm sports academy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
