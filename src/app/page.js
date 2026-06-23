export const metadata = {
  title: 'DevMind AI - Sicherer Code in Sekundenschnelle',
  description: 'KI-gestütztes Tool für Entwickler. Scannt Code in Echtzeit auf Sicherheitslücken und Bugs.',
  keywords: ['Künstliche Intelligenz', 'Cyber Security', 'Softwareentwicklung', 'Next.js'],
};

export default function Home() {
  return (
    <div className="bg-slate-900 text-white min-h-screen font-sans">
      {/* 1. Header */}
      <header className="flex justify-between items-center p-6 max-w-6xl mx-auto border-b border-slate-800">
        <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          DevMind AI
        </div>
        <nav className="space-x-6 text-slate-400">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#prices" className="hover:text-white transition">Preise</a>
        </nav>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium transition">
          Start Free
        </button>
      </header>

      {/* 2. Hero Sektion */}
      <main className="max-w-4xl mx-auto text-center mt-20 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          Write Secure Code. <br />
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            10x Faster with AI.
          </span>
        </h1>
        <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">
          DevMind AI scannt deinen Code in Echtzeit, findet Sicherheitslücken und behebt Bugs, bevor sie entstehen.
        </p>
        <div className="space-x-4">
          <button className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition shadow-lg shadow-blue-500/20">
            Jetzt kostenlos testen
          </button>
        </div>
      </main>
    </div>
  );
}