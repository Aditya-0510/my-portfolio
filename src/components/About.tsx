import Image from "next/image";
import photo from "@/public/photo.jpg";

const About = () => {
  

  return (
    <section
      id="about"
      className="w-full py-28 bg-black text-gray-300 font-[Cinzel] relative overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 50px,
            rgba(212,175,55,0.5) 50px,
            rgba(212,175,55,0.5) 51px
          ), repeating-linear-gradient(
            90deg,
            transparent,
            transparent 50px,
            rgba(212,175,55,0.5) 50px,
            rgba(212,175,55,0.5) 51px
          )`,
        }}
      />

      {/* Left edge flame accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#7a0c0c] to-transparent opacity-60" />
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#7a0c0c] to-transparent opacity-60" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.4em] text-[#7a0c0c] uppercase mb-4">Sai Aditya</p>
          <h2 className="text-5xl font-bold text-[#d4af37] tracking-widest">
            The Chronicle
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#d4af37] opacity-50" />
            <div className="w-2 h-2 bg-[#d4af37] rotate-45 opacity-50" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#d4af37] opacity-50" />
          </div>
        </div>

        <div className="md:flex items-start gap-16">

          {/* Portrait */}
          <div className="md:w-1/3 flex flex-col items-center mb-14 md:mb-0 gap-8">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-b from-[#d4af37] via-[#7a0c0c] to-[#d4af37] opacity-30 blur-md" />
              <div className="w-64 h-64 rounded-full overflow-hidden border-2 border-[#d4af37] shadow-[0_0_40px_rgba(212,175,55,0.2)] relative z-10">
                <Image
                  src={photo}
                  alt="Sai Aditya"
                  width={256}
                  height={256}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              {/* Corner sigil ornaments */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-[#d4af37] z-20" />
              <div className="absolute -top-1 -right-1 w-4 h-4 border-r-2 border-t-2 border-[#d4af37] z-20" />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l-2 border-b-2 border-[#d4af37] z-20" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-[#d4af37] z-20" />
            </div>

            {/* Stats banner */}
            
          </div>

          {/* Bio */}
          <div className="md:w-2/3 space-y-8">

            {/* Scroll-style bio */}
            <div
              className="border border-[#2a2a2a] bg-[#080808] p-8 relative"
              style={{ boxShadow: 'inset 0 0 40px rgba(0,0,0,0.8)' }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-30" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-30" />

              <p className="text-base leading-8 text-gray-400">
  I&apos;m a full-stack developer who loves building{" "}
  <span className="text-[#d4af37]">clean, scalable web applications</span>
  {" "}— from thoughtful UIs to robust backend systems.
</p>

<div className="my-5 flex items-center gap-3">
  <div className="h-px flex-1 bg-[#1a1a1a]" />
  <div className="w-1 h-1 bg-[#7a0c0c] rotate-45" />
  <div className="h-px flex-1 bg-[#1a1a1a]" />
</div>

<p className="text-base leading-8 text-gray-400">
  I work primarily with{" "}
  <span className="text-[#d4af37]">React, Next.js, Tailwind CSS</span>
  {" "}and{" "}
  <span className="text-[#d4af37]">Node.js</span>
  {" "}— and I enjoy tackling algorithmic challenges alongside product work.
</p>

              <div className="my-5 flex items-center gap-3">
                <div className="h-px flex-1 bg-[#1a1a1a]" />
                <div className="w-1 h-1 bg-[#7a0c0c] rotate-45" />
                <div className="h-px flex-1 bg-[#1a1a1a]" />
              </div>

             <p className="text-base leading-8 text-gray-400">
  Outside of work, I participate in competitive programming and
  keep exploring new tools and technologies to stay sharp.
</p>
            </div>

            {/* Traits */}
            <div className="grid grid-cols-2 gap-3">
              {["Full Stack Developer", "Competitive Programmer", "API Architect", "UI Enthusiast"].map((trait) => (
                <div
                  key={trait}
                  className="border border-[#2a2a2a] bg-[#0a0a0a] px-5 py-3 text-sm text-[#888] tracking-widest hover:border-[#7a0c0c] hover:text-[#d4af37] transition-all duration-300 flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 bg-[#7a0c0c] rotate-45 flex-shrink-0" />
                  {trait}
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://www.linkedin.com/in/sai-aditya-10x/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-2 px-8 py-3 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition duration-300 tracking-widest text-sm group"
              style={{ boxShadow: '0 0 20px rgba(212,175,55,0.05)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Send a Raven
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;