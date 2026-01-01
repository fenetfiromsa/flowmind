import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/dashboard/Home";
import Chat from "./pages/dashboard/Chat";
import Notes from "./pages/dashboard/Notes";
import Tasks from "./pages/dashboard/Tasks";
import Profile from "./pages/dashboard/Profile";
import Setting from "./pages/dashboard/Settings";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>

       
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />        
          <Route path="home" element={<Home />} />        
          <Route path="chat" element={<Chat />} />         
          <Route path="notes" element={<Notes />} />       
          <Route path="tasks" element={<Tasks />} />   
          <Route path="settings" element={<Setting />} />  
          <Route path="Profile" element={<Profile />} />  
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
