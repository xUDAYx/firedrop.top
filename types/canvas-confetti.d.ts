declare module 'canvas-confetti' {
  interface ConfettiConfig {
    particleCount?: number;
    angle?: number;
    spread?: number;
    startVelocity?: number;
    decay?: number;
    gravity?: number;
    drift?: number;
    ticks?: number;
    origin?: {
      x?: number;
      y?: number;
    };
    colors?: string[];
    shapes?: ('square' | 'circle')[];
    scalar?: number;
    zIndex?: number;
    disableForReducedMotion?: boolean;
  }

  type ConfettiFunction = (config?: ConfettiConfig) => Promise<null>;

  const confetti: ConfettiFunction & {
    create: (canvas: HTMLCanvasElement, config?: ConfettiConfig) => ConfettiFunction;
    reset: () => void;
  };

  export default confetti;
} 