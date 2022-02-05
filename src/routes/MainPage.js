import { AddBlog, BlogsList } from "../components";
import { BlogsChangedContext } from "../contexts";
import { useState } from "react";

export const MainPage = () => {
  const [blogsChanged, setBlogsChanged] = useState(false);
  return (
    <BlogsChangedContext.Provider value={{ blogsChanged, setBlogsChanged }}>
      <AddBlog />
      <hr />
      <BlogsList />
    </BlogsChangedContext.Provider>
  );
};
