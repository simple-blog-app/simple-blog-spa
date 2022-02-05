import { useContext, useState } from "react";
import "./EditBlog.css";
import { BLOG_BODY_MAX_LENGTH, displayToast } from "../../common";
import { addBlog, editBlog } from "../../api";
import { ToastContainer } from "react-toastify";
import { BlogAddedContext } from "../../contexts";

export const EditBlog = ({ blog: { _id, title, body }, setIsEditBlogModalOpen }) => {
  const [blogTitle, setBlogTitle] = useState(title);
  const [blogBody, setBlogBody] = useState(body);
  const [charactersLeft, setCharactersLeft] = useState(BLOG_BODY_MAX_LENGTH - blogBody.length);
  const { setBlogAdded } = useContext(BlogAddedContext);

  const onSaveBlogSubmit = async () => {
    if (blogTitle == title || blogBody == body) {
      displayToast("No changes were made!");
      return;
    }
    if (!(blogTitle.length || blogBody.length)) {
      displayToast("At lease one field is required");
      return;
    }
    if (blogBody.length > BLOG_BODY_MAX_LENGTH) {
      displayToast(`Body should be less than ${BLOG_BODY_MAX_LENGTH} characters`);
      return;
    }
    const { error } = await editBlog(_id, { title: blogTitle, body: blogBody });
    if (error) {
      displayToast(error);
      return;
    }
    setBlogAdded(true);
    setIsEditBlogModalOpen(false);
  };

  return (
    <section className="EditBlog">
      <header>Edit Blog</header>
      <form>
        <input
          type="text"
          name="title"
          minLength={1}
          placeholder="Blog Title"
          value={blogTitle}
          onChange={(e) => setBlogTitle(e.target.value)}
        />
        <textarea
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
        <footer className="EditFormFooter">
          <p className="lightText">{charactersLeft} characters left</p>
          <button
            className="submitButton"
            type="button"
            onClick={() => onSaveBlogSubmit()}
            disabled={
              blogTitle == title ||
              blogBody == body ||
              !blogTitle.length ||
              !blogBody.length ||
              blogBody.length > BLOG_BODY_MAX_LENGTH
            }
          >
            Save
          </button>
        </footer>
      </form>
      <ToastContainer />
    </section>
  );
};
