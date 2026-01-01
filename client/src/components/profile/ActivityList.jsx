export default function ActivityList({ activities = [] }) {
  return (
    <div className="space-y-3">
      {activities.map((a, i) => (
        <div key={i} className="bg-white p-3 rounded-lg shadow-sm flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm">{a.icon || "•"}</div>
          <div>
            <div className="text-sm text-gray-800">{a.title}</div>
            <div className="text-xs text-gray-400">{a.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
