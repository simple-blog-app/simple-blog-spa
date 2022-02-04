import "./App.css";
import { AddBlog } from "./AddBlog";
import { BlogsList } from "./BlogsList";
import { BlogAddedtContext } from "./AddBlog/blogAddedContext";
import { useState } from "react";

export const App = () => {
  const [blogAdded, setBlogAdded] = useState(false);
  return (
    <main className="App">
      <BlogAddedtContext.Provider value={{ blogAdded, setBlogAdded }}>
        <AddBlog />
        <hr />
        <BlogsList />
      </BlogAddedtContext.Provider>
    </main>
  );
};
