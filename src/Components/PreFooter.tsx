import ellipse from "../assets/ellipse.png";
const PreFooter = () => {
  return (
    <section className="relative mt-[520px]">
      <img
        src={ellipse}
        alt="Ellipse"
        width={1700}
        height={480}
        className="absolute left-1/2 transform -translate-x-1/2 top-[320px]"
      />
      <div className="w-base">
        <div className="max-w-[1360px] w-[98%] mx-auto h-[512px] border border-dashed border-[#737272] relative flex flex-col items-center justify-center text-center px-4">
          {/* Triangle Decorator */}
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

          {/* Text Content */}
          <h3 className="font-poppins font-[275] text-[72px] leading-[110%] text-white">
            AI-Powered Finance.. <span className="md:block" />
            Made Effortless.
          </h3>
          <p className="font-poppins font-[275] text-[24px] leading-[150%] text-[#dcdcdc] mt-6 max-w-[950px]">
            You don’t need to be a trader. Let CryptoYan do the hard work
            <span className="md:block" /> while you stay in control.
          </p>
          <button className="mt-10 text-white font-[275] w-[204px] rounded-full text-lg border border-white px-6 py-2 hover:bg-white hover:text-black transition">
            Learn How
          </button>
        </div>
      </div>
    </section>
  );
};

export default PreFooter;
