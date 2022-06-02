import React from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaClipboardList } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { RiFileCopy2Fill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import About from "./About";
import Banner from "./Banner";
import Portfolio from "./Portfolio";
import Stats from "./Stats";

const Dashboard = () => {
  return (
    <div>
      <div class="navbar bg-error lg:hidden">
        <label for="my-drawer-2" class="drawer-button ">
          <RiMenu2Fill className="text-2xl text-white ml-2" />
        </label>
      </div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          <section>
            <Banner />
            <Stats />
            <Portfolio />
            <About />
          </section>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}

            <img
              src="https://eyakubhabib.com/images/eyakub-habib.jpg"
              alt="This is owner img"
            />

            <a
              className="py-3 bg-pink-600 hover:bg-green-600 text-white text-lg text-center"
              href="/"
            >
              Join With Eyakub Habib
            </a>

            <li>
              <a href="#banner" className="text-lg">
                <FaHome /> Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-lg">
                <CgProfile /> About
              </a>
            </li>
            <li>
              <a href="#resume" className="text-lg">
                <FaClipboardList /> Resume
              </a>
            </li>
            <li>
              <a href="#portfolio" className="text-lg">
                <MdOutlineWork /> Portfolio
              </a>
            </li>
            <li>
              <a href="#blog" className="text-lg">
                <RiFileCopy2Fill /> Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="text-lg">
                <FaPhoneAlt /> Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
