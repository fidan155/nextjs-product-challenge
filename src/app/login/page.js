// src/app/login/page.js
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // 1. IMPORT HINZUFÜGEN
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Terminal, Sparkles } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter(); // 2. ROUTER INITIALISIEREN

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      setMessage(`Erfolg! Weiterleitung...`);
      
      // 3. WEITERLEITUNG AUSLÖSEN (wartet 1 Sekunde für den visuellen Effekt)
      setTimeout(() => {
        router.push('/admin');
      }, 1000);

    } else {
      setMessage(`Fehler: ${data.error}`);
    }
  };

  return (
    <div className="bg-[#020204] text-slate-100 min-h-screen font-sans selection:bg-cyan-500/30 overflow-x-hidden relative flex items-center justify-center p-4">
      <div className="absolute top-[-10%] left-[-20%] w-[600px] h-[600px] rounded-full bg-emerald-500/10 blur-[140px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[5%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[150px] pointer-events-none mix-blend-screen" />

      <div className="w-full max-w-md space-y-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl p-8 shadow-2xl relative z-10">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-lg">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[10px] font-semibold text-slate-300 tracking-wide uppercase">
              Aura Secure Gateway
            </span>
          </div>
        </div>

        <div className="space-y-2 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-emerald-500 via-cyan-500 to-purple-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Terminal className="w-3.5 h-3.5 text-black font-bold" />
            </div>
            <span className="font-bold tracking-tight text-md bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              AURA.AI
            </span>
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
            Login
          </h2>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1">
            <Input 
              type="email" 
              placeholder="E-Mail" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className="bg-black/60 border-white/10 text-slate-200 placeholder:text-slate-600 focus-visible:ring-cyan-500"
            />
          </div>
          <div className="space-y-1">
            <Input 
              type="password" 
              placeholder="Passwort" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              className="bg-black/60 border-white/10 text-slate-200 placeholder:text-slate-600 focus-visible:ring-cyan-500"
            />
          </div>
          <Button type="submit" className="w-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 text-black font-bold hover:opacity-90 transition shadow-lg shadow-cyan-500/10">
            Login
          </Button>
        </form>
        
        {message && (
          <p className={`text-center text-xs font-mono mt-4 ${message.includes('Erfolg') ? 'text-emerald-400' : 'text-red-400'}`}>
            {message.includes('Erfolg') ? `[OK] ${message}` : `[ERROR] ${message}`}
          </p>
        )}
      </div>
    </div>
  );
}