import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";

import HomePage from "./components/Home";
import BlogPage, { BlogDetails } from "./components/BlogPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/blog"
            element={
              <Layout>
                <BlogPage />
              </Layout>
            }
          />
          <Route
            path="/single-page"
            element={
              <Layout>
                <BlogDetails />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
