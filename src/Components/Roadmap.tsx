import ellipse from "../assets/ellipse.png";
import line from "../assets/scrolled-line.png";
import settings from "../assets/settings.png";
import box from "../assets/box.png";
import loaunchValidation from "../assets/launch-validation.png";
import star from "../assets/star.png";
import starReversed from "../assets/star-reversed.png";

const Roadmap = () => {
  return (
    <section className="relative w-full">
      <img
        src={ellipse}
        alt=""
        className="absolute right-[-300px] top-[-580px] -z-20 w-[1400px] max-w-none pointer-events-none"
      />

      <div className="w-base mt-[220px]">
        <div className="flex items-start justify-end">
          <p className="text-[65px]">//</p>
          <div>
            <h3 className="text-[#e4e3e3] text-[72px] font-[275] leading-[110%] tracking-[-2%]">
              CryptoYan Roadmap
            </h3>

            <p className="text-[24px] leading-[150%] font-[275] mt-8">
              CryptoYan’s journey is just beginning — from AI optimization to
              multi-token
              <span className="md:block" /> support, every phase unlocks smarter
              investing. Our roadmap is built to evolve
              <span className="md:block" /> with the market, ensuring your
              growth never stands still.
            </p>
          </div>
        </div>

        <div className="mt-[150px] relative h-[2200px] ">
          <img
            src={ellipse}
            alt=""
            className="absolute left-[-300px] -top-[20px] -z-20 w-[1400px] max-w-none pointer-events-none"
          />
          <img
            src={ellipse}
            alt=""
            className="absolute -right-[300px] -bottom-[280px] -z-20 w-[1400px] max-w-none pointer-events-none"
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
          <img src={line} alt="Scrolled line" className="absolute right-0 " />

          <img
            src={settings}
            alt="Settings"
            width={520}
            height={460}
            className="absolute -top-[220px]"
          />
          <img
            src={loaunchValidation}
            alt="Launch Validation"
            width={433}
            height={400}
            className="absolute -right-[80px] top-[440px]"
          />
          <img
            src={box}
            alt="Box"
            width={508}
            height={525}
            className="absolute left-0 -bottom-[220px]"
          />

          {/* List 1 */}

          <div className="w-[718px] absolute right-20 top-28">
            <h3 className="text-[#e4e3e3] font-[275] text-6xl leading-[110%] tracking-[-2%]">
              //Q2 2025 – Launch & Validation
            </h3>

            <ul className="mt-8 list-disc flex flex-col gap-4 text-xl font-[275] leading-[150%]">
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

          <div className="w-[718px] absolute right-20 top-[800px]">
            <h3 className="text-[#e4e3e3] font-[275] text-6xl leading-[110%] tracking-[-2%]">
              //Q3 2025 – <span className="md:block" />
              Scale & Trust
            </h3>

            <ul className="mt-8 list-disc flex flex-col gap-4 text-xl font-[275] leading-[150%]">
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

          <div className="w-[718px] absolute right-20 bottom-[260px]">
            <h3 className="text-[#e4e3e3] font-[275] text-6xl leading-[110%] tracking-[-2%]">
              //Q4 2025 – Product <span className="md:block" />
              Expansion
            </h3>

            <ul className="mt-8 list-disc flex flex-col gap-4 text-xl font-[275] leading-[150%]">
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
