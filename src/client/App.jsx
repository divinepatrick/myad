import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import Creative from "./pages/Creative";
import Footer from "./components/Footer";
import OtherTools from "./pages/OtherTools";


const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/other-tools" element={<OtherTools />} />
            <Route path="/about" element={<About />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
             <Route element={<PrivateRoute />} > 
              <Route path="/profile" element={<Profile />} />
              <Route path="/creative" element={<Creative />} />
             </Route > 
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App