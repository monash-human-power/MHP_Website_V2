"use client";

import PageSection from "../components/PageSection";
import { useState } from "react";
import NewsCard from "../components/NewsCard";
import articleData from "../../public/JSONs/blogs.json";
import { Article } from "../types";
import { GoogleAnalytics } from '@next/third-parties/google';

export default function News() {
  // states for searching
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTriggered, setSearchTriggered] = useState(false);

  //states for displaying newletters
  const [selectedBlog, setSelectedBlog] = useState<Article | null>(null);

  const handleBlogClick = (article: Article) => {
    setSelectedBlog(article); // Set the clicked blog as the selected blog
  };
  const articles: Article[] = Object.values(articleData);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchTriggered(true); // Trigger search
    }
  };

  const closePDFModal = () => {
    setSelectedBlog(null);
  };

  //todo - verify search on tags
  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) =>
        tag.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  // Conditionally display filtered articles only after search is triggered, otherwise display all articles
  const articlesToDisplay =
    searchTriggered && searchQuery ? filteredArticles : articles;

  return (
    <>
      <PageSection colourWay="dark">
        <h1 className="font-Aldrich text-5xl text-center mb-12 drop-shadow-lg ">
          News
        </h1>
        {/* Search bar */}
        <div className="mb-8 flex justify-center lg:justify-start">
          <input
            type="text"
            placeholder="Search by headline or tag..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Capture search query
            onKeyDown={handleKeyDown} // Handle "Enter" key press
            className="font-Sansation bg-black bg-opacity-70 border-2 border-[#ACF601] text-white placeholder-[#ACF601] rounded-lg w-80 py-3 px-4 text-base transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-[#ACF601] focus:border-[#ACF601]"
          />
        </div>
        <div className="relative bg-black">
          <div
            className="flex justify-evenly overflow-x-auto overflow-y-hidden space-x-6"
            style={{ scrollbarWidth: "thin", scrollbarColor: "#ACF601 black" }}
          >
            {
              //if no articles match search display nothing
              articlesToDisplay.length === 0 ? (
                <p>No articles match your query</p>
              ) : (
                articlesToDisplay.map((article, index) => (
                  <NewsCard
                    key={index}
                    article={article}
                    index={index}
                    onClick={() => handleBlogClick(article)}
                  />
                ))
              )
            }
          </div>
        </div>
        {/* PDF Embed */}
        {selectedBlog && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50"
            onClick={closePDFModal}
          >
            <div
              className="bg-black border border-green rounded-lg p-4 sm:p-6 max-w-[90%] w-[80vh] relative"
              onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
            >
              <div className="relative">
                <h2 className="text-lg sm:text-2xl font-Aldrich mb-4 text-center">
                  {selectedBlog.title}
                </h2>

                {/* Close Button */}
                <button
                  className="absolute top-1 right-2 text-white hover:text-green-500 focus:outline-none"
                  onClick={closePDFModal}
                  aria-label="Close"
                >
                  <svg
                    className="h-6 w-6 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>{" "}
                </button>
              </div>

              {/* PDF Viewer */}
              <div className="relative w-full aspect-[1/1.414] max-w-full max-h-[80vh]">
                <iframe
                  src={selectedBlog.source}
                  className="absolute top-0 left-0 w-full h-full border-0"
                  title={selectedBlog.title}
                />
              </div>
            </div>
          </div>
        )}{" "}
      </PageSection>
    </>
  );
}
