import React, {useState} from 'react'
import Image from "next/image";

interface BlogCardProps {
    article: Article
    index: number
}

// interface Article {
//     image: string;
//     iteration: number;
//     max_speed: number;
//     development_start: number;
//     development_end: number | string; // to allow "current"
//     competitions: string[];
//     description: string;
//     gallery: string[];
// }

interface Article {
  title: string;
  image: string;
  author: string;
  date: string;
  shortText: string;
  fullText: string;
  tags: { name: string; url: string; }[];
}
//todo

const BlogCard = ({article,index} : BlogCardProps) => {

const [showFullText, setShowFullText] = useState<{ [key: number]: boolean }>({});
  
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
                  <div className="mb-4">
                    {article.tags.map((tag, idx) => (
                      <a
                        key={idx}
                        href={tag.url}
                        className="inline-block bg-[#ACF601] text-black text-xs font-medium rounded-full px-3 py-1 mr-2 mb-2"
                      >
                        {tag.name}
                      </a>
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
        </>
    );
}

export default BlogCard;


