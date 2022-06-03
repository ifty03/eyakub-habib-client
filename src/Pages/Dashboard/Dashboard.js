import React from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaClipboardList } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { RiFileCopy2Fill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import About from "./About";
import Banner from "./Banner";
import Portfolio from "./Portfolio";
import Stats from "./Stats";
import Skils from "./Skils";
import { useTypewriter } from "react-simple-typewriter";

const Dashboard = () => {
  const { text, count } = useTypewriter({
    words: ["Developer", "graphic designer", "programmer", "mentor!"],
    loop: 100,
    cursor: true,
    cursorStyle: "|",
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
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
            <Skils />
            <Portfolio />
            <About />
          </section>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}

            <div class="relative block bg-black group">
              <img
                class="absolute inset-0 object-cover  transition-opacity opacity-75  group-hover:opacity-50"
                src="https://eyakubhabib.com/images/eyakub-habib.jpg"
                alt=""
              />
              <div class="relative p-8">
                <h1 class="text-sm font-medium tracking-widest text-pink-500 uppercase">
                  {text} <span className="text-lg">.</span>
                </h1>

                <p class="text-2xl font-bold text-white">Eyakub habib</p>

                <div className="mt-20 mb-12">
                  <div class="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0">
                    <div className="flex justify-center items-center gap-3 h-300px">
                      <BsFacebook className="bg-pink-500 p-2 cursor-pointer hover:bg-pink-600 text-4xl text-white rounded-full" />{" "}
                      <BsInstagram className="bg-pink-500 p-2 cursor-pointer hover:bg-pink-600 text-4xl text-white rounded-full" />{" "}
                      <AiOutlineTwitter className="bg-pink-500 p-2 text-4xl cursor-pointer hover:bg-pink-600 text-white rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <li>
              <a
                className="py-3  bg-pink-600 hover:bg-green-600 text-white text-lg text-center"
                href="/"
              >
                Join With Eyakub Habib
              </a>
            </li>

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
