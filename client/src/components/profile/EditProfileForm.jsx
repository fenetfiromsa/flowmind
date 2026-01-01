import { useState, useEffect } from "react";
import Input from "../ui/Input";
import Select from "../ui/Dropdown";
import AvatarUploader from "./AvatarUploader";

export default function EditProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [role, setRole] = useState("prod");
  const [avatar, setAvatar] = useState(null);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("profile");
    if (saved) {
      const p = JSON.parse(saved);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setName(p.name || "");
      setEmail(p.email || "");
      setBio(p.bio || "");
      setRole(p.role || "prod");
      setAvatar(p.avatar || null);
    }
  }, []);

  const handleSave = (e) => {
    e?.preventDefault();
    // basic validation
    if (!name.trim() || !email.trim()) {
      setMsg("Please provide name and email.");
      return;
    }
    const payload = { name, email, bio, role, avatar };
    localStorage.setItem("profile", JSON.stringify(payload));
    setMsg("Profile saved ✅");
    setTimeout(() => setMsg(""), 2500);
  };

  return (
    <form onSubmit={handleSave} className="space-y-6">
      <div className="flex items-start gap-6">
        <AvatarUploader value={avatar} onChange={(preview) => setAvatar(preview)} />
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="Full name" value={name} onChange={(e) => setName(e.target.value)} />
          <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <div className="sm:col-span-2">
            <label className="text-sm font-medium text-gray-700">Role</label>
            <Select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              options={[
                { label: "Productivity", value: "prod" },
                { label: "AI Tools", value: "ai" },
                { label: "Work", value: "work" },
              ]}
            />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm font-medium text-gray-700">Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full mt-2 p-3 rounded-lg border border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-400"
              rows={4}
              placeholder="Tell us a bit about yourself..."
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3">
        <button type="submit" className="px-4 py-2 rounded-lg bg-indigo-600 text-white">
          Save profile
        </button>
      </div>

      {msg && <p className="text-sm text-green-600">{msg}</p>}
    </form>
  );
}
