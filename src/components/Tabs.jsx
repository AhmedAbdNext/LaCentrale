import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Tabs = () => {
  return (
    <div className="flex items-center -mx-4 space-x-2 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:dark:bg-gray-800 dark:dark:text-gray-100">
      <Link href="#" className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:dark:border-gray-700 dark:dark:text-gray-400">
        Architecto
      </Link>
      <Link href="#" className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:dark:border-gray-700 dark:dark:text-gray-400">
        Corrupti
      </Link>
      <Link href="#" className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:dark:border-violet-400 dark:dark:text-gray-50">
        Excepturi
      </Link>
      <Link href="#" className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:dark:border-gray-700 dark:dark:text-gray-400">
        Consectetur
      </Link>
    </div>
  );
};

export default Tabs;
