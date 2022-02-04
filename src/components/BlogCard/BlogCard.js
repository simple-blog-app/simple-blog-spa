import "./BlogCard.css";
import { formatDate } from "../../common";
import { BlogBody } from "..";

export const BlogCard = ({ blog: { _id, title, body, publishedAt } }) => {
  return (
    <li className="BlogCard" id={_id}>
      <h1>{title}</h1>
      <BlogBody body={body} />
      <footer className="BlogCardFooter">
        <h3>
          Published At <span className="normalText">{formatDate(publishedAt)}</span>
        </h3>
        <section>
          <span role="button" className="TextButton">
            edit
          </span>
          {" - "}
          <span role="button" className="TextButton">
            delete
          </span>
        </section>
      </footer>
    </li>
  );
};
