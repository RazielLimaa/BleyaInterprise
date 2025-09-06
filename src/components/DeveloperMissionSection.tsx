export const DeveloperMissionSection = () => {
  return (
    <div className="px-8 lg:px-16 mb-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-mono text-lg tracking-[0.3em]">
            03
          </span>
          <span className="text-white/60 text-lg font-light block mb-4">
            チームミッション
          </span>
          <h2 className="tech-title text-4xl lg:text-6xl font-black text-white mb-8">
            NOSSA MISSÃO
          </h2>
        </div>

        <div className="tech-card bg-black/40 backdrop-blur-sm border border-white/20 p-12 lg:p-16 relative shadow-2xl">
          <div className="animated-border absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="tech-title text-3xl lg:text-4xl font-black text-white mb-6">
                SOLUÇÕES COMPLETAS PARA EMPRESAS
              </h3>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Combinamos nossas especialidades complementares para oferecer
                desenvolvimento full-stack de alta qualidade. Raziel cuida da
                experiência do usuário no frontend, enquanto Alixandre constrói
                a base sólida no backend.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-white/80">
                    Interfaces modernas e responsivas
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-white/80">
                    APIs robustas e escaláveis
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-white/80">Soluções personalizadas</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-black/30 p-6 border border-blue-500/30">
                <h4 className="text-blue-400 font-bold text-lg mb-2">
                  Frontend Excellence
                </h4>
                <p className="text-white/70 text-sm">
                  React, Tailwind CSS e as mais modernas tecnologias frontend
                </p>
              </div>
              <div className="bg-black/30 p-6 border border-green-500/30">
                <h4 className="text-green-400 font-bold text-lg mb-2">
                  Backend Power
                </h4>
                <p className="text-white/70 text-sm">
                  Python, Django e arquiteturas escaláveis para qualquer demanda
                </p>
              </div>
              <div className="bg-black/30 p-6 border border-orange-500/30">
                <h4 className="text-orange-400 font-bold text-lg mb-2">
                  Full-Stack Solutions
                </h4>
                <p className="text-white/70 text-sm">
                  Projetos completos do conceito ao deploy em produção
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
