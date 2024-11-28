"use client";

import PageSection from "../components/PageSection";
import { useState } from "react";
import BlogCard from "../components/BlogCard";
import blogData from "../../public/JSONs/blogs.json"; // in json, have titles as keys

type BlogData = {
  title: string;
  image: string;
  date: string;
  description: string;
  source: string;
  tags: { name: string }[];
};

export default function Blog() {
  // states for searching
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTriggered, setSearchTriggered] = useState(false);

  //states for displaying newletters
  // const [pdfDisplayed, setPdfDisplayed] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogData|null>(null);

  const handleBlogClick = (article:BlogData) => {
    setSelectedBlog(article); // Set the clicked blog as the selected blog
  };
  const articles: BlogData[] = Object.values(blogData);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchTriggered(true); // Trigger search
    }
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
        <div className="relative bg-black">
          <div
            className="flex overflow-x-scroll overflow-y-hidden space-x-6"
            style={{ scrollbarWidth: "thin", scrollbarColor: "#ACF601 black" }}
          >
            {articlesToDisplay.map((article, index) => (
              <BlogCard
                key={index}
                article={article}
                index={index}
                onClick={() => handleBlogClick(article)}
              />
            ))}
          </div>
        </div>

{/* PDF Embed */}
{selectedBlog && (
  <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
    <div className="bg-black border border-green rounded-lg p-6 max-w-4xl w-full relative">
      <button
        className="absolute top-2 right-2 text-black"
        onClick={() => setSelectedBlog(null)}
      >
        <p className="text-white">&#10006;</p>
      </button>
      <h2 className="text-2xl mb-4">{selectedBlog.title}</h2>
      <div
        className="relative w-full"
        style={{
          aspectRatio: '1 / 1.414', // Ensures proper A4 aspect ratio
          maxWidth: '100%', // Prevents overflow on smaller screens
          maxHeight: '90vh', // Restricts height to fit the viewport
        }}
      >
        <iframe
          src={selectedBlog.source}
          className="absolute top-0 left-0 w-full h-full"
          style={{ border: 'none' }} // Removes default iframe border
        />
      </div>
    </div>
  </div>
)}
      </PageSection>
    </>
  );
}
