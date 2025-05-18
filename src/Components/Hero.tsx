import sphere from "../assets/sphere.png";
import circle from "../assets/circle.png";
import shade from "../assets/shade.png";
import diamond from "../assets/diamond.png";
import personIcon from "../assets/person-icon.png";
import shieldIcon from "../assets/shield-icon.png";
import stars from "../assets/star.png";
import ellipse from "../assets/ellipse.png";

const Hero = () => {
  return (
    <section className="pt-[170px] relative">
      <img
        src={ellipse}
        alt="Ellipse"
        width={1300}
        height={240}
        className="absolute left-1/2 transform -translate-x-1/2 top-3"
      />
      <div className="flex items-center justify-center gap-8 w-base mx-auto px-4 relative">
        <img
          src={stars}
          alt="Start"
          className="absolute -top-12 left-0 right-0"
        />
        <h1 className="font-extralight text-[40px] md:text-[60px] lg:text-[80px] 2xl:text-[95px] leading-[110%] tracking-[0.02em] text-right relative z-10">
          A financial <br className="md:block hidden" /> AI Assistant
        </h1>
        <div className="relative">
          <img
            src={sphere}
            alt="sphere"
            className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] 2xl:w-[462px] 2xl:h-[461px]"
          />
          <img
            src={shade}
            alt="Shade"
            className="absolute left-[40%] -bottom-20 transform -translate-x-1/2 w-[30px] h-[115px]"
          />
        </div>
        <h1 className="font-extralight text-[40px] md:text-[60px] lg:text-[80px] 2xl:text-[95px] leading-[110%] tracking-[0.02em] text-right">
          Predicts <br className="md:block hidden" /> Growth
        </h1>
      </div>
      <div className="w-base flex items-center justify-center mt-16 relative">
        <div
          className="w-[177px] h-[177px] bg-[#D3554E] rounded-full translate-x-2.5 flex items-center justify-center rotate-[30deg]"
          style={{
            backgroundImage: "linear-gradient(90deg,#D3554E 0%, #D9D9D9 30%)",
          }}
        >
          <div className="w-[170px] h-[172px] bg-[#D9D9D9] rounded-full flex items-center justify-center">
            <p className="text-black font-[400] text-[24px] text-center uppercase">
              Explore <br /> more
            </p>
          </div>
        </div>

        <div
          className="w-[426px] h-[426px] md:w-[726px] md:h-[726px] lg:w-[826px] lg:h-[826px] 2xl:w-[920px] 2xl:h-[920px]  bg-white rounded-full absolute -z-10 top-16 flex items-center justify-center"
          style={{
            backgroundImage:
              "linear-gradient(to bottom,#ffffff 0%, #000000 55%)",
          }}
        >
          <div className="w-[423px] h-[423px] md:w-[722px] md:h-[722px] lg:w-[822px] lg:h-[822px] 2xl:w-[917px] 2xl:h-[917px] bg-black rounded-full flex flex-col items-center ">
            <h3 className="text-[32px] text-[#DCA685] font-extralight mb-4 mt-48">
              About
            </h3>
            <p className="text-4xl leading-[140%] text-center font-extralight max-w-[640px]">
              {" "}
              CryptoYan is an AI that analyzes the market and finds the right
              moment to grow. you just join. it does the rest.
            </p>
          </div>
        </div>

        {/* Card 1 */}
        <div
          className="w-[253px] 2xl:w-[283px] h-[378px] absolute left-0 top-0 flex flex-col items-center justify-between pt-[18px] pb-[14px]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #363636 25.25%, #D3554E 82.01%)",
          }}
        >
          <h3 className="uppercase text-[#F4F4F4] text-2xl leading-[145%] font-semibold">
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

            <div className="w-[32px] h-[32px] bg-[#f4f4f4] flex items-center justify-center rounded-full absolute left-2 top-8">
              <img src={personIcon} alt="person icon" width={18} height={17} />
            </div>

            <div className="w-[98px] h-[32px] bg-[#f4f4f4] flex items-center justify-center rounded-full absolute -right-1/5 top-10">
              <p className="font-[400] text-[#323030] text-[12px] leading-[150%]">
                Grow Smarter
              </p>
            </div>

            <div className="w-[32px] h-[32px] bg-[#f4f4f4] flex items-center justify-center rounded-full absolute bottom-0">
              <img src={shieldIcon} alt="shield icon" width={18} height={17} />
            </div>
          </div>
          <h3 className="text-[32px] font-extralight leading-[140%] text-center uppercase text-[#E1DFDF]">
            // Phase 1
          </h3>

          <p className="mt-1 font-extralight  text-[18px] text-center leading-[150%]">
            CryptoYan is your pocket-
            <br />
            sized AI financial assistant.
          </p>
        </div>
        {/* Card 2 */}
        <div
          className="w-[253px] 2xl:w-[283px] h-[378px] absolute right-0 top-80 flex flex-col items-center justify-center pt-[18px] pb-[14px]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #363636 25.25%, #D3554E 82.01%)",
          }}
        >
          <h3 className="uppercase text-[#F4F4F4] text-2xl leading-[145%] font-semibold">
            Our feature
          </h3>

          <p className="pt-4 pb-5 text-xl leading-[150%] font-[275] text-center">
            You join. CryptoYan finds <br />
            the moment to act.
          </p>
          <img src={diamond} alt="Diamond" width={108} height={135} />

          <button
            className="mt-[14px] w-[230px] h-[52px] bg-[#433838] text-center text-xl leading-[145%] uppercase tracking-[-2%]"
            style={{
              backdropFilter: "blur(4px)",
            }}
          >
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
