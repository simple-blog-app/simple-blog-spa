import "./App.css";
import { AddBlog, BlogsList } from "./components";
import { BlogsChangedContext } from "./contexts";
import { useState } from "react";

export const App = () => {
  const [blogsChanged, setBlogsChanged] = useState(false);
  return (
    <main className="App">
      <BlogsChangedContext.Provider value={{ blogsChanged, setBlogsChanged }}>
        <AddBlog />
        <hr />
        <BlogsList />
      </BlogsChangedContext.Provider>
    </main>
  );
};
