export default function About() {
  const aboutCards = [
    {
      title: "¿Quién soy?",
      content: (
        <p className="text-text-secondary">
          Soy Héctor, desarrollador especializado en inteligencia artificial y asistentes conversacionales.
          Me apasiona la tecnología, la automatización y la búsqueda de nuevas formas de mejorar la interacción
          entre humanos y máquinas. Con experiencia en desarrollo full-stack y una mentalidad siempre en aprendizaje,
          disfruto explorando los límites de la creatividad y la lógica.
        </p>
      ),
    },
    {
      title: "Filosofía y Valores",
      content: (
        <ul className="list-disc list-inside text-text-secondary">
          <li>📌 Innovación y exploración tecnológica.</li>
          <li>⚡ Eficiencia y automatización en cada proceso.</li>
          <li>🧠 Aprendizaje continuo y mejora constante.</li>
          <li>🌎 Tecnología al servicio de la autosuficiencia y la sostenibilidad.</li>
        </ul>
      ),
    },
    {
      title: "Lo que me motiva",
      content: (
        <>
          <p className="text-text-secondary">
            Me fascinan las inteligencias artificiales y los sistemas distribuidos.
            Actualmente, estoy explorando Next.js.
          </p>
          <p className="text-text-secondary mt-4">
            Además, tengo una visión clara: lograr un equilibrio entre tecnología y autosuficiencia,
            integrando soluciones digitales con un enfoque práctico y sostenible.
          </p>
        </>
      ),
    },
    {
      title: "¿Hacia dónde voy?",
      content: (
        <p className="text-text-secondary">
          Me gustaría seguir desarrollando asistentes conversacionales inteligentes,
          optimizar procesos empresariales con IA generativa y, algún día,
          construir un espacio donde tecnología y naturaleza convivan en armonía.
          Porque la mejor innovación no es la que solo se desarrolla, sino la que se vive. 🚀
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background-dark py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-text-primary sm:text-5xl">
            About Me
          </h1>
          <p className="mt-4 text-xl text-text-secondary">
            Explorando la tecnología, la inteligencia artificial y la vida.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {aboutCards.map((card, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <h2 className="text-2xl font-semibold text-text-primary mb-4">
                  {card.title}
                </h2>
                {card.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
