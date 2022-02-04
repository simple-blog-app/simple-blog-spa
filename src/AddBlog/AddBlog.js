import { useState } from "react";
import "./AddBlog.css";
import { BLOG_BODY_MAX_LENGTH } from "../common";

export const AddBlog = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogBody, setBlogBody] = useState("");
  const [charactersLeft, setCharactersLeft] = useState(BLOG_BODY_MAX_LENGTH - blogBody.length);

  return (
    <section className="AddBlog">
      <header>Add Blog</header>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={blogTitle}
          onChange={(e) => setBlogTitle(e.target.value)}
        />
        <textarea
          name="body"
          rows="10"
          placeholder="Blog Body"
          value={blogBody}
          onChange={({ target: { value } }) => {
            setBlogBody(value);
            setCharactersLeft(BLOG_BODY_MAX_LENGTH - value.length);
          }}
        />
        <section className="AddFormFooter">
          <p>{charactersLeft} characters left</p>
          <button className="submitButton" type="button" disabled={!blogTitle || !blogBody || blogBody.length > 1000}>
            Submit
          </button>
        </section>
      </form>
    </section>
  );
};
