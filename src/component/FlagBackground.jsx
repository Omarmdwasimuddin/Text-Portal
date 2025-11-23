



export default function FlagBackground({ children }) {
  return (
    <div className="relative overflow-hidden bg-green-900 py-12 sm:py-12">
      {/* Red Circle with Pulse Animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full bg-red-600 opacity-90 animate-pulse"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}