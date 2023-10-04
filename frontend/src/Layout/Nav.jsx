import { Link } from "react-router-dom";
import logo from "/images/Fitness.jpg";
import { useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full h-24 flex items-center justify-between bg-black sticky p-4">
      <div className="text-3xl text-white font-bold flex items-center">
        <div className="flex items-center">PixelFit</div>
        <span className="m-5"></span>
        <div className="h-24 w-px bg-gray-600 mr-4"></div>
      </div>
      <nav>
        <ul className="list-none m-0 p-0 flex items-baseline">
          <li className="ml-10 relative">
            <button
              className="text-3xl text-white font-bold no-underline hover:opacity-80 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              &#8801;
            </button>
            {isMenuOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="text-xs text-white font-bold no-underline hover:opacity-80"
                    to="/CDSG"
                  >
                    Cooldown
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-xs text-white font-bold no-underline hover:opacity-80"
                    to="/RWG"
                  >
                    Random Workout
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-xs text-white font-bold no-underline hover:opacity-80"
                    to="/TMGG"
                  >
                    Muscle Group
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-xs text-white font-bold no-underline hover:opacity-80"
                    to="/WG"
                  >
                    Warmup
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-xs text-white font-bold no-underline hover:opacity-80"
                    to="/CDSG"
                  >
                    Cooldown
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="ml-5">
            <Link
              className="text-xl text-white font-bold no-underline hover:opacity-80"
              to="/About"
            >
              About
            </Link>
          </li>
          <li className="ml-5">
            <Link
              className="text-xl text-white font-bold no-underline hover:opacity-80"
              to="/Main"
            >
              Main
            </Link>
          </li>
          <li className="ml-5">
            <Link
              className="text-xl text-white font-bold no-underline hover:opacity-80"
              to="/Login"
            >
              {/* <img src={logo} alt="Account" className="w-10 h-10" /> */}
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;