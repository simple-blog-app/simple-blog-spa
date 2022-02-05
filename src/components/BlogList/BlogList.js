import { useContext, useEffect, useState } from "react";
import "./BlogList.css";
import { displayToast } from "../../common";
import { getAllBlogs } from "../../api";
import { ToastContainer } from "react-toastify";
import { BlogsChangedContext } from "../../contexts";
import { BlogCard } from "../BlogCard";

export const BlogsList = () => {
  const [blogsList, setBlogsList] = useState([]);
  const { blogsChanged, setBlogsChanged } = useContext(BlogsChangedContext);

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
    setBlogsChanged(false);
  }, [blogsChanged]);

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
