
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import HomePage from './pages/HomePage';

import ProjectPage from './pages/ProjectPage';

import BlogPage from './pages/BlogPage';
import ConnectPage from './pages/ConnectPage';
import Header from './Components/Header';
// Import your page views


function App() {
  return (
    <Router>
      <div className="w-full min-h-screen bg-neutral-100 dark:bg-[#030303] text-neutral-900 dark:text-[#f5f5f5] flex flex-col">
        {/* The Header stays static on top of all pages */}
        <Header/>

       
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            
             <Route path="/projects" element={<ProjectPage />} />
             
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/connect" element={<ConnectPage />} />
          </Routes>
        </main>


        <Footer/>
      </div>
    </Router>
  );
}

export default App;
