import Footer from "../components/Footer";
import WLChecker from "../components/WLChecker";

const WLCheckerPage = () => {
  return (
    <div className="z-40 relative overflow-hidden">
      <svg
        width="1600"
        className="absolute top-0 w-full h-full object-cover"
        height="1053"
        viewBox="0 0 1600 1053"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_2_1326)">
          <path
            d="M0 0C0 0 67.0693 188.967 212.413 253.378C381.651 328.378 615.18 147.542 740.79 278.668C816.795 358.011 719.947 549.75 813.01 610.302C961.5 706.916 1017.3 525.698 1167.5 558.946C1399.5 610.302 1398.21 867.019 1600 834.095"
            stroke="url(#paint0_linear_2_1326)"
            stroke-width="100"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_2_1326"
            x="-427.11"
            y="-396.807"
            width="2415.16"
            height="1663.8"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="190"
              result="effect1_foregroundBlur_2_1326"
            />
          </filter>
          <linearGradient
            id="paint0_linear_2_1326"
            x1="127"
            y1="464.698"
            x2="1764.65"
            y2="408.409"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1E58FC" />
            <stop offset="0.346358" stop-color="#A427EB" />
            <stop offset="0.502868" stop-color="#D914E4" />
            <stop offset="0.720701" stop-color="#E10FA3" />
            <stop offset="1" stop-color="#F10419" />
          </linearGradient>
        </defs>
      </svg>
      <div className="z-30">
        <WLChecker />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};
export default WLCheckerPage;
