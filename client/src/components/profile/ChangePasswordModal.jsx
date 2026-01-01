import { useState } from "react";

export default function ChangePasswordModal({ open, onClose }) {
  const [oldPw, setOldPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!oldPw || !newPw) return setMsg("Fill both fields");
    if (newPw !== confirmPw) return setMsg("Passwords do not match");
    // mock change:
    setMsg("Password changed (mock) ✅");
    setTimeout(() => {
      setMsg("");
      onClose();
    }, 1000);
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
        <h3 className="text-lg font-semibold mb-4">Change password</h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input value={oldPw} onChange={(e) => setOldPw(e.target.value)} type="password" placeholder="Current password" className="w-full p-3 border rounded" />
          <input value={newPw} onChange={(e) => setNewPw(e.target.value)} type="password" placeholder="New password" className="w-full p-3 border rounded" />
          <input value={confirmPw} onChange={(e) => setConfirmPw(e.target.value)} type="password" placeholder="Confirm new password" className="w-full p-3 border rounded" />
          <div className="flex justify-end items-center gap-3">
            <button type="button" onClick={onClose} className="px-3 py-2 rounded border">Cancel</button>
            <button type="submit" className="px-4 py-2 rounded bg-indigo-600 text-white">Change</button>
          </div>
          {msg && <p className="text-sm text-green-600">{msg}</p>}
        </form>
      </div>
    </div>
  );
}
