import sphere from "../assets/sphere.png";
import circle from "../assets/circle.png";
import shade from "../assets/shade.png";
import shadeMobile from "../assets/shade-mobile.png";
import diamond from "../assets/diamond.png";
import personIcon from "../assets/person-icon.png";
import shieldIcon from "../assets/shield-icon.png";
import stars from "../assets/star.png";
import ellipse from "../assets/ellipse.png";

const Hero = () => {
  return (
    <section className="md:pt-36 pt-6 relative">
      {/* Background ellipse */}
      <img
        src={ellipse}
        alt="Ellipse"
        width={1300}
        className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 top-3 z-[-1]"
      />
      <img
        src={ellipse}
        alt="Ellipse"
        width={490}
        className="sm:hidden absolute left-1/2 transform -translate-x-1/2 top-3 z-[-1]"
      />

      {/* Headline & Sphere */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 w-full max-w-[1440px] mx-auto px-4 relative text-center sm:text-right">
        <img
          src={stars}
          alt="Stars"
          className="absolute top-[-48px] left-1/2 transform -translate-x-1/2 sm:left-0 sm:translate-x-0"
        />

        {/* Headline (mobile) */}
        <h1 className="block sm:hidden text-3xl text-[#e4e3e3] leading-[130%] font-light">
          A financial AI
          <br /> Assistant Predicts
          <br /> Growth
        </h1>

        {/* Left text (desktop only) */}
        <h1 className="hidden sm:block font-extralight text-[40px] md:text-[60px] lg:text-[80px] 2xl:text-[95px] leading-[110%] tracking-[0.02em] text-right z-10">
          A financial <br className="md:block hidden" /> AI Assistant
        </h1>

        {/* Sphere Image */}
        <div className="relative">
          <img
            src={sphere}
            alt="Sphere"
            className="w-[180px] h-[180px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] 2xl:w-[462px] 2xl:h-[461px] translate-x-6 sm:translate-x-0 z-20 relative"
          />
          <img
            src={shade}
            alt="Shade"
            className="hidden sm:block absolute left-1/2 -bottom-16 transform -translate-x-1/2  sm:w-[30px] sm:h-[115px]"
          />
          <img
            src={shadeMobile}
            alt="Shade"
            className="sm:hidden absolute left-24  -bottom-7 transform  -translate-x-1 w-[12px] h-[60px] "
          />
        </div>

        {/* Right text (desktop only) */}
        <h1 className="hidden sm:block font-extralight text-[40px] md:text-[60px] lg:text-[80px] 2xl:text-[95px] leading-[110%] tracking-[0.02em] text-right">
          Predicts <br className="md:block hidden" /> Growth
        </h1>
      </div>

      {/* Central About Circle */}
      <div className="w-full flex items-center justify-center sm:mt-16 mt-3 relative px-4">
        <div
          className="w-[320px] h-[320px] sm:w-[520px] sm:h-[520px] md:w-[726px] md:h-[726px] bg-white rounded-full absolute -z-10 sm:top-16 top-10 flex items-center justify-center"
          style={{
            backgroundImage:
              "linear-gradient(to bottom,#ffffff 0%, #000000 55%)",
          }}
        >
          <div className="w-full h-full bg-black rounded-full flex flex-col items-center justify-center px-6 text-center">
            <h3 className="text-[24px] sm:text-[32px] text-[#DCA685] font-extralight mb-2 sm:mb-4 sm:mt-16 mt-0">
              About
            </h3>
            <p className="text-lg sm:text-2xl leading-[140%] font-extralight max-w-[640px]">
              CryptoYan is an AI that analyzes the market and finds the right
              moment to grow. You just join. It does the rest.
            </p>
          </div>
        </div>

        {/* Explore Button */}
        <div
          className="w-[99px] h-[99px] sm:w-[150px] sm:h-[150px] md:w-[177px] md:h-[177px] bg-[#D3554E] rounded-full md:translate-x-2.5 flex items-center justify-center rotate-[30deg] z-10"
          style={{
            backgroundImage: "linear-gradient(90deg,#D3554E 0%, #D9D9D9 30%)",
          }}
        >
          <div className="w-[96px] h-[96px] sm:w-[140px] sm:h-[140px] md:w-[170px] md:h-[172px] bg-[#D9D9D9] rounded-full flex items-center justify-center">
            <p className="text-black font-[400] text-sm sm:text-lg text-center uppercase">
              Explore <br /> more
            </p>
          </div>
        </div>
      </div>

      {/* Card 1: Mission */}
      <div
        className="hidden sm:flex flex-col items-center justify-between w-[90%] max-w-[283px] h-[378px] absolute left-4 top-0 md:left-0  pt-4 pb-3"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #363636 25.25%, #D3554E 82.01%)",
        }}
      >
        <h3 className="uppercase text-[#F4F4F4] text-lg sm:text-2xl font-semibold">
          Our mission
        </h3>
        <div
          className="w-[158px] h-[158px] rounded-full flex items-center justify-center relative"
          style={{
            background:
              "linear-gradient(180deg, #7A716F 0%, rgba(224, 207, 204, 0) 91.51%)",
          }}
        >
          <img src={circle} alt="Circle" width={138} height={138} />
          <div className="w-8 h-8 bg-[#f4f4f4] flex items-center justify-center rounded-full absolute left-2 top-8">
            <img src={personIcon} alt="person icon" width={18} height={17} />
          </div>
          <div className="w-[98px] h-8 bg-[#f4f4f4] flex items-center justify-center rounded-full absolute -right-8 top-10">
            <p className="text-xs text-[#323030]">Grow Smarter</p>
          </div>
          <div className="w-8 h-8 bg-[#f4f4f4] flex items-center justify-center rounded-full absolute bottom-0">
            <img src={shieldIcon} alt="shield icon" width={18} height={17} />
          </div>
        </div>
        <h3 className="text-lg sm:text-2xl font-extralight text-center uppercase text-[#E1DFDF]">
          // Phase 1
        </h3>
        <p className="text-sm sm:text-base font-extralight text-center leading-[150%]">
          CryptoYan is your pocket-
          <br />
          sized AI financial assistant.
        </p>
      </div>

      {/* Card 2: Feature */}
      <div
        className="hidden sm:flex flex-col items-center justify-center w-[90%] max-w-[283px] h-[378px] absolute right-4 top-[500px] sm:right-0 sm:top-[320px]  pt-4 pb-3"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #363636 25.25%, #D3554E 82.01%)",
        }}
      >
        <h3 className="uppercase text-[#F4F4F4] text-lg sm:text-2xl font-semibold">
          Our feature
        </h3>
        <p className="pt-4 pb-5 text-base sm:text-xl text-center font-[275]">
          You join. CryptoYan finds <br />
          the moment to act.
        </p>
        <img src={diamond} alt="Diamond" width={108} height={135} />
        <button className="mt-4 w-[80%] h-12 bg-[#433838] text-white text-sm sm:text-xl uppercase tracking-[-2%]">
          Learn more
        </button>
      </div>
    </section>
  );
};

export default Hero;
