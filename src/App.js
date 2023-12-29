import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./context/AuthContextProvider";
import MovieContextProvider from "./context/MovieContextProvider";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <AuthContextProvider>
      <MovieContextProvider>
        <AppRouter />
        <ToastContainer/>
      </MovieContextProvider>
    </AuthContextProvider>
  );
};

export default App;
