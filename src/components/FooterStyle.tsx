export const FooterStyleSection = () => {
  return (
    <style>{`
        .nav-link {
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .nav-link:hover {
          text-shadow: 0 0 20px rgba(251, 146, 60, 0.5);
          transform: translateX(8px) scale(1.02);
        }
        
        .nav-link::before {
          content: '';
          position: absolute;
          left: -10px;
          top: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #f97316);
          transform: translateY(-50%);
          transition: width 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .nav-link:hover::before {
          width: calc(100% + 20px);
        }
      `}</style>
  );
};
