import React, { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../../utils";
import Blog from "../../components/Blog/Blog";
import EmptyState from "../../components/EmptyState/EmptyState";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, [])

    const handleDelete = id =>{
    deleteBlog(id)
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }


  if(blogs.length == 0) {
    return <EmptyState message='No Bookmarks Found' address={'/blogs'} label='Browse Blogs'></EmptyState>
  }


  return (
    <div className="grid px-4 sm:px-8 lg:px-12 py-8 justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <Blog
        handleDelete={handleDelete}
          deletable={true}
          key={blog.id}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
};

export default Bookmarks;
