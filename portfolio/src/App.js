import GithubRepos from "./views/Repositories";
import Header from "./views/shared/Header";
import Work from "./views/Work";
import Contact from "./views/Contact";
import Home from "./views/Home";
import About from "./views/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Header />
      <main>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Repositories" Component={GithubRepos} />
        </Routes>
        </BrowserRouter>
        </main>
    </div>
  );
}

export default App;
