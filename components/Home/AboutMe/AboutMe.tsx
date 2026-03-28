// 'use client'

// import React from 'react'
// import Image from 'next/image'

// const About = () => {
//   return (

//     // <section id="about" className="relative py-20 bg-gray-900 text-white">
//     //   <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-12">
        
//     //     {/* Image */}
//     //     <div className="flex-1 flex justify-center">
//     //       <Image
//     //         src="/images/dili.jpg"
//     //         alt="Dilip profile"
//     //         width={300}
//     //         height={300}
//     //         className="rounded-2xl shadow-lg border-4 border-cyan-400 object-cover"
//     //       />
//     //     </div>

//     //     {/* Text */}
//     //     <div className="flex-1">
//     //       <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-cyan-300">
//     //         About Me
//     //       </h2>
//     //       <p className="text-lg leading-relaxed text-gray-300 mb-6">
//     //         I’m <span className="font-semibold text-white">Dilip Kumar</span>, a
//     //         passionate <span className="text-cyan-300">Full-Stack Web Developer</span> 
//     //         who loves building real-world applications that solve problems and 
//     //         deliver value to businesses. I specialize in creating scalable, 
//     //         secure, and high-performing web solutions with modern technologies.
//     //       </p>

//     //       <p className="text-lg leading-relaxed text-gray-300 mb-8">
//     //         Over the past few years, I’ve worked on projects ranging from 
//     //         <span className="text-cyan-200"> SaaS platforms</span>, 
//     //         <span className="text-cyan-200"> e-commerce applications</span>, and 
//     //         <span className="text-cyan-200"> portfolio websites</span>. 
//     //         I enjoy working across both frontend and backend, and I’m always 
//     //         learning and exploring new tools to improve my development workflow.
//     //       </p>

//     //       {/* Skills / Highlights */}
//     //       <div className="grid grid-cols-2 gap-4 text-gray-300 mb-10">
//     //         <div className="bg-gray-800 p-4 rounded-xl shadow-md">
//     //           <h3 className="text-cyan-300 font-semibold">Frontend</h3>
//     //           <p className="text-sm">React, Next.js, Tailwind CSS</p>
//     //         </div>
//     //         <div className="bg-gray-800 p-4 rounded-xl shadow-md">
//     //           <h3 className="text-cyan-300 font-semibold">Backend</h3>
//     //           <p className="text-sm">Node.js, Express, MongoDB</p>
//     //         </div>
//     //         <div className="bg-gray-800 p-4 rounded-xl shadow-md">
//     //           <h3 className="text-cyan-300 font-semibold">Deployment</h3>
//     //           <p className="text-sm">Vercel, Render, Railway</p>
//     //         </div>
//     //         <div className="bg-gray-800 p-4 rounded-xl shadow-md">
//     //           <h3 className="text-cyan-300 font-semibold">Soft Skills</h3>
//     //           <p className="text-sm">Teamwork, Problem-Solving</p>
//     //         </div>
//     //       </div>

//     //       {/* Button */}
//     //       <button className="px-8 py-3.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-all duration-300 text-white font-medium">
//     //         Download Resume
//     //       </button>
//     //     </div>
//     //   </div>
//     // </section>
//   )
// }

// export default About




'use client';

import React from 'react';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen py-20 bg-gray-900 text-white flex items-center mt-40 mb-30 scroll-smooth"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-12">
        {/* Left image */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100" className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/dili.jpg"
            alt="About me"
            width={350}
            height={350}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Right content */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200" className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-300">
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Hi, I’m <span className="font-semibold text-white">Dilip</span>, a
            passionate web developer with expertise in building modern and
            scalable applications. I specialize in both frontend and backend,
            ensuring seamless user experiences and strong technical foundations.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            I thrive on solving real-world problems through clean code,
            innovative designs, and best practices. My focus is on creating
            applications that not only look good but also perform efficiently in
            production environments.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            Beyond coding, I’m constantly exploring new technologies and trends
            to stay ahead in this fast-paced industry. My goal is to grow as a
            full-stack developer and contribute to impactful projects that make
            a difference.
          </p>

          <button data-aos="fade-right" data-aos-anchor-placement="top-center"  className="px-8 py-3 rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 font-medium"  onClick={() => {
    const el = document.getElementById("contactme");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
