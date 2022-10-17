import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import SingleHotel from "./components/hotels/SingleHotel";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/hotels/:id" element={<SingleHotel />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
