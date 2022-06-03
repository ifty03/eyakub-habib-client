import React from "react";

const About = () => {
  const api_key = "AIzaSyBdI2-5RxQubskl6lkdQUAU-7ghscOJkgs";

  return (
    <div id="about" className="px-4 mb-10">
      <div className="xl:flex xl:justify-end pt-16">
        <div className="container sm:mx-auto">
          <div className="block xl:flex justify-between xl:items-center lg:items-center md:flex">
            <div className="w-11/12 xl:w-4/12 mx-auto xl:mx-0 md:w-5/12">
              <h1 className="text-gray-800 text-3xl font-extrabold mb-3 pt-12 xl:pt-0">
                Contact me
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Contact me if I need to
              </p>
              <div className="flex w-full flex-wrap">
                <div className="w-full">
                  <div className="flex flex-col mb-3">
                    <label
                      className="text-base font-bold text-gray-800 mb-2"
                      htmlFor="email"
                    >
                      Your Name
                    </label>
                    <input
                      type="name"
                      id="name"
                      placeholder="Your name"
                      className="focus:outline-none focus:border-pink-700 border-gray-300 border rounded-sm py-2 outline-none pl-2 pr-2"
                    />
                  </div>
                  <div className="flex flex-col mb-3">
                    <label
                      className="text-base font-bold text-gray-800 mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="johnstark97@gmail.com"
                      className="focus:outline-none focus:border-pink-700 border-gray-300 border rounded-sm py-2 outline-none pl-2 pr-2"
                    />
                  </div>
                  <div className="flex flex-col mb-3">
                    <label
                      className="text-base font-bold text-gray-800 mb-2"
                      htmlFor="email"
                    >
                      Message
                    </label>

                    <textarea
                      class="textarea textarea-bordered"
                      placeholder="Please type your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="focus:outline-none bg-pink-700 hover:bg-pink-600 text-white text-base w-full py-3 px-6 rounded"
                  >
                    Subscribe to Newsletter
                  </button>
                </div>
              </div>
            </div>
            <div className="w-11/12 xl:w-5/12 mx-auto xl:mx-0 mt-8 xl:mt-0 flex justify-end md:w-5/12 bg-gray-100 relative py-20">
              <div className="h-4/5 w-4/5">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_Qq4Z52YdE2136G05nhRwPfxsV_tWeJkhQ&usqp=CAU"
                  alt=""
                  className="h-full w-full overflow-hidden object-cover relative z-10 xl:-ml-56 lg:-ml-32 sm:-ml-20 -ml-12 md:-ml-20 rounded"
                />
              </div>
              <div className="absolute bottom-0 right-0 pb-2 pr-2 z-0">
                <svg
                  width={243}
                  height={163}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#ff1493" fillRule="evenodd">
                    <rect width={5} height={5} rx="2.5" />
                    <rect x={30} width={5} height={5} rx="2.5" />
                    <rect x={59} width={5} height={5} rx="2.5" />
                    <rect x={89} width={5} height={5} rx="2.5" />
                    <rect x={119} width={5} height={5} rx="2.5" />
                    <rect x={148} width={5} height={5} rx="2.5" />
                    <rect x={178} width={5} height={5} rx="2.5" />
                    <rect x={208} width={5} height={5} rx="2.5" />
                    <rect x={238} width={5} height={5} rx="2.5" />
                    <rect y={20} width={5} height={5} rx="2.5" />
                    <rect x={30} y={20} width={5} height={5} rx="2.5" />
                    <rect x={59} y={20} width={5} height={5} rx="2.5" />
                    <rect x={89} y={20} width={5} height={5} rx="2.5" />
                    <rect x={119} y={20} width={5} height={5} rx="2.5" />
                    <rect x={148} y={20} width={5} height={5} rx="2.5" />
                    <rect x={178} y={20} width={5} height={5} rx="2.5" />
                    <rect x={208} y={20} width={5} height={5} rx="2.5" />
                    <rect x={238} y={20} width={5} height={5} rx="2.5" />
                    <rect y={39} width={5} height={5} rx="2.5" />
                    <rect x={30} y={39} width={5} height={5} rx="2.5" />
                    <rect x={59} y={39} width={5} height={5} rx="2.5" />
                    <rect x={89} y={39} width={5} height={5} rx="2.5" />
                    <rect x={119} y={39} width={5} height={5} rx="2.5" />
                    <rect x={148} y={39} width={5} height={5} rx="2.5" />
                    <rect x={178} y={39} width={5} height={5} rx="2.5" />
                    <rect x={208} y={39} width={5} height={5} rx="2.5" />
                    <rect x={238} y={39} width={5} height={5} rx="2.5" />
                    <rect y={60} width={5} height={5} rx="2.5" />
                    <rect x={30} y={60} width={5} height={5} rx="2.5" />
                    <rect x={59} y={60} width={5} height={5} rx="2.5" />
                    <rect x={89} y={60} width={5} height={5} rx="2.5" />
                    <rect x={119} y={60} width={5} height={5} rx="2.5" />
                    <rect x={148} y={60} width={5} height={5} rx="2.5" />
                    <rect x={178} y={60} width={5} height={5} rx="2.5" />
                    <rect x={208} y={60} width={5} height={5} rx="2.5" />
                    <rect x={238} y={60} width={5} height={5} rx="2.5" />
                    <rect y={79} width={5} height={5} rx="2.5" />
                    <rect x={30} y={79} width={5} height={5} rx="2.5" />
                    <rect x={59} y={79} width={5} height={5} rx="2.5" />
                    <rect x={89} y={79} width={5} height={5} rx="2.5" />
                    <rect x={119} y={79} width={5} height={5} rx="2.5" />
                    <rect x={148} y={79} width={5} height={5} rx="2.5" />
                    <rect x={178} y={79} width={5} height={5} rx="2.5" />
                    <rect x={208} y={79} width={5} height={5} rx="2.5" />
                    <rect x={238} y={79} width={5} height={5} rx="2.5" />
                    <rect y={99} width={5} height={5} rx="2.5" />
                    <rect x={30} y={99} width={5} height={5} rx="2.5" />
                    <rect x={59} y={99} width={5} height={5} rx="2.5" />
                    <rect x={89} y={99} width={5} height={5} rx="2.5" />
                    <rect x={119} y={99} width={5} height={5} rx="2.5" />
                    <rect x={148} y={99} width={5} height={5} rx="2.5" />
                    <rect x={178} y={99} width={5} height={5} rx="2.5" />
                    <rect x={208} y={99} width={5} height={5} rx="2.5" />
                    <rect x={238} y={99} width={5} height={5} rx="2.5" />
                    <rect y={119} width={5} height={5} rx="2.5" />
                    <rect x={30} y={119} width={5} height={5} rx="2.5" />
                    <rect x={59} y={119} width={5} height={5} rx="2.5" />
                    <rect x={89} y={119} width={5} height={5} rx="2.5" />
                    <rect x={119} y={119} width={5} height={5} rx="2.5" />
                    <rect x={148} y={119} width={5} height={5} rx="2.5" />
                    <rect x={178} y={119} width={5} height={5} rx="2.5" />
                    <rect x={208} y={119} width={5} height={5} rx="2.5" />
                    <rect x={238} y={119} width={5} height={5} rx="2.5" />
                    <rect y={139} width={5} height={5} rx="2.5" />
                    <rect x={30} y={139} width={5} height={5} rx="2.5" />
                    <rect x={59} y={139} width={5} height={5} rx="2.5" />
                    <rect x={89} y={139} width={5} height={5} rx="2.5" />
                    <rect x={119} y={139} width={5} height={5} rx="2.5" />
                    <rect x={148} y={139} width={5} height={5} rx="2.5" />
                    <rect x={178} y={139} width={5} height={5} rx="2.5" />
                    <rect x={208} y={139} width={5} height={5} rx="2.5" />
                    <rect x={238} y={139} width={5} height={5} rx="2.5" />
                    <rect y={158} width={5} height={5} rx="2.5" />
                    <rect x={30} y={158} width={5} height={5} rx="2.5" />
                    <rect x={59} y={158} width={5} height={5} rx="2.5" />
                    <rect x={89} y={158} width={5} height={5} rx="2.5" />
                    <rect x={119} y={158} width={5} height={5} rx="2.5" />
                    <rect x={148} y={158} width={5} height={5} rx="2.5" />
                    <rect x={178} y={158} width={5} height={5} rx="2.5" />
                    <rect x={208} y={158} width={5} height={5} rx="2.5" />
                    <rect x={238} y={158} width={5} height={5} rx="2.5" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
