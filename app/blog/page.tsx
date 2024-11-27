"use client";

import PageSection from "../components/PageSection";
import { useState } from "react";
import BlogCard from "../components/BlogCard";
import blogData from "../../public/JSONs/blogs.json";  // in json, have titles as keys

type BlogData = {
  title: string;
    image: string;
    author: string;
    date: string;
    shortText: string;
    fullText: string;
    tags: { name: string; url: string }[];
};

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTriggered, setSearchTriggered] = useState(false);

  const articles:BlogData[] = Object.values(blogData);


  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchTriggered(true); // Trigger search
    }
  };

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.tags.some((tag) => tag.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Conditionally display filtered articles only after search is triggered, otherwise display all articles
  const articlesToDisplay = searchTriggered && searchQuery ? filteredArticles : articles;

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
        <div className="relative">
          <div className="flex overflow-x-scroll overflow-y-hidden  space-x-6" style={{ scrollbarWidth: 'thin', scrollbarColor: '#ACF601 black' }}>
            {articlesToDisplay.map((article, index) => (
              <BlogCard key={index} article={article} index={index} ></BlogCard>
          ))}
          </div>
        </div>
      </PageSection>
    </>
  );
}
