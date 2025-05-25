"use client";
import React from "react";
import Link from "next/link";

const MenuOverlay = ({ links, closeMenu }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-20">
      <ul className="flex flex-col space-y-6 text-white text-2xl">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.path}
              onClick={closeMenu}
              className="hover:text-gray-400 transition-colors duration-200"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
