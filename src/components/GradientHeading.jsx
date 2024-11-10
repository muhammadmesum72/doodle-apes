export default function GradientHeading({ children }) {
  return (
    <div className="relative">
      <h1 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[72px] xl:text-[84px] z-20 bg-gradient-to-r from-[#1E58FC] via-[#D914E4] to-[#F10419] inline-block text-transparent bg-clip-text font-bold">
        {children}
      </h1>
    </div>
  );
}
