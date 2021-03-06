import React from "react";

const Banner = () => {
  return (
    <div
      id="banner"
      class=" flex flex-wrap items-center p-4 mt-[5030px] md:mt-[2870px] lg:mt-[2330px]  justify-center min-w-full"
    >
      <div class="container min-w-full  bg-white rounded  shadow-lg transform duration-200 easy-in-out m-12">
        <div class="lg:h-[400px] sm:h-64 static overflow-hidden">
          <img
            class="w-[100%] rounded-t"
            src="https://img.freepik.com/free-vector/web-development-coding-programming-futuristic-banner-computer-code-laptop_3482-5572.jpg?w=2000"
            alt="aldi sigun on Unsplash"
          />
          <div className="absolute hidden md:block top-0 right-0 -mt-16 -mr-2">
            <div className="flex items-center w-full justify-center py-8">
              <div className="max-w-sm rounded shadow bg-white dark:bg-gray-800">
                <div className="flex">
                  <div className="px-6 py-5">
                    <p className="text-base font-medium leading-none text-gray-800 dark:text-gray-100">
                      Congratulations 🎉 Bruce!
                    </p>
                    <p className="text-xs leading-3 text-gray-500 dark:text-gray-400 pt-2">
                      You have won gold medal
                    </p>
                    <p className="text-xl font-semibold leading-tight text-pink-600 dark:text-gray-100 pt-6 pt-3">
                      $ Latest award
                    </p>
                    <div className="pt-4">
                      <button className="py-2 px-4 text-xs font-semibold leading-3 bg-pink-600 rounded hover:bg-pink-600 focus:outline-none text-white">
                        View details
                      </button>
                    </div>
                  </div>
                  <div className="px-3">
                    <img src="https://i.ibb.co/34gPtCT/bg.png" alt="medal" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-start px-5 -mt-12 mb-5">
          <span clspanss="block relative h-32 w-32">
            <img
              alt=" by aldi sigun on Unsplash"
              src="https://eyakubhabib.com/images/avatar.jpg"
              class="mx-auto object-cover rounded-full h-30 w-30 bg-white p-1"
            />
          </span>
        </div>
        <div className="lg:flex justify-center p-5 lg:px-10 gap-10 lg:-mt-20 -mt-3 flex-wrap">
          <div className="ml-auto lg:pl-3">
            <h3 className="text-2xl font-semibold">Eyakub Habib</h3>
            <p className="text-gray-400 text-sm mt-1">
              Senior graphic designer
            </p>
          </div>
          <div className="flex justify-around md:justify-between md:mt-7 lg:ml-auto lg:w-[55%] lg:mt-0 mt-4">
            <div className="">
              <h3 className="text-3xl">100% </h3>
              <h3 className="text-gray-400 text-sm mt-1">Jobs completed</h3>
            </div>
            <div>
              <h3 className="text-3xl">6+ </h3>
              <h3 className="text-gray-400 text-sm mt-1">Years Experience</h3>
            </div>
            <div>
              <h3 className="text-3xl">$40 </h3>
              <h3 className="text-gray-400 text-sm mt-1">USD/hr</h3>
            </div>
          </div>
        </div>
        {/* this is about me section */}
        <div className="px-8 pb-8">
          <h3 className="text-2xl font-semibold mb-2">About Me...</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            nesciunt esse ab sunt deleniti odit, ullam quidem corrupti, at earum
            quo dolores molestiae, dolorum architecto maiores! Minima nulla
            doloribus quae, id unde, impedit, aliquam expedita veritatis dolore
            recusandae laudantium amet? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Consequuntur, inventore. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Aut quasi veritatis voluptatem
            laborum sapiente dolor odit nobis minima facilis assumenda.
          </p>
          <button className="btn btn-secondary btn-sm ml-auto block w-fit mt-4">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
