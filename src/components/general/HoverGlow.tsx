import { ReactNode, useRef, useState } from "react";

const HoverGlowCard = ({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (divRef.current) {
      const bounds = divRef.current.getBoundingClientRect();
      setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
    }
  };

  return (
    <div
      ref={divRef}
      className={["relative overflow-hidden", className].join(" ")}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <div
        className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-300 size-20 absolute z-0 transition-opacity duration-500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{ top: position.y - 30, left: position.x - 30 }}
      />
      {children}
    </div>
  );
};

export default HoverGlowCard;
