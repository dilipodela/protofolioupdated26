import React from 'react';
import Image from 'next/image';

const Projects = () => {
  return (
    <div id="Projects" className="pt-16 pb-16">
        <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
            A small selection of recent <br /> <span className="text-cyan-300">Projects</span>
        </h1>
        <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
            {/* First Project */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-center"  
            >
                <Image
                src="/images/chandaimg.png"
                alt="img"
                width={800}
                height={650}
                className="rounded-lg"
 
                />
                <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
                    Ganesh Chanda Application
                </h1>
                <h1 className="pt-2 font-medium text-white/80">Next,Node,Express,MySql</h1>
            </div>




            {/* Secound Project */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="100">
                <Image
                src="/images/Diceimg.png"
                alt="img"
                width={800}
                height={650}
                className="rounded-lg"
 
                />
                <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
                    Dice Game Application
                </h1>
                <h1 className="pt-2 font-medium text-white/80">React</h1>
            </div>


            {/* Third Project */}
             <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
                <Image
                src="/images/feedbackimg.png"
                alt="img"
                width={800}
                height={650}
                className="rounded-lg"
 
                />
                <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
                    Feedbackform Application
                </h1>
                <h1 className="pt-2 font-medium text-white/80">React,Node,Mysql,Express</h1>
            </div>



              {/* Fourth Project */}
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="300">
                <Image
                src="/images/shoppingimg.png"
                alt="img"
                width={800}
                height={650}
                className="rounded-lg"
 
                />
                <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
                    Shooing Application
                </h1>
                <h1 className="pt-2 font-medium text-white/80">HTML,CSS,JavaScrit,React</h1>
            </div>
        </div>
    </div >
    


  )
}

export default Projects