import facebookIcon from "../assets/facebook.svg";
import twitterIcon from "../assets/twitter.svg";
import linkedinIcon from "../assets/linkedin.svg";
import instagramIcon from "../assets/instagram.svg";
import emailIcon from "../assets/email.svg";

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/people/Pazelgreen-Technologies/100084037600087/",
    icon: facebookIcon,
  },
  {
    name: "Twitter",
    url: "https://x.com/pazelgreentech?t=VnhErvM5kfIXeYfxX6_7HQ&s=08",
    icon: twitterIcon,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/pazelgreen-technologies-ltd-6b8b6124a",
    icon: linkedinIcon,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/pazelgreentech/",
    icon: instagramIcon,
  },
  { name: "Email", url: "mailto:pazelgreentech@gmail.com", icon: emailIcon },
];

const SocialMediaLinks = () => {
  return (
    <div className="flex space-x-[2rem] p-2 ">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          className="w-12 h-12 flex items-center justify-center bg-[#17913B1A] rounded-xl hover:bg-green-200"
          aria-label={link.name}
        >
          <img src={link.icon} alt={link.name} className="w-8 h-8" />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
