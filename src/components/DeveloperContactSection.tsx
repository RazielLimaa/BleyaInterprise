export const DeveloperContactSection = () => {
  return (
    <div className="px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="tech-card bg-black/40 backdrop-blur-sm border border-white/20 p-12 lg:p-16 relative shadow-2xl">
          <div className="animated-border absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-orange-500 to-red-500"></div>

          <span className="text-orange-500 font-mono text-lg tracking-[0.3em] block mb-4">
            04
          </span>
          <span className="text-white/60 text-xl font-light block mb-8">
            接続
          </span>

          <h2 className="tech-title text-4xl lg:text-6xl font-black text-white mb-8">
            VAMOS TRABALHAR JUNTOS
          </h2>

          <p className="text-white/80 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            Prontos para transformar suas ideias em realidade. Entre em contato
            conosco para discutir seu próximo projeto e descobrir como podemos
            ajudar sua empresa a crescer.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-black/30 border border-blue-500/30 px-6 py-3 transition-colors hover:bg-blue-500/10">
              <span className="text-blue-400 font-mono text-sm">
                RAZIEL - FRONTEND
              </span>
            </div>
            <div className="bg-black/30 border border-green-500/30 px-6 py-3 transition-colors hover:bg-green-500/10">
              <span className="text-green-400 font-mono text-sm">
                ALIXANDRE - BACKEND
              </span>
            </div>
            <div className="bg-black/30 border border-orange-500/30 px-6 py-3 transition-colors hover:bg-orange-500/10">
              <span className="text-orange-400 font-mono text-sm">
                PROJETOS FULL-STACK
              </span>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-white/40 text-sm font-light">
              一緒に未来を築きましょう
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
