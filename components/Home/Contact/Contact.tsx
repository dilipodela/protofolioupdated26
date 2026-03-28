import Link from 'next/link';
import React, { useState } from 'react';
import { BiEnvelope, BiLocationPlus, BiPhone } from 'react-icons/bi';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, mobile, message }),
    });

    if (res.ok) {
      setStatus('Message sent successfully!');
      setName('');
      setEmail('');
      setMobile('');
      setMessage('');
    } else {
      const errorData = await res.json();
      setStatus(`Failed to send message: ${errorData.error || 'Unknown error'}`);
    }
  };

  return (
    <div id="contactme" className="pt-16 pb-16">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">Schedule a call with me to see if i can help</h1>
          <p className="text-gray-400 mt-6 text-base sm:text-lg">Reach out to me today and lets discuss how I can help you achieve your goals.</p>
          <div className="mt-7">
            <div className="flex items-center space-x-3 mb-4">
              <BiPhone className="w-9 h-9 text-cyan-900" />
              <p className="text-xl font-bold text-gray-400">+91 9392763108</p>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <BiEnvelope className="w-9 h-9 text-cyan-900" />
              <p className="text-xl font-bold text-gray-400">odeladilipkumar20031230@gmail.com</p>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <BiLocationPlus className="w-9 h-9 text-cyan-900" />
              <p className="text-xl font-bold text-gray-400">SR Nagar , Hyderabad , Telangana , India</p>
            </div>
          </div>
          {/* social icons */}
          <div className="flex items-center mt-8 space-x-3">
            <div className="w-14 h-14 justify-center bg-blue-950/60 rounded-full flex items-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300">
              <FaFacebookF className="tetx-white w-6 h-6" />
            </div>
            <Link href="https://www.linkedin.com/in/dilipodela/" target="_blank">
              <div className="w-14 h-14 justify-center bg-blue-950/60 rounded-full flex items-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300">
                <FaLinkedin className="tetx-white w-6 h-6" />
              </div>
            </Link>
            <Link href="https://github.com/dilipodela" target="_blank">
              <div className="w-14 h-14 justify-center bg-blue-950/60 rounded-full flex items-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300">
                <FaGithub className="tetx-white w-6 h-6" />
              </div>
            </Link>
          </div>
        </div>
        {/* form */}
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="0" className="md:p-10 p-5 bg-[#131332] rounded-lg">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
              required
            />
            <input
              type="text"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-[10rem]"
              required
            ></textarea>
            <button type="submit" className="mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full">
              Send Message
            </button>
            {status && <p className="mt-4 text-white">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
