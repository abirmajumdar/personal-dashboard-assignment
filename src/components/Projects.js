import data from '@/data/info.json' 

const projects = data.projects
export default function Projects() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          My Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
                >
                  Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded-lg transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}