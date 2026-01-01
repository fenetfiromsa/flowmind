import { useState } from "react";

export default function AvatarUploader({ value, onChange, size = 96 }) {
  const [preview, setPreview] = useState(value || null);

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // basic validation
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      return;
    }
    if (file.size > 2_000_000) { // 2MB
      alert("Image is too large (max 2MB).");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
      onChange && onChange(reader.result, file);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex items-center gap-4">
      <div
        style={{ width: size, height: size }}
        className="rounded-full overflow-hidden bg-gray-100 flex items-center justify-center"
        aria-hidden
      >
        {preview ? (
          <img src={preview} alt="avatar" className="w-full h-full object-cover" />
        ) : (
          <div className="text-gray-400">No image</div>
        )}
      </div>

      <div className="flex flex-col">
        <label className="text-sm text-gray-600 mb-1">Profile photo</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFile}
          className="text-sm"
        />
        <p className="text-xs text-gray-400 mt-1">PNG / JPG — max 2MB</p>
      </div>
    </div>
  );
}
