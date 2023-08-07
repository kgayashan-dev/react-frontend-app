import React from "react";
import { FcGoogle } from "react-icons/fc";
// import Quates from "./Quates";

// se id 1014bfc8d6f364f37
// se api key AIzaSyClzhxV3jf9MYFymIj4I8BA-VetyeFOhBw

const Search = () => {
  return (
    <div>
      <form action="">
        <div class="absolute flex gap-3 top-1/2 left-1/2 transform -translate-x-1/2  md:text-4xl md:p-4 items-center">
          <input
            type="text"
            placeholder="Search..."
            class=" text-sm align-middle mt-20 w-96 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block wl pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />

          <FcGoogle className="absolute w-5 md:flex  top-1/2 transform -translate-x-1/2 mt-5 mx-5 md:justify-center" />

        </div>
      </form>
    </div>
  );
};

export default Search;
