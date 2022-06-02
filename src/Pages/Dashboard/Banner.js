import React from "react";

const Banner = () => {
  return (
    <div
      id="banner"
      class=" flex flex-wrap items-center p-4 lg:-mt-36 md:-mt-[500px] -mt-[400px] justify-center min-w-full"
    >
      <div class="container min-w-full bg-white rounded  shadow-lg transform duration-200 easy-in-out m-12">
        <div class="h-2/4 sm:h-64  overflow-hidden">
          <img
            class="w-full rounded-t"
            src="https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="Photo by aldi sigun on Unsplash"
          />
        </div>

        <div class="flex justify-start px-5 -mt-12 mb-5">
          <span clspanss="block relative h-32 w-32">
            <img
              alt="Photo by aldi sigun on Unsplash"
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              class="mx-auto object-cover rounded-full h-24 w-24 bg-white p-1"
            />
          </span>
        </div>
        <h3 className="text-3xl text-red-400">Eyakub Habib</h3>
      </div>
    </div>
  );
};

export default Banner;
