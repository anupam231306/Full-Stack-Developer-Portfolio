import SignalLine from "./SignalLine";

const Education = () => {
  return (
    <section id="education" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#C9A14A] uppercase tracking-[0.3em] text-sm mb-3">
            My Academic Journey
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 dark:text-white">
            Education
          </h2>

          <div className="w-24 h-[2px] bg-[#C9A14A] mx-auto mt-6"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {/* B.Tech */}
         <div className="group relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#C9A14A] hover:shadow-[0_0_60px_rgba(201,161,74,0.35)]">
         <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#C9A14A]/10 via-transparent to-transparent"></div>
         <div className="relative z-10"></div>
           <div className="w-16 h-16 rounded-2xl bg-[#C9A14A]/10 flex items-center justify-center text-3xl mb-6 transition-all duration-500 group-hover:bg-[#C9A14A] group-hover:scale-110">
              🎓
            </div>

            <p className="text-sm uppercase tracking-widest text-[#C9A14A]">
              2024 - Present
            </p>

            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mt-3">
              Bachelor of Technology
            </h3>

            <p className="text-neutral-600 dark:text-neutral-300 mt-3">
              Computer Science & Engineering
            </p>

            <p className="text-neutral-500 dark:text-neutral-400 mt-2">
              Kashi Institute of Technology, Mirzapur
            </p>

            <div className="mt-8 pt-5 border-t border-neutral-200 dark:border-white/10 flex justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">
                University
              </span>

              <span className="text-neutral-900 dark:text-white font-semibold">
                AKTU
              </span>
            </div>

          </div>

          {/* 12th */}
          <div className="group relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#C9A14A] hover:shadow-[0_0_60px_rgba(201,161,74,0.35)]">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#C9A14A]/10 via-transparent to-transparent"></div>
          <div className="relative z-10"></div>

            <div className="w-16 h-16 rounded-2xl bg-[#C9A14A]/10 flex items-center justify-center text-3xl mb-6 transition-all duration-500 group-hover:bg-[#C9A14A] group-hover:scale-110">
              🏫
            </div>

            <p className="text-sm uppercase tracking-widest text-[#C9A14A]">
              2023 - 2024
            </p>

            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mt-3">
              Intermediate (Class XII)
            </h3>

            <p className="text-neutral-600 dark:text-neutral-300 mt-3">
              Science Stream
            </p>

            <p className="text-neutral-500 dark:text-neutral-400 mt-2">
              NIOS Board
            </p>

            <div className="mt-8 pt-5 border-t border-neutral-200 dark:border-white/10 flex justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">
                Percentage
              </span>

              <span className="text-neutral-900 dark:text-white font-semibold">
                83%
              </span>
            </div>

          </div>

          {/* 10th */}
          <div className="group relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#C9A14A] hover:shadow-[0_0_60px_rgba(201,161,74,0.35)]">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#C9A14A]/10 via-transparent to-transparent"></div>
          <div className="relative z-10"></div>

            <div className="w-16 h-16 rounded-2xl bg-[#C9A14A]/10 flex items-center justify-center text-3xl mb-6 transition-all duration-500 group-hover:bg-[#C9A14A] group-hover:scale-110">
              📚
            </div>

            <p className="text-sm uppercase tracking-widest text-[#C9A14A]">
              2020 - 2021
            </p>

            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mt-3">
              High School (Class X)
            </h3>

            <p className="text-neutral-600 dark:text-neutral-300 mt-3">
              General Education
            </p>

            <p className="text-neutral-500 dark:text-neutral-400 mt-2">
              CBSE Board
            </p>

            <div className="mt-8 pt-5 border-t border-neutral-200 dark:border-white/10 flex justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">
                Percentage
              </span>

              <span className="text-neutral-900 dark:text-white font-semibold">
                67%
              </span>
            </div>

          </div>

        </div>

        {/* Bottom Animated Line */}
        <div className="mt-24">
          <SignalLine />
        </div>

      </div>
    </section>
  );
};

export default Education;