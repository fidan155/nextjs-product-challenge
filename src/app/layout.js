import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// --- HIER FÜR SEO OPTIMIERT ---
export const metadata = {
  title: 'Aura.AI - Next-Generation AI Infrastructure',
  description:
    'Automate security compliance, compute hyper-dimensional telemetry, and unify distributed intelligence layers under a localized zero-trust ecosystem.',
  keywords: [
    'AI SaaS',
    'Cybersecurity',
    'Enterprise AI',
    'Next.js',
    'Zero-Trust',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* Klassen angepasst für sauberes Layout & relative Positionierung */}
      <body className="min-h-full flex flex-col relative bg-[#020204]">
        {children}
      </body>
    </html>
  );
}
