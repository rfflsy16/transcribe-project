"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Shape {
  id: number;
  x: number;
  y: number;
  size: number;
  depth: number;
  type: "circle" | "square" | "triangle";
  color: string;
}

const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEEAD"];

export default function ClientBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    const shapeTypes: ("circle" | "square" | "triangle")[] = [
      "circle",
      "square",
      "triangle",
    ];
    const newShapes = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 30 + 10,
      depth: Math.random() * 3 + 1,
      type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setShapes(newShapes);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${
            shape.type === "triangle"
              ? "triangle"
              : shape.type === "square"
              ? "rounded-sm"
              : "rounded-full"
          }`}
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            opacity: 0.6,
            backgroundColor:
              shape.type === "triangle" ? "transparent" : shape.color,
            borderBottom:
              shape.type === "triangle"
                ? `${shape.size}px solid ${shape.color}`
                : "none",
            borderLeft:
              shape.type === "triangle"
                ? `${shape.size / 2}px solid transparent`
                : "none",
            borderRight:
              shape.type === "triangle"
                ? `${shape.size / 2}px solid transparent`
                : "none",
          }}
          animate={{
            x: (mousePosition.x - 0.5) * 50 * shape.depth,
            y: (mousePosition.y - 0.5) * 50 * shape.depth,
            rotate: shape.type === "triangle" ? [0, 360] : 0,
          }}
          transition={{
            type: "tween",
            ease: "linear",
            duration: 0.2,
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        />
      ))}
    </div>
  );
}
