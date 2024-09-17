"use client";

import PageSection from "../components/PageSection";
import Image from "next/image";
import {useState} from "react";
import articles from "../blog/article";

export default function Blog() {
  const [showFullText, setShowFullText] = useState<{ [key: number]: boolean }>({});

  const toggleFullText = (index: number) => {
    setShowFullText((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  return (
    <>
      {/* MHP Vehicles Section */}
      <PageSection colourWay="dark">
        <h1 className="font-Aldrich text-5xl text-center mb-12 drop-shadow-lg text-gradient bg-gradient-to-b from-greenbutton to-white-300">
          MHP Vehicles
        </h1>
        <div className="relative">
          <div className="flex overflow-x-scroll space-x-6" style={{ scrollbarWidth: 'thin', scrollbarColor: '#ACF601 black' }}>
            {articles.map((article, index) => (
                <div
                  key={index}
                  className="flex-none w-full md:w-1/3 bg-black rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                  style={{ minHeight: showFullText[index] ? "auto" : "500px" }}  // Adjust the card's height dynamically
                >
                  <Image
                    src={article.image}
                    width={1000}
                    height={500}
                    alt={article.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-3xl font-semibold text-purple-700 decoration-purple-400 decoration-4 mb-4 drop-shadow-md">
                      {article.title}
                    </h2>

                    {/* Show full text or truncated version */}
                    <p className={`text-gray-300 mb-4 ${showFullText[index] ? "block" : "line-clamp-3"}`}>
                      {showFullText[index] ? article.fullText : article.shortText}
                    </p>

                    {/* Toggle for read more / show less */}
                    <h4
                      className="text-lg text-green-600 decoration-green-400 decoration-4 mb-2 cursor-pointer hover:text-green-800 transition-colors duration-200"
                      onClick={() => toggleFullText(index)}
                    >
                      <i className="fas fa-arrow-right"></i> {showFullText[index] ? "Show less" : "Read more"}
                    </h4>

                    <p className="text-gray-600">{article.author} • {article.date}</p>
                  </div>
                </div>
              ))}

            <div className="flex-none w-full md:w-1/3 bg-black rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <Image
                src="/trike_race2.jpg"
                width={1000}
                height={500}
                alt="Trike Race"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-3xl font-semibold text-purple-700 decoration-purple-400 decoration-4 mb-4 drop-shadow-md">
                  Thrilling Trike Trials!
                </h2>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h4 className="text-lg text-green-600 decoration-green-400 decoration-4 mb-2 cursor-pointer hover:text-green-800 transition-colors duration-200">
                  <i className="fas fa-arrow-right"></i> Read more
                </h4>
                <p className="text-gray-600">Alvin Fung • XX-ABC-21XX</p>
              </div>
            </div>
            <div className="flex-none w-full md:w-1/3 bg-black rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <Image
                src="/trike_race2.jpg"
                width={1000}
                height={500}
                alt="Trike Race"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-3xl font-semibold text-purple-700 decoration-purple-400 decoration-4 mb-4 drop-shadow-md">
                  Thrilling Trike Trials!
                </h2>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h4 className="text-lg text-green-600 decoration-green-400 decoration-4 mb-2 cursor-pointer hover:text-green-800 transition-colors duration-200">
                  <i className="fas fa-arrow-right"></i> Read more
                </h4>
                <p className="text-gray-600">Alvin Fung • XX-ABC-21XX</p>
              </div>
            </div>
            <div className="flex-none w-full md:w-1/3 bg-black rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <Image
                src="/trike_race2.jpg"
                width={1000}
                height={500}
                alt="Trike Race"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-3xl font-semibold text-purple-700 decoration-purple-400 decoration-4 mb-4 drop-shadow-md">
                  Thrilling Trike Trials!
                </h2>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h4 className="text-lg text-green-600 decoration-green-400 decoration-4 mb-2 cursor-pointer hover:text-green-800 transition-colors duration-200">
                  <i className="fas fa-arrow-right"></i> Read more
                </h4>
                <p className="text-gray-600">Alvin Fung • XX-ABC-21XX</p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* MHP Competitions Section */}
      <PageSection colourWay="dark">
        <h1 className="font-Aldrich text-5xl text-center mb-12 drop-shadow-lg text-gradient bg-gradient-to-b from-greenbutton to-white-300">
          MHP Competitions
        </h1>
        <div className="relative">
          <div className="flex overflow-x-scroll space-x-6" style={{ scrollbarWidth: 'thin', scrollbarColor: '#ACF601 black' }}>
            <div className="flex-none w-full md:w-1/3 bg-black rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <Image
                src="/battle_mountain_group.jpg"
                width={1000}
                height={500}
                alt="Battle Ocean"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-3xl font-semibold text-purple-700 decoration-purple-400 decoration-4 mb-4 drop-shadow-md">
                  Competing at Battle Ocean!
                </h2>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h4 className="text-lg text-green-600 decoration-green-400 decoration-4 mb-2 cursor-pointer hover:text-green-800 transition-colors duration-200">
                  <i className="fas fa-arrow-right"></i> Read more
                </h4>
                <p className="text-gray-600">Alvin Fung • XX-ABC-31XX</p>
              </div>
            </div>
            <div className="flex-none w-full md:w-1/3 bg-black rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <Image
                src="/battle_mountain_group.jpg"
                width={1000}
                height={500}
                alt="Battle Ocean"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-3xl font-semibold text-purple-700 decoration-purple-400 decoration-4 mb-4 drop-shadow-md">
                  Competing at Battle Ocean!
                </h2>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h4 className="text-lg text-green-600 decoration-green-400 decoration-4 mb-2 cursor-pointer hover:text-green-800 transition-colors duration-200">
                  <i className="fas fa-arrow-right"></i> Read more
                </h4>
                <p className="text-gray-600">Alvin Fung • XX-ABC-31XX</p>
              </div>
            </div>

            <div className="flex-none w-full md:w-1/3 bg-black rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <Image
                src="/battle_mountain_group.jpg"
                width={1000}
                height={500}
                alt="Battle Mountain"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-3xl font-semibold text-purple-700 decoration-purple-400 decoration-4 mb-4 drop-shadow-md">
                  Competing at Battle Mountain!
                </h2>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h4 className="text-lg text-green-600 decoration-green-400 decoration-4 mb-2 cursor-pointer hover:text-green-800 transition-colors duration-200">
                  <i className="fas fa-arrow-right"></i> Read more
                </h4>
                <p className="text-gray-600">Maria Gonzalez • XX-ABC-32XX</p>
              </div>
            </div>

            <div className="flex-none w-full md:w-1/3 bg-black rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <Image
                src="/battle_mountain_group.jpg"
                width={1000}
                height={500}
                alt="Battle Mountain"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-3xl font-semibold text-purple-700 decoration-purple-400 decoration-4 mb-4 drop-shadow-md">
                  Competing at Battle Mountain!
                </h2>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h4 className="text-lg text-green-600 decoration-green-400 decoration-4 mb-2 cursor-pointer hover:text-green-800 transition-colors duration-200">
                  <i className="fas fa-arrow-right"></i> Read more
                </h4>
                <p className="text-gray-600">Maria Gonzalez • XX-ABC-32XX</p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
