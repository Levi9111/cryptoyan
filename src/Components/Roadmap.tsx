import ellipse from "../assets/ellipse.png";
import line from "../assets/scrolled-line.png";
import lineMobile from "../assets/scrolled-line-mobile.png";
import settings from "../assets/settings.png";
import box from "../assets/box.png";
import loaunchValidation from "../assets/launch-validation.png";
import star from "../assets/star.png";
import starReversed from "../assets/star-reversed.png";

const Roadmap = () => {
  return (
    <section id="roadmap" className="relative w-full ">
      <img
        src={ellipse}
        alt=""
        className="absolute right-[-300px] top-[-580px] -z-20 w-[1400px] max-w-none pointer-events-none md:block hidden"
      />

      <div className="w-base md:mt-[220px] mt-[59px] px-4 sm:px-0">
        <div className="flex items-start justify-end">
          <p className="text-[40px] sm:text-[65px] sm:block hidden">//</p>
          <div>
            <h3 className="text-[#e4e3e3] text-[28px] sm:text-[72px] font-[275]  leading-[1.2] sm:leading-[110%] tracking-[-1%] sm:tracking-[-2%]">
              <span className="sm:hidden">//</span>
              CAYANBOT Roadmap
            </h3>

            <p className="text-base sm:text-[24px] leading-[1.4] sm:leading-[150%] font-[275] mt-6 sm:mt-8">
              YANBOT’s journey is just beginning — from AI optimization to
              multi-token
              <span className="md:block" /> support, every phase unlocks smarter
              investing. Our roadmap is built to evolve
              <span className="md:block" /> with the market, ensuring your
              growth never stands still.
            </p>
          </div>
        </div>

        <div className="mt-[150px] relative sm:h-[2200px] h-[1300px] px-2 sm:px-0">
          <img
            src={ellipse}
            alt=""
            className="absolute left-[-300px] -top-[20px] -z-20 w-[1400px] max-w-none pointer-events-none md:block hidden"
          />
          <img
            src={ellipse}
            alt=""
            className="absolute -right-[300px] -bottom-[280px] -z-20 w-[1400px] max-w-none pointer-events-none md:block hidden"
          />
          <img
            src={star}
            alt="Star reversed"
            className="absolute left-0 -top-[300px]"
          />
          <img
            src={starReversed}
            alt="Star"
            className="absolute right-0 -bottom-[800px]"
          />
          <img
            src={line}
            alt="Scrolled line"
            className="absolute right-0 md:block hidden"
          />
          <img
            src={lineMobile}
            alt="Scrolled line"
            className="absolute w-full h-full left-0 right-0 md:hidden"
          />

          <img
            src={settings}
            alt="Settings"
            width={520}
            height={460}
            className="md:block hidden absolute -top-[220px]"
          />
          <img
            src={settings}
            alt="Settings"
            width={70}
            height={62}
            className="md:hidden absolute -top-[10px]"
          />
          <img
            src={loaunchValidation}
            alt="Launch Validation"
            width={433}
            height={400}
            className="absolute md:block hidden -right-[80px] top-[440px]"
          />
          <img
            src={loaunchValidation}
            alt="Launch Validation"
            width={82}
            height={76}
            className="absolute md:hidden -right-[8px] top-[680px]"
          />
          <img
            src={box}
            alt="Box"
            width={508}
            height={525}
            className="absolute md:block hidden left-0 -bottom-[220px]"
          />
          <img
            src={box}
            alt="Box"
            width={60}
            height={62}
            className="absolute md:hidden left-0 bottom-0"
          />

          {/* List 1 */}
          <div className="w-full sm:w-[718px] absolute right-0 sm:right-20 sm:top-28 top-20 px-2 sm:px-0">
            <h3 className="text-[#e4e3e3] font-[275] text-[23px] sm:text-6xl leading-[1.2] sm:leading-[110%] tracking-[-1%] sm:tracking-[-2%]">
              //Q2 2025 – Launch & Validation
            </h3>

            <ul className="mt-6 sm:ml-8 sm:mt-8 list-disc flex flex-col gap-3 sm:gap-4 text-[13px] sm:text-xl font-[275] leading-[1.4] sm:leading-[150%]">
              <li>Launch of YAN token on the TON blockchain</li>
              <li>Listing on DEX</li>
              <li>
                Community formation: Telegram group, first holders, early
                supporters
              </li>
              <li>
                MVP release: Telegram Chat Bot with test access to the AI pool
              </li>
              <li>
                Activation of profit-sharing mechanism via wallet connection
              </li>
              <li>
                First AI pool launched as a closed alpha group for early
                adopters
              </li>
            </ul>
          </div>

          {/* List 2 */}
          <div className="w-full sm:w-[718px] absolute -right-10 sm:right-20 top-[450px] sm:top-[800px] px-2 sm:px-0">
            <h3 className="text-[#e4e3e3] font-[275] text-[23px] sm:text-6xl leading-[1.2] sm:leading-[110%] tracking-[-1%] sm:tracking-[-2%]">
              //Q3 2025 – <span className="md:block" />
              Scale & Trust
            </h3>

            <ul className="mt-6 sm:ml-7 sm:mt-8 list-disc flex flex-col gap-3 sm:gap-4 text-[13px] sm:text-xl font-[275] leading-[1.4] sm:leading-[150%]">
              <li>Launch of participant verification modules</li>
              <li>
                Integration of live data and pool information into the website
              </li>
              <li>Partnerships with top influencers and Web3 communities</li>
              <li>
                Creation of a full-featured Telegram Mini App with an asset
                management interface
              </li>
            </ul>
          </div>

          {/* List 3 */}
          <div className="w-full sm:w-[718px] absolute right-0 sm:right-20 bottom-[120px] sm:bottom-[220px] px-2 sm:px-0">
            <h3 className="text-[#e4e3e3] font-[275] text-[23px] sm:text-6xl leading-[1.2] sm:leading-[110%] tracking-[-1%] sm:tracking-[-2%]">
              //Q4 2025 – Product <span className="md:block" />
              Expansion
            </h3>

            <ul className="mt-6 sm:ml-7 sm:mt-8 list-disc flex flex-col gap-3 sm:gap-4 text-[13px] sm:text-xl font-[275] leading-[1.4] sm:leading-[150%]">
              <li>Implementation of an AI agent with adaptive behavior</li>
              <li>
                Addition of new assets and multi-pool support to expand user
                options
              </li>
              <li>
                Introduction of user profiles: each connected wallet receives a
                unique account
              </li>
              <li>
                Progression system: accounts evolve based on user activity, pool
                participation, and completion of specific tasks
              </li>
              <li>
                Activation of profit-sharing mechanism via wallet connection
              </li>
              <li>
                Launch of a referral system: each user receives a personal link
                to invite others, with rewards tied to engagement level
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
