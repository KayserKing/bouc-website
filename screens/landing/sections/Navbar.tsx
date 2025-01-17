"use client";
import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "framer-motion";

const Navbar = () => {
  const { scrollY } = useScroll();

  // TODO: Need to make this smoother
  const width = useTransform(scrollY, [0, 200], ["100vw", "90vw"]);
  const borderRadius = useTransform(scrollY, [0, 200], ["0px", "40px"]);
  const top = useTransform(scrollY, [0, 200], ["0px", "10px"]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      style={{
        width,
        borderRadius,
        top,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`header top-0 w-screen h-[65px] m-auto backdrop-blur-xl drop-shadow-xl flex justify-between px-20 py-4 bg-white/40 rounded sticky `}
    >
      <div>
        <h3 className="font-bold text-2xl">BOUC</h3>
      </div>
      <ul className="flex gap-8">
        <Item toggle>Services</Item>
        <Item>Technologies</Item>
        <Item>Business Process</Item>
        <Item>Contact us</Item>
      </ul>
    </motion.div>
  );
};

export default Navbar;

const Item = ({
  children,
  toggle = false,
}: {
  children: React.ReactNode;
  toggle?: boolean;
}) => {
  return (
    <li>
      {children}
      {toggle && <FaAngleDown />}
    </li>
  );
};
