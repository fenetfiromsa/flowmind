export default function Select({ label, options = [] }) {
  return (
    <div className="flex flex-col gap-2 m-4">
      {label && <label className="text-gray-700 font-medium">{label}</label>}

      <div className="relative">
        <select
          className="w-full appearance-none p-3 rounded-lg border border-gray-300 text-gray-700 
          focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
        >
          {options.map((opt, i) => (
            <option key={i} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

      
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
          ▼
        </div>
      </div>
    </div>
  );
}
