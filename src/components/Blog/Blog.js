import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Blog.css";
import { getBlog } from "../../api";
import { formatDate } from "../../common";

export const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [error, setError] = useState("");

  const getSingleBlog = async () => {
    const response = await getBlog(id);
    if (response.blog) {
      setBlog(response.blog);
      return;
    }
    setError(response);
  };

  useEffect(() => {
    getSingleBlog();
  }, []);

  return (
    <section className="blog">
      <nav>
        <Link to="/">&#8592; Back</Link>
      </nav>
      <section className="BlogCard">
        {!blog._id ? (
          <h1>{error}</h1>
        ) : (
          <>
            <h1>{blog.title}</h1>
            <p>{blog.body}</p>
            <footer>
              <h4>
                Published At <span className="normalText">{formatDate(blog.publishedAt)}</span>
              </h4>
            </footer>
          </>
        )}
      </section>
    </section>
  );
};
