// components/About.tsx
export default function About() {
  return (
    <div className="space-y-6 mt-20">
      <h2 className="text-3xl font-bold text-orange-600">🧠 About Me</h2>

      <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl">
        I’m Bedasa, a self-driven developer who enjoys turning ideas into real-world solutions. Whether I’m building a website or learning a new language, I’m always ready to dive in and explore.
        I am based in Ethiopia and spend most of my time coding and occasionally breaking things (just to fix them better 😉).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {[
          {
            title: '🎓 Education',
            content: '4th year Information System student at Hawassa University.',
          },
          {
            title: '🧰 Skills Snapshot',
            content: 'PHP, MySQL, Next.js, HTML, CSS, JavaScript, Tailwind, React, C++',
          },
          {
            title: '🌐 Languages',
            content: 'English, Amharic, Afaan Oromo, Arabic (basic)',
          },
          {
            title: '💡 Hobbies',
            content: 'Coding for fun, UI design, learning tech trends, playing football, watching YouTube tutorials and movies.',
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-orange-50 dark:bg-zinc-800 border-l-4 border-orange-500 p-4 rounded-md shadow hover:scale-[1.03] transition"
          >
            <h3 className="font-semibold text-orange-600">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
