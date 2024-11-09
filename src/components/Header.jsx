export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-blue-500 text-white">
      <div className="flex items-center">
        {/* NFT Icon */}
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-red-400 to-yellow-400">
          <span className="text-lg font-bold text-white">D00dle</span>
        </div>
      </div>
      <nav className="flex gap-4">
        <a href="#">
          <a className="hover:text-gray-300">Mint</a>
        </a>
        <a href="/WL-Checker">
          <a className="hover:text-gray-300">WL Checker</a>
        </a>
        <a
          href="https://twitter.com/D00dlesApes"
          className="hover:text-gray-300"
        >
          Contact Us
        </a>
        <a href="#faq">
          <a className="hover:text-gray-300">F.A.Q</a>
        </a>
        <a href="#team">
          <a className="hover:text-gray-300">Team</a>
        </a>
      </nav>
    </header>
  );
}
