import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./loader/Loader";
import MainPage from "./MainPage";
import SignUp from "./authentication/SignUp";
import Login from "./authentication/Login";
import Home from "./resume_build/Home";
import Error from "./Error";

import Layout from './components/Layout';
import { ResumeProvider } from './context/ResumeContext';
import Builder from "./resume_build/Builder";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <ResumeProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/resume" element={<Home />} />
            <Route path="/builder" element={<Builder />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </ResumeProvider>
    </BrowserRouter>
  );
};

export default App;
