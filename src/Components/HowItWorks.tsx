import stars from "../assets/star-reversed.png";
import ellipse from "../assets/ellipse.png";

const cardData = [
  {
    title: "Connect AI:",
    description: "Send your assets to YANBOT AI Pool",
  },
  {
    title: "AI Market analysis:",
    description: "YANBOT scans the market 24/7 using advanced algorithms.",
  },
  {
    title: "Strategic Growth:",
    description: "When the time is right, it moves your tokens—automatically.",
  },
  {
    title: "Watch It Grow:",
    description: "Track performance in real-time with full transparency",
  },
];

const HowItWorksCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <section
    id="how-it-works"
    className="md:w-[1120px] md:h-[314px] w-full h-max md:pt-[55px] pt-[23px] md:pl-[55px] pl-[28px] md:pb-[46px] pb-[30px] md:pr-10 pr-4 border border-dashed border-[#737272] relative z-20"
  >
    <h3 className="text-[#e4e3e3] md:font-[275] font-[300] md:text-[66px] text-[24px] md:leading-[110%] leading-[140%]">
      {title}
    </h3>
    <p className="md:mt-6 mt-3 md:mb-10 mb-4 md:text-[24px] text-[15px] font-[275]">
      {description}
    </p>

    {/* <a href="https://t.me/tokenyan" target="_blank">
      <button
        className="
    text-[#c6c6c6] underline md:font-medium font-[500] md:text-[24px] text-[15px] md:leading-[145%] leading-[170%] uppercase 
    flex items-center gap-3 
    hover:text-[#DCA685] transition-colors duration-300
    group cursor-pointer
  "
      >
        Learn how
        <img
          src={arrow}
          alt="arrow"
          width={15}
          height={15}
          className="
      transform transition-transform duration-300 ease-in-out
      group-hover:translate-x-2
    "
        />
      </button>
    </a> */}

    {/* Decorative triangle */}
    <div className="absolute -right-[2px] -top-[2px] md:w-[72px] w-[42px] md:h-[39px] h-[21px] overflow-hidden">
      <div
        className="absolute inset-0 bg-[#737272]"
        style={{ clipPath: "polygon(0 100%, 0 0, 100% 100%)" }}
      ></div>
      <div
        className="absolute inset-0 bg-[#000000]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
      ></div>
    </div>
  </section>
);

const HowItWorks = () => {
  return (
    <section className="relative">
      <div className="relative w-base md:mt-[540px] mt-[220px]">
        <img
          src={ellipse}
          alt=""
          width={1400}
          height={126}
          className="absolute -left-[300px] top-[700px]"
        />
        <img
          src={stars}
          alt="Stars"
          className="absolute left-0 right-0 bottom-0 z-10"
        />

        <div className="w-full md:flex">
          <div>
            <h3 className="md:text-[90px] text-[32px] md:font-[275] font-[300] md:leading-[110%] leading-[130%] text-[#E4E3E3]">
              How it works
            </h3>
            <p className="md:text-[24px] text-base font-[275] leading-[150%] md:mt-8 mt-4 md:mb-[70px] mb-10">
              Just connect your wallet and deposit your YAN tokens — that’s it.
              <br />
              YANBOT monitors the market in real time and moves when growth is
              <br />
              most likely.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end sm:gap-20 gap-8">
          {cardData.map((card, index) => (
            <HowItWorksCard
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
