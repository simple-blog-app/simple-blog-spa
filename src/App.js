import "./App.css";
import { Routes, Route } from "react-router-dom";
import { MainPage, BlogPage } from "./routes";

export const App = () => {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="*" element={<h1 style={{ "text-align": "center" }}>Error 404, There's nothing to do here :(</h1>} />
      </Routes>
    </main>
  );
};
