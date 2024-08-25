"use client";
import { useState } from "react"; 
import PageSection from "../components/PageSection";
import Image from "next/image";

export default function Bikes() {
  const [expandedVehicle, setExpandedVehicle] = useState(null);
  const [isRotating, setIsRotating] = useState(false);

  const handleExpand = (vehicle: any) => {
    if (expandedVehicle === vehicle) {
      setExpandedVehicle(null);
      setIsRotating(false);
    } else {
      setExpandedVehicle(vehicle);
      setIsRotating(true);
      setTimeout(() => setIsRotating(false), 1000); 
    }
  };

  const vehicles = [
    { id: "v1", name: "V1 - BLACKSMITH", imgSrc: "/bikes/t1-rectangle.jpg" },
    { id: "v2", name: "V2 - DELILY", imgSrc: "/bikes/t1-rectangle.jpg" },
    { id: "t1", name: "T1 - TORNADO", imgSrc: "/bikes/t1-rectangle.jpg" },
  ];

  return (
    <>
      <PageSection colourWay="dark">
        <div className="relative max-w-5xl mx-auto">
          <Image src="/bikes/t1-rectangle.jpg" width={1000} height={200} alt="T1 models" />
          <div className="absolute inset-0 flex flex-col items-start justify-end text-left">
            <h2 className="text-2xl font-bold text-white bg-black bg-opacity-50 px-4 py-2 rounded">
              T1 models
            </h2>
          </div>
        </div>
      </PageSection>

      {/* Centered V-series text with custom green color */}
      <PageSection colourWay="dark">
        <div className="text-center">
          <h2 className="text-greenbutton text-4xl font-bold">V-series</h2>
          <p className="text-gray-400 mt-2 text-lg">
            Our proud bike brings us to reach the top speed of 100kmph+
          </p>
        </div>
      </PageSection>

      <PageSection colourWay="dark">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className={`w-1/2 md:w-1/4 p-2 transform transition-transform duration-500 ${expandedVehicle === vehicle.id ? "scale-150" : ""} ${isRotating && expandedVehicle === vehicle.id ? "rotate-0" : ""} hover:scale-90 hover:bg-greenbutton hover:text-white`}
              onClick={() => handleExpand(vehicle.id)}
              style={{ cursor: "pointer" }}
            >
              <Image src={vehicle.imgSrc} width={300} height={200} alt={vehicle.name} className="transition-transform duration-300" />
              <h3 className="text-center mt-2">{vehicle.name}</h3>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Centered T-series text */}
      <PageSection colourWay="dark">
        <div className="text-center">
          <h2 className="text-greenbutton text-4xl font-bold">T-series</h2>
          <p className="text-gray-400 mt-2 text-lg">
            Our proud trike brings us to every race track
          </p>
        </div>
      </PageSection>

      <PageSection colourWay="dark">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className={`w-1/2 md:w-1/4 p-2 transform transition-transform duration-500 ${expandedVehicle === vehicle.id ? "scale-150" : ""} ${isRotating && expandedVehicle === vehicle.id ? "rotate-0" : ""} hover:scale-90 hover:bg-greenbutton hover:text-white`}
              onClick={() => handleExpand(vehicle.id)}
              style={{ cursor: "pointer" }}
            >
              <Image src={vehicle.imgSrc} width={300} height={200} alt={vehicle.name} className="transition-transform duration-300" />
              <h3 className="text-center mt-2">{vehicle.name}</h3>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Game Challenge Button */}
      <PageSection colourWay="dark">
        <div className="text-center mt-8">
          <a
            href="/bikes/game.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-greenbutton text-black text-lg font-bold py-2 px-6 rounded hover:bg-opacity-80 hover:scale-95 transition-opacity duration-500"
          >
            Game Challenge
          </a>
        </div>
      </PageSection>
    </>
  );
}
