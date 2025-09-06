import { AlixandreCard } from "./AlixandreCard";
import { RazielCard } from "./RazielCard";

export const DeveloperTeamSection = () => {
  return (
    <div className="px-8 lg:px-16 mb-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-red-500 font-mono text-lg tracking-[0.3em]">
            02
          </span>
          <span className="text-white/60 text-lg font-light block mb-4">
            開発者プロフィール
          </span>
          <h2 className="tech-title text-4xl lg:text-6xl font-black text-white mb-8">
            NOSSA EQUIPE
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <RazielCard />
          <AlixandreCard />
        </div>
      </div>
    </div>
  );
};
