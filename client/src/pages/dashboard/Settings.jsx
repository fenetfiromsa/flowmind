import { useState } from "react";

export default function Settings() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "user",
    language: "english",
    notifications: true,
    marketing: false,
    twoFactor: false,
    acceptTerms: false,
  });

  function handleChange(e) {
    const { name, type, checked, value } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Settings Saved:", form);
    alert("Settings saved successfully!");
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-10 max-w-3xl bg-white p-8 rounded-2xl shadow-md"
      >
        {/* ACCOUNT INFO */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Account Information
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="email@example.com"
                className="w-full p-3 border rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* PROFILE OPTIONS */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Profile Settings
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-1">Role</label>
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="editor">Editor</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">Language</label>
              <select
                name="language"
                value={form.language}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
              >
                <option value="english">English</option>
                <option value="amharic">Amharic</option>
                <option value="spanish">Spanish</option>
                <option value="arabic">Arabic</option>
              </select>
            </div>
          </div>
        </div>

        {/* NOTIFICATIONS */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Notifications
          </h2>

          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="notifications"
                checked={form.notifications}
                onChange={handleChange}
                className="w-5 h-5"
              />
              <span>Email Notifications</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="marketing"
                checked={form.marketing}
                onChange={handleChange}
                className="w-5 h-5"
              />
              <span>Marketing Emails</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="twoFactor"
                checked={form.twoFactor}
                onChange={handleChange}
                className="w-5 h-5"
              />
              <span>Enable Two-Factor Authentication</span>
            </label>
          </div>
        </div>

        {/* PRIVACY */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Privacy & Permissions
          </h2>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="acceptTerms"
              checked={form.acceptTerms}
              onChange={handleChange}
              className="w-5 h-5"
            />
            <span>I accept the Terms & Privacy Policy</span>
          </label>
        </div>

        {/* SAVE BUTTON */}
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
}
