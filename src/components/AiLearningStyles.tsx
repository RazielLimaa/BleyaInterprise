export const AILearningStylesSection = () => {
  return (
    <style jsx>{`
      .scanner {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: linear-gradient(90deg, transparent, #0ff, transparent);
        animation: glitch-scan 3s linear infinite;
      }

      @keyframes glitch-scan {
        0% {
          transform: translate3d(0, -100vh, 0);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translate3d(0, 100vh, 0);
          opacity: 0;
        }
      }

      /* Updated all animations to 0.5s duration with orange-focused colors */
      @keyframes glitch-scan-chaos {
        0% {
          transform: translateY(-100vh) skew(0deg);
          opacity: 0;
          filter: hue-rotate(0deg);
        }
        5% {
          transform: translateY(-80vh) skew(15deg);
          opacity: 0.8;
          filter: hue-rotate(30deg) contrast(3);
        }
        10% {
          transform: translateY(-60vh) skew(-10deg);
          opacity: 1;
          filter: hue-rotate(60deg) saturate(5);
        }
        15% {
          transform: translateY(-40vh) skew(20deg);
          opacity: 0.6;
          filter: hue-rotate(15deg) brightness(3);
        }
        20% {
          transform: translateY(-20vh) skew(-15deg);
          opacity: 1;
          filter: hue-rotate(45deg) contrast(0.3);
        }
        25% {
          transform: translateY(0vh) skew(25deg);
          opacity: 0.4;
          filter: hue-rotate(20deg) saturate(8);
        }
        30% {
          transform: translateY(20vh) skew(-20deg);
          opacity: 1;
          filter: hue-rotate(40deg) brightness(0.2);
        }
        35% {
          transform: translateY(40vh) skew(30deg);
          opacity: 0.7;
          filter: hue-rotate(25deg) contrast(4);
        }
        40% {
          transform: translateY(60vh) skew(-25deg);
          opacity: 1;
          filter: hue-rotate(35deg) saturate(2);
        }
        45% {
          transform: translateY(80vh) skew(35deg);
          opacity: 0.5;
          filter: hue-rotate(50deg) brightness(4);
        }
        50% {
          transform: translateY(100vh) skew(-30deg);
          opacity: 0.8;
          filter: hue-rotate(10deg) contrast(0.1);
        }
        55% {
          transform: translateY(120vh) skew(40deg);
          opacity: 1;
          filter: hue-rotate(55deg) saturate(6);
        }
        60% {
          transform: translateY(140vh) skew(-35deg);
          opacity: 0.3;
          filter: hue-rotate(30deg) brightness(2.5);
        }
        65% {
          transform: translateY(160vh) skew(45deg);
          opacity: 0.9;
          filter: hue-rotate(40deg) contrast(2.8);
        }
        70% {
          transform: translateY(180vh) skew(-40deg);
          opacity: 0.6;
          filter: hue-rotate(20deg) saturate(4);
        }
        75% {
          transform: translateY(200vh) skew(50deg);
          opacity: 1;
          filter: hue-rotate(45deg) brightness(0.4);
        }
        80% {
          transform: translateY(220vh) skew(-45deg);
          opacity: 0.4;
          filter: hue-rotate(35deg) contrast(3.5);
        }
        85% {
          transform: translateY(240vh) skew(55deg);
          opacity: 0.8;
          filter: hue-rotate(25deg) saturate(7);
        }
        90% {
          transform: translateY(260vh) skew(-50deg);
          opacity: 1;
          filter: hue-rotate(50deg) brightness(3.2);
        }
        95% {
          transform: translateY(280vh) skew(60deg);
          opacity: 0.2;
          filter: hue-rotate(15deg) contrast(0.2);
        }
        100% {
          transform: translateY(300vh) skew(0deg);
          opacity: 0;
          filter: hue-rotate(0deg);
        }
      }

      @keyframes glitch-scan-horizontal {
        0% {
          transform: translateX(-100vw) skew(0deg, 0deg);
          opacity: 0;
          filter: hue-rotate(0deg);
        }
        10% {
          transform: translateX(-50vw) skew(0deg, 10deg);
          opacity: 0.6;
          filter: hue-rotate(30deg) contrast(2);
        }
        20% {
          transform: translateX(0vw) skew(0deg, -15deg);
          opacity: 1;
          filter: hue-rotate(45deg) saturate(3);
        }
        30% {
          transform: translateX(50vw) skew(0deg, 20deg);
          opacity: 0.4;
          filter: hue-rotate(20deg) brightness(2);
        }
        40% {
          transform: translateX(100vw) skew(0deg, -10deg);
          opacity: 0.8;
          filter: hue-rotate(40deg) contrast(0.5);
        }
        50% {
          transform: translateX(150vw) skew(0deg, 25deg);
          opacity: 1;
          filter: hue-rotate(25deg) saturate(4);
        }
        60% {
          transform: translateX(200vw) skew(0deg, -20deg);
          opacity: 0.3;
          filter: hue-rotate(35deg) brightness(3);
        }
        70% {
          transform: translateX(250vw) skew(0deg, 15deg);
          opacity: 0.7;
          filter: hue-rotate(15deg) contrast(3);
        }
        80% {
          transform: translateX(300vw) skew(0deg, -25deg);
          opacity: 1;
          filter: hue-rotate(50deg) saturate(5);
        }
        90% {
          transform: translateX(350vw) skew(0deg, 30deg);
          opacity: 0.5;
          filter: hue-rotate(30deg) brightness(0.3);
        }
        100% {
          transform: translateX(400vw) skew(0deg, 0deg);
          opacity: 0;
          filter: hue-rotate(0deg);
        }
      }

      /* Updated hover animations to run once for exactly 0.5 seconds */
      .glitch-text-apocalypse:hover {
        animation: glitch-text-apocalypse 0.2s ease-in-out forwards;
      }

      @keyframes glitch-text-apocalypse {
        0%,
        100% {
          transform: translate(0) scale(1);
          filter: none;
          clip-path: inset(0);
        }
        4% {
          transform: translate(-150px, 15px) skew(8deg) rotateZ(3deg) scale(1.1);
          filter: hue-rotate(30deg) contrast(5) saturate(8) brightness(4);
          clip-path: inset(20% 0 30% 0);
        }
        8% {
          transform: translate(120px, -20px) skew(-6deg) rotateZ(-2.5deg)
            scale(0.9);
          filter: hue-rotate(45deg) saturate(10) brightness(0.1) contrast(8);
          clip-path: inset(0 20% 0 30%);
        }
        12% {
          transform: translate(-80px, 25px) skew(10deg) rotateZ(4deg) scale(1.2);
          filter: hue-rotate(20deg) brightness(6) contrast(0.1) saturate(12);
          clip-path: inset(40% 0 10% 0);
        }
        16% {
          transform: translate(100px, -15px) skew(-8deg) rotateZ(-3deg)
            scale(0.8);
          filter: hue-rotate(40deg) contrast(10) saturate(2) brightness(0.05);
          clip-path: inset(0 40% 0 10%);
        }
        20% {
          transform: translate(-60px, 30px) skew(12deg) rotateZ(5deg) scale(1.3);
          filter: contrast(50) saturate(15) brightness(8) hue-rotate(25deg);
          clip-path: inset(15% 0 45% 0);
        }
        24% {
          transform: translate(90px, -25px) skew(-10deg) rotateZ(-4deg)
            scale(0.7);
          filter: contrast(0.05) saturate(0.1) brightness(10) hue-rotate(50deg);
          clip-path: inset(0 15% 0 45%);
        }
        30% {
          transform: translate(-40px, 20px) skew(6deg) rotateZ(2deg) scale(1.1);
          filter: brightness(5) hue-rotate(35deg) saturate(6) contrast(3);
          clip-path: inset(25% 0 25% 0);
        }
        36% {
          transform: translate(70px, -10px) skew(-4deg) rotateZ(-1.5deg)
            scale(0.95);
          filter: brightness(0.2) hue-rotate(15deg) contrast(6) saturate(8);
          clip-path: inset(0 25% 0 25%);
        }
        44% {
          transform: translate(-30px, 12px) skew(3deg) rotateZ(1deg) scale(1.05);
          filter: saturate(4) contrast(2.5) brightness(2.5) hue-rotate(45deg);
          clip-path: inset(35% 0 15% 0);
        }
        52% {
          transform: translate(50px, -8px) skew(-2deg) rotateZ(-0.8deg)
            scale(0.98);
          filter: saturate(0.2) contrast(0.3) brightness(0.4) hue-rotate(30deg);
          clip-path: inset(0 35% 0 15%);
        }
        60% {
          transform: translate(-20px, 8px) skew(2deg) rotateZ(0.5deg)
            scale(1.02);
          filter: brightness(3) hue-rotate(40deg) saturate(3) contrast(2);
          clip-path: inset(10% 0 40% 0);
        }
        70% {
          transform: translate(30px, -5px) skew(-1.5deg) rotateZ(-0.5deg)
            scale(0.99);
          filter: brightness(0.3) hue-rotate(20deg) contrast(4) saturate(5);
          clip-path: inset(0 10% 0 40%);
        }
        80% {
          transform: translate(-15px, 5px) skew(1deg) rotateZ(0.3deg)
            scale(1.01);
          filter: contrast(1.8) saturate(2.5) brightness(1.8) hue-rotate(35deg);
          clip-path: inset(20% 0 30% 0);
        }
        90% {
          transform: translate(20px, -3px) skew(-0.8deg) rotateZ(-0.3deg)
            scale(0.995);
          filter: contrast(0.6) saturate(0.4) brightness(0.6) hue-rotate(25deg);
          clip-path: inset(0 20% 0 30%);
        }
      }

      /* Updated card hover animation to run once for exactly 0.5 seconds */
      .glitch-card-apocalypse:hover .glitch-title-apocalypse {
        animation: glitch-title-apocalypse 0.5s ease-in-out forwards;
      }

      @keyframes glitch-title-apocalypse {
        0%,
        100% {
          transform: translate(0) scale(1);
          text-shadow: 0 0 20px rgba(251, 146, 60, 0.3);
          filter: none;
          clip-path: inset(0);
        }
        6% {
          transform: translate(25px, -25px) skew(8deg) rotateZ(3deg) scale(1.15);
          text-shadow: 15px 0 0 #ff6600, -15px 0 0 #ff9900, 0 0 50px #ffaa00,
            10px 10px 0 #ff4400;
          filter: hue-rotate(30deg) contrast(4) saturate(6);
          clip-path: inset(30% 0 20% 0);
        }
        12% {
          transform: translate(-20px, 20px) skew(-6deg) rotateZ(-2deg)
            scale(0.85);
          text-shadow: -12px 0 0 #ff4400, 12px 0 0 #ffaa00, 0 0 40px #ff6600,
            -8px -8px 0 #ff8800;
          filter: hue-rotate(45deg) saturate(8) brightness(3);
          clip-path: inset(0 30% 0 20%);
        }
        18% {
          transform: translate(18px, -18px) skew(5deg) rotateZ(2.5deg)
            scale(1.1);
          text-shadow: 10px 0 0 #ff5500, -10px 0 0 #ff9900, 0 0 35px #ffbb00,
            6px 6px 0 #ff3300;
          filter: contrast(6) saturate(4) brightness(0.3) hue-rotate(20deg);
          clip-path: inset(40% 0 10% 0);
        }
        24% {
          transform: translate(-15px, 15px) skew(-4deg) rotateZ(-2deg)
            scale(0.9);
          text-shadow: -8px 0 0 #ff7700, 8px 0 0 #ff9900, 0 0 30px #ff6600,
            -5px -5px 0 #ffaa00;
          filter: contrast(0.2) saturate(10) brightness(5) hue-rotate(40deg);
          clip-path: inset(0 40% 0 10%);
        }
        30% {
          transform: translate(12px, -12px) skew(3deg) rotateZ(1.5deg)
            scale(1.05);
          text-shadow: 6px 0 0 #ff4400, -6px 0 0 #ff8800, 0 0 25px #ffcc00,
            4px 4px 0 #ff2200;
          filter: hue-rotate(25deg) contrast(3) saturate(5);
          clip-path: inset(25% 0 35% 0);
        }
        40% {
          transform: translate(-10px, 10px) skew(-2.5deg) rotateZ(-1deg)
            scale(0.95);
          text-shadow: -5px 0 0 #ff6600, 5px 0 0 #ff9900, 0 0 20px #ff5500,
            -3px -3px 0 #ffaa00;
          filter: hue-rotate(35deg) saturate(7) brightness(2);
          clip-path: inset(0 25% 0 35%);
        }
        50% {
          transform: translate(8px, -8px) skew(2deg) rotateZ(0.8deg) scale(1.03);
          text-shadow: 4px 0 0 #ff3300, -4px 0 0 #ff7700, 0 0 18px #ffdd00,
            3px 3px 0 #ff1100;
          filter: contrast(2.5) saturate(3) brightness(1.5) hue-rotate(15deg);
          clip-path: inset(15% 0 45% 0);
        }
        60% {
          transform: translate(-6px, 6px) skew(-1.5deg) rotateZ(-0.6deg)
            scale(0.98);
          text-shadow: -3px 0 0 #ff5500, 3px 0 0 #ff8800, 0 0 15px #ff4400,
            -2px -2px 0 #ffbb00;
          filter: contrast(0.4) saturate(8) brightness(0.7) hue-rotate(50deg);
          clip-path: inset(0 15% 0 45%);
        }
        80% {
          transform: translate(5px, -5px) skew(1deg) rotateZ(0.4deg) scale(1.02);
          text-shadow: 3px 0 0 #ff2200, -3px 0 0 #ff6600, 0 0 12px #ffee00,
            2px 2px 0 #ff0000;
          filter: hue-rotate(30deg) contrast(2) saturate(2.5);
          clip-path: inset(35% 0 15% 0);
        }
      }

      /* Updated card container hover animation to run once for exactly 0.5 seconds */
      .glitch-card-apocalypse:hover {
        animation: card-glitch-apocalypse 0.2s ease-in-out forwards;
      }

      @keyframes card-glitch-apocalypse {
        0%,
        100% {
          filter: none;
          transform: translate(0) scale(1);
          clip-path: inset(0);
        }
        4% {
          filter: hue-rotate(30deg) contrast(4) saturate(8) brightness(3);
          transform: translate(8px, -8px) skew(4deg) rotateZ(2deg) scale(1.05);
          clip-path: inset(20% 0 30% 0);
        }
        8% {
          filter: hue-rotate(45deg) contrast(0.2) brightness(6) saturate(12);
          transform: translate(-6px, 6px) skew(-3deg) rotateZ(-1.5deg)
            scale(0.95);
          clip-path: inset(0 20% 0 30%);
        }
        12% {
          filter: saturate(15) brightness(0.1) contrast(8) hue-rotate(20deg);
          transform: translate(5px, 5px) skew(2.5deg) rotateZ(1.2deg)
            scale(1.03);
          clip-path: inset(40% 0 10% 0);
        }
        16% {
          filter: saturate(0.05) brightness(8) contrast(0.1) hue-rotate(50deg);
          transform: translate(-4px, -4px) skew(-2deg) rotateZ(-1deg)
            scale(0.97);
          clip-path: inset(0 40% 0 10%);
        }
        20% {
          filter: hue-rotate(35deg) contrast(6) brightness(2.5) saturate(6);
          transform: translate(4px, -4px) skew(1.8deg) rotateZ(0.8deg)
            scale(1.02);
          clip-path: inset(30% 0 20% 0);
        }
        24% {
          filter: hue-rotate(25deg) contrast(0.3) brightness(0.2) saturate(10);
          transform: translate(-3px, 3px) skew(-1.5deg) rotateZ(-0.6deg)
            scale(0.98);
          clip-path: inset(0 30% 0 20%);
        }
        30% {
          filter: saturate(8) brightness(4) contrast(3) hue-rotate(40deg);
          transform: translate(3px, 3px) skew(1.2deg) rotateZ(0.6deg)
            scale(1.015);
          clip-path: inset(25% 0 25% 0);
        }
        36% {
          filter: saturate(0.1) brightness(0.3) contrast(5) hue-rotate(15deg);
          transform: translate(-2.5px, -2.5px) skew(-1deg) rotateZ(-0.4deg)
            scale(0.985);
          clip-path: inset(0 25% 0 25%);
        }
        44% {
          filter: hue-rotate(45deg) contrast(2.5) saturate(4) brightness(2);
          transform: translate(2.5px, -2.5px) skew(0.8deg) rotateZ(0.4deg)
            scale(1.01);
          clip-path: inset(35% 0 15% 0);
        }
        52% {
          filter: hue-rotate(30deg) contrast(0.4) saturate(7) brightness(0.4);
          transform: translate(-2px, 2px) skew(-0.6deg) rotateZ(-0.3deg)
            scale(0.99);
          clip-path: inset(0 35% 0 15%);
        }
        60% {
          filter: brightness(3) hue-rotate(20deg) saturate(3) contrast(2.2);
          transform: translate(2px, 2px) skew(0.5deg) rotateZ(0.25deg)
            scale(1.008);
          clip-path: inset(15% 0 35% 0);
        }
        70% {
          filter: brightness(0.5) hue-rotate(50deg) contrast(3.5) saturate(5);
          transform: translate(-1.8px, -1.8px) skew(-0.4deg) rotateZ(-0.2deg)
            scale(0.992);
          clip-path: inset(0 15% 0 35%);
        }
        80% {
          filter: hue-rotate(35deg) contrast(2) brightness(1.8) saturate(2.5);
          transform: translate(1.8px, -1.8px) skew(0.3deg) rotateZ(0.15deg)
            scale(1.006);
          clip-path: inset(45% 0 5% 0);
        }
        90% {
          filter: hue-rotate(25deg) contrast(0.6) brightness(0.6) saturate(4);
          transform: translate(-1.5px, 1.5px) skew(-0.25deg) rotateZ(-0.12deg)
            scale(0.994);
          clip-path: inset(0 45% 0 5%);
        }
      }

      /* Updated additional glitch effects to run once for exactly 0.5 seconds */
      .glitch-line:hover {
        animation: line-glitch-chaos 0.2s ease-in-out forwards;
      }

      @keyframes line-glitch-chaos {
        0%,
        100% {
          transform: translate(0) scale(1);
          filter: none;
        }
        20% {
          transform: translate(5px, -5px) scale(1.2);
          filter: hue-rotate(30deg) saturate(3);
        }
        40% {
          transform: translate(-3px, 3px) scale(0.8);
          filter: hue-rotate(45deg) brightness(2);
        }
        60% {
          transform: translate(4px, 4px) scale(1.1);
          filter: contrast(4) saturate(5) hue-rotate(20deg);
        }
        80% {
          transform: translate(-2px, -2px) scale(0.9);
          filter: contrast(0.2) brightness(3) hue-rotate(40deg);
        }
      }

      .glitch-corner-1:hover,
      .glitch-corner-2:hover,
      .glitch-corner-3:hover,
      .glitch-corner-4:hover {
        animation: corner-glitch-extreme 0.2s ease-in-out forwards;
      }

      @keyframes corner-glitch-extreme {
        0%,
        100% {
          transform: translate(0) rotate(0deg) scale(1);
        }
        30% {
          transform: translate(3px, -3px) rotate(15deg) scale(1.3);
        }
        60% {
          transform: translate(-2px, 2px) rotate(-10deg) scale(0.7);
        }
        90% {
          transform: translate(2px, 2px) rotate(20deg) scale(1.1);
        }
      }

      .glitch-divider:hover {
        animation: divider-glitch-chaos 0.2s ease-in-out forwards;
      }

      @keyframes divider-glitch-chaos {
        0%,
        100% {
          transform: scaleX(1) scaleY(1);
          filter: none;
        }
        20% {
          transform: scaleX(2) scaleY(3);
          filter: hue-rotate(30deg) saturate(4);
        }
        40% {
          transform: scaleX(0.5) scaleY(0.3);
          filter: hue-rotate(45deg) brightness(3);
        }
        60% {
          transform: scaleX(1.5) scaleY(2);
          filter: contrast(5) saturate(6) hue-rotate(20deg);
        }
        80% {
          transform: scaleX(0.8) scaleY(0.6);
          filter: contrast(0.1) brightness(4) hue-rotate(40deg);
        }
      }
    `}</style>
  );
};
