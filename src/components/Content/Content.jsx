import React from "react";
import { useLoaderData } from "react-router";
import placeholderImage from "../../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
  const singleBlog = useLoaderData();
  const { cover_image, title,body_html, tags } = singleBlog;
  return (
    <div className=" mx-auto border p-2 group hover:no-underline focus:no-underline ">
      <img
        role="presentation"
        className="object-cover w-full rounded h-44"
        src={cover_image || placeholderImage}
      />
      <div>
        <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
          {tags.map((tag) => (
            <a
              key={tag.index}
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline dark:text-gray-900"
            >
              #{tag}
            </a>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
       <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
      </div>
    </div>
  );
};

export default Content;
