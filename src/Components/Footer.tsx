import ellipse from "../assets/ellipse.png";
import line from "../assets/line.png";
import star from "../assets/star.png";
import starReversed from "../assets/star-reversed.png";
import telegram from "../assets/telegram.png";
import x from "../assets/x.png";
import social from "../assets/social.png";
import sphere from "../assets/sphere.png";

const socials = [
  { icon: telegram, path: "" },
  { icon: social, path: "" },
  { icon: x, path: "https://x.com/yanbot_ai" },
];

const Footer = () => {
  return (
    <footer className="md:mt-[152px] relative overflow-hidden md:pb-10 pb-4 md:pl-0 pl-2">
      <img
        src={ellipse}
        alt="Ellipse"
        width={1700}
        height={480}
        className="absolute left-1/3 transform -translate-x-1/2 top-[-80px]"
      />

      <img
        src={sphere}
        alt="Sphere"
        className="absolute -left-14 opacity-20 top-10 md:block hidden"
      />
      <img
        src={sphere}
        alt="Sphere"
        width={220}
        height={220}
        className="absolute -right-10 bottom-0 opacity-20  md:hidden"
      />
      <img src={star} alt="Star" className="absolute left-0" />
      <img src={starReversed} alt="Star" className="absolute right-0" />

      <div className="w-base">
        <div className="mt-[84px] h-[250px] relative">
          <div className="flex items-start max-w-[728px] md:absolute md:right-20 ">
            <p className="text-[56px] md:block hidden">//</p>
            <div className="text-left">
              <h3 className="font-[275] md:text-[66px] text-[32px] md:leading-[110%] leading-[130%] text-[#e4e3e3]">
                <span className="md:hidden">//</span> Join Us
              </h3>
              <p className="font-[275] md:text-xl text-baes md:leading-[150%] leading-[170%] md:my-8 mt-3 mb-6 ">
                Connect with us on Telegram to get updates, ask questions, and
                see how others are growing with CryptoYan.
              </p>

              <a href="https://t.me/cryptoyan_chat" target="_blank">
                <button className="border border-white rounded-full md:w-[180px] md:h-[54px] w-[101px] h-[34px] sm:text-[24px] text-[13px] sm:font-[500] font-[400] sm:leading-[140%] leading-[170%] text-white hover:bg-[#DCA685]/20  transition-all duration-300 hover:scale-105   uppercase">
                  Let’s talk
                </button>
              </a>
            </div>
          </div>

          <div className="md:flex hidden absolute bottom-0 gap-[108px]">
            <a
              href=""
              className="text-xl font-[275] leading-[150%] text-[#e1dfdf] relative group transition-colors duration-300"
            >
              Terms and conditions
              <span className="block h-[1px] w-0 bg-[#e1dfdf] group-hover:w-full transition-all duration-300 ease-in-out absolute bottom-0 left-0"></span>
            </a>
            <a
              href=""
              className="text-xl font-[275] leading-[150%] text-[#e1dfdf] relative group transition-colors duration-300"
            >
              Privacy policy
              <span className="block h-[1px] w-0 bg-[#e1dfdf] group-hover:w-full transition-all duration-300 ease-in-out absolute bottom-0 left-0"></span>
            </a>
          </div>
        </div>
        <img src={line} alt="line" className="mt-10 md:block hidden" />

        <div className="flex items-center justify-between max-w-[1230px] mx-auto ">
          <div className="flex md:gap-6 gap-4">
            {socials.map((icon, i) => (
              <a href={icon.path} key={i} target="_blank">
                <button
                  className="group md:w-[90px] w-10 md:h-[90px] h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, #FFFFFF 0%, #161614 36.16%)",
                  }}
                >
                  <div className="md:w-[86px] w-9 md:h-[86px] h-9 bg-[#161614] rounded-full z-20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1d1d1b]">
                    <img
                      src={icon.icon}
                      alt="social"
                      width={42}
                      height={36}
                      className="md:block hidden transition-transform duration-300 group-hover:scale-110"
                    />
                    <img
                      src={icon.icon}
                      alt="social"
                      width={18}
                      height={16}
                      className="md:hidden transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </button>
              </a>
            ))}
          </div>

          <p className="font-poppins font-[275] text-[20px] leading-[150%] text-center md:block hidden">
            © {new Date().getFullYear()} All rights reserved ||
            support@cryptoyan.org
          </p>
        </div>
        <div className="relative z-30 md:hidden">
          <a
            href=""
            className="text-xl font-[275] leading-[150%] text-[#e1dfdf] block mt-[30px] mb-4 relative group transition-opacity duration-300"
          >
            Terms and conditions
            <span className="block h-[1px] w-0 bg-[#e1dfdf] group-hover:w-[70%] transition-all duration-300 ease-in-out absolute bottom-0 left-0"></span>
          </a>
          <a
            href=""
            className="text-xl font-[275] leading-[150%] text-[#e1dfdf] relative group transition-opacity duration-300"
          >
            Privacy policy
            <span className="block h-[1px] w-0 bg-[#e1dfdf] group-hover:w-full transition-all duration-300 ease-in-out absolute bottom-0 left-0"></span>
          </a>
        </div>

        <p className="md:hidden font-[275] text-[13px] leading-[170%] text-center mt-11">
          © {new Date().getFullYear()} All rights reserved ||
          support@cryptoyan.org
        </p>
      </div>
    </footer>
  );
};

export default Footer;
