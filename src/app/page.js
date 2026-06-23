import NewsletterForm from './NewsletterForm';

console.log('NewsletterForm import ->', typeof NewsletterForm, NewsletterForm);

export const metadata = {
  title: 'DevMind AI - Sicherer Code in Sekundenschnelle',
  description: 'KI-gestütztes Tool für Entwickler. Scannt Code in Echtzeit auf Sicherheitslücken und Bugs.',
  keywords: ['Künstliche Intelligenz', 'Cyber Security', 'Softwareentwicklung', 'Next.js'],
};

const featuresData = [
  {
    id: 1,
    title: "KI-Code-Analyse",
    description: "Scannt deinen Code während des Tippens und erkennt logische Fehler, bevor sie im Compiler landen."
  },
  {
    id: 2,
    title: "Automated SecOps",
    description: "Prüft deine Abhängigkeiten und Code-Strukturen in Echtzeit auf bekannte Cyber-Security-Schwachstellen."
  },
  {
    id: 3,
    title: "Smart Refactoring",
    description: "Schlägt dir per Klick sauberere, performantere und besser lesbare Code-Strukturen vor."
  }
];

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 100));

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

        {/* HIER DAS INTERAKTIVE FORMULAR EINFÜGEN */}
        <NewsletterForm />
      </main>

      {/* 3. Features Sektion (3-Spalten-Grid) */}
      <section id="features" className="mt-32 max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Warum Entwickler <span className="text-blue-400">DevMind AI</span> lieben
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-slate-800/50 border border-slate-800 p-8 rounded-2xl transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-800 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400 font-bold group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                0{feature.id}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}