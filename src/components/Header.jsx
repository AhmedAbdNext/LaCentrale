import React from "react";

const Header = () => {
  return (
    <div>
      <header className="p-4 dark:dark:dark:bg-gray-800 dark:dark:dark:text-gray-100">
        <div className="container flex justify-between h-16 mx-auto bg-gray-500">
          <div className="flex">
            <img
              className="h-8 mr-4 ml-2 mt-2"
              src="data:image/png;base64,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"
              alt="laCentrale"
              width="200"
              height="200"
            />

            <span className="font-bold tracking-tight text ml-2 mt-3">
              1er site de vèhicules d'occasion
            </span>
          </div>
        </div>
        {
          // Set up 3 button for next prev and return
        }
        <div className="flex justify-between h-16 mx-auto">
          <div className="flex justify-between ">
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 m-2 rounded">
              Retour
            </button>
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 m-2 rounded">
              Précédent
            </button>
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 m-2 rounded">
              Suivant
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
