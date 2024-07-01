'use client';

import React from 'react';
import ScrollShow from '@/components/ui/scroll-show';
import ImgReveal from '@/components/ui/img-reveal';

const Body: React.FC = () => {
  return (
    <>
      <div className="text-center snap-proximity" id="start">
        <ScrollShow repeat>
          <a href="#truth" className="no-underline font-bold">
            <h2 className="bg-red-500 inline-block text-black px-8 py-4 text-6xl shadow-xl my-[1.25em]">Hard Truth</h2>
            <span className="animate-bounce text-5xl block">👇</span>
          </a>
        </ScrollShow>
      </div>

      <div className="md:h-screen grid place-content-center text-center relative" id="truth">
        <div>
          <ScrollShow repeat>
            <p className="text-5xl text-gray3 px-4">
              You <ImgReveal src="/img/sad.gif"><span className="text-red-500 animate-pulse font-display font-bold">CAN'T</span></ImgReveal> learn to code by watching videos
            </p>
          </ScrollShow>
          <ScrollShow>
            <a className="animate-bounce mt-14 mb-[200px] text-2xl no-underline block" href="#solution">
              i'm sad 😢
            </a>
          </ScrollShow>
        </div>
      </div>

      <div className="text-center md:h-screen grid place-content-center relative" id="solution">
        <div>
          <ScrollShow>
            <h2 className="bg-green-500 inline-block text-black px-8 py-4 text-6xl shadow-xl font-bold my-[1.25em]">Solution</h2>
          </ScrollShow>
          <ScrollShow>
            <p className="text-3xl text-[#6c7983] max-w-3xl ">
              Fireship is all about <ImgReveal src="/img/build.gif"><span className="text-green-500 font-display animate-pulse font-bold">PROJECT-BASED</span></ImgReveal> learning. I create short highly-focused videos that make learning to code addicting.
            </p>
            <a className="animate-bounce mb-[200px] mt-8 text-2xl no-underline block" href="#fun">
              but like how? 🤔
            </a>
          </ScrollShow>
        </div>
      </div>

      <div className="text-center md:h-screen grid place-content-center relative" id="fun">
        <div>
          <ScrollShow>
            <h2 className="bg-purple-500 inline-block text-black px-8 py-4 text-6xl shadow-xl font-bold my-[1.25em]">Have Fun</h2>
          </ScrollShow>
          <ScrollShow>
            <p className="text-3xl text-[#6c7983]  max-w-3xl  ">
              I built this one-of-a-kind learning platform to give you <ImgReveal src="/img/dance.gif"><span className="text-pink-500 font-display animate-pulse font-bold">DOPAMINE</span></ImgReveal> hits like XP and meme prizes for every little accomplishment
            </p>
            <a className="animate-bounce mb-[200px] text-2xl no-underline block mt-8" href="/price">
              every course starts free, try it out 🚀
          </a>
          </ScrollShow>
        </div>
      </div>

      <div className="text-center md:h-screen grid place-content-center relative" id="end">
        <div>
          <ScrollShow>
            <h2 className="bg-yellow-500 inline-block font-bold text-black px-8 py-4 text-6xl shadow-xl my-[1.25em]">Let's Go</h2>
          </ScrollShow>
          <ScrollShow>
            <p className="text-3xl text-[#6c7983] max-w-3xl">
              There's tons of free content here, so <ImgReveal src="/img/look.gif"><span className="text-yellow-500 font-display animate-pulse font-bold">PLAY</span></ImgReveal> around before you upgrade
            </p>
            <a className="animate-bounce mb-[200px] text-2xl no-underline block mt-8" href="/register">
						you're signed in, sweet 🤟
					  </a>
            
          </ScrollShow>
        </div>
      </div>
    </>
  );
};

export { Body };
