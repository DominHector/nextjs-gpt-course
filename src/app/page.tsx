export default function Home() {
  return (
    <main className="min-h-screen bg-background-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-text-primary mb-6 tracking-tight">
          ¡Bienvenido a Mi web personal!
        </h1>
        <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
          Explora un mundo de posibilidades con mis proyectos y habilidades.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">

          <div className="card-base p-6 flex flex-col items-center">
            <div className="text-4xl mb-4">💬</div>
            <h2 className="text-xl font-semibold text-text-primary mb-2">Chatme</h2>
            <p className="text-text-secondary mb-4">Interactúa conmigo mediante un asistente conversacional AI</p>
            <a href="/chatme" className="button-base mt-auto hover:bg-primary-dark transition-colors">
              Comenzar Chat
            </a>
          </div>

          <div className="card-base p-6 flex flex-col items-center">
            <div className="text-4xl mb-4">💡</div>
            <h2 className="text-xl font-semibold text-text-primary mb-2">Sobre Mí</h2>
            <p className="text-text-secondary mb-4">Conoce más sobre mi trabajo y experiencia en tecnología</p>
            <a href="/about" className="button-base mt-auto hover:bg-primary-dark transition-colors">
              Descubrir Más
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
