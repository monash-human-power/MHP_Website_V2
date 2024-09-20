"use client";

import PageSection from "../components/PageSection";
import Image from "next/image";
import { useState } from "react";
import articles from "../blog/article";

export default function Blog() {
  const [showFullText, setShowFullText] = useState<{ [key: number]: boolean }>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTriggered, setSearchTriggered] = useState(false);

  const toggleFullText = (index: number) => {
    setShowFullText((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchTriggered(true); // Trigger search
    }
  };

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Conditionally display filtered articles only after search is triggered, otherwise display all articles
  const articlesToDisplay = searchTriggered && searchQuery ? filteredArticles : articles;

  return (
    <>
      {/* MHP Vehicles Section */}
      <PageSection colourWay="dark">
        <h1 className="font-Aldrich text-5xl text-center mb-12 drop-shadow-lg text-gradient bg-gradient-to-b from-greenbutton to-white-300">
          MHP Blogs
        </h1>
        {/* Search bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search by headline or tag..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Capture search query
            onKeyDown={handleKeyDown} // Handle "Enter" key press
            className="bg-black bg-opacity-70 border-2 border-[#ACF601] text-white placeholder-[#ACF601] rounded-lg w-80 py-3 px-4 text-base transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-[#ACF601] focus:border-[#ACF601]"
          />
        </div>
        <div className="relative">
          <div className="flex overflow-x-scroll space-x-6" style={{ scrollbarWidth: 'thin', scrollbarColor: '#ACF601 black' }}>
            {articlesToDisplay.map((article, index) => (
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
                  {/* Tags */}
                  <div className="mb-4">
                    {article.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-[#ACF601] text-black text-xs font-medium rounded-full px-3 py-1 mr-2 mb-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Show full text or truncated version */}
                  <p className={`text-gray-300 mb-4 ${showFullText[index] ? "block" : "line-clamp-3"} md:line-clamp-none`}>
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
          </div>
        </div>
      </PageSection>
    </>
  );
}
