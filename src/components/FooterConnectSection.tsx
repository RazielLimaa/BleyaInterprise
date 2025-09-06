export const FooterConnectSection = () => {
  return (
    <div>
      <h3 className="text-orange-300 text-sm font-medium mb-6 tracking-wider">
        Connect
      </h3>
      <div className="space-y-4">
        <a
          href="#"
          className="block text-orange-400 text-lg hover:text-orange-300 transition-all duration-300 group"
        >
          Instagram
          <span className="inline-block ml-2 transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300">
            ↗
          </span>
        </a>
        <a
          href="#"
          className="block text-orange-400 text-lg hover:text-orange-300 transition-all duration-300 group"
        >
          LinkedIn
          <span className="inline-block ml-2 transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300">
            ↗
          </span>
        </a>
      </div>
    </div>
  );
};
