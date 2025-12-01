const roles = [
  "Full Stack Developer",
  "AI/ML Engineer",
  "Software Developer",
];

function App() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      {/* Simple navbar */}
      <nav className="sticky top-0 z-20 border-b border-white/10 bg-[#050816]/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <span className="text-lg font-semibold tracking-tight">
            Samyak<span className="text-indigo-400">.dev</span>
          </span>
          <div className="hidden gap-6 text-sm text-gray-300 md:flex">
            <a href="#hero" className="hover:text-indigo-400">Home</a>
            <a href="#about" className="hover:text-indigo-400">About</a>
            <a href="#experience" className="hover:text-indigo-400">Experience</a>
            <a href="#projects" className="hover:text-indigo-400">Projects</a>
            <a href="#skills" className="hover:text-indigo-400">Skills</a>
            <a href="#achievements" className="hover:text-indigo-400">Achievements</a>
            <a href="#contact" className="hover:text-indigo-400">Contact</a>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-4">
        {/* HERO */}
        <section
          id="hero"
          className="flex min-h-[80vh] flex-col items-center justify-center gap-10 py-16 md:flex-row"
        >
          {/* Left content */}
          <div className="w-full md:w-1/2 space-y-4">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
              Portfolio • 2025
            </p>
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
              Samyak Jain
            </h1>
            <p className="mt-3 text-lg font-medium text-indigo-300">
              {roles[0]} · {roles[1]}
            </p>

            <p className="mt-4 max-w-xl text-sm md:text-base text-gray-300">
              Building intelligent systems and production-ready web apps.
              Combining strong fundamentals in AI/ML with modern full‑stack
              development to ship real impact.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-indigo-500 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:bg-indigo-400"
              >
                View Projects
              </a>
              <a
                href="/Samyak-Jain-A023166922003.pdf"
                download
                className="rounded-full border border-indigo-400/60 px-6 py-2 text-sm font-semibold text-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-500/10"
              >
                Download Resume
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-xs text-gray-400">
              <span className="rounded-full border border-emerald-500/40 px-3 py-1">
                90%+ AI model accuracy
              </span>
              <span className="rounded-full border border-sky-500/40 px-3 py-1">
                React · Node · MySQL
              </span>
              <span className="rounded-full border border-purple-500/40 px-3 py-1">
                Top 5 Microsoft Ideathon
              </span>
            </div>
          </div>

          {/* Right visual block */}
          <div className="relative mt-10 flex w-full justify-center md:mt-0 md:w-1/2">
            <div className="relative h-72 w-72">
              {/* Outer neon ring */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-70 blur-[2px]" />
              {/* Main card */}
              <div className="relative h-full w-full rounded-[2.3rem] bg-[#020617]/90 backdrop-blur-xl border border-white/10 shadow-[0_25px_80px_rgba(15,23,42,0.9)] flex flex-col items-center justify-center transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_35px_100px_rgba(59,130,246,0.6)]">
                <div className="mb-6 h-20 w-20 rounded-3xl bg-gradient-to-br from-sky-400 to-indigo-500 shadow-lg shadow-sky-500/40 animate-pulse" />
                <p className="text-[0.65rem] uppercase tracking-[0.35em] text-slate-400">
                  AI & Full Stack
                </p>
                <p className="mt-3 px-8 text-center text-sm text-slate-200">
                  React, Node.js and computer vision projects designed to run in production.
                </p>
              </div>
              {/* Orbiting glows */}
              <div className="pointer-events-none absolute -left-10 -top-8 h-24 w-24 rounded-full bg-indigo-500/40 blur-3xl" />
              <div className="pointer-events-none absolute -right-8 bottom-0 h-24 w-24 rounded-full bg-pink-500/40 blur-3xl" />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-t border-white/10 py-16 fade-in">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400">
              About
            </p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">
              Who is Samyak Jain?
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-gray-300 md:text-base">
              Computer Engineering student focused on{" "}
              <span className="text-indigo-300 font-medium">AI/ML</span> and{" "}
              <span className="text-indigo-300 font-medium">full‑stack development</span>.
              Currently working as a Full Stack Developer Intern at{" "}
              <span className="text-indigo-300 font-medium">F1Jobs.io</span>, building
              production features with modern web technologies and clean engineering practices.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-300 md:text-base">
              Enjoys designing end‑to‑end systems: from data pipelines and ML models to
              performant React frontends and robust Node.js APIs. Always learning, shipping,
              and refining.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5/10 backdrop-blur-xl p-5 md:p-6 shadow-[0_18px_45px_rgba(15,23,42,0.85)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(59,130,246,0.55)]">
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Education
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  B.Tech Computer Engineering
                </p>
                <p className="text-xs text-gray-400">Amity University · GPA 7.6/10</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5/10 backdrop-blur-xl p-5 md:p-6 shadow-[0_18px_45px_rgba(15,23,42,0.85)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(59,130,246,0.55)]">
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Current Role
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Full Stack Intern @ F1Jobs.io
                </p>
                <p className="text-xs text-gray-400">
                  React · Node.js · REST APIs · MySQL
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5/10 backdrop-blur-xl p-5 md:p-6 shadow-[0_18px_45px_rgba(15,23,42,0.85)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(59,130,246,0.55)]">
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Highlights
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Top 5 – Microsoft Ideathon
                </p>
                <p className="text-xs text-gray-400">
                  CCNA Certified · AI projects with 90%+ accuracy
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="border-t border-white/10 py-16 fade-in">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400">
              Experience
            </p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">
              Where have I worked?
            </h2>

            <div className="mt-8 space-y-8">
              <div className="rounded-3xl border border-white/10 bg-white/5/10 backdrop-blur-xl p-5 md:p-6 shadow-[0_18px_45px_rgba(15,23,42,0.85)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(59,130,246,0.55)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-semibold md:text-lg">
                      Full Stack Developer Intern · F1Jobs.io
                    </h3>
                    <p className="text-xs text-gray-400 md:text-sm">
                      React · Node.js · REST APIs · MySQL
                    </p>
                  </div>
                  <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
                    2025 – Present
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5 text-sm text-gray-300">
                  <li>Implemented full‑stack features for the job platform using React and Node.js.</li>
                  <li>Integrated external/internal APIs and optimized MySQL queries for faster pages.</li>
                  <li>Collaborated on UI/UX improvements to improve candidate and recruiter journeys.</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5/10 backdrop-blur-xl p-5 md:p-6 shadow-[0_18px_45px_rgba(15,23,42,0.85)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(59,130,246,0.55)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-semibold md:text-lg">
                      Research Intern · CSIR – National Physical Laboratory
                    </h3>
                    <p className="text-xs text-gray-400 md:text-sm">
                      Experimental systems · Algorithms · Data analysis
                    </p>
                  </div>
                  <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
                    May – Jul 2025
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5 text-sm text-gray-300">
                  <li>Worked on phase‑modulation and measurement systems under senior researchers.</li>
                  <li>Implemented and evaluated algorithms to improve measurement precision.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="border-t border-white/10 py-16 fade-in">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400">
              Projects
            </p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">
              Selected work
            </h2>
            <p className="mt-3 text-sm text-gray-300 md:text-base">
              A mix of AI/ML and full‑stack projects that showcase how I think about
              data, performance, and user experience.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <article className="rounded-3xl border border-white/10 bg-white/5/10 backdrop-blur-xl p-5 md:p-6 shadow-[0_18px_45px_rgba(15,23,42,0.85)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(59,130,246,0.55)]">
                <div>
                  <h3 className="text-lg font-semibold">Deforestation Detection (U‑Net)</h3>
                  <p className="mt-1 text-xs text-gray-400">
                    Computer vision · Semantic segmentation
                  </p>
                  <p className="mt-3 text-sm text-gray-300">
                    Built a U‑Net based model to detect deforestation regions from satellite
                    imagery, reaching 90%+ pixel‑wise accuracy and strong IoU scores on test data.
                  </p>
                  <p className="mt-2 text-xs text-gray-400">
                    Tech: Python, TensorFlow, OpenCV, NumPy, Google Earth Engine
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-3 text-xs">
                  <a
                    href="#"
                    className="rounded-full border border-indigo-400/70 px-3 py-1 font-semibold text-indigo-200 hover:bg-indigo-500/10"
                  >
                    View GitHub
                  </a>
                </div>
              </article>

              <article className="rounded-3xl border border-white/10 bg-white/5/10 backdrop-blur-xl p-5 md:p-6 shadow-[0_18px_45px_rgba(15,23,42,0.85)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(59,130,246,0.55)]">
                <div>
                  <h3 className="text-lg font-semibold">Driver Drowsiness Detection</h3>
                  <p className="mt-1 text-xs text-gray-400">
                    Embedded system · Real‑time safety
                  </p>
                  <p className="mt-3 text-sm text-gray-300">
                    Designed a real‑time system that monitors driver drowsiness using sensors
                    and triggers buzzer alerts when eye‑closure patterns cross a safety threshold.
                  </p>
                  <p className="mt-2 text-xs text-gray-400">
                    Tech: Arduino, C/C++, sensors, LCD interface
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-3 text-xs">
                  <a
                    href="#"
                    className="rounded-full border border-indigo-400/70 px-3 py-1 font-semibold text-indigo-200 hover:bg-indigo-500/10"
                  >
                    View GitHub
                  </a>
                  <a
                    href="#"
                    className="rounded-full border border-gray-400/60 px-3 py-1 font-semibold text-gray-200 hover:bg-white/5"
                  >
                    Watch demo
                  </a>
                </div>
              </article>

              <article className="rounded-3xl border border-white/10 bg-white/5/10 backdrop-blur-xl p-5 md:p-6 shadow-[0_18px_45px_rgba(15,23,42,0.85)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(59,130,246,0.55)]">
                <div>
                  <h3 className="text-lg font-semibold">Smart Attendance System</h3>
                  <p className="mt-1 text-xs text-gray-400">
                    Computer vision · Backend integration
                  </p>
                  <p className="mt-3 text-sm text-gray-300">
                    Facial‑recognition based attendance app that achieves about 95% accuracy
                    and cuts manual marking time by more than half using a persistent database.
                  </p>
                  <p className="mt-2 text-xs text-gray-400">
                    Tech: Python, OpenCV, face‑recognition, MySQL
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-3 text-xs">
                  <a
                    href="#"
                    className="rounded-full border border-indigo-400/70 px-3 py-1 font-semibold text-indigo-200 hover:bg-indigo-500/10"
                  >
                    View GitHub
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* SKILLSET */}
        <section id="skills" className="border-t border-white/10 py-16 fade-in">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400">
              Skillset
            </p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">
              What do I work with?
            </h2>
            <p className="mt-3 text-sm text-gray-300 md:text-base">
              A mix of AI/ML tools and full‑stack technologies used across projects and internships.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5/10 backdrop-blur-xl p-5 md:p-6 shadow-[0_18px_45px_rgba(15,23,42,0.85)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(59,130,246,0.55)]">
                <h3 className="text-sm font-semibold text-indigo-300">Languages</h3>
                <div className="mt-4 space-y-3 text-sm text-gray-200">
                  <div>
                    <div className="flex justify-between">
                      <span>Python</span>
                      <span className="text-xs text-gray-400">Advanced</span>
                    </div>
                    <div className="mt-1 h-1.5 rounded-full bg-white/10">
                      <div className="h-full w-[95%] rounded-full bg-emerald-400" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span>C++</span>
                      <span className="text-xs text-gray-400">Intermediate–Advanced</span>
                    </div>
                    <div className="mt-1 h-1.5 rounded-full bg-white/10">
                      <div className="h-full w-[85%] rounded-full bg-emerald-400" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span>JavaScript</span>
                      <span className="text-xs text-gray-400">Intermediate</span>
                    </div>
                    <div className="mt-1 h-1.5 rounded-full bg-white/10">
                      <div className="h-full w-[80%] rounded-full bg-emerald-400" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5/10 backdrop-blur-xl p-5 md:p-6 shadow-[0_18px_45px_rgba(15,23,42,0.85)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(59,130,246,0.55)]">
                <h3 className="text-sm font-semibold text-indigo-300">Full Stack</h3>
                <div className="mt-4 space-y-3 text-sm text-gray-200">
                  <div>
                    <div className="flex justify-between">
                      <span>React.js</span>
                      <span className="text-xs text-gray-400">Used at F1Jobs.io</span>
                    </div>
                    <div className="mt-1 h-1.5 rounded-full bg-white/10">
                      <div className="h-full w-[85%] rounded-full bg-sky-400" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span>Node.js / Express</span>
                      <span className="text-xs text-gray-400">APIs & backend</span>
                    </div>
                    <div className="mt-1 h-1.5 rounded-full bg-white/10">
                      <div className="h-full w-[75%] rounded-full bg-sky-400" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span>MySQL</span>
                      <span className="text-xs text-gray-400">Relational DB design</span>
                    </div>
                    <div className="mt-1 h-1.5 rounded-full bg-white/10">
                      <div className="h-full w-[80%] rounded-full bg-sky-400" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5/10 backdrop-blur-xl p-5 md:p-6 shadow-[0_18px_45px_rgba(15,23,42,0.85)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(59,130,246,0.55)]">
                <h3 className="text-sm font-semibold text-indigo-300">AI & ML</h3>
                <div className="mt-4 space-y-3 text-sm text-gray-200">
                  <div>
                    <div className="flex justify-between">
                      <span>TensorFlow / Keras</span>
                      <span className="text-xs text-gray-400">U‑Net, CNNs</span>
                    </div>
                    <div className="mt-1 h-1.5 rounded-full bg-white/10">
                      <div className="h-full w-[70%] rounded-full bg-fuchsia-400" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span>OpenCV</span>
                      <span className="text-xs text-gray-400">Computer vision</span>
                    </div>
                    <div className="mt-1 h-1.5 rounded-full bg-white/10">
                      <div className="h-full w-[80%] rounded-full bg-fuchsia-400" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span>Scikit‑learn / NumPy / Pandas</span>
                      <span className="text-xs text-gray-400">ML & data handling</span>
                    </div>
                    <div className="mt-1 h-1.5 rounded-full bg-white/10">
                      <div className="h-full w-[75%] rounded-full bg-fuchsia-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-xs text-gray-300">
              <span className="rounded-full border border-gray-500/60 px-3 py-1">
                CCNAv7 Certified
              </span>
              <span className="rounded-full border border-gray-500/60 px-3 py-1">
                Familiar with Git, GitHub, Linux
              </span>
              <span className="rounded-full border border-gray-500/60 px-3 py-1">
                Comfortable with REST APIs & JSON
              </span>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section id="achievements" className="border-t border-white/10 py-16 fade-in">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400">
              Achievements
            </p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">
              Highlights so far
            </h2>

            <p className="mt-3 text-sm text-gray-300 md:text-base">
              A few milestones that show how seriously I take learning, building, and
              shipping real work.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5/10 backdrop-blur-xl p-5 md:p-6 shadow-[0_18px_45px_rgba(15,23,42,0.85)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(59,130,246,0.55)]">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                  Competition
                </p>
                <h3 className="mt-1 text-sm font-semibold text-white">
                  Top 5 – Microsoft Ideathon
                </h3>
                <p className="mt-2 text-xs text-gray-300">
                  Reached the final round with an AI/ML solution, pitching the idea,
                  architecture, and impact to judges under tight time constraints.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5/10 backdrop-blur-xl p-5 md:p-6 shadow-[0_18px_45px_rgba(15,23,42,0.85)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(59,130,246,0.55)]">
                <p className="text-xs font-semibold uppercase tracking-wide text-sky-300">
                  Certification
                </p>
                <h3 className="mt-1 text-sm font-semibold text-white">
                  CCNAv7 – Networking Fundamentals
                </h3>
                <p className="mt-2 text-xs text-gray-300">
                  Completed Cisco‑aligned networking curriculum, strengthening core
                  internet, routing, and security concepts useful for backend and
                  distributed systems.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5/10 backdrop-blur-xl p-5 md:p-6 shadow-[0_18px_45px_rgba(15,23,42,0.85)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(59,130,246,0.55)]">
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-300">
                  AI / ML
                </p>
                <h3 className="mt-1 text-sm font-semibold text-white">
                  90%+ model accuracy on real data
                </h3>
                <p className="mt-2 text-xs text-gray-300">
                  Achieved strong accuracy and IoU on deforestation detection and
                  high‑accuracy facial recognition for attendance automation.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5/10 backdrop-blur-xl p-5 md:p-6 shadow-[0_18px_45px_rgba(15,23,42,0.85)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(59,130,246,0.55)]">
                <p className="text-xs font-semibold uppercase tracking-wide text-purple-300">
                  Academics
                </p>
                <h3 className="mt-1 text-sm font-semibold text-white">
                  B.Tech Computer Engineering – GPA 7.6/10
                </h3>
                <p className="mt-2 text-xs text-gray-300">
                  Consistent performance while balancing coursework with internships,
                  competitions, and personal AI/full‑stack projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="border-t border-white/10 py-16 fade-in">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400">
              Contact
            </p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">
              Let’s build something
            </h2>
            <p className="mt-3 text-sm text-gray-300 md:text-base">
              Open to internships, full‑time roles, and interesting collaborations in AI,
              machine learning, and full‑stack development.
            </p>

            <div className="mt-8 grid gap-8 md:grid-cols-[1.2fr,1fr]">
              {/* Contact form */}
              <form
                className="space-y-4 rounded-3xl border border-white/10 bg-white/5/10 backdrop-blur-xl p-5 md:p-6 shadow-[0_18px_45px_rgba(15,23,42,0.85)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(59,130,246,0.55)]"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <label className="text-xs font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-1 w-full rounded-lg border border-white/10 bg-[#050816] px-3 py-2 text-sm text-white outline-none focus:border-indigo-400"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-1 w-full rounded-lg border border-white/10 bg-[#050816] px-3 py-2 text-sm text-white outline-none focus:border-indigo-400"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Tell me a bit about what you’d like to work on…"
                    className="mt-1 w-full rounded-lg border border-white/10 bg-[#050816] px-3 py-2 text-sm text-white outline-none focus:border-indigo-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400 hover:-translate-y-0.5"
                >
                  Send message
                </button>
                <p className="text-xs text-gray-400">
                  This is a front‑end demo form. Use the email or LinkedIn links on the
                  right to contact directly.
                </p>
              </form>

              {/* Direct contact info */}
              <div className="space-y-4">
                <div className="rounded-3xl border border-white/10 bg-white/5/10 backdrop-blur-xl p-5 md:p-6 shadow-[0_18px_45px_rgba(15,23,42,0.85)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(59,130,246,0.55)]">
                  <p className="text-xs font-semibold uppercase tracking-wide text-indigo-300">
                    Direct contact
                  </p>
                  <div className="mt-3 space-y-2 text-sm">
                    <p>
                      <span className="text-gray-400">Email:</span>{" "}
                      <a
                        href="mailto:jain2004samyak@gmail.com"
                        className="text-indigo-300 hover:underline"
                      >
                        jain2004samyak@gmail.com
                      </a>
                    </p>
                    <p>
                      <span className="text-gray-400">Phone:</span>{" "}
                      <a
                        href="tel:+918882607207"
                        className="text-indigo-300 hover:underline"
                      >
                        +91 8882607207
                      </a>
                    </p>
                    <p>
                      <span className="text-gray-400">GitHub:</span>{" "}
                      <a
                        href="https://github.com/s23jain"
                        target="_blank"
                        rel="noreferrer"
                        className="text-indigo-300 hover:underline"
                      >
                        github.com/s23jain
                      </a>
                    </p>
                    <p>
                      <span className="text-gray-400">LinkedIn:</span>{" "}
                      <a
                        href="#"
                        className="text-indigo-300 hover:underline"
                      >
                        Add your LinkedIn URL
                      </a>
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-xs text-gray-400">
                  <p>Currently based in Noida, India · Open to remote and on‑site roles.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
