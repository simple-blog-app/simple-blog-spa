import "./BlogCard.css";
import { displayToast, formatDate } from "../../common";
import { BlogBody } from "..";
import { deleteBlog } from "../../api";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { BlogDeletedContext } from "../../contexts";

export const BlogCard = ({ blog: { _id, title, body, publishedAt } }) => {
  const { setBlogDeleted } = useContext(BlogDeletedContext);
  const onDeleteClick = async () => {
    const isConfirmed = window.confirm("Are you sure that you want to delete this blog?");
    if (!isConfirmed) return;
    const message = await deleteBlog(_id);
    displayToast(message);
    setBlogDeleted(true);
  };
  return (
    <li className="BlogCard" key={_id}>
      <h1 className="TextButton">{title}</h1>
      <BlogBody body={body} />
      <footer className="BlogCardFooter">
        <h4>
          Published At <span className="normalText">{formatDate(publishedAt)}</span>
        </h4>
        <section>
          <span role="button" className="TextButton">
            edit
          </span>
          {" - "}
          <span role="button" className="TextButton" onClick={() => onDeleteClick()}>
            delete
          </span>
        </section>
      </footer>
      <ToastContainer />
    </li>
  );
};
