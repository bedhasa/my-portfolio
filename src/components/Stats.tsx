// components/Stats.tsx
export default function Stats() {
  const stats = [
    { number: '3+', label: 'Years of Coding' },
    { number: '5+', label: 'Projects Built' },
    { number: '5+', label: 'Tech Tools Mastered' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-orange-100 dark:bg-orange-800 text-orange-900 dark:text-white p-6 rounded-xl shadow transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-orange-200 dark:hover:bg-orange-700"
        >
          <h2 className="text-3xl font-bold">{stat.number}</h2>
          <p className="mt-2 text-sm font-medium">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
