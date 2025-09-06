export const DeveloperIntroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 lg:px-16 mb-32">
      <div className="max-w-6xl w-full text-center">
        <div className="tech-card bg-black/40 backdrop-blur-sm border border-white/20 p-12 lg:p-20 relative overflow-hidden shadow-2xl">
          <div className="animated-border absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500"></div>

          <span className="text-orange-500 font-mono text-lg tracking-[0.3em] block mb-4">
            01
          </span>
          <span className="text-white/60 text-xl font-light block mb-8">
            開発者チーム
          </span>

          <h1 className="tech-title text-6xl lg:text-8xl font-black text-white mb-6 tracking-tight">
            RAZIEL &
            <br />
            <span className="text-orange-500">ALIXANDRE</span>
          </h1>

          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8"></div>

          <p className="text-white/80 text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto">
            Dois desenvolvedores empenhados em criar sistemas e sites inovadores
            para empresas. Combinamos expertise em frontend e backend para
            entregar soluções completas e de alta qualidade.
          </p>
        </div>
      </div>
    </div>
  );
};
