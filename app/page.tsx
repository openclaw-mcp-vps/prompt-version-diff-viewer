export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-xs text-[#58a6ff] mb-6">
          Git diff for AI prompts
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Track every prompt change.<br />
          <span className="text-[#58a6ff]">Measure what actually works.</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-10 max-w-xl mx-auto">
          PromptDiff gives AI product teams a git-like diff viewer for prompt iterations — with performance metrics, A/B testing, and version history baked in.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-md text-base transition-colors"
        >
          Start for $29/mo
        </a>
        {/* Fake diff preview */}
        <div className="mt-14 bg-[#161b22] border border-[#30363d] rounded-lg text-left p-6 text-sm">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#f85149] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#d29922] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#3fb950] inline-block"></span>
            <span className="ml-2 text-[#8b949e] text-xs">prompt_v3.txt → prompt_v4.txt</span>
          </div>
          <div className="space-y-1">
            <div className="bg-[#3d1f1f] text-[#f85149] px-3 py-1 rounded">- You are a helpful assistant. Answer concisely.</div>
            <div className="bg-[#1a3a1f] text-[#3fb950] px-3 py-1 rounded">+ You are an expert assistant. Answer in 2-3 sentences with examples.</div>
            <div className="text-[#8b949e] px-3 py-1">  Always respond in the user's language.</div>
          </div>
          <div className="mt-4 flex gap-6 text-xs">
            <span className="text-[#3fb950]">↑ Accuracy +12%</span>
            <span className="text-[#3fb950]">↑ User rating +0.4</span>
            <span className="text-[#f85149]">↓ Latency +80ms</span>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 text-center">
          <div className="text-xs text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] text-sm mb-6">/month · cancel anytime</div>
          <ul className="text-left space-y-3 text-sm mb-8">
            {[
              'Unlimited prompt versions',
              'Visual git-style diffs',
              'Performance metric tracking',
              'A/B test prompt variations',
              'API integrations (OpenAI, Anthropic)',
              'Team collaboration'
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950]">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-md text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          <div className="border-b border-[#30363d] pb-6">
            <h3 className="text-white font-semibold mb-2">How does PromptDiff track performance?</h3>
            <p className="text-[#8b949e] text-sm">You connect your AI model via API key. PromptDiff logs response quality scores, latency, and custom metrics you define — then surfaces the delta between prompt versions automatically.</p>
          </div>
          <div className="border-b border-[#30363d] pb-6">
            <h3 className="text-white font-semibold mb-2">Which AI providers are supported?</h3>
            <p className="text-[#8b949e] text-sm">OpenAI, Anthropic, and any OpenAI-compatible API. More integrations ship monthly based on user requests.</p>
          </div>
          <div className="pb-6">
            <h3 className="text-white font-semibold mb-2">Can I cancel anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel from your billing dashboard with one click. No contracts, no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-10">
        © {new Date().getFullYear()} PromptDiff. Built for prompt engineers.
      </footer>
    </main>
  )
}
