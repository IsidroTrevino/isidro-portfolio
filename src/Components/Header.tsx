import "../App.css";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="fixed w-full bg-opacity-10 backdrop-filter backdrop-blur-md shadow-md z-50"
    >
      <ul className="flex flex-wrap justify-center py-4 px-2 text-gray-200 font-bold gap-4 md:gap-40">
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
    </motion.nav>
  );
}

export default Header;
