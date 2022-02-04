import { useContext, useEffect, useState } from "react";
import "./BlogsList.css";
import { displayToast } from "../common";
import { getAllBlogs } from "../api/BlogAPI";
import { ToastContainer } from "react-toastify";
import { BlogAddedtContext } from "../AddBlog/blogAddedContext";
import { BlogCard } from "../BlogCard";

export const BlogsList = () => {
  const [blogsList, setBlogsList] = useState([]);
  const { blogAdded, setBlogAdded } = useContext(BlogAddedtContext);

  const getBlogsList = async () => {
    const data = await getAllBlogs();
    if (data.error) {
      displayToast("Error displaying blogs list");
      return;
    }
    setBlogsList(data.blogs);
  };

  useEffect(() => {
    getBlogsList();
    setBlogAdded(false);
  }, [blogAdded]);

  const blogs = blogsList.map((blog) => <BlogCard blog={blog} />);

  return (
    <section>
      {blogs.length > 0 && (
        <>
          <header>All Blogs</header>
          <ul className="BlogsList">{blogs}</ul>
        </>
      )}
      <ToastContainer />
    </section>
  );
};
