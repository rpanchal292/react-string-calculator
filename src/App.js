import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar/>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
            <Route path="/about" element={<ProtectedRoute><About/></ProtectedRoute>}></Route>
            <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>    
  )
}

export default App;
