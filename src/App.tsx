import React, { FC, useState, useEffect, Suspense, useContext } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { GlobalProvider } from "./components/widgets/GlobalContext/GlobalContext";

const Dashboard = React.lazy(() => import("./components/pages/PronyDashboard/Dashboard/Dashboard"));
const Boards = React.lazy(() => import("./components/pages/PronyDashboard/Boards/Boards"));
const Posts = React.lazy(() => import("./components/pages/PronyDashboard/Posts/Posts"));
const Layout = React.lazy(() => import("./components/widgets/Layout/Layout"));

// import { register } from "swiper/element/bundle";
// register();

const App: FC = () => {
  return (
    <>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="boards" element={<Boards />} />
            <Route path="posts" element={<Posts />} />
          </Route>
        </Routes>
      </GlobalProvider>
    </>
  );
};

export default App;
