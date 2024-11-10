import GradientHeading from "./GradientHeading";

export default function SectionAbout() {
  return (
    <section
      id="aboutus"
      className="text-white flex flex-col-reverse lg:flex-row gap-12 items-center py-16 px-6 lg:px-16 xl:px-32 min-h-screen"
    >
      {/* Text Section */}
      <div className="lg:w-1/2">
        <GradientHeading>About Us</GradientHeading>
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-8 lg:leading-9 mt-4">
          Welcome to D00dle Apes – the first-ever doodle-style NFT on the Ape
          Chain! We’re breaking new ground with this unique collection, merging
          vibrant colors, distinct expressions, and unmatched creativity to
          redefine the NFT space. As pioneers on Ape Chain, our mission is to
          deliver a playful and imaginative experience that lets collectors
          become part of something historic. Join us in celebrating the future
          with D00dle Apes, where each NFT isn't just a collectible – it's a
          piece of history.
        </p>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center mt-5 md:mt-0">
        <div className="w-full max-w-[250px]    sm:max-w-[300px] lg:max-w-[380px] mx-auto hover:-translate-y-5 transition-all ease-in-out">
          <img
            src={`/images/heroImg.png`}
            alt="NFT"
            className="rounded-lg  w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
