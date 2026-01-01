
import Sidebar from "../layout/Sidebar";
import Topbar from "../layout/Topbar";
import { Outlet } from "react-router-dom";
export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">

      
      <Sidebar />

   
      <div className="flex-1 flex flex-col ml-64">

     
        <Topbar />

       
        <main className="p-6 bg-gray-50 flex-1">
              <Outlet />
          {children}
        </main>
      </div>
    </div>
  );
}
