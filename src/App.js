import React from "react";
import {
  BrowserRouter,
  Routes,
  HashRouter,
  Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Footer from "./components/footer";
import Main from "./components/main";
import Header from "./components/header";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";

function App() {
  return (
    <div className="container py-3">
      <Header />
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
