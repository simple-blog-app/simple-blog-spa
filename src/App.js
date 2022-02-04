import "./App.css";
import { AddBlog, BlogsList } from "./components";
import { BlogAddedtContext } from "./contexts";
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
