export const RazielCard = () => {
  return (
    <div className="developer-card tech-card bg-black/40 backdrop-blur-sm border border-white/20 p-10 relative shadow-2xl">
      <div className="animated-border absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-blue-500 to-cyan-500"></div>

      <div className="text-center mb-8">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">R</span>
        </div>
        <h3 className="tech-title text-4xl font-black text-white mb-2">
          RAZIEL
        </h3>
        <p className="text-blue-400 text-lg font-medium mb-2">
          Frontend Developer
        </p>
        <span className="text-white/60 text-sm">17 anos</span>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-blue-400 font-bold text-lg mb-3">
            Especialidades
          </h4>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 text-sm font-mono">
              React
            </span>
            <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 text-sm font-mono">
              Tailwind CSS
            </span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 text-sm font-mono">
              TypeScript
            </span>
            <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 text-sm font-mono">
              Next.js
            </span>
          </div>
        </div>

        <div>
          <h4 className="text-blue-400 font-bold text-lg mb-3">Foco</h4>
          <p className="text-white/80 leading-relaxed">
            Especializado em criar interfaces modernas e responsivas. Apaixonado
            por UX/UI e sempre buscando as melhores práticas em desenvolvimento
            frontend.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4">
          <div className="stat-item text-center">
            <span className="stat-number text-blue-400 text-2xl font-bold block">
              17
            </span>
            <span className="text-white/60 text-sm">Anos</span>
          </div>
          <div className="stat-item text-center">
            <span className="stat-number text-cyan-400 text-2xl font-bold block">
              100%
            </span>
            <span className="text-white/60 text-sm">Frontend</span>
          </div>
        </div>
      </div>
    </div>
  );
};
