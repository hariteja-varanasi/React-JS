import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./component/Home";
import Menu from "./component/Menu";
import Create from "./component/Create";
import Update from "./component/Update";
import Delete from "./component/Delete";
import PageNotFound from "./component/PageNotFound";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
      <BrowserRouter>
          <Menu />
          <ToastContainer autoClose={5000} position={'top-right'} />
          <div className="container-fluid">
              <Routes>
                  <Route
                    path={`/create`}
                    element={<Create />}
                    exact
                  />
                  <Route
                      path={`/users`}
                      element={<Home />}
                      exact
                  />
                  <Route
                      path={`/`}
                      element={<Home />}
                      exact
                  />
                  <Route
                      path={`/update/user/:id`}
                      element={<Update />}
                      exact
                  />
                  <Route
                      path={`/delete/user/:id`}
                      element={<Delete />}
                      exact
                  />
                  <Route
                      path={`/*`}
                      element={<PageNotFound />}
                      exact
                  />
              </Routes>
          </div>
      </BrowserRouter>

  );
}

export default App;
