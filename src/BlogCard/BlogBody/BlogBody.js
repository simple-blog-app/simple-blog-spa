import "../BlogCard.css";
import { MAXIMUM_CHARS_TO_DISPLAY } from "../../common";
import { useState } from "react";

export const BlogBody = ({ body }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      {body.length > MAXIMUM_CHARS_TO_DISPLAY && !isExpanded ? (
        <p>
          {body.substring(0, MAXIMUM_CHARS_TO_DISPLAY)}{" "}
          <span role="button" className="TextButton" onClick={() => setIsExpanded(true)}>
            see more ...
          </span>
        </p>
      ) : (
        <p>
          {body}{" "}
          {body.length > MAXIMUM_CHARS_TO_DISPLAY && (
            <span role="button" className="TextButton" onClick={() => setIsExpanded(false)}>
              see less ...
            </span>
          )}
        </p>
      )}
    </>
  );
};
