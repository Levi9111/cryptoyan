const PreFooter = () => {
  return (
    <section className="relative md:mt-[520px] mt-14">
      <div className="w-base">
        <div className="max-w-[1360px] w-[98%] mx-auto md:h-[512px] h-[208px] border border-dashed border-[#737272] relative flex flex-col items-center justify-center text-center px-4">
          {/* Triangle Decorator */}
          <div className="absolute -right-[2px] -top-[2px]  md:w-[72px] w-[42px] md:h-[39px] h-[21px]  overflow-hidden">
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
          <h3 className="font-poppins font-[275] sm:text-[72px] text-[24px] sm:leading-[110%] leadig-[130%] text-white">
            AI-Powered Finance.
            <span className="block" />
            Made Effortless.
          </h3>
          <p className="font-poppins font-[275] sm:text-[24px] text-[15px] md:leading-[150%] leading-[130%] text-[#dcdcdc] md:mt-6 mt-[7px] max-w-[950px]">
            You don’t need to be a trader. Let YANBOT do the hard work
            <span className="md:block" /> while you stay in control.
          </p>
          <a href="https://t.me/tokenyan" target="_blank">
            <button className="md:mt-10 mt-4  font-[275] md:w-[204px] w-[104px] h-[34px] md:h-[66px] rounded-full md:text-lg text-[13px] border border-white  text-white hover:bg-[#DCA685]/20 hover:text-[#DCA685] transition-all duration-300 hover:scale-105">
              Learn How
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PreFooter;
