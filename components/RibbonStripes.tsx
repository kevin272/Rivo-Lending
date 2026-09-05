export function RibbonStripes({ position = "right", className = "" }: { position?: "left" | "right", className?: string }) {
  return (
    <div className={`hidden md:block absolute inset-y-0 ${position === "right" ? "right-0" : "left-0"} w-[100px] md:w-[150px] lg:w-[200px] pointer-events-none  z-0 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/ribbon-stripes.png"
        className={`absolute top-0 h-full w-auto max-w-none opacity-50 ${position === "right" ? "right-0" : "left-0"} ${position === "left" ? "-scale-x-100" : ""}`}
        alt=""
      />
    </div>
  );
}
