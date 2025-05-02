import { motion } from "framer-motion";

const MenuBar = ({
  isOpen,
  className,
  onClick,
}: {
  isOpen: boolean;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className={`relative w-10 h-10 flex gap-1 flex-col justify-center items-end ${className} `}
      onClick={onClick}
    >
      <motion.div
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 10 : 0,
          width: isOpen ? "100%" : "100%",
        }}
        className="bg-white h-[2px] w-full rounded-md"
      />
      <motion.div
        animate={{
          opacity: isOpen ? 0 : 1,
          width: "75%",
        }}
        className="bg-white h-[2px] w-3/4 rounded-md my-1"
      />
      <motion.div
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -10 : 0,
          width: isOpen ? "100%" : "50%",
        }}
        className="bg-white h-[2px] w-1/2 rounded-md"
      />
    </button>
  );
};

export default MenuBar;
