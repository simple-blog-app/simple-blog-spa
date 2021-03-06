import { useContext, useState } from "react";
import "./AddBlog.css";
import { BLOG_BODY_MAX_LENGTH, displayToast } from "../../common";
import { addBlog } from "../../api";
import { ToastContainer } from "react-toastify";
import { BlogsChangedContext } from "../../contexts";

export const AddBlog = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogBody, setBlogBody] = useState("");
  const [charactersLeft, setCharactersLeft] = useState(BLOG_BODY_MAX_LENGTH - blogBody.length);
  const { setBlogsChanged } = useContext(BlogsChangedContext);

  const onAddBlogSubmit = async () => {
    if (!(blogTitle.length || blogBody.length)) {
      displayToast("All fields are required");
      return;
    }
    if (blogBody.length > BLOG_BODY_MAX_LENGTH) {
      displayToast(`Body should be less than ${BLOG_BODY_MAX_LENGTH} characters`);
      return;
    }
    const message = await addBlog(blogTitle, blogBody);
    setBlogsChanged(true);
    setBlogTitle("");
    setBlogBody("");
    displayToast(message);
  };

  return (
    <section className="AddBlog">
      <header>Add Blog</header>
      <form>
        <input
          type="text"
          name="title"
          required
          minLength={1}
          placeholder="Blog Title"
          value={blogTitle}
          onChange={(e) => setBlogTitle(e.target.value)}
        />
        <textarea
          required
          minLength={1}
          maxLength={1000}
          name="body"
          rows="5"
          placeholder="Blog Body"
          value={blogBody}
          onChange={({ target: { value } }) => {
            setBlogBody(value);
            setCharactersLeft(BLOG_BODY_MAX_LENGTH - value.length);
          }}
        />
        <footer className="AddFormFooter">
          <p className="lightText">{charactersLeft} characters left</p>
          <button
            className="submitButton"
            disabled={!blogTitle.length || !blogBody.length || blogBody.length > BLOG_BODY_MAX_LENGTH}
            type="button"
            onClick={() => onAddBlogSubmit()}
          >
            Submit
          </button>
        </footer>
      </form>
      <ToastContainer />
    </section>
  );
};
