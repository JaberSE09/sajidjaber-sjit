import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const SocialShare = [
 {
  Social: <FaLinkedinIn />,
  link: "https://www.linkedin.com/in/sajidjaber",
 },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center text-sm-center justify-content-md-end
    text-3xl mx-2 // Makes icons larger with spacing
    ">
      
      {SocialShare.map((val, i) => (

        <Link key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </Link>
      ))}
    </div>
  );
};

export default Social;
