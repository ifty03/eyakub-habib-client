import React from "react";

const Banner = () => {
  return (
    <div
      id="banner"
      class=" flex flex-wrap items-center p-4 mt-[500px] md:mt-[60px] lg:mt-[200px]  justify-center min-w-full"
    >
      <div class="container min-w-full bg-white rounded  shadow-lg transform duration-200 easy-in-out m-12">
        <div class="h-2/4 sm:h-64  overflow-hidden">
          <img
            class="w-full rounded-t"
            src="https://onsystemlogic.com/wp-content/uploads/2021/10/img-osl-solar-winds.jpg"
            alt="aldi sigun on Unsplash"
          />
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
        <div className="lg:flex justify-center p-5 gap-10 lg:-mt-20 -mt-3 flex-wrap">
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
          <button className="btn btn-success btn-sm ml-auto block w-fit mt-4">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
