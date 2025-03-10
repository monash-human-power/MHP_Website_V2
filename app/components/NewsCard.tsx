import React from "react";
import Image from "next/image";
import { Article } from "../types";

interface NewsCardProps {
  article: Article;
  index: number;
  onClick: () => void;
}


const NewsCard = ({ article, index, onClick }: NewsCardProps) => {

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
          <h2 className="text-3xl font-semibold text-purple-700 font-Sansation decoration-purple-400 decoration-4 mb-4 drop-shadow-md">
            {article.title}
          </h2>
          <div className="mb-4">
            {article.tags.map((tag, idx) => (
              <a
                key={idx}
                // todo: when tag is clicked, filter to show only articles with that tag
                className="inline-block bg-[#ACF601] text-black  font-Aldrich text-xs font-medium rounded-full px-3 py-1 mr-2 mb-2"
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

export default NewsCard;
