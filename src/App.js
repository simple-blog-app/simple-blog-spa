import "./App.css";
import { AddBlog, BlogsList } from "./components";
import { BlogAddedContext, BlogDeletedContext } from "./contexts";
import { useState } from "react";

export const App = () => {
  const [blogAdded, setBlogAdded] = useState(false);
  const [blogDeleted, setBlogDeleted] = useState(false);
  return (
    <main className="App">
      <BlogAddedContext.Provider value={{ blogAdded, setBlogAdded }}>
        <BlogDeletedContext.Provider value={{ blogDeleted, setBlogDeleted }}>
          <AddBlog />
          <hr />
          <BlogsList />
        </BlogDeletedContext.Provider>
      </BlogAddedContext.Provider>
    </main>
  );
};
