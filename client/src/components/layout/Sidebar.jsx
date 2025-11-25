import { NavLink } from "react-router-dom";
import Button from "../ui/Button";
import {
  LayoutDashboard,
  User,
  MessageCircle,
  Notebook,
  CheckSquare,
  Settings
} from "lucide-react";

function Sidebar() {
  const activeClass =
    "flex items-center gap-3 font-semibold p-3 rounded-lg bg-gradient-to-r from-teal-300 to-purple-400 text-white";
  const normalClass =
    "flex items-center gap-3 font-semibold p-3 rounded-lg hover:bg-gradient-to-r from-teal-300 to-purple-400";

  return (
    <div className="w-64 min-h-screen bg-white border-r p-6 space-y-2">
      <h1 className="text-xl font-bold text-indigo-600 mb-11">FlowMind</h1>

      <nav className="space-y-3">

        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? activeClass : normalClass)}
        >
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/dashboard/profile"
          className={({ isActive }) => (isActive ? activeClass : normalClass)}
        >
          <User size={18} />
          <span>Profile</span>
        </NavLink>

        <NavLink
          to="/dashboard/chat"
          className={({ isActive }) => (isActive ? activeClass : normalClass)}
        >
          <MessageCircle size={18} />
          <span>Chat</span>
        </NavLink>

        <NavLink
          to="/dashboard/notes"
          className={({ isActive }) => (isActive ? activeClass : normalClass)}
        >
          <Notebook size={18} />
          <span>Notes</span>
        </NavLink>

        <NavLink
          to="/dashboard/tasks"
          className={({ isActive }) => (isActive ? activeClass : normalClass)}
        >
          <CheckSquare size={18} />
          <span>Tasks</span>
        </NavLink>

        <NavLink
          to="/dashboard/settings"
          className={({ isActive }) => (isActive ? activeClass : normalClass)}
        >
          <Settings size={18} />
          <span>Settings</span>
        </NavLink>

        <Button>Log Out</Button>
      </nav>
    </div>
  );
}

export default Sidebar;
