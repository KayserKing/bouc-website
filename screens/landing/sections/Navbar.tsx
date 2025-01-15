"use client";
import { useGetScrollPosition } from "@/hooks";
import React from "react";
import { FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
  const position = useGetScrollPosition();

  return (
    <header
      className={`${
        position > 150
          ? "rounded-[30px] w-[92vw] m-auto top-4"
          : "w-screen top-0"
      } transition-all ease-in-out duration-300 h-[65px] backdrop-blur-xl drop-shadow-xl flex justify-between px-20 py-4 bg-white/40 rounded sticky `}
    >
      <div>
        <h3 className="font-bold text-2xl text-purplegreen">BOUC</h3>
      </div>
      <ul className="flex gap-8">
        <Item toggle>Services</Item>
        <Item>Technologies</Item>
        <Item>Business Process</Item>
        <Item>Contact us</Item>
      </ul>
    </header>
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
