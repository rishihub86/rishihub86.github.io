
function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <header className="min-h-screen px-8 md:px-20 py-10 bg-gradient-to-br from-slate-950 via-cyan-950 to-purple-950">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-cyan-400">AI.Dev</h1>

          <div className="space-x-6 hidden md:block">
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#projects" className="hover:text-cyan-400">Projects</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </div>
        </nav>

        <div className="mt-32 max-w-3xl">
          <p className="text-cyan-400 uppercase tracking-widest mb-4">
            AI Developer Portfolio
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Building Intelligent Digital Experiences
          </h2>

          <p className="mt-6 text-slate-300 text-lg">
            I create AI-powered apps, machine learning tools, and futuristic web experiences using modern technologies.
          </p>

          <button className="mt-8 bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
            Explore Work
          </button>
        </div>
      </header>

      <section id="about" className="px-8 md:px-20 py-24">
        <h3 className="text-4xl font-bold mb-8">About Me</h3>

        <p className="text-slate-300 max-w-3xl text-lg">
          Passionate about AI, full-stack development, and creating products that solve real-world problems.
          I enjoy working with React, Python, machine learning, APIs, and cloud technologies.
        </p>
      </section>

      <section className="px-8 md:px-20 py-24 bg-slate-900">
        <h3 className="text-4xl font-bold mb-10">Tech Stack</h3>

        <div className="flex flex-wrap gap-4">
          {["React", "Tailwind", "Python", "TensorFlow", "Node.js", "OpenAI APIs", "MongoDB", "GitHub"].map((skill) => (
            <span
              key={skill}
              className="border border-cyan-400 px-5 py-3 rounded-full text-cyan-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="px-8 md:px-20 py-24">
        <h3 className="text-4xl font-bold mb-10">Featured AI Projects</h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-400 transition">
            <h4 className="text-2xl font-bold mb-4">AI Chatbot</h4>
            <p className="text-slate-300">
              Conversational AI assistant built using modern LLM APIs.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-400 transition">
            <h4 className="text-2xl font-bold mb-4">Vision AI</h4>
            <p className="text-slate-300">
              Smart image analysis and object detection platform.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-400 transition">
            <h4 className="text-2xl font-bold mb-4">Predictive Dashboard</h4>
            <p className="text-slate-300">
              AI analytics dashboard with forecasting and insights.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="px-8 md:px-20 py-24 bg-slate-900">
        <h3 className="text-4xl font-bold mb-8">Contact</h3>

        <div className="space-y-3 text-slate-300">
          <p>Email: yourname@email.com</p>
          <p>GitHub: github.com/yourusername</p>
          <p>LinkedIn: linkedin.com/in/yourprofile</p>
        </div>
      </section>

      <footer className="text-center py-8 border-t border-slate-800 text-slate-500">
        Built with React + Tailwind CSS • Hosted Free on GitHub Pages
      </footer>
    </div>
  );
}

export default App;
