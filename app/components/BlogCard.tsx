import React, { useState } from "react";
import Image from "next/image";

interface BlogCardProps {
  article: Article;
  index: number;
  onClick: () => void;
}

interface Article {
  title: string;
  image: string;
  date: string;
  description: string;
  source: string;
  tags: { name: string }[];
}
//todo

const BlogCard = ({ article, index, onClick }: BlogCardProps) => {
  const [showArticle, setShowFullText] = useState<{ [key: number]: boolean }>(
    {}
  );

  const toggleFullText = (index: number) => {
    setShowFullText((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <>
      <div
        key={index}
        className="flex-none w-full  md:w-1/3 bg-black rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        style={{ minHeight: "auto" }} // Adjust the card's height dynamically
        onClick={onClick}
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
          <div className="mb-4">
            {article.tags.map((tag, idx) => (
              <a
                key={idx}
                // todo: have when tag which clicked to show only articles with that tag
                className="inline-block bg-[#ACF601] text-black text-xs font-medium rounded-full px-3 py-1 mr-2 mb-2"
              >
                {tag.name}
              </a>
            ))}
          </div>
          <p className={`text-gray-300 mb-4 "line-clamp-3" md:line-clamp-none`}>
            {article.description}
          </p>
          <p className="text-gray-600">
             {article.date}
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
