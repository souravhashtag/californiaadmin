import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import AppLayout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import BlogList from "./pages/Blogs/BlogList";
import BlogCreate from "./pages/Blogs/BlogCreate";
import BlogEdit from "./pages/Blogs/BlogEdit";
import Gallery from "./pages/Gallery";
import Pages from "./pages/Pages/List";
import Login from "./pages/Auth/Login";
import PageCreate from './pages/Pages/PageCreate';
import HomeTemplate from './pages/Pages/Home/HomeTemplate';
import AboutTemplate from './pages/Pages/About/AboutTemplate';
import SeoCreate from './pages/Seo/SeoCreate';
import SeoUpdate from './pages/Seo/SeoUpdate';
import SeoList from './pages/Seo/SeoList';
import FaqList from './pages/faq/FaqList';
import FaqCreate from './pages/faq/FaqCreate';
import FaqEdit from './pages/faq/FaqEdit';
import './Style.css';
const AppContent: React.FC = () => {
  const navigate = useNavigate();  

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");  
    }
  }, [navigate]); 

  return (
    <AppLayout>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="blogs" element={<BlogList />} />
        <Route path="blogs/create" element={<BlogCreate />} />
        <Route path="blogs/edit/:id" element={<BlogEdit />} />
        <Route path="gallery" element={<Gallery />} />        
        <Route path="pages" >
          <Route index element={<Pages />} />
          <Route path="create" element={<PageCreate />} />
          <Route path="home" element={<HomeTemplate />} />
          <Route path="about" element={<AboutTemplate />} />
        </Route>
        <Route path="seo" >
          <Route index element={<SeoList />} />
          <Route path="create" element={<SeoCreate />} />
          <Route path=":id" element={<SeoUpdate />} />
        </Route>
        <Route path="faq" >
          <Route index element={<FaqList />} />
          <Route path="create" element={<FaqCreate />} />
          <Route path=":id" element={<FaqEdit />} />
        </Route>
      </Routes>
    </AppLayout>
  );
};

const App: React.FC = () => {
  const base = process.env.REACT_APP_URL || "/";
  return (
    <Router basename={base}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<AppContent />} />
      </Routes>
    </Router>
  );
};

export default App;
