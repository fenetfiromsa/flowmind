export default function ProfileStats({ stats = [] }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-sm text-gray-500">{s.label}</div>
          <div className="text-xl font-semibold text-gray-900">{s.value}</div>
        </div>
      ))}
    </div>
  );
}
