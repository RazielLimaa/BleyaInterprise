export const AlixandreCard = () => {
  return (
    <div className="developer-card tech-card bg-black/40 backdrop-blur-sm border border-white/20 p-10 relative shadow-2xl">
      <div className="animated-border absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-green-500 to-emerald-500"></div>

      <div className="text-center mb-8">
        <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">A</span>
        </div>
        <h3 className="tech-title text-4xl font-black text-white mb-2">
          ALIXANDRE
        </h3>
        <p className="text-green-400 text-lg font-medium mb-2">
          Backend Developer
        </p>
        <span className="text-white/60 text-sm">18 anos</span>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-green-400 font-bold text-lg mb-3">
            Especialidades
          </h4>
          <div className="flex flex-wrap gap-2">
            <span className="bg-green-500/20 text-green-400 px-3 py-1 text-sm font-mono">
              Python
            </span>
            <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 text-sm font-mono">
              Django
            </span>
            <span className="bg-green-500/20 text-green-400 px-3 py-1 text-sm font-mono">
              REST APIs
            </span>
            <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 text-sm font-mono">
              PostgreSQL
            </span>
          </div>
        </div>

        <div>
          <h4 className="text-green-400 font-bold text-lg mb-3">Foco</h4>
          <p className="text-white/80 leading-relaxed">
            Especializado em desenvolvimento backend robusto e escalável. Expert
            em Python e Django, focado em criar APIs eficientes e arquiteturas
            sólidas.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4">
          <div className="stat-item text-center">
            <span className="stat-number text-green-400 text-2xl font-bold block">
              18
            </span>
            <span className="text-white/60 text-sm">Anos</span>
          </div>
          <div className="stat-item text-center">
            <span className="stat-number text-emerald-400 text-2xl font-bold block">
              100%
            </span>
            <span className="text-white/60 text-sm">Backend</span>
          </div>
        </div>
      </div>
    </div>
  );
};
