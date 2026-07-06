type GearProps = {
  className?: string;
  teeth?: number;
};

export default function Gear({ className, teeth = 12 }: GearProps) {
  const toothAngle = 360 / teeth;
  const teethPaths = Array.from({ length: teeth }, (_, i) => {
    const angle = (i * toothAngle * Math.PI) / 180;
    const x = (50 + Math.cos(angle) * 42).toFixed(2);
    const y = (50 + Math.sin(angle) * 42).toFixed(2);
    return (
      <rect
        key={i}
        x={-6}
        y={-6}
        width={12}
        height={12}
        transform={`translate(${x}, ${y}) rotate(${i * toothAngle})`}
      />
    );
  });

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="currentColor">
        {teethPaths}
        <circle cx="50" cy="50" r="36" />
      </g>
      <circle cx="50" cy="50" r="26" fill="var(--color-void)" />
      <circle cx="50" cy="50" r="26" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="50" cy="50" r="7" fill="currentColor" />
    </svg>
  );
}
