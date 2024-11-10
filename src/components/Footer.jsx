const Footer = () => {
  return (
    <div className="flex items-center justify-between text-white px-6 lg:px-16 xl:px-32 py-[20px]">
      <div className="text-[24px]">Doodles Apes 2024</div>
      <div className="flex items-center gap-4">
        <div>
          <svg
            width="31"
            height="33"
            viewBox="0 0 31 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.2115 14.088L29.6033 0.75H26.9032L17.0145 12.3307L9.1125 0.75H0L11.9475 18.264L0 32.25H2.7L13.1445 20.019L21.4898 32.25H30.6022L18.2115 14.088ZM14.5148 18.417L13.3043 16.6732L3.672 2.7975H7.81875L15.5903 13.9958L16.8008 15.7395L26.9055 30.297H22.7587L14.5148 18.417Z"
              fill="white"
            />
          </svg>
        </div>
        <div>
          <img src="/images/magicEden.png" className="w-[36px]" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
