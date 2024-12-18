import React from "react";

function Header() {
  return (
    <nav className="fixed w-full bg-opacity-10 backdrop-filter backdrop-blur-sm shadow-md">
      <ul className="flex justify-center py-4 text-gray-200 font-bold gap-48">
        <li>
          <a
            href="#Home"
            className="transition-all duration-300 ease-in-out hover:text-purple-500 hover:scale-110 active:scale-95"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#Experience"
            className="transition-all duration-300 ease-in-out hover:text-purple-500 hover:scale-110 active:scale-95"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#Projects"
            className="transition-all duration-300 ease-in-out hover:text-purple-500 hover:scale-110 active:scale-95"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#Skills"
            className="transition-all duration-300 ease-in-out hover:text-purple-500 hover:scale-110 active:scale-95"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#Contact"
            className="transition-all duration-300 ease-in-out hover:text-purple-500 hover:scale-110 active:scale-95"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
