import arrow from "../assets/Vector.png";
import stars from "../assets/star-reversed.png";
import ellipse from "../assets/ellipse.png";

const cardData = [
  {
    title: "Connect AI:",
    description: "Send your assets to CryptoYan AI Pool",
  },
  {
    title: "AI Market analysis:",
    description: "CryptoYan scans the market 24/7 using advanced algorithms.",
  },
  {
    title: "Strategic Growth::",
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
  <div className="w-[1120px] h-[314px] pt-[55px] pl-[55px] pb-[46px] border border-dashed border-[#737272] relative">
    <h3 className="text-[#e4e3e3] font-[275] text-[66px] leading-[110%]">
      //{title}
    </h3>
    <p className="mt-6 mb-10 text-[24px] font-[275]">{description}</p>
    <button className="text-[#c6c6c6] underline font-medium text-[24px] leading-[145%] uppercase flex items-center gap-3 hover:text-[#DCA685] transition-colors duration-300">
      Learn how <img src={arrow} alt="arrow" width={15} height={15} />
    </button>

    {/* Decorative triangle */}
    <div className="absolute -right-[2px] -top-[2px] w-[72px] h-[39px] overflow-hidden">
      <div
        className="absolute inset-0 bg-[#737272]"
        style={{ clipPath: "polygon(0 100%, 0 0, 100% 100%)" }}
      ></div>
      <div
        className="absolute inset-0 bg-[#000000]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
      ></div>
    </div>
  </div>
);

const HowItWorks = () => {
  return (
    <section className="relative w-base mt-[540px] ">
      <img
        src={stars}
        alt="Stars"
        className="absolute left-0 right-0 bottom-0 z-10"
      />

      <img
        src={ellipse}
        alt=""
        width={1400}
        height={126}
        className="absolute -left-[300px] top-12"
      />
      <img
        src={ellipse}
        alt=""
        width={1400}
        height={126}
        className="absolute -right-[300px] -bottom-[600px] -z-20"
      />
      <div className="w-full flex">
        <p className="text-[75px]">//</p>
        <div>
          <h3 className="text-[90px] font-[275] leading-[110%] text-[#E4E3E3]">
            How it works
          </h3>
          <p className="text-[24px] font-[275] leading-[150%] mt-8 mb-[70px]">
            Just connect your wallet and deposit your YAN tokens — that’s it.
            <br />
            CryptoYan monitors the market in real time and moves when growth is
            <br />
            most likely.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-end gap-20">
        {cardData.map((card, index) => (
          <HowItWorksCard
            key={index}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
