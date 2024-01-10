import React, { lazy, Suspense } from "react";
import { MdLocalPostOffice } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaCode, FaTwitter } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";

const AboutItem = React.memo(
  lazy(() => import("../../../components/about/AboutItem"))
);
const AboutChart = React.memo(
  lazy(() => import("../../../components/about/AboutChart"))
);
const Note = React.memo(lazy(() => import("../../../components/about/Note")));
const Note2 = React.memo(lazy(() => import("../../../components/about/Note2")));
const Giude = React.memo(lazy(() => import("../../../components/about/Giude")));
const Ad = React.memo(lazy(() => import("../../../components/result/Ad")));
const Support = React.memo(
  lazy(() => import("../../../components/reusable/Support"))
);

const LazyAboutItem = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <AboutItem {...props} />
  </Suspense>
);

const LazyAboutChart = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <AboutChart {...props} />
  </Suspense>
);

const LazyNote = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Note {...props} />
  </Suspense>
);

const LazyNote2 = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Note2 {...props} />
  </Suspense>
);

const LazyGiude = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Giude {...props} />
  </Suspense>
);

const LazyAd = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Ad {...props} />
  </Suspense>
);

const LazySupport = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Support {...props} />
  </Suspense>
);

const About = () => {
  return (
    <div className="flex w-full flex-col justify-center pt-2 mb-5 items-center font-mono">
      <LazyNote />
      <div className="flex w-full flex-col md:flex-row mt-8 gap-4 md:gap-0 justify-start">
        <LazyAboutItem
          header={"total started tests"}
          num={"1.15"}
          num2={"billion"}
        />
        <LazyAboutItem
          header={"total time typing"}
          num={"938"}
          num2={"years"}
        />
        <LazyAboutItem
          header={"total completed tests"}
          num={"388"}
          num2={"million"}
        />
      </div>
      <LazyAboutChart />
      <LazyNote2
        head={"about"}
        desc={`  Monkeytype is a minimalistic and customizable typing test. It features
          many test modes, an account system to save your typing speed history,
          and user-configurable features such as themes, sounds, a smooth caret,
          and more. Monkeytype attempts to emulate the experience of natural
          keyboard typing during a typing test, by unobtrusively presenting the
          text prompts and displaying typed characters in-place, providing
          straightforward, real-time feedback on typos, speed, and accuracy. Test
          yourself in various modes, track your progress and improve your speed.
       `}
      />
      <LazyGiude
        head={"word set"}
        desc={
          "By default, this website uses the most common 200 words in the English language to generate its tests. You can change to an expanded set (1000 most common words) in the options, or change the language entirely."
        }
      />
      <LazyGiude
        head={"keybinds"}
        desc={
          "You can usetabandenter(or justtabif you have quick tab mode enabled) to restart the typing test. Open the command line by pressingctrl/cmd+shift+poresc- there you can access all the functionality you need without touching your mouse"
        }
      />
      <LazyGiude
        head={"stats"}
        desc={`wpm - total number of characters in the correctly typed words (including spaces), divided by 5 and normalised to 60 seconds.

raw wpm - calculated just like wpm, but also includes incorrect words.

acc - percentage of correctly pressed keys.

char - correct characters / incorrect characters. Calculated after the test has ended.

consistency - based on the variance of your raw wpm. Closer to 100% is better. Calculated using the coefficient of variation of raw wpm and mapped onto a scale from 0 to 100.`}
      />
      <LazyAd text={"Ad"} style={"w-[60%] h-[80px]"} />
      <LazyGiude
        head={"results screen"}
        desc={`After completing a test you will be able to see your wpm, raw wpm, accuracy, character stats, test length, leaderboards info and test info. (you can hover over some values to get floating point numbers). You can also see a graph of your wpm and raw over the duration of the test. Remember that the wpm line is a global average, while the raw wpm line is a local, momentary value. (meaning if you stop, the value is 0)`}
      />
      <LazyGiude
        head={"bug report or feature request"}
        desc={`If you encounter a bug, or have a feature request - join the Discord server, send me an email, a direct message on Twitter or create an issue on GitHub.`}
      />
      <LazyNote2
        head={"support"}
        desc={`Thanks to everyone who has supported this project. It would not be possible without you and your continued support.`}
      />
      <LazySupport
        icon={<GiTakeMyMoney />}
        text={"Support"}
        style={"w-[90%] h-[80px]"}
      />
      <LazyNote2
        head={"contact"}
        desc={`If you encounter a bug, have a feature request or just want to say hi - here are the different ways you can contact me directly.`}
      />
      <div className="w-full grid md:grid-cols-4 xs:grid-cols-1 sm:grid-cols-2 gap-4">
        <LazySupport
          icon={<MdLocalPostOffice />}
          text={"Email"}
          style={"px-8 py-5"}
        />
        <LazySupport
          icon={<FaTwitter />}
          text={"Twitter"}
          style={"px-8 py-5"}
        />
        <LazySupport
          icon={<BsDiscord />}
          text={"Discord"}
          style={"px-8 py-5"}
        />{" "}
        <LazySupport icon={<FaCode />} text={"Github"} style={"px-8 py-5"} />
      </div>
      <LazyAd text={"Ad"} style={"w-[60%] h-[80px]"} />
    </div>
  );
};

export default React.memo(About);
