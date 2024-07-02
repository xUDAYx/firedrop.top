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
              Your <ImgReveal src="/img/sad.gif"><span className="text-red-500 animate-pulse font-display font-bold">PROJECT</span></ImgReveal> is due, you not even started?
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
            We got you covered with <ImgReveal src="/img/build.gif"><span className="text-green-500 font-display animate-pulse font-bold">READY MADE</span></ImgReveal> projects. And hooks it up with matching research papers
            </p>
            <a className="animate-bounce mb-[200px] mt-8 text-2xl no-underline block" href="#fun">
              can't afford it? 😬
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
            All at <ImgReveal src="/img/dance.gif"><span className="text-pink-500 font-display animate-pulse font-bold">STUDENT-FRIENDLY</span></ImgReveal> prices that'll make your wallet do a happy dance!
            </p>
            <a className="animate-bounce mb-[200px] text-2xl no-underline block mt-8" href="/projects">
              gimme the loot 😎
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
            Got a killer idea but can't code? No sweat. Try <ImgReveal src="/img/speed.gif"><span className="text-yellow-500 font-display animate-pulse font-bold">PROJECT ON DEMAND!</span></ImgReveal> We'll turbocharge your concept into reality.
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
