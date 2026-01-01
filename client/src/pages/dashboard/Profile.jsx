import { useState } from "react";
import EditProfileForm from "../../components/profile/EditProfileForm";
import ProfileStats from "../../components/profile/ProfileStats";
import ActivityList from "../../components/profile/ActivityList";
import ChangePasswordModal from "../../components/profile/ChangePasswordModal";

export default function Profile() {
  const [openPw, setOpenPw] = useState(false);

  const stats = [
    { label: "Projects", value: 8 },
    { label: "Tasks done", value: 124 },
    { label: "Active chats", value: 3 },
  ];

  const recent = [
    { title: "Created project 'IdeaBoard'", time: "2 days ago" },
    { title: "Completed task 'Write README'", time: "4 days ago" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT SIDEBAR */}
        <aside className="space-y-8">

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Profile</h2>
            <p className="text-sm text-gray-500 mb-4">Manage your account</p>

            <ProfileStats stats={stats} />

            <button
              onClick={() => setOpenPw(true)}
              className="mt-6 w-full py-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium transition"
            >
              Change Password
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <h3 className="text-md font-semibold text-gray-800 mb-4">Recent Activity</h3>
            <ActivityList activities={recent} />
          </div>

        </aside>

        {/* MAIN CONTENT */}
        <main className="lg:col-span-2">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Edit Profile</h2>
              <span className="text-sm text-gray-500">Update your info</span>
            </div>

            <EditProfileForm />
          </div>
        </main>

      </div>

      {/* PASSWORD MODAL */}
      <ChangePasswordModal open={openPw} onClose={() => setOpenPw(false)} />
    </div>
  );
}
