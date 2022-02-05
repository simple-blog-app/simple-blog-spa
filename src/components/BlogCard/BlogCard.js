import ReactModal from "react-modal";
import "./BlogCard.css";
import { displayToast, formatDate } from "../../common";
import { BlogBody } from "..";
import { deleteBlog } from "../../api";
import { ToastContainer } from "react-toastify";
import { useContext, useState } from "react";
import { BlogDeletedContext } from "../../contexts";
import { EditBlog } from "../EditBlog/EditBlog";

export const BlogCard = ({ blog: { _id, title, body, publishedAt } }) => {
  const [isEditBlogModalOpen, setIsEditBlogModalOpen] = useState(false);
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
          <span role="button" className="TextButton" onClick={() => setIsEditBlogModalOpen(true)}>
            edit
          </span>
          {" - "}
          <span role="button" className="TextButton" onClick={() => onDeleteClick()}>
            delete
          </span>
        </section>
      </footer>
      <ReactModal isOpen={isEditBlogModalOpen}>
        <div className="modal">
          <EditBlog blog={{ _id, title, body }} setIsEditBlogModalOpen={setIsEditBlogModalOpen} />
          <hr />
          <button className="submitButton" onClick={() => setIsEditBlogModalOpen(false)}>
            Close
          </button>
        </div>
      </ReactModal>
      <ToastContainer />
    </li>
  );
};
