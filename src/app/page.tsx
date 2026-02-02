import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"></div>
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-indigo-300">Open Source • MIT License</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
              NanoClaw
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              A lightweight Claude assistant that runs securely in containers. 
              <span className="text-indigo-400 font-semibold"> ~500 lines of TypeScript</span>. 
              Built to be understood and customized.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://github.com/gavrielc/nanoclaw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                View on GitHub
              </Link>
              <Link
                href="#quick-start"
                className="inline-flex items-center gap-2 bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600 px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Quick Start →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why NanoClaw Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Choose NanoClaw?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Small Enough to Understand</h3>
              <p className="text-slate-400">
                Just ~500 lines of core TypeScript code. One process, a few source files. No microservices, no message queues, no abstraction layers. You can read and understand the entire codebase in under 10 minutes.
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Secure by Isolation</h3>
              <p className="text-slate-400">
                NanoClaw agents run in actual Linux containers using Apple Container on macOS or Docker on Linux. Each chat gets its own sandboxed context with filesystem isolation. Bash access is safe because commands run inside the container, not on your host.
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Built for Customization</h3>
              <p className="text-slate-400">
                This is not a framework—it is working software designed to be forked and modified. No configuration sprawl. Want different behavior? Change the code directly. The codebase is intentionally small enough that modifications are safe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            NanoClaw vs Traditional AI Assistants
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-4 px-6 font-semibold">Feature</th>
                  <th className="py-4 px-6 font-semibold text-indigo-400">NanoClaw</th>
                  <th className="py-4 px-6 font-semibold text-slate-500">Others</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-700/50">
                  <td className="py-4 px-6">Codebase Size</td>
                  <td className="py-4 px-6 text-green-400">~500 lines</td>
                  <td className="py-4 px-6">50,000+ lines</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-4 px-6">Security Model</td>
                  <td className="py-4 px-6 text-green-400">OS-level container isolation</td>
                  <td className="py-4 px-6">Application-level permissions</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-4 px-6">Dependencies</td>
                  <td className="py-4 px-6 text-green-400">Minimal</td>
                  <td className="py-4 px-6">45+ packages</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-4 px-6">Time to Understand</td>
                  <td className="py-4 px-6 text-green-400">~10 minutes</td>
                  <td className="py-4 px-6">Days or weeks</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-4 px-6">Customization</td>
                  <td className="py-4 px-6 text-green-400">Direct code changes</td>
                  <td className="py-4 px-6">Complex configuration files</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Core Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h3 className="font-semibold mb-2">WhatsApp Integration</h3>
                <p className="text-slate-400">Message your Claude assistant directly from your phone. Seamless integration with WhatsApp using the Baileys library for reliable communication.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Isolated Group Context</h3>
                <p className="text-slate-400">Each group chat has its own CLAUDE.md memory file, isolated filesystem, and runs in its own container sandbox with only that filesystem mounted.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Scheduled Tasks</h3>
                <p className="text-slate-400">Set up recurring jobs that run Claude and can message you back. Perfect for daily briefings, weekly summaries, or automated monitoring workflows.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Web Access</h3>
                <p className="text-slate-400">Built-in web search and content fetching capabilities allow your Claude assistant to access real-time information from the internet.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Apple Container Support</h3>
                <p className="text-slate-400">Native support for Apple Container on macOS provides lightweight, fast, and optimized sandboxing on Apple Silicon. Docker is also fully supported.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Skills System</h3>
                <p className="text-slate-400">Add optional integrations like Gmail through the skills system. Run /add-gmail and Claude Code handles the rest. Extensible without bloating the core.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section id="quick-start" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Quick Start Guide
          </h2>
          <div className="space-y-8">
            <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-sm">1</span>
                Clone the Repository
              </h3>
              <pre className="bg-slate-950 rounded-lg p-4 overflow-x-auto">
                <code className="text-green-400">git clone https://github.com/gavrielc/nanoclaw.git</code>
              </pre>
            </div>
            <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-sm">2</span>
                Enter the Directory
              </h3>
              <pre className="bg-slate-950 rounded-lg p-4 overflow-x-auto">
                <code className="text-green-400">cd nanoclaw</code>
              </pre>
            </div>
            <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-sm">3</span>
                Run Claude Code
              </h3>
              <pre className="bg-slate-950 rounded-lg p-4 overflow-x-auto">
                <code className="text-green-400">claude</code>
              </pre>
            </div>
            <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-sm">4</span>
                Run Setup
              </h3>
              <p className="text-slate-400 mb-4">Claude Code handles everything: dependencies, authentication, container setup, service configuration.</p>
              <pre className="bg-slate-950 rounded-lg p-4 overflow-x-auto">
                <code className="text-green-400">/setup</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Philosophy
          </h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold text-indigo-400 mb-4">AI-Native Development</h3>
              <p className="text-slate-300 leading-relaxed">
                NanoClaw embraces an AI-native approach to software development. There is no installation wizard—Claude Code guides setup interactively. There is no monitoring dashboard—just ask Claude what is happening in your system. There are no separate debugging tools—describe your problem and Claude fixes it. This represents a fundamental shift in how we think about software interfaces and user experience.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-indigo-400 mb-4">Skills Over Features</h3>
              <p className="text-slate-300 leading-relaxed">
                Instead of adding features directly to the codebase, NanoClaw contributors create Claude Code skills. These skills teach Claude how to transform your installation to add new capabilities. For example, rather than building Telegram support into the core, someone contributes a skill called /add-telegram that modifies your fork to support Telegram. You end up with clean, focused code that does exactly what you need—nothing more.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-indigo-400 mb-4">Best Harness, Best Model</h3>
              <p className="text-slate-300 leading-relaxed">
                NanoClaw runs on the Claude Agent SDK, which means you are running Claude Code directly. The harness matters significantly. A bad harness makes even smart models seem dumb, while a good harness gives them superpowers. Claude Code is arguably the best harness available today, and NanoClaw leverages it fully. Because it uses the Claude Agent SDK natively with no hacks or workarounds, using your subscription with your auth token is completely legitimate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What Can You Build With NanoClaw?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h3 className="font-semibold mb-3">📊 Sales Pipeline Assistant</h3>
              <p className="text-slate-400 text-sm">Send an overview of the sales pipeline every weekday morning at 9am with access to your Obsidian vault folder.</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h3 className="font-semibold mb-3">📝 Documentation Maintainer</h3>
              <p className="text-slate-400 text-sm">Review the git history for the past week each Friday and update the README if there is drift from actual functionality.</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h3 className="font-semibold mb-3">📰 AI News Briefing</h3>
              <p className="text-slate-400 text-sm">Every Monday at 8am, compile news on AI developments from Hacker News and TechCrunch and message you a briefing.</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h3 className="font-semibold mb-3">📧 Email Management</h3>
              <p className="text-slate-400 text-sm">Use the /add-gmail skill to integrate Gmail and let Claude help manage your inbox, draft responses, and summarize important emails.</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h3 className="font-semibold mb-3">🏠 Smart Home Control</h3>
              <p className="text-slate-400 text-sm">Connect to your home automation systems and control devices, check statuses, or create automation routines via WhatsApp.</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h3 className="font-semibold mb-3">🔍 Research Assistant</h3>
              <p className="text-slate-400 text-sm">Search the web, fetch content, summarize articles, and compile research reports—all from your phone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Requirements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h3 className="font-semibold mb-4">Operating System</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  macOS (Apple Silicon recommended)
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Linux (x86_64 or ARM64)
                </li>
              </ul>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h3 className="font-semibold mb-4">Software</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Node.js 20+
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Claude Code
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Apple Container (macOS) or Docker
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Own AI Assistant?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            NanoClaw is open source under the MIT license. Fork it, customize it, make it yours.
          </p>
          <Link
            href="https://github.com/gavrielc/nanoclaw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            Get Started on GitHub
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold">NanoClaw</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-400">Lightweight Claude Assistant</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="https://github.com/gavrielc/nanoclaw" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                GitHub
              </Link>
              <Link href="https://news.ycombinator.com/item?id=46850205" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                Hacker News
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            <p>© 2026 NanoClaw. Open source under MIT License.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
