'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animasi hanya dipicu sekali
    threshold: 0.3 // Animasi akan dimulai ketika 50% elemen terlihat
  });

  return (
    <motion.div
      id="about"
      className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[15%]"
      ref={ref} // Referensi dari useInView
      initial={{ opacity: 0, y: 50 }} // Awal animasi
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // Animasi saat masuk
      transition={{ duration: 1.1 }} // Durasi animasi
    >
      <div className="mx-10 font-spacesemibold text-[40px] md:space-y-5 md:text-[80px] leading-tight text-center md:text-left">
        <p className="text-[#949686] font-spacesemibold text-lg">Introduction</p>
        <p className="font-spacesemibold text-2xl md:text-[42px] text-white">Hello !, I&apos;m Aditya Prastya, </p>
        <p className="font-spacesemibold text-2xl md:text-[42px] text-white underline">Web Programmer</p>
        <p className="font-spacesemibold text-2xl md:text-[42px] text-white">Based On Indonesia Bali </p>
        <p className="text-[#949686] text-lg md:text-2xl my-2">I’m Junior Front-End Web Programmer, Lived On Denpasar City, Bali. As a Front-End Web Programmer, Make me good at managing all components of a web application, from the User Interface to the User Experience.</p>
      </div>
      <div className="flex justify-center md:justify-end items-center">
        <Link href="https://github.com/Aditya-prastya16" target='_blank'>        
        <Image src="/stack.png" alt="Tech Stack Image" width={500} height={500} className="md:w-auto md:h-auto object-cover" />
        </Link>
      </div>
    </motion.div>
  );
};

export default About;
