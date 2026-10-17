"use client";

import Link from "next/link";

const skills = [
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
    title: "Portfolio & Web Technologies",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "GitHub",
      "Vercel"
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
    <main className="min-h-screen bg-[#090b10] text-white selection:bg-cyan-400/30 selection:text-white">      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/[0.20] bg-[#090b10]/65 backdrop-blur-xl transition-colors duration-300">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
          <Link
            href="/"
            className="shrink-0 text-lg font-bold tracking-tight sm:text-xl"
          >
            RAFAQAT ALI<span className="text-cyan-400">.</span>
          </Link>

          <div className="flex flex-wrap items-center justify-end gap-4 text-xs text-gray-400 sm:gap-6 sm:text-sm">
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

            <a
              href="/Rafaqat-Ali-CV.pdf"
              download="Rafaqat-Ali-CV.pdf"
              className="shrink-0 rounded-full border border-cyan-400/40 px-4 py-2 font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
            >
              Download CV ↓
            </a>
          </div>
        </div>
      </nav>



      {/* Hero */}
      <section
        id="home"
        className="relative isolate overflow-hidden border-b border-white/[0.06] px-6">
        {/* Ambient background */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="hero-glow absolute right-[5%] top-16 h-80 w-80 rounded-full bg-cyan-400/[0.10] blur-[100px]" />
          <div className="absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-blue-500/[0.07] blur-[100px]" />
          <div className="hero-grid absolute inset-0 opacity-20" />
        </div>

        <div className="mx-auto grid min-h-[calc(90vh-72px)] max-w-6xl items-center gap-14 py-16 sm:py-20 md:grid-cols-[1.12fr_0.88fr] md:gap-10 md:py-24 lg:gap-16">
          {/* Introduction */}
          <div className="order-2 md:order-1">
            <div className="mb-7 inline-flex max-w-full flex-wrap items-center gap-2.5 rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-4 py-2.5 text-[10px] font-medium tracking-[0.12em] text-cyan-300 sm:text-xs sm:tracking-[0.16em]">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              SOFTWARE ENGINEER <span className="text-gray-600">/</span> AI & ML
            </div>

            <p className="mb-4 font-mono text-[11px] tracking-[0.3em] text-gray-500 sm:text-xs">
              HELLO, I'M
            </p>

            <h1 className="text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-8xl">
              Rafaqat
              <br />
              <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-600 bg-clip-text text-transparent">
                Ali<span className="text-cyan-400">.</span>
              </span>
            </h1>

            <h2 className="mt-7 max-w-xl text-xl font-medium leading-relaxed tracking-tight text-gray-100 sm:text-2xl lg:text-[27px]">
              Turning ideas into
              <span className="text-cyan-400"> meaningful solutions.</span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
              I'm a versatile Software Engineer passionate about building
              practical solutions through software development, automation,
              and AI/ML. I enjoy solving real-world problems, exploring new
              technologies, and turning ideas into impactful digital
              experiences.
            </p>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-[#071014] shadow-lg shadow-cyan-950/20 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-cyan-400/20 sm:px-6"
              >
                Explore my work
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 bg-white/[0.02] px-5 py-3 text-sm font-medium text-gray-200 transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.05] hover:text-white sm:px-6"
              >
                Let's connect
              </a>

              <a
                href="/Rafaqat-Ali-CV.pdf"
                download="Rafaqat-Ali-CV.pdf"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-cyan-400/20 px-5 py-3 text-sm font-medium text-cyan-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/[0.06] sm:px-6"
              >
                Download CV <span aria-hidden="true">↓</span>
              </a>
            </div>

            {/* Core areas */}
            <div className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-gray-500 sm:gap-x-4 sm:text-sm">
              <span className="transition-colors hover:text-cyan-300">
                Software Development
              </span>
              <span className="text-cyan-400/70">/</span>
              <span className="transition-colors hover:text-cyan-300">
                AI & Machine Learning
              </span>
              <span className="text-cyan-400/70">/</span>
              <span className="transition-colors hover:text-cyan-300">
                Automation
              </span>
            </div>
          </div>

          {/* Profile visual */}
          <div className="order-1 flex justify-center md:order-2 md:justify-end">
            <div className="relative flex aspect-square w-full max-w-[300px] items-center justify-center sm:max-w-[360px] lg:max-w-[420px]">
              {/* Outer rings */}
              <div className="absolute inset-1 rounded-full border border-cyan-400/[0.12]" />
              <div className="hero-orbit absolute inset-5 rounded-full border border-dashed border-cyan-400/20" />
              <div className="absolute inset-10 rounded-full border border-white/[0.04]" />

              {/* Ambient image glow */}
              <div className="hero-glow absolute inset-[18%] rounded-full bg-cyan-400/[0.15] blur-3xl" />

              {/* Image frame */}
              <div className="relative h-[74%] w-[74%] overflow-hidden rounded-full border border-white/15 bg-[#111720] shadow-2xl shadow-cyan-950/40">
                <img
                  src="/profile.jpg"
                  alt="Rafaqat Ali — Software Engineer"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/[0.08]" />
              </div>

              {/* Focus card */}
              <div className="absolute right-0 top-[15%] rounded-2xl border border-white/10 bg-[#10131a]/90 px-4 py-3 shadow-xl shadow-black/20 backdrop-blur-xl sm:right-[-2%] sm:px-5">
                <p className="text-[9px] tracking-[0.18em] text-gray-500 sm:text-[10px]">
                  CURRENT INTEREST
                </p>
                <p className="mt-1.5 text-xs font-medium text-cyan-300 sm:text-sm">
                  AI & Machine Learning
                </p>
              </div>

              {/* Technology card */}
              <div className="absolute bottom-[12%] left-0 rounded-2xl border border-white/10 bg-[#10131a]/90 px-4 py-3 shadow-xl shadow-black/20 backdrop-blur-xl sm:left-[-3%] sm:px-5">
                <p className="text-[9px] tracking-[0.18em] text-gray-500 sm:text-[10px]">
                  PROFESSIONAL EXPERIENCE
                </p>
                <p className="mt-1.5 text-xs font-medium text-white sm:text-sm">
                  Power Platform & CRM
                </p>
              </div>

              {/* Floating accent */}
              <div className="absolute bottom-[3%] right-[17%] flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/20 bg-[#10131a] text-sm font-bold text-cyan-300 shadow-lg shadow-cyan-950/30">
                AI
              </div>

              {/* Decorative dots */}
              <div className="absolute left-[17%] top-[15%] h-1.5 w-1.5 rounded-full bg-cyan-300/70 shadow-[0_0_12px_rgba(103,232,249,0.6)]" />
              <div className="absolute bottom-[23%] right-[5%] h-1 w-1 rounded-full bg-white/50" />
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
              I’m a versatile Software Engineer with a broad technical foundation and a passion for building impactful digital solutions.
              From software development and business applications to CRM systems, workflow automation, and AI/ML projects, I enjoy exploring
              challenges, connecting ideas, and turning complex requirements into practical results. I bring an adaptable mindset, strong problem-solving skills,
              and a commitment to continuous improvement—combining technical knowledge, creativity, and a solution-oriented approach to deliver value across diverse projects.

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
      <section
        id="experience"
        className="scroll-mt-24 border-b border-white/[0.06] px-6 py-24 sm:py-28"
      >
        <div className="mx-auto max-w-6xl">
          {/* Section heading */}
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs tracking-[0.22em] text-cyan-400">
                02 / EXPERIENCE
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Experience that <span className="text-gray-500">builds.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                My journey across software development, business applications,
                digital transformation, and independent technical projects.
              </p>
            </div>

            <div className="hidden shrink-0 pb-1 font-mono text-xs text-gray-600 sm:block">
              MY JOURNEY <span className="text-cyan-400">↘</span>
            </div>
          </div>

          {/* Experience timeline */}
          <div className="relative mt-12 space-y-6 sm:mt-14">
            {/* Timeline line */}
            <div className="absolute bottom-10 left-[19px] top-8 hidden w-px bg-gradient-to-b from-cyan-400/50 via-white/10 to-transparent sm:block" />

            {experiences.map((experience, index) => (
              <article
                key={experience.role}
                className="group relative sm:pl-14"
              >
                {/* Timeline marker */}
                <div className="absolute left-[13px] top-8 z-10 hidden h-3.5 w-3.5 rounded-full border-2 border-cyan-400/60 bg-[#090b10] transition-colors duration-300 group-hover:border-cyan-300 group-hover:bg-cyan-400 sm:block">
                  <div className="absolute inset-0 rounded-full bg-cyan-400/20 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d1017] p-6 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-[#10141c] sm:p-8 lg:p-9">
                  {/* Subtle card accent */}
                  <div className="pointer-events-none absolute right-0 top-0 h-36 w-36 rounded-full bg-cyan-400/[0.035] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Role and dates */}
                  <div className="relative flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] tracking-[0.18em] text-cyan-400 sm:text-xs">
                        {experience.category}
                      </p>

                      <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-gray-100 transition-colors group-hover:text-cyan-100 sm:text-2xl">
                        {experience.role}
                      </h3>

                      <p className="mt-2 text-sm font-medium text-gray-300 sm:text-base">
                        {experience.company}
                      </p>

                      <p className="mt-1.5 text-xs text-gray-500">
                        {experience.location}
                      </p>
                    </div>

                    <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.025] px-3.5 py-2 text-xs text-gray-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/80" />
                      {experience.period}
                    </span>
                  </div>

                  {/* Contributions */}
                  <div className="relative mt-7 border-t border-white/[0.07] pt-6">
                    <p className="mb-4 font-mono text-[10px] tracking-[0.16em] text-gray-600">
                      KEY CONTRIBUTIONS
                    </p>

                    <ul className="space-y-3.5">
                      {experience.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-3 text-sm leading-7 text-gray-400"
                        >
                          <span className="mt-2 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 text-[10px] text-cyan-400">
                            ↗
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="relative mt-7 border-t border-white/[0.07] pt-5">
                    <p className="mb-3 font-mono text-[10px] tracking-[0.16em] text-gray-600">
                      TOOLS & TECHNOLOGIES
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-xs text-gray-400 transition-colors duration-300 group-hover:border-white/[0.13] group-hover:text-gray-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Closing statement */}
          <div className="mt-10 border-t border-white/[0.06] pt-6">
            <p className="max-w-2xl text-sm leading-7 text-gray-500">
              Every experience has strengthened my ability to learn new
              technologies, collaborate with others, and turn requirements
              into practical digital solutions.
            </p>
          </div>
        </div>
      </section>


      {/* Skills */}
      <section
        id="skills"
        className="scroll-mt-24 border-b border-white/[0.06] px-6 py-24 sm:py-28"
      >
        <div className="mx-auto max-w-6xl">
          {/* Section heading */}
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs tracking-[0.22em] text-cyan-400">
                03 / SKILLS
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                My technical <span className="text-gray-500">toolkit.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                Technologies and tools I use to build software, develop
                business applications, automate workflows, and explore
                machine learning solutions.
              </p>
            </div>

            <div className="hidden shrink-0 pb-1 font-mono text-xs text-gray-600 sm:block">
              SKILLS & TECHNOLOGIES <span className="text-cyan-400">↘</span>
            </div>
          </div>

          {/* Skill groups */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:gap-6">
            {skills.map((group, index) => (
              <article
                key={group.title}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d1017] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-[#10141c] sm:p-7"
              >
                {/* Hover accent */}
                <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-full bg-cyan-400/[0.04] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] font-mono text-sm font-semibold text-cyan-300">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <h3 className="text-base font-semibold tracking-tight text-gray-100 sm:text-lg">
                        {group.title}
                      </h3>
                    </div>

                    <span className="font-mono text-xs text-gray-600 transition-colors group-hover:text-cyan-400">
                      {String(group.items.length).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mt-6 border-t border-white/[0.07] pt-5">
                    <div className="flex flex-wrap gap-2.5">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 py-2 text-xs text-gray-400 transition duration-200 hover:border-cyan-400/30 hover:bg-cyan-400/[0.05] hover:text-cyan-300 sm:text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Closing statement */}
          <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-7 text-gray-500">
              I focus on practical problem-solving, continuous improvement,
              and choosing the right tools for each project.
            </p>

            <a
              href="#contact"
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-gray-300 transition-colors hover:text-cyan-300"
            >
              Let's work together
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>


      {/* Projects */}
      <section
        id="projects"
        className="scroll-mt-24 border-b border-white/[0.06] px-6 py-24 sm:py-28"
      >
        <div className="mx-auto max-w-6xl">
          {/* Section heading */}
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs tracking-[0.22em] text-cyan-400">
                04 / SELECTED WORK
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Ideas into <span className="text-gray-500">reality.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                Projects that showcase my approach to software development,
                business solutions, automation, and applied machine learning.
              </p>
            </div>

            <div className="hidden shrink-0 pb-1 font-mono text-xs text-gray-600 sm:block">
              SELECTED PROJECTS <span className="text-cyan-400">↘</span>
            </div>
          </div>

          {/* Project cards */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.number}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d1017] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-[#10151d] sm:p-7 lg:p-8"
              >
                {/* Subtle hover accent */}
                <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/[0.04] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex items-center justify-between gap-3">
                  <span className="inline-flex items-center rounded-full border border-cyan-400/15 bg-cyan-400/[0.05] px-3 py-1.5 font-mono text-[10px] tracking-[0.12em] text-cyan-300 sm:text-xs">
                    {project.category}
                  </span>

                  <span className="font-mono text-xs text-gray-600 transition-colors group-hover:text-cyan-400">
                    {project.number}
                  </span>
                </div>

                <div className="relative mt-7 flex flex-1 flex-col">
                  <h3 className="max-w-md text-xl font-semibold leading-snug tracking-tight text-gray-100 transition-colors duration-300 group-hover:text-cyan-100 sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-gray-400">
                    {project.description}
                  </p>

                  <div className="mt-7 border-t border-white/[0.07] pt-5">
                    <p className="mb-3 font-mono text-[10px] tracking-[0.16em] text-gray-600">
                      TECHNOLOGIES
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-white/[0.08] bg-white/[0.02] px-2.5 py-1.5 text-xs text-gray-400 transition-colors group-hover:border-white/[0.12]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pointer-events-none absolute bottom-6 right-6 text-lg text-gray-700 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan-400 sm:bottom-7 sm:right-7">
                  ↗
                </div>
              </article>
            ))}
          </div>

          {/* Closing note */}
          <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-6 text-gray-500">
              Each project represents an opportunity to learn, solve a
              problem, and turn technical ideas into practical solutions.
            </p>

            <a
              href="https://github.com/rafaqat-ali-mir"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-gray-300 transition-colors hover:text-cyan-300"
            >
              Explore my GitHub
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>


      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-24 px-6 py-24 sm:py-28"
      >
        <div className="mx-auto max-w-6xl">
          {/* Section heading */}
          <p className="font-mono text-xs tracking-[0.22em] text-cyan-400">
            05 / CONTACT
          </p>

          <div className="relative mt-8 overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0d1017] p-7 sm:p-10 lg:p-14">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-cyan-400/[0.08] blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-blue-500/[0.06] blur-[100px]" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:gap-16">
              {/* Main call to action */}
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-3 py-1.5 text-xs text-cyan-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  Open to opportunities
                </span>

                <h2 className="mt-6 max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  Have an idea?
                  <br />
                  <span className="text-gray-500">
                    Let's make it happen.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                  I'm open to opportunities in software development,
                  Microsoft Power Platform, CRM solutions, automation,
                  and AI/ML projects. Let's connect and discuss how I
                  can contribute to your team or next project.
                </p>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=rafaquatmir2002@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-[#071014] transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
                >
                  Let's talk
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </a>
              </div>

              {/* Contact details */}
              <div className="flex flex-col justify-center gap-4">
                <p className="mb-1 font-mono text-[10px] tracking-[0.18em] text-gray-500">
                  CONNECT WITH ME
                </p>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=rafaquatmir2002@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.04] sm:p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] text-lg text-cyan-300">
                    @
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="mt-1 break-all text-sm text-gray-200 transition-colors group-hover:text-cyan-300">
                      rafaquatmir2002@gmail.com
                    </p>
                  </div>
                  <span className="text-gray-600 transition-colors group-hover:text-cyan-300">
                    ↗
                  </span>
                </a>

                <a
                  href="https://github.com/rafaqat-ali-mir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.04] sm:p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-sm font-bold text-gray-200">
                    GH
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gray-500">GitHub</p>
                    <p className="mt-1 text-sm text-gray-200 transition-colors group-hover:text-cyan-300">
                      Explore my projects
                    </p>
                  </div>
                  <span className="text-gray-600 transition-colors group-hover:text-cyan-300">
                    ↗
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/rafaqat-a-49105b30a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.04] sm:p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-sm font-bold text-gray-200">
                    in
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gray-500">LinkedIn</p>
                    <p className="mt-1 text-sm text-gray-200 transition-colors group-hover:text-cyan-300">
                      Connect professionally
                    </p>
                  </div>
                  <span className="text-gray-600 transition-colors group-hover:text-cyan-300">
                    ↗
                  </span>
                </a>
              </div>
            </div>

            {/* Bottom note */}
            <div className="relative mt-10 flex flex-col gap-3 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-gray-500">
                Based in Pakistan · Open to meaningful opportunities
              </p>
              <a
                href="#home"
                className="inline-flex w-fit items-center gap-2 text-xs text-gray-400 transition-colors hover:text-cyan-300"
              >
                Back to top <span aria-hidden="true">↑</span>
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="border-t border-white/[0.06] px-6 py-7">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand */}
          <a href="#home" className="group w-fit">
            <span className="text-sm font-semibold tracking-tight text-white transition-colors group-hover:text-cyan-300">
              Rafaqat Ali<span className="text-cyan-400">.</span>
            </span>
            <p className="mt-1 text-xs text-gray-500">
              Software Engineer · AI & Automation
            </p>
          </a>

          {/* Footer links */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-gray-400">
            <a
              href="#about"
              className="transition-colors hover:text-cyan-300"
            >
              About
            </a>
            <a
              href="#projects"
              className="transition-colors hover:text-cyan-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-cyan-300"
            >
              Contact
            </a>
            <a
              href="https://github.com/rafaqat-ali-mir"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-cyan-300"
            >
              GitHub ↗
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-500">
            © 2026 Rafaqat Ali. All rights reserved.
          </p>
        </div>
      </footer>

    </main>
  );
}