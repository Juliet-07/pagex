import SupportIcon from "/src/assets/icons/support-icon.svg";
import SalesIcon from "/src/assets/sales-icon.svg";
import VisitIcon from "/src/assets/icons/visit-icon.svg";
import DialIcon from "/src/assets/icons/dial-icon.svg";
import ButtonIcon from "/src/assets/icons/next-icon.svg";

interface ContactMethodCardProps {
  icon: string;
  title: string;
  description: string;
  buttonIcon: string;
  onClick: () => void;
}

const ContactMethodCard = ({
  icon,
  title,
  description,
  buttonIcon,
}: ContactMethodCardProps) => {
  return (
    <div className="bg-[#12AB1740] rounded-xl flex flex-col items-center gap-1 p-5 lg:p-[2rem] lg:w-[100%] inset-shadow-sm inset-shadow-gray-400 ">
      <div>
        <img
          src={icon}
          alt={`${title} icon`}
          className="w-6 h-6"
        />
      </div>
      <h3 className="font-bold">{title}</h3>
      <p className="text-[12px] text-[#00000080] text-sm font-bold">{description}</p>

      <a href="#"
        className="bg-[#CA9725] rounded-full p-2"
      >
        <img
          src={buttonIcon}
          alt="Contact button"
          className="w-2 h-2"
        />
      </a>
    </div>
  );
};

const ContactMe = () => {
  const handleContactMethod = (method: string) => {
    console.log(`Contacted via ${method}`);
  };

  const contactOptions = [
    {
      icon: SupportIcon,
      title: "Chat to Support",
      description: "We are here to help",
      onClick: () => handleContactMethod("support"),
    },
    {
      icon: SalesIcon,
      title: "Chat to Sales",
      description: "Speak to our team",
      onClick: () => handleContactMethod("sales"),
    },
    {
      icon: VisitIcon,
      title: "Visit Us",
      description: "Meet with our team",
      onClick: () => handleContactMethod("visit"),
    },
    {
      icon: DialIcon,
      title: "Dial in",
      description: "Engage us on a call",
      onClick: () => handleContactMethod("dial"),
    },
  ];

  return (
    <div className="container">
      {/* Use a grid layout for smaller screens and flex for larger ones */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-[7rem]">
        {contactOptions.map((option, index) => (
          <ContactMethodCard
            key={index}
            icon={option.icon}
            title={option.title}
            description={option.description}
            buttonIcon={ButtonIcon}
            onClick={option.onClick}
          />
        ))}
      </div>
    </div>
  );
};
export default ContactMe;
