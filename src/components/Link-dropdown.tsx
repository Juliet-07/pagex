import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../utils/index";

const LinkDropdown = ({
  trigger,
  children,
  classNames,
}: {
  trigger: React.ReactNode;
  children: React.ReactNode;
  classNames?: {
    container?: string;
    button?: string;
    menu?: string;
    menuItems?: string;
    item?: string;
  };
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={`relative w-fit h-fit ${classNames?.container || ""}`}
    >
      <button className={`relative ${classNames?.button || "text-white"}`}>
        {trigger}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`absolute left-1/2 top-12 bg-primary-400 rounded-lg text-black w-44 shadow-xl ${
              classNames?.menu || ""
            }`}
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <div className={cn("p-6", classNames?.menuItems)}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LinkDropdown;
