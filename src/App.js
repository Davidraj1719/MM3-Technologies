
import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight, Menu, X, Code2, GraduationCap, MonitorCog, Wrench,
  CheckCircle2, Layers3, Sparkles, MessageCircle, Send, ChevronDown,
  Rocket, Lightbulb
} from "lucide-react";

const services = [
  {
    no: "01",
    icon: Code2,
    title: "Website Development",
    desc: "Modern, responsive websites that introduce your business, build trust and turn visitors into enquiries.",
    tags: ["Business websites", "Landing pages", "E-commerce", "Web applications"]
  },
  {
    no: "02",
    icon: GraduationCap,
    title: "CAD Training",
    desc: "Practical technical drawing lessons with guided exercises and hands-on learning.",
    tags: ["CAD Design", "2D drafting","3D modeling", "Manufacturing Drawing","Sheet Metal", "Assembly Design"]
  },
  {
    no: "03",
    icon: Layers3,
    title: "Full Stack Development",
    desc: "Learn to create complete applications, from interactive interfaces to backend APIs and databases.",
    tags: ["HTML · CSS · JavaScript", "React.js", "Java · Spring Boot", "MySQL · Git"]
  },
  {
    no: "04",
    icon: Wrench,
    title: "Website Maintenance",
    desc: "Keep your website updated, reliable and ready to support your business as it grows.",
    tags: ["Content updates", "Bug fixes", "Performance", "Technical support"]
  }
];

const projects = [
  {
    category: "WEBSITES",
    title: "Business Website",
    desc: "A polished online presence for a growing business.",
    style: "from-cyan-400/30 via-blue-500/20 to-indigo-500/30",
    number: "01"
  },
  {
    category: "WEB APPS",
    title: "Food Ordering Platform",
    desc: "A full-stack ordering experience with customer workflows.",
    style: "from-orange-400/30 via-rose-500/20 to-purple-500/30",
    number: "02"
  },
  {
    category: "WEB APPS",
    title: "E-commerce Store",
    desc: "Product discovery, shopping and management features.",
    style: "from-emerald-400/30 via-teal-500/20 to-cyan-500/30",
    number: "03"
  }
];

const navItems = [
  "Home", "About", "Services", "Training", "Our Work", "Contact"
];

const ease = [0.22, 1, 0.36, 1];

const reveal = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease }
  }
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13 }
  }
};

const cardReveal = {
  hidden: { opacity: 0, y: 35, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease }
  }
};

function Reveal({ children, className = "" }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={reveal}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
    >
      {children}
    </motion.div>
  );
}

// NAVBAR
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -90 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07111f]/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">

        <a href="#home" className="flex items-center gap-3">
          <motion.img
            whileHover={{ rotate: 8, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 250 }}
            src="/Blue Gear Factory Technology Emblem.png"
            alt="MM3 Technologies logo"
            className="h-12 w-12 object-contain sm:h-14 sm:w-14"
          />

          <span className="leading-tight">
            <span className="block text-base font-black tracking-[.12em] sm:text-lg">
              MM3 <span className="text-cyan-400">TECHNOLOGIES</span>
            </span>

            <span className="mt-1 block text-[9px] tracking-[.28em] text-slate-400">
              Mission · Mobility · Empower
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + index * 0.08 }}
              className="text-sm text-slate-300 transition hover:text-cyan-300"
            >
              {item}
            </motion.a>
          ))}

          <motion.a
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.96 }}
            href="#contact"
            className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-bold text-slate-950 hover:bg-white"
          >
            Let's Talk <ArrowUpRight className="ml-1 inline h-4 w-4" />
          </motion.a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-white/15 p-2 lg:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/10 bg-[#07111f] px-5 py-4 lg:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/5 py-3 text-slate-200 hover:text-cyan-300"
              >
                {item}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

// HERO SECTION
function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8"
    >
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.2, 0.48, 0.2]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="pointer-events-none absolute -right-24 top-16 -z-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/30 blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.4, 0.15]
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="pointer-events-none absolute -bottom-20 -left-24 -z-0 h-96 w-96 rounded-full bg-blue-600/30 blur-[120px]"
      />

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[.10] [background-image:linear-gradient(rgba(148,163,184,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.25)_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">

        <div>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold tracking-[.18em] text-cyan-200"
          >
            <Sparkles className="h-4 w-4" />
            TECHNOLOGY · DESIGN · LEARNING
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 65 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
            className="max-w-3xl text-5xl font-black leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl"
          >
            We build digital experiences that{" "}
            <motion.span
              animate={{
                backgroundPosition: [
                  "0% 50%",
                  "100% 50%",
                  "0% 50%"
                ]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
              className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-[length:200%_auto] bg-clip-text text-transparent"
            >
              move business forward.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-7 max-w-xl text-lg leading-8 text-slate-300"
          >
            From high-impact websites to practical technical training,
            MM3 Technologies helps businesses and learners take their
            next step with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <motion.a
              whileHover={{
                scale: 1.07,
                y: -4,
                boxShadow: "0 15px 35px rgba(34,211,238,.25)"
              }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="rounded-full bg-cyan-400 px-7 py-4 font-bold text-slate-950"
            >
              Start a project
              <ArrowUpRight className="ml-2 inline h-5 w-5" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
              href="#services"
              className="rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Explore services
              <ChevronDown className="ml-2 inline h-4 w-4" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-12 flex items-center gap-3 text-sm text-slate-400"
          >
            <CheckCircle2 className="h-5 w-5 text-cyan-400" />
            <span>
              <b className="text-white">Built with purpose.</b>
              Designed for real-world results.
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.82, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.25, ease }}
          className="relative mx-auto w-full max-w-xl"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -inset-8 rounded-full bg-cyan-400/10 blur-3xl"
          />

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative rounded-[2rem] border border-white/15 bg-gradient-to-br from-white/10 to-white/[.02] p-4 shadow-2xl shadow-cyan-950/50 backdrop-blur"
          >
            <div className="rounded-[1.5rem] border border-white/10 bg-[#0b192b] p-5 sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex gap-2">
                  <i className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <i className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <i className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[10px] tracking-[.25em] text-slate-500">
                  MM3 / DIGITAL STUDIO
                </span>
              </div>

              <div className="px-2 py-10 text-center sm:px-5 sm:py-14">
                <motion.img
                  src="/net.png"
                  alt="MM3 Technologies logo"
                  animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="mx-auto mb-7 h-32 w-32 object-contain drop-shadow-[0_0_28px_rgba(34,211,238,.45)] sm:h-40 sm:w-40"
                />

                <p className="text-xs tracking-[.3em] text-cyan-300">
                  YOUR NEXT CHAPTER
                </p>

                <h2 className="mt-4 text-4xl font-black leading-none sm:text-6xl">
                  Ideas into
                  <br />
                  <span className="text-cyan-300">impact.</span>
                </h2>

                <div className="mt-8 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

                <p className="mt-5 text-xs font-bold tracking-[.22em] text-slate-300">
                  BUILD SOMETHING GREAT ↗
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -9, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-3 top-12 rounded-2xl border border-white/10 bg-[#10243a] px-4 py-3 text-sm shadow-xl sm:-left-10"
          >
            <Lightbulb className="mr-2 inline h-4 w-4 text-cyan-300" />
            Creative thinking
          </motion.div>

          <motion.div
            animate={{ y: [0, 9, 0], rotate: [0, -2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-5 right-0 rounded-2xl border border-white/10 bg-[#10243a] px-4 py-3 text-sm shadow-xl sm:-right-6"
          >
            <Rocket className="mr-2 inline h-4 w-4 text-cyan-300" />
            Technology that works
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-[10px] tracking-[.3em] text-slate-500 md:block"
      >
        SCROLL TO EXPLORE ↓
      </motion.div>
    </section>
  );
}

// ABOUT
function About() {
  const points = [
    "Thoughtful design",
    "Practical technology",
    "Learning by doing",
    "Room to grow"
  ];

  return (
    <section id="about" className="bg-slate-50 px-5 py-24 text-slate-900 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-bold tracking-[.25em] text-cyan-700">
            01 / WHO WE ARE
          </p>
        </Reveal>

        <div className="mt-7 grid gap-10 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              A creative technology partner for{" "}
              <span className="text-cyan-600">what's next.</span>
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-lg leading-8 text-slate-600">
              MM3 Technologies brings together web development and practical
              technical education. We turn ideas into useful digital products
              and help people build the skills to create them.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex font-bold text-slate-900 transition hover:text-cyan-700"
            >
              Get to know us
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </a>
          </Reveal>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 gap-4 border-t border-slate-200 pt-8 md:grid-cols-4"
        >
          {points.map((item, i) => (
            <motion.div variants={cardReveal} key={item}>
              <p className="text-3xl font-black text-cyan-700">
                {["01", "02", "03", "∞"][i]}
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-600">
                {item}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// SERVICES
function Services() {
  return (
    <section id="services" className="bg-[#0a1728] px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-bold tracking-[.25em] text-cyan-300">
            02 / WHAT WE DO
          </p>

          <div className="mt-5 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-4xl font-black sm:text-5xl">
              Solutions made for{" "}
              <span className="text-cyan-300">real progress.</span>
            </h2>
            <p className="max-w-sm text-slate-400">
              One team. Multiple ways to move your idea forward.
            </p>
          </div>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-12 grid gap-5 md:grid-cols-2"
        >
          {services.map(({ no, icon: Icon, title, desc, tags }) => (
            <motion.article
              key={no}
              variants={cardReveal}
              whileHover={{
                y: -12,
                scale: 1.015,
                boxShadow: "0 22px 55px rgba(34,211,238,.12)"
              }}
              transition={{ type: "spring", stiffness: 240, damping: 18 }}
              className="group rounded-3xl border border-white/10 bg-white/[.03] p-7 transition-colors hover:border-cyan-300/40 hover:bg-cyan-300/[.05] sm:p-9"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-[.2em] text-cyan-300">
                  {no} / SERVICE
                </span>
                <motion.div whileHover={{ rotate: 12, scale: 1.2 }}>
                  <Icon className="h-7 w-7 text-cyan-300" />
                </motion.div>
              </div>

              <h3 className="mt-8 text-2xl font-bold">{title}</h3>

              <p className="mt-3 max-w-lg leading-7 text-slate-400">
                {desc}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[.04] px-3 py-2 text-xs text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// TRAINING
function Training() {
  return (
    <section
      id="training"
      className="relative overflow-hidden bg-gradient-to-br from-cyan-500 to-blue-700 px-5 py-24 text-white sm:px-8 lg:py-32"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -right-20 -top-20 h-96 w-96 rounded-full border border-white/20"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
        className="absolute -right-10 -top-10 h-72 w-72 rounded-full border border-white/20"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal>
          <p className="text-xs font-bold tracking-[.25em] text-white/70">
            03 / LEARN WITH MM3
          </p>

          <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
            Skills that turn{" "}
            <span className="text-slate-950">
              curiosity into capability.
            </span>
          </h2>

          <p className="mt-6 max-w-lg leading-8 text-white/80">
            Learn through structured topics, guided practice and project-based
            exercises. Training details can be tailored to the batch.
          </p>

          <motion.a
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.96 }}
            href="#contact"
            className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-4 font-bold text-white hover:bg-white hover:text-slate-950"
          >
            Enquire about training
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </motion.a>
        </Reveal>

        <Reveal>
          <motion.div
            whileHover={{ y: -5 }}
            className="rounded-3xl border border-white/20 bg-slate-950/15 p-6 backdrop-blur sm:p-9"
          >
            <article className="flex gap-5 border-b border-white/20 pb-7">
              <GraduationCap className="h-7 w-7 shrink-0" />
              <div>
                <h3 className="text-2xl font-bold">
                  Full Stack Development
                </h3>
                <p className="mt-3 leading-7 text-white/80">
                  HTML5, CSS3, JavaScript, React.js, Core Java, Spring Boot,
                  REST APIs, MySQL, Git and GitHub.
                </p>
              </div>
            </article>

            <article className="flex gap-5 pt-7">
              <MonitorCog className="h-7 w-7 shrink-0" />
              <div>
                <h3 className="text-2xl font-bold">CAD Training</h3>
                <p className="mt-3 leading-7 text-white/80">
                  CAD Design, 2D drafting, 3D modeling, manufacturing drawing, sheet metal design and assembly design.
                </p>
              </div>
            </article>

            <p className="mt-9 text-[10px] font-bold tracking-[.2em] text-white/70">
              PRACTICAL LEARNING · GUIDED EXERCISES · PROJECT-FOCUSED
            </p>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

// PORTFOLIO
function Portfolio() {
  const [filter, setFilter] = useState("ALL");

  const filteredProjects = projects.filter(
    (project) => filter === "ALL" || project.category === filter
  );

  return (
    <section
      id="our-work"
      className="bg-slate-50 px-5 py-24 text-slate-900 sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-bold tracking-[.25em] text-cyan-700">
            04 / SELECTED WORK
          </p>

          <div className="mt-5 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <h2 className="text-4xl font-black sm:text-5xl">
              Ideas, meet{" "}
              <span className="text-cyan-600">execution.</span>
            </h2>

            <div className="flex flex-wrap gap-2">
              {["ALL", "WEBSITES", "WEB APPS"].map((item) => (
                <motion.button
                  whileTap={{ scale: 0.92 }}
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                    filter === item
                      ? "bg-slate-950 text-white"
                      : "border border-slate-300 text-slate-600 hover:border-slate-900"
                  }`}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </Reveal>

        <motion.div layout className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, y: 35, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.94 }}
                transition={{ duration: 0.45, ease }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div
                  className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br ${project.style} p-7`}
                >
                  <motion.div
                    animate={{ rotate: [0, 4, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,.65),transparent_60%)]"
                  />

                  <motion.div
                    whileHover={{ scale: 1.08, rotate: -1 }}
                    className="relative w-full max-w-xs rounded-xl border border-white/80 bg-white/70 p-4 shadow-2xl backdrop-blur"
                  >
                    <div className="flex gap-1.5 border-b border-slate-300 pb-3">
                      <i className="h-2 w-2 rounded-full bg-rose-400" />
                      <i className="h-2 w-2 rounded-full bg-amber-400" />
                      <i className="h-2 w-2 rounded-full bg-emerald-400" />
                    </div>

                    <div className="mt-5 h-3 w-1/2 rounded bg-slate-300" />
                    <div className="mt-3 h-20 rounded-lg bg-gradient-to-r from-cyan-200 to-blue-200" />

                    <div className="mt-4 flex gap-2">
                      <div className="h-3 flex-1 rounded bg-slate-200" />
                      <div className="h-3 flex-1 rounded bg-slate-200" />
                    </div>
                  </motion.div>

                  <span className="absolute left-5 top-5 text-[10px] font-black tracking-[.2em] text-slate-700">
                    MM3 / CONCEPT {project.number}
                  </span>
                </div>

                <p className="mt-5 text-xs font-bold tracking-[.18em] text-cyan-700">
                  {project.category}
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  {project.desc}
                </p>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="mt-8 text-xs text-slate-500">
          Concept examples shown. Replace these with completed client projects
          before presenting them as client work.
        </p>
      </div>
    </section>
  );
}

// PROCESS
function Process() {
  const steps = [
    ["01", "Discover", "We understand your goals, audience and requirements."],
    ["02", "Plan & design", "We shape the structure, features and visual direction."],
    ["03", "Build", "We develop, test and refine the solution with care."],
    ["04", "Launch & support", "We help you go live and plan the next improvements."]
  ];

  return (
    <section className="bg-white px-5 py-24 text-slate-900 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-bold tracking-[.25em] text-cyan-700">
            05 / HOW WE WORK
          </p>

          <div className="mt-5 grid gap-8 md:grid-cols-2 md:items-end">
            <h2 className="text-4xl font-black sm:text-5xl">
              Clear steps.
              <br />
              <span className="text-cyan-600">Better outcomes.</span>
            </h2>

            <p className="max-w-lg leading-8 text-slate-600">
              A straightforward process keeps every project focused,
              collaborative and moving in the right direction.
            </p>
          </div>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 grid gap-8 border-t border-slate-200 pt-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map(([no, title, desc]) => (
            <motion.article variants={cardReveal} key={no} className="group">
              <span className="text-sm font-bold text-cyan-700">{no}</span>
              <h3 className="mt-5 text-xl font-bold transition group-hover:translate-x-1">
                {title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">{desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// CONTACT
function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "Website Development",
    message: ""
  });

  const updateForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const submitForm = (event) => {
    event.preventDefault();

    const message = [
      "Hello MM3 Technologies,",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Service: ${form.service}`,
      `Message: ${form.message}`
    ].join("\n");

    window.open(
      `https://wa.me/917448694839?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="contact"
      className="bg-[#07111f] px-5 py-24 sm:px-8 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-24">

        <Reveal>
          <p className="text-xs font-bold tracking-[.25em] text-cyan-300">
            06 / LET'S CONNECT
          </p>

          <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
            Have an idea?
            <br />
            <span className="text-cyan-300">Let's make it real.</span>
          </h2>

          <p className="mt-6 max-w-lg leading-8 text-slate-400">
            Tell us what you're planning. We'll get back to you to discuss
            the right next step.
          </p>

          <div className="mt-10 space-y-6">
            <div>
              <p className="text-[10px] font-bold tracking-[.25em] text-slate-500">
                EMAIL
              </p>
              <a
                className="mt-2 inline-block text-lg font-semibold hover:text-cyan-300"
                href="mailto:m3studio740@gmail.com"
              >
                m3studio740@gmail.com ↗
              </a>
            </div>

            <div>
              <p className="text-[10px] font-bold tracking-[.25em] text-slate-500">
                WHATSAPP
              </p>
              <a
                className="mt-2 inline-block text-lg font-semibold hover:text-cyan-300"
                href="https://wa.me/917448694839"
              >
                +91 74486 94839 ↗
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <motion.form
            onSubmit={submitForm}
            whileHover={{ y: -3 }}
            className="rounded-3xl border border-white/10 bg-white/[.04] p-6 sm:p-9"
          >
            <label className="mb-5 block text-sm font-semibold text-slate-200">
              Your name
              <input
                name="name"
                value={form.name}
                onChange={updateForm}
                required
                placeholder="Enter your name"
                className="mt-2 w-full rounded-xl border border-white/10 bg-[#0b1b2e] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
              />
            </label>

            <label className="mb-5 block text-sm font-semibold text-slate-200">
              Email address
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={updateForm}
                required
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-white/10 bg-[#0b1b2e] px-4 py-3.5 text-white outline-none placeholder:text-slate-600 focus:border-cyan-400"
              />
            </label>

            <label className="mb-5 block text-sm font-semibold text-slate-200">
              I'm interested in
              <select
                name="service"
                value={form.service}
                onChange={updateForm}
                className="mt-2 w-full rounded-xl border border-white/10 bg-[#0b1b2e] px-4 py-3.5 text-white outline-none focus:border-cyan-400"
              >
                <option>Website Development</option>
                <option>E-commerce / Web Application</option>
                <option>CAD Training</option>
                <option>Full Stack Development Training</option>
                <option>Website Maintenance</option>
              </select>
            </label>

            <label className="mb-6 block text-sm font-semibold text-slate-200">
              Tell us about it
              <textarea
                name="message"
                value={form.message}
                onChange={updateForm}
                required
                rows="4"
                placeholder="What would you like to create or learn?"
                className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-[#0b1b2e] px-4 py-3.5 text-white outline-none placeholder:text-slate-600 focus:border-cyan-400"
              />
            </label>

            <motion.button
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.97 }}
              className="w-full rounded-full bg-cyan-400 px-6 py-4 font-bold text-slate-950 transition hover:bg-white"
            >
              Send enquiry on WhatsApp
              <Send className="ml-2 inline h-4 w-4" />
            </motion.button>

            <p className="mt-4 text-center text-xs text-slate-500">
              This form opens WhatsApp. Details are not stored on this website.
            </p>
          </motion.form>
        </Reveal>
      </div>
    </section>
  );
}

// FOOTER
function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050c16] px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">

        <a href="#home" className="flex items-center gap-3">
          <img
            src="/Blue Gear Factory Technology Emblem.png"
            alt="MM3 logo"
            className="h-10 w-10 object-contain"
          />
          <span className="text-sm font-black tracking-[.16em]">
            MM3 TECHNOLOGIES
          </span>
        </a>

        <span className="text-[10px] tracking-[.2em] text-slate-500">
          Mission · Mobility · Empower
        </span>

        <span className="text-xs text-slate-500">
          © {new Date().getFullYear()} MM3 Technologies
        </span>

        <motion.a
          whileHover={{ y: -3 }}
          href="#home"
          className="text-xs font-bold text-cyan-300 hover:text-white"
        >
          BACK TO TOP ↑
        </motion.a>
      </div>
    </footer>
  );
}

// MAIN APP
export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#07111f] text-white selection:bg-cyan-300 selection:text-slate-950">
      <Navbar />

      <main>
        <Home />
        <About />
        <Services />
        <Training />
        <Portfolio />
        <Process />
        <Contact />
      </main>

      <Footer />

      <motion.a
        href="https://wa.me/917448694839"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        animate={{
          y: [0, -7, 0],
          scale: [1, 1.04, 1]
        }}
        whileHover={{ scale: 1.18, rotate: 8 }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-950/40"
      >
        <MessageCircle className="h-7 w-7" />
      </motion.a>
    </div>
  );
}
