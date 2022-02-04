import { useContext, useEffect, useState } from "react";
import "./BlogsList.css";
import { displayToast, formatDate } from "../common";
import { getAllBlogs } from "../api/BlogAPI";
import { ToastContainer } from "react-toastify";
import { BlogAddedtContext } from "../AddBlog/blogAddedContext";

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

  const blogs = blogsList.map((blog) => (
    <li className="ingredientContainer" key={blog._id}>
      <p>{blog.title}</p>
      <p>{blog.body}</p>
      <p>{formatDate(blog.publishedAt)}</p>
    </li>
  ));

  return (
    <section className="BlogsList">
      {blogs.length > 0 && (
        <>
          <header>All Blogs</header>
          <ul>{blogs}</ul>
        </>
      )}

      <ToastContainer />
    </section>
  );
};
