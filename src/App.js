import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home";
import About from "./Components/About/About";
import Gallery from "./Components/Gallery/Gallery";
import Destinations from "./Components/Destinations/Destinations";
import SinglePage from "./SinglePage/SinglePage";
import Blog from "./Components/Blog/Blog";
import BlogSingle from "./Components/Blog/Blog-Single-Page/BlogSingle";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/destination" element={<Destinations />} />
          <Route path="/singlepage/:id" element={<SinglePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogsingle/:id" element={<BlogSingle />} />
          <Route path="/testimonial" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
