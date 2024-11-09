export default function SectionAbout() {
  return (
    <section className="  text-white flex flex-col lg:flex-row gap-8 items-center min-h-screen">
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-7xl font-bold">About Us</h2>
        <p className="text-2xl">
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
      <div className="lg:w-1/2 grid grid-cols-3 gap-4 mt-8 lg:mt-0">
        {/* Replace 'nft1.png' to 'nft6.png' with actual NFT images */}
        {[...Array(6)].map((_, index) => (
          <div key={index}>
            <img src={`/images/${index + 1}.jpg`} width={150} height={150} alt="NFT" className="rounded w-full" />
          </div>
        ))}
      </div>
    </section>
  );
}
