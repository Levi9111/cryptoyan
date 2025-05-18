import line from "../assets/line.png";
import star from "../assets/star.png";
import starReversed from "../assets/star-reversed.png";
import telegram from "../assets/telegram.png";
import x from "../assets/x.png";
import social from "../assets/social.png";
import sphere from "../assets/sphere.png";

const Footer = () => {
  return (
    <footer className="mt-[152px] relative overflow-hidden pb-12">
      <img
        src={sphere}
        alt="Sphere"
        className="absolute -left-14 opacity-20 top-10"
      />
      <img src={star} alt="Star" className="absolute left-0" />
      <img src={starReversed} alt="Star" className="absolute right-0" />

      <div className="w-base">
        <div className="mt-[84px] h-[250px] relative">
          <div className="flex items-start max-w-[728px] absolute right-20 ">
            <p className="text-[56px]">//</p>
            <div className="text-left">
              <h3 className="font-[275] text-[66px] leading-[110%] text-[#e4e3e3]">
                Join Us
              </h3>
              <p className="font-[275] text-xl leading-[150%] my-8 ">
                Connect with us on Telegram to get updates, ask questions, and
                see how others are growing with CryptoYan.
              </p>
              <button className="text-lg font-semibold border border-white rounded-full w-[180px] h-[54px] hover:bg-white hover:text-black transition uppercase">
                Let’s talk
              </button>
            </div>
          </div>

          <div className="absolute bottom-0  flex gap-[108px]">
            <a
              href=""
              className="text-xl font-[275] leading-[150%] text-[#e1dfdf]"
            >
              Terms and conditions
            </a>
            <a
              href=""
              className=" text-xl font-[275] leading-[150%] text-[#e1dfdf]"
            >
              Privacy policy
            </a>
          </div>
        </div>
        <img src={line} alt="line" className="mt-10" />

        <div className="flex items-center justify-between max-w-[1230px] mx-auto ">
          <div className="flex gap-6">
            {/* btn 1 */}
            <button
              className="w-[90px] h-[90px] rounded-full flex items-center justify-center cursor-pointer"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #FFFFFF 0%, #161614 36.16%)",
              }}
            >
              <div className="w-[86px] h-[86px] bg-[#161614] rounded-full z-20 flex items-center justify-center">
                <img src={telegram} alt="Telegram" width={42} height={36} />
              </div>
            </button>

            {/* btn 2 */}
            <button
              className="w-[90px] h-[90px] rounded-full flex items-center justify-center cursor-pointer"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #FFFFFF 0%, #161614 36.16%)",
              }}
            >
              <div className="w-[86px] h-[86px] bg-[#161614] rounded-full z-20 flex items-center justify-center">
                <img src={social} alt="Telegram" width={42} height={36} />
              </div>
            </button>

            {/* btn 3 */}
            <button
              className="w-[90px] h-[90px] rounded-full flex items-center justify-center cursor-pointer"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #FFFFFF 0%, #161614 36.16%)",
              }}
            >
              <div className="w-[86px] h-[86px] bg-[#161614] rounded-full z-20 flex items-center justify-center">
                <img src={x} alt="x" width={42} height={36} />
              </div>
            </button>
          </div>
          <p className="font-poppins font-[275] text-[20px] leading-[150%] text-center ">
            © {new Date().getFullYear()} All rights reserved ||
            support@cryptoyan.org
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
