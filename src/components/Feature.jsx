import React from "react";
import Carousel from "./Carousel";
import Tabs from "./Tabs";

const Feature = ({ currentCar }) => {
  return (
    <section className="dark:dark:bg-gray-800 dark:dark:text-gray-100">
      <div className="container flex flex-col mx-auto lg:flex-row">
      <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
        <Tabs/>
          <Carousel currentCarId={currentCar.id} />
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex self-start">General information</h2>
            <div className="border-b-2 border-gray-200 mb-4"></div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex self-start">{   currentCar.vehicle.model  }</h3>
            
            <ul className="text-gray-700 text-lg mb-4 flex flex-col items-start">
              <li>Year: {currentCar.vehicle.year}</li>
                <li>Doors: {currentCar.vehicle.doors}</li>
                <li>Energy: {currentCar.vehicle.energy}</li>
                <li>External Color: {currentCar.vehicle.externalColor}</li>
                <li>Gearbox: {currentCar.vehicle.gearbox}</li>
                <li>Power DIN: {currentCar.vehicle.powerDIN}</li>
                <li>Version: {currentCar.vehicle.version}</li>
                <li>Make: {currentCar.vehicle.make}</li>
                <li>Length: {currentCar.vehicle.length}</li>
                <li>Commercial Name: {currentCar.vehicle.commercialName}</li>
                <li>Four Wheel Drive: {currentCar.vehicle.fourWheelDrive}</li>
                <li>Rated Horse Power: {currentCar.vehicle.ratedHorsePower}</li>
                <li>Trunk Volume: {currentCar.vehicle.trunkVolume}</li>
                <li>Displayed Length: {currentCar.vehicle.displayedLength}</li>
                <li>Displayed Height: {currentCar.vehicle.displayedHeight}</li>
                <li>Displayed Width: {currentCar.vehicle.displayedWidth}</li>
                <li>Crit Air: {currentCar.vehicle.critAir}</li>
                <li>Pollution Norm: {currentCar.vehicle.pollutionNorm}</li>
                <li>Seats: {currentCar.vehicle.seats}</li>
                <li>Owners: {currentCar.vehicle.owners}</li>
                
              
            </ul>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Contact Seller
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <div className="flex flex-col justify-between h-full p-6 bg-white rounded-lg shadow-xl dark:bg-gray-800 border-spacing-0 border-gray-500">
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col">
                <div className="flex flex-col items-start justify-between">
                  <span className="text font-light text-gray-600 dark:text-gray-400">
                    {currentCar.vehicle.make} {"  " + currentCar.vehicle.model}
                  </span>
                  <span className="text font-light text-gray-600 dark:text-gray-400">
                    {currentCar.vehicle.category}
                  </span>
                  <span className="text font-light text-gray-600 dark:text-gray-400">
                    {currentCar.vehicle.energy}
                  </span>
                  <span className="text font-light text-gray-600 dark:text-gray-400">
                    {currentCar.vehicle.year}
                  </span>
                  <span className="text font-light text-gray-600 dark:text-gray-400">
                    {currentCar.vehicle.mileage}
                  </span>
                  {
                    // HTMl open email
                  }
                  <a href={`mailto:${currentCar.contacts.email}`}>
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 m-2 rounded">
                      Contacter le vendeur
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
