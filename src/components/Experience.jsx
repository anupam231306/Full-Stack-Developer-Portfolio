import { motion } from "framer-motion";
import SignalLine from './SignalLine'
import Skills from "./Skills";
const experience = [
  {
    id: 1,
    role: "Frontend Development Intern",
    company: "LivetechINDIA",
    duration: "3 Months",
    type: "Internship",
    description:
      "Developed responsive web pages using HTML, CSS, JavaScript and React. Worked on modern UI components and improved website responsiveness.",
      Skills: ["HTML","JavaScript","CSS","Email.js"],
      github:"https://github.com/anupam231306",
      live:"anupamupadhyay-portfolio.netlify.app",
      certificate:"/livetech.pdf",
  },
  {
    id: 2,
    role: "Cloud Computing Intern",
    company: "IBM India Pvt. Ltd.",
    duration: "2 Months",
    type: "Internship",
    description:
      "Learned cloud computing fundamentals, IBM Cloud services, deployment concepts and AI-powered cloud technologies and creating chatbot using watsonx assistant.",
      Skills: ["IBM Cloud","AWS","Docker"],
      github:"https://github.com/anupam231306",
      certificate:"/ibm.pdf",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-white dark:bg-[#0B0B0B]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-[#C9A14A] font-semibold">
            My Journey
          </p>

          <h2 className="text-5xl font-bold text-neutral-900 dark:text-white mt-3">
            Experience
          </h2>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {experience.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow
              border border-neutral-200 dark:border-white/10
              rounded-xl
              bg-white dark:bg-white/5
              p-8
              min-h-[420px]
              flex flex-col
              justify-between
              transition-all duration-500
              hover:-translate-y-2
              hover:border-[#C9A14A]
              hover:shadow-[0_20px_60px_rgba(201,161,74,0.25)]"
            >

              <div className="flex flex-col md:flex-row md:justify-between">

                <div>

                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                    {item.role}
                  </h3>

                  <p className="text-[#C9A14A] text-lg mt-2">
                    {item.company}
                  </p>

                </div>

                <div className="mt-4 md:mt-0">

                  <span className="px-4 py-2 rounded-full bg-[#C9A14A]/10 text-[#C9A14A]">
                    {item.duration}
                  </span>

                </div>

              </div>

              <p className="mt-6 text-neutral-600 dark:text-neutral-300 leading-8">
                {item.description}
              </p>
              {/* Skills */}

<div className="flex flex-wrap gap-2 mt-6">
  {item.skills?.map((skill, index) => (
    <span
      key={index}
      className="px-3 py-1 rounded-md bg-[#C9A14A]/10 text-[#C9A14A] text-sm"
    >
      {skill}
    </span>
  ))}
</div>

{/* Buttons */}

<div className="flex gap-4 mt-6 flex-wrap">

  {item.github && (
    <a
      href={item.github}
      target="_blank"
      rel="noreferrer"
      className="px-4 py-2 rounded-lg bg-[#C9A14A] text-black"
    >
      GitHub
    </a>
  )}

  {item.live && (
    <a
      href={`https://${item.live}`}
      target="_blank"
      rel="noreferrer"
      className="px-4 py-2 rounded-lg border border-[#C9A14A] text-[#C9A14A]"
    >
      Live
    </a>
  )}

  {item.certificate && (
    <a
      href={item.certificate}
      target="_blank"
      rel="noreferrer"
      className="px-4 py-2 rounded-lg border border-white/20 text-white"
    >
      Certificate
    </a>
  )}

</div>

            </motion.div>

          ))}

        </div>
      </div>
      <SignalLine />
    </section>
  );
}