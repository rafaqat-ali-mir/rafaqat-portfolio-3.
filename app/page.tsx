"use client";

import Link from "next/link";

const skills = [
  {
    title: "Microsoft Power Platform",
    items: [
      "Power Apps",
      "Model-Driven Apps",
      "Dataverse",
      "Power Automate",
      "Power Pages",
      "Business Process Flows",
    ],
  },
  {
    title: "Backend & Web Development",
    items: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "AI & Machine Learning",
    items: [
      "Python",
      "Google Colab",
      "Dataset Preparation",
      "Model Training",
      "Image Processing",
    ],
  },
  {
    title: "Tools & Engineering",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Object-Oriented Programming",
      "SDLC",
      "Testing & Troubleshooting",
    ],
  },
];

const projects = [
  {
    number: "01",
    category: "BUSINESS APPLICATION",
    title: "Client Services Management System",
    description:
      "A business application for managing clients, projects, tasks, time logs, and invoices, supported by automated notifications and workflow processes.",
    technologies: ["Power Apps", "Dataverse", "Power Automate"],
  },
  {
    number: "02",
    category: "BUSINESS APPLICATION",
    title: "Library Management System",
    description:
      "A library management solution using structured Dataverse data and Model-Driven Apps to organize information and support library-related processes.",
    technologies: ["Model-Driven Apps", "Dataverse", "Business Rules"],
  },
  {
    number: "03",
    category: "FINAL YEAR PROJECT",
    title: "Acoustic-Based Machine Fault Detection",
    description:
      "An academic project exploring acoustic signals for machine fault detection, with a focus on identifying equipment issues and supporting predictive maintenance.",
    technologies: ["Machine Learning", "Acoustic Signals", "Raspberry Pi"],
  },
  {
    number: "04",
    category: "GOVERNMENT DIGITIZATION",
    title: "Government Forms Digitization",
    description:
      "Supported the digitization of manual government department forms by contributing to web-based solutions, testing, and troubleshooting digital workflows.",
    technologies: ["Web Development", "Digital Solutions", "Testing"],
  },
  {
    number: "05",
    category: "MACHINE LEARNING",
    title: "Cancer Detection Using Medical Images",
    description:
      "Explored image-based cancer detection using medical images in Google Colab, including dataset preparation, model training, and evaluation.",
    technologies: ["Python", "Google Colab", "Machine Learning", "Image Processing"],
  },
];

const experiences = [
  {
    category: "CRM DEVELOPMENT",
    role: "CRM Developer Intern",
    company: "CODORA (Pvt.) Ltd.",
    location: "Islamabad, Pakistan",
    period: "Nov 2025 – Present",
    bullets: [
      "Develop and customize business applications using Power Apps, Dataverse, Model-Driven Apps, and Power Pages.",
      "Configure Dataverse tables, relationships, forms, views, business rules, and Business Process Flows.",
      "Build Power Automate workflows for notifications, approvals, task management, and process automation.",
      "Test and troubleshoot application configurations and workflows while collaborating with senior developers.",
    ],
    technologies: [
      "Power Apps",
      "Dataverse",
      "Power Automate",
      "Power Pages",
      "CRM",
    ],
  },
  {
    category: "GOVERNMENT DIGITIZATION",
    role: "Software Development",
    company: "Information Technology Board AJK",
    location: "Muzaffarabad, Pakistan",
    period: "Oct 2023 – Mar 2024",
    bullets: [
      "Supported the digitization of manual government department forms into web-based solutions.",
      "Assisted with development tasks, testing, troubleshooting, and improving digital workflows.",
      "Contributed to software development activities supporting the delivery of digital services.",
    ],
    technologies: [
      "Web Development",
      "Digital Transformation",
      "Testing",
      "Troubleshooting",
    ],
  },
  {
    category: "INDEPENDENT PROJECTS",
    role: "Independent AI/ML Developer",
    company: "Self-Learning & Occasional Freelance Projects",
    location: "Independent",
    period: "Ongoing",
    bullets: [
      "Explore machine learning concepts, datasets, model training, and evaluation through independent projects.",
      "Use Python and Google Colab to explore AI/ML solutions, including image-based cancer detection.",
      "Apply research and problem-solving skills to investigate technical approaches for project requirements.",
      "Occasionally work on independent or freelance-style projects to build practical skills.",
    ],
    technologies: [
      "Python",
      "Machine Learning",
      "Google Colab",
      "Dataset Analysis",
      "Model Evaluation",
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#090b10] text-white selection:bg-cyan-400/30 selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#090b10]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
          <Link
            href="/"
            className="shrink-0 text-lg font-bold tracking-tight sm:text-xl"
          >
            RAFAQAT ALI<span className="text-cyan-400">.</span>
          </Link>

          <div className="flex items-center gap-4 overflow-x-auto text-xs text-gray-400 sm:gap-6 sm:text-sm">
            <a className="transition hover:text-cyan-300" href="#about">
              About
            </a>
            <a className="transition hover:text-cyan-300" href="#experience">
              Experience
            </a>
            <a className="transition hover:text-cyan-300" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-cyan-300" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-cyan-300" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative isolate border-b border-white/[0.06] px-6">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="hero-glow absolute right-[8%] top-20 h-72 w-72 rounded-full bg-cyan-400/[0.09] blur-3xl" />
          <div className="absolute -left-32 top-52 h-72 w-72 rounded-full bg-blue-500/[0.06] blur-3xl" />
          <div className="hero-grid absolute inset-0 opacity-20" />
        </div>

        <div className="mx-auto grid min-h-[calc(90vh-72px)] max-w-6xl items-center gap-12 py-16 md:grid-cols-[1.15fr_0.85fr] md:gap-10 md:py-24">
          <div className="order-2 md:order-1">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-4 py-2 text-xs tracking-wide text-cyan-300 sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              SOFTWARE ENGINEER · PAKISTAN
            </div>

            <p className="mb-3 font-mono text-xs tracking-[0.25em] text-gray-500">
              HELLO, I'M
            </p>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Rafaqat
              <br />
              <span className="text-gray-500">Ali.</span>
            </h1>

            <h2 className="mt-7 max-w-xl text-xl font-medium leading-relaxed text-gray-200 sm:text-2xl">
              Building useful software.
              <span className="text-cyan-400">
                {" "}
                Automating what matters.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
              I'm a Software Engineering graduate working across Microsoft
              Power Platform, CRM solutions, backend development, and
              independent AI/ML projects. I enjoy turning real-world
              requirements into practical digital solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                Explore my work <span aria-hidden="true">↗</span>
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/60 hover:text-cyan-300"
              >
                Get in touch
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500 sm:text-sm">
              <span>Power Platform</span>
              <span className="text-cyan-400">/</span>
              <span>Web Development</span>
              <span className="text-cyan-400">/</span>
              <span>AI & ML</span>
            </div>
          </div>

          {/* Profile photo: place your image at public/profile.jpg */}
          <div className="order-1 flex justify-center md:order-2 md:justify-end">
            <div className="relative flex aspect-square w-full max-w-[330px] items-center justify-center sm:max-w-[390px]">
              <div className="absolute inset-1 rounded-full border border-cyan-400/10" />
              <div className="hero-orbit absolute inset-5 rounded-full border border-dashed border-cyan-400/20" />
              <div className="hero-glow absolute inset-12 rounded-full bg-cyan-400/15 blur-3xl" />

              <div className="relative h-[76%] w-[76%] overflow-hidden rounded-full border border-white/15 bg-[#111720] shadow-2xl shadow-cyan-950/40">
                <img
                  src="/profile.jpg"
                  alt="Rafaqat Ali — Software Engineer"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute right-0 top-[17%] rounded-xl border border-white/10 bg-[#10131a]/95 px-4 py-3 shadow-xl backdrop-blur-xl sm:right-[-2%]">
                <p className="text-[10px] tracking-wider text-gray-500">
                  CURRENT FOCUS
                </p>
                <p className="mt-1 text-xs font-medium text-cyan-300 sm:text-sm">
                  AI & Automation
                </p>
              </div>

              <div className="absolute bottom-[12%] left-0 rounded-xl border border-white/10 bg-[#10131a]/95 px-4 py-3 shadow-xl backdrop-blur-xl sm:left-[-3%]">
                <p className="text-[10px] tracking-wider text-gray-500">
                  BUILDING WITH
                </p>
                <p className="mt-1 text-xs font-medium text-white sm:text-sm">
                  Power Platform
                </p>
              </div>

              <div className="absolute bottom-[3%] right-[19%] flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/20 bg-[#10131a] text-sm font-bold text-cyan-300 shadow-lg shadow-cyan-950/30">
                AI
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 border-b border-white/[0.06] px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-cyan-400">
              01 / ABOUT
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Turning requirements into working solutions.
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="leading-8 text-gray-400">
              I have hands-on experience contributing to business applications,
              CRM solutions, and digital transformation projects. Alongside my
              work with Microsoft Power Platform, I continue to develop my
              backend development and AI/ML skills through independent projects.
            </p>
            <p className="mt-4 leading-8 text-gray-400">
              I enjoy understanding problems, learning new technologies, and
              collaborating with others to build practical, maintainable
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-24 border-b border-white/[0.06] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs tracking-[0.2em] text-cyan-400">
            02 / EXPERIENCE
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Where I've contributed
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-gray-400">
            Professional experience and independent work across business
            applications, digital solutions, and machine learning.
          </p>

          <div className="mt-10 space-y-5">
            {experiences.map((experience, index) => (
              <article
                key={experience.role}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.035] sm:p-8"
              >
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                  <div>
                    <p className="font-mono text-xs tracking-wider text-cyan-400">
                      {experience.category}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold">
                      {experience.role}
                    </h3>
                    <p className="mt-1 text-sm text-gray-400">
                      {experience.company}
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      {experience.location}
                    </p>
                  </div>
                  <span className="w-fit rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400">
                    {experience.period}
                  </span>
                </div>

                <ul className="mt-6 space-y-3 text-sm leading-7 text-gray-400">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-0.5 text-cyan-400">↳</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/[0.08] px-3 py-1.5 text-xs text-gray-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-24 border-b border-white/[0.06] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs tracking-[0.2em] text-cyan-400">
            03 / SKILLS
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Tools I work with
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-gray-400">
            Technologies and tools I use across business applications, web
            development, automation, and independent learning projects.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {skills.map((group) => (
              <article
                key={group.title}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition duration-300 hover:border-cyan-400/30"
              >
                <h3 className="text-base font-semibold">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 py-2 text-xs text-gray-400 transition hover:border-cyan-400/30 hover:text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-24 border-b border-white/[0.06] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs tracking-[0.2em] text-cyan-400">
            04 / PROJECTS
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Selected work
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-gray-400">
            A selection of academic, business application, and independent
            projects that reflect my interests and development experience.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/35 hover:bg-white/[0.035] sm:p-7"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-[10px] tracking-[0.16em] text-cyan-400 sm:text-xs">
                    {project.category}
                  </p>
                  <span className="font-mono text-xs text-gray-600">
                    {project.number}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold leading-snug transition group-hover:text-cyan-100">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/[0.08] px-3 py-1.5 text-xs text-gray-500"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm text-gray-500">
            More projects and source code will be added to GitHub over time.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs tracking-[0.2em] text-cyan-400">
            05 / CONTACT
          </p>
          <div className="mt-5 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">
                Let's build something useful.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-gray-400 sm:text-base">
                I'm open to opportunities in software development, Microsoft
                Power Platform, CRM solutions, and workflow automation. If you
                have a project, opportunity, or idea to discuss, feel free to
                reach out.
              </p>
            </div>
            <a
              href="mailto:rafaquatmir2002@gmail.com"
              className="w-fit rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              Email me ↗
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 border-t border-white/[0.08] pt-7">
            <a
              href="https://github.com/rafaqat-ali-mir"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/10 px-4 py-2.5 text-sm text-gray-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/rafaqat-a-49105b30a/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/10 px-4 py-2.5 text-sm text-gray-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
            >
              LinkedIn ↗
            </a>
            <a
              href="mailto:rafaquatmir2002@gmail.com"
              className="rounded-lg border border-white/10 px-4 py-2.5 text-sm text-gray-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
            >
              rafaquatmir2002@gmail.com
            </a>
          </div>

          <p className="mt-8 text-sm text-gray-500">Based in Pakistan</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] px-6 py-6">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 text-xs text-gray-500 sm:flex-row sm:items-center">
          <p>© 2026 Rafaqat Ali. All rights reserved.</p>
          <p>Designed & built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </main>
  );
}