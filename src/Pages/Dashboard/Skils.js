import React from "react";
import { IoIosContact } from "react-icons/io";
import { SiWechat } from "react-icons/si";

const Skils = () => {
  return (
    <div
      id="skills"
      className="grid lg:grid-cols-2 grid-cols-1 gap-7 py-5 px-4"
    >
      <table class="table lg:w-full shadow-lg w-11/12 mx-auto">
        <thead>
          <tr>
            <th>
              <div className="flex items-center gap-4 p-1">
                <IoIosContact className="bg-green-600 p-1 text-white text-4xl rounded-full" />{" "}
                <div>
                  <span className="text-lg block">Personal Skills</span>
                  <small>Sed ut perspiciatis</small>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="-mt-3 grid grid-cols-12 pt-4">
                <label className="mr-3 md:col-span-4 col-span-6" htmlFor="">
                  Communication
                </label>
                <progress
                  class="progress progress-success mt-1 md:col-span-8 col-span-6"
                  value="100"
                  max="100"
                ></progress>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="-mt-3 grid grid-cols-12">
                <label className="mr-3 md:col-span-3 col-span-5" htmlFor="">
                  Team Work
                </label>
                <progress
                  class="progress progress-success mt-1 md:col-span-9 col-span-7"
                  value="80"
                  max="100"
                ></progress>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="-mt-3 grid grid-cols-12">
                <label className="mr-3 md:col-span-3 col-span-5" htmlFor="">
                  Leadership
                </label>
                <progress
                  class="progress progress-success mt-1 md:col-span-9 col-span-7"
                  value="90"
                  max="100"
                ></progress>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="-mt-3 grid grid-cols-12">
                <label className="mr-3 md:col-span-3 col-span-4" htmlFor="">
                  Creativity
                </label>
                <progress
                  class="progress progress-success mt-1 md:col-span-9 col-span-8"
                  value="95"
                  max="100"
                ></progress>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="-mt-3 grid grid-cols-12">
                <label className="mr-3 md:col-span-3 col-span-4" htmlFor="">
                  Language
                </label>
                <progress
                  class="progress progress-success mt-1  md:col-span-9 col-span-8"
                  value="55"
                  max="100"
                ></progress>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <table class="table lg:w-full shadow-lg w-11/12 mx-auto">
        <thead>
          <tr>
            <th>
              <div className="flex items-center gap-4 p-1">
                <SiWechat className="bg-pink-600 p-2 text-white text-4xl rounded-full" />{" "}
                <div>
                  <span className="text-lg block">Professional Skills</span>
                  <small>Sed ut perspiciatis</small>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="-mt-3 grid grid-cols-12 pt-4">
                <label className="mr-3 md:col-span-4 col-span-6" htmlFor="">
                  Graphics Design
                </label>
                <progress
                  class="progress progress-success mt-1 md:col-span-8 col-span-6"
                  value="100"
                  max="100"
                ></progress>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="-mt-3 grid grid-cols-12">
                <label className="mr-3 col-span-3" htmlFor="">
                  HTML5
                </label>
                <progress
                  class="progress progress-success mt-1 col-span-9"
                  value="80"
                  max="90"
                ></progress>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="-mt-3 grid grid-cols-12">
                <label className="mr-3 col-span-3" htmlFor="">
                  CSS3
                </label>
                <progress
                  class="progress progress-success mt-1 col-span-9"
                  value="80"
                  max="100"
                ></progress>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="-mt-3 grid grid-cols-12">
                <label className="mr-3 md:col-span-3 col-span-4" htmlFor="">
                  JavaScript
                </label>
                <progress
                  class="progress progress-success mt-1 md:col-span-9 col-span-8"
                  value="65"
                  max="100"
                ></progress>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="-mt-3 grid grid-cols-12">
                <label className="mr-3 col-span-3" htmlFor="">
                  React
                </label>
                <progress
                  class="progress progress-success mt-1 col-span-9"
                  value="80"
                  max="100"
                ></progress>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Skils;
