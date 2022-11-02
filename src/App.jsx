import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Components
import Header from './components/Header';
import Home from './pages/Home';
import Error from './pages/Error';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import SingleHotel from './components/hotels/SingleHotel';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import Seller from './components/Seller';
import Bookings from './components/Bookings';
import AddHotel from './components/hotels/AddHotel';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route
            path="/dashboard/bookings"
            element={
              <PrivateRoute>
                <Bookings />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/seller"
            element={
              <PrivateRoute>
                <Seller />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="/hotels/:id" element={<SingleHotel />} />
        <Route
          path="/hotels/new"
          element={
            <PrivateRoute>
              <AddHotel />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
