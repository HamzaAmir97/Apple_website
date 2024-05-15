import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export const Hero = () => {
  useGSAP(() => {
    gsap.to('#hero', {
      opacity: 1,
      delay: 1.5,
    });
  }, []); // هذه هي المصفوفة التي تشير إلى تنفيذ الـ effect مرة واحدة

  return (
    <section
      id="hero"  // ✅ أضف الـ id هنا ليتعرف عليه gsap
      className="w-full h-screen nav-height bg-black relative opacity-0" // تبدأ بـ opacity 0
    >
      <div className="h-5/6 w-full flex-center flex-col">
        <p className="hero-title text-2xl font-bold text-white">
          iPhone 15 Pro
        </p>
      </div>
    </section>
  );
};

export default Hero;
