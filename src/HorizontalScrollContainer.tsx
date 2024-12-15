import React, { Children, ReactNode, useRef, useState } from "react";

interface HorizontalScrollContainerProps {
  children: ReactNode;
  scrollBehavior?: boolean;
  scrollSnapType?: boolean;
}

export const HorizontalScrollContainer: React.FC<HorizontalScrollContainerProps> = ({
  children,
  scrollBehavior = true,
  scrollSnapType = true,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) {
      return;
    }

    setIsDragging(true);
    setStartX(event.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) {
      return;
    }

    event.preventDefault();

    const x = event.pageX - (containerRef.current.offsetLeft || 0);
    const walk = x - startX;

    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const finishScroll = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={finishScroll}
      onMouseMove={handleMouseMove}
      onMouseUp={finishScroll}
      style={{
        ...scrollContainerStyle,
        scrollBehavior: scrollBehavior ? "smooth" : "auto",
        scrollSnapType: scrollSnapType ? "x mandatory" : "none",
      }}
    >
      {Children.map(children, (child, index) => (
        <div key={index} style={scrollItemStyle}>
          {child}
        </div>
      ))}
    </div>
  );
};

const scrollContainerStyle: React.CSSProperties & { "&:active": React.CSSProperties, "&::-webkit-scrollbar": React.CSSProperties } = {
  display: "flex",
  gap: "20px",
  height: "100%",
  overflowX: "auto",
  scrollbarWidth: "none",
  userSelect: "none",
  width: "100%",
  cursor: "grab",

  "&:active": {
    cursor: "grabbing",
  },

  "&::-webkit-scrollbar": {
    display: "none",
  },
};

const scrollItemStyle: React.CSSProperties = {
  alignItems: "center",
  display: "flex",
  flexShrink: 0,
  justifyContent: "center",
  scrollSnapAlign: "start",
};