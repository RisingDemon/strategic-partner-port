import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type AnimationType = 
  | "fade-up" 
  | "fade-down" 
  | "fade-left" 
  | "fade-right" 
  | "zoom-in" 
  | "zoom-out"
  | "slide-up"
  | "slide-down";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
}

const animationClasses: Record<AnimationType, { initial: string; visible: string }> = {
  "fade-up": {
    initial: "opacity-0 translate-y-12",
    visible: "opacity-100 translate-y-0",
  },
  "fade-down": {
    initial: "opacity-0 -translate-y-12",
    visible: "opacity-100 translate-y-0",
  },
  "fade-left": {
    initial: "opacity-0 translate-x-12",
    visible: "opacity-100 translate-x-0",
  },
  "fade-right": {
    initial: "opacity-0 -translate-x-12",
    visible: "opacity-100 translate-x-0",
  },
  "zoom-in": {
    initial: "opacity-0 scale-90",
    visible: "opacity-100 scale-100",
  },
  "zoom-out": {
    initial: "opacity-0 scale-110",
    visible: "opacity-100 scale-100",
  },
  "slide-up": {
    initial: "opacity-0 translate-y-20",
    visible: "opacity-100 translate-y-0",
  },
  "slide-down": {
    initial: "opacity-0 -translate-y-20",
    visible: "opacity-100 translate-y-0",
  },
};

const AnimatedSection = ({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  threshold = 0.1,
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  const { initial, visible } = animationClasses[animation];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        isVisible ? visible : initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
