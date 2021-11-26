import "./App.css";
import AuthProvider from './context/AuthProvider';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Registration from "./components/Registration/Registration";
import AddTour from "./components/Admin/AddTour/AddTour";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ShowAllTours from "./components/Admin/ShowAllTours/ShowAllTours";
import UpdateTour from "./components/Admin/UpdateTour/UpdateTour";
import BookingTour from "./components/BookingTour/BookingTour";
import ShowTours from "./components/ShowTours/ShowTours";
import MyTours from "./components/MyTours/MyTours";
import ShowAllBooking from "./components/Admin/ShowAllBookings/ShowAllBooking";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        {/* Setup Routing for page navigation */}
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Registration></Registration>
            </Route>
            <Route path="/tours">
              <ShowTours></ShowTours>
            </Route>
            <PrivateRoute exact path="/admin/add/tour">
              <AddTour></AddTour>
            </PrivateRoute>
            <PrivateRoute exact path="/admin/show/tour">
              <ShowAllTours></ShowAllTours>
            </PrivateRoute>
            <PrivateRoute exact path="/admin/show/bookings">
              <ShowAllBooking></ShowAllBooking>
            </PrivateRoute>
            <PrivateRoute exact path="/admin/tour/update/:tourParamID">
              <UpdateTour></UpdateTour>
            </PrivateRoute>
            <PrivateRoute exact path="/tour/booking/:tourParamID">
              <BookingTour></BookingTour>
            </PrivateRoute>
            <PrivateRoute exact path="/user/show/tours">
              <MyTours></MyTours>
            </PrivateRoute>
            <Route component={NotFound} />
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
