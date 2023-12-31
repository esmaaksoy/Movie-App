import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MovieDetail from "../pages/MovieDetail";
import Popular from "../pages/Popular";
import TopRated from "../pages/TopRated";
import Upcoming from "../pages/Upcoming";
import PrivateRouter from "./PrivateRouter";
import Footer from "../components/Footer";
const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/popular" element={<Popular/>} />
        <Route path="/toprated" element={<TopRated />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="" element={<PrivateRouter />}>
          <Route path="/details/:id" element={<MovieDetail />} />
        </Route>
      </Routes>
      <Footer/>
    </>
  )
};

export default AppRouter;
