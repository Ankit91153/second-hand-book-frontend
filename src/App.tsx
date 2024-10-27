import "./App.css";
import Header from "./components/commonCompo/Header";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Books from './pages/Books'
import "swiper/swiper-bundle.css";
import Footer from "./components/commonCompo/Footer";
import Dashboard from "./pages/dashboard/Dashboard";
import AllBooks from "./pages/dashboard/AllBooks";
import Setting from "./pages/dashboard/Setting";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path='/books' element={<Books/>}/>
          <Route path="/dashboard" element={<Dashboard/>}>
          <Route index element={<Navigate to="all-books" />} />
              <Route path="all-books" element={<AllBooks/>}/>
              <Route path="setting" element={<Setting/>}/>
          </Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
