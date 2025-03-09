import Link from 'next/link';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: 'IMC Calculator',
    description: 'A modern BMI calculator with a clean interface and instant calculations.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/calculator.svg',
    demoUrl: '/imc'
  },
  {
    title: 'AI Chat Assistant',
    description: 'An intelligent conversational AI assistant powered by advanced language models.',
    technologies: ['React', 'OpenAI API', 'WebSocket'],
    imageUrl: '/chat.svg',
    demoUrl: '/chatme'
  },
  {
    title: 'Currency Exchange',
    description: 'Real-time currency conversion tool with support for multiple currencies.',
    technologies: ['Next.js', 'API Integration'],
    imageUrl: '/exchange.svg',
    demoUrl: '/exchange'
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-600">
            Exploring technology through practical applications
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      View Demo
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      View Code
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}