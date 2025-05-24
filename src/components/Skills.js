import data from '@/data/info.json';

const skillIcons = {
  "JavaScript": "/logos/javascript.jpg",
  "React": "/logos/react.jpg",
  "Node.js": "/logos/nodejs.jpg",
  "MongoDB": "/logos/mongodb.jpg",
  "Tailwind CSS": "/logos/tailwind.webp",
  "Next.js": "/logos/nextjs.webp"
};

export default function Skills() {
  return (
    <section id="skills" className="my-10">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 ">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
        {data.skills.map((skill, i) => {
          const proficiency = 80 + (i % 3) * 10; // Simulated proficiency
          return (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
              title={`Proficiency: ${proficiency}%`}
            >
              <img src={skillIcons[skill]} alt={skill} className="w-16 h-16 mb-4" />
              <span className="text-lg font-medium text-gray-700">{skill}</span>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mt-3">
                <div
                  className="bg-blue-500 h-3 rounded-full transition-all duration-700"
                  style={{ width: `${proficiency}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
