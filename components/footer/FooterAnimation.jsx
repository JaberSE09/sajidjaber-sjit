import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaPinterestP,
} from "react-icons/fa";

const SocialShare = [

  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/sajidjaber" },
  {
    Social: <FaGithub />,
    link: "https://www.github.com/jaberse09",
  }
];

const Footer = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6 my-2">
          <div className="nav flex justify-content-center text-center text-md-left justify-content-md-start">
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                {val.Social}
              </a>
            ))}
          </div>
          {/* End .nav */}
        </div>
        {/* End .col */}

        <div className="col-md-6 my-2 text-center text-md-right">
          <p>
            © {new Date().getFullYear()} copyright{" "}
            <Link
              href="sajidjaber.com"
              target="_blank"
              rel="noreferrer"
            >
              Sajid Jaber
            </Link>
           &nsbr; all right reserved
          </p>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default Footer;
